import { AccountBalance, Money, MoneyOff, Paid } from "@mui/icons-material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Button, Card, CardContent, Tooltip } from "@mui/joy";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Divider from "@mui/joy/Divider";
import Link from "@mui/joy/Link";
import Snackbar from "@mui/joy/Snackbar";
import Typography from "@mui/joy/Typography";
import { differenceInDays, eachDayOfInterval, formatISO } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import Calendar, { type Activity, type Level } from "react-activity-calendar";
import { Store } from "../store";
import DailyModal from "./DailyModal";
import { getNextPayday } from "../income/income";
import { formatDate } from "../common/date";

type Done = Record<string, { count: number; level: Level } | undefined>;

function generateEmptyData(activities: Done): Activity[] {
  const year = new Date().getFullYear();
  const days = eachDayOfInterval({
    start: new Date(year, 0, 1),
    end: new Date(year, 11, 31),
  });

  return days.map((date: Date) => {
    const day = formatISO(date, { representation: "date" });

    return {
      date: day,
      count: 0,
      level: 0,
      ...activities[day],
    };
  });
}

export default function MainDashboard(): JSX.Element {
  const [snackbar, setSnackbar] = useState<number[] | null>(null);
  const {
    addDailySpending,
    dailySpending,
    income,
    expenses,
    accounts,
    assets,
    loans,
  } = useContext(Store);
  const [didEnterDailyPrompt, setDidEnterDailyPrompt] = useState(true);

  useEffect(() => {
    const today = formatISO(new Date(), { representation: "date" });

    if (dailySpending == null) return;

    if (dailySpending[today] == null) {
      setDidEnterDailyPrompt(false);
    } else {
      setDidEnterDailyPrompt(true);
    }
  }, [dailySpending]);

  const getDailyAllowedSpending = (): number => {
    const dailyAverageIncome = income.reduce((dailyAverage, income) => {
      const sumPayDays = income.payDays.reduce(
        (sum, pay) => sum + pay.amount,
        0,
      );

      const avgPayDay =
        sumPayDays === 0 ? 0 : sumPayDays / income.payDays.length;

      let incomeDailyAverage = 0;

      if (income.payDayOccurance === "bi-weekly") {
        incomeDailyAverage = (avgPayDay * 26) / 365;
      }

      return dailyAverage + incomeDailyAverage;
    }, 0);

    const dailyAverageExpense = expenses.reduce(
      (totalDailyAverage, expense) => {
        if (expense.occurance === "monthly") {
          const monthlySum = expense.payments.reduce(
            (sum, pay) => sum + pay.amount,
            0,
          );
          const monthylyAverage = monthlySum / expense.payments.length;
          const dailyAverage = (monthylyAverage * 12) / 365;

          return totalDailyAverage + dailyAverage;
        }

        return totalDailyAverage;
      },
      0,
    );

    return parseFloat((dailyAverageIncome - dailyAverageExpense).toFixed(2));
  };

  // the day that you first submitted a daily spend amount
  const firstDayBudget = Object.keys(dailySpending ?? {}).reduce(
    (firstDay, date) => {
      if (new Date(firstDay) < new Date(date)) return firstDay;
      return new Date(date);
    },
    new Date(),
  );

  const totalSpent = Object.keys(dailySpending ?? {}).reduce((sum, date) => {
    const dailyTotal = (dailySpending ?? {})[date].spending.reduce(
      (sum, i) => sum + i,
      0,
    );
    return sum + dailyTotal;
  }, 0);

  const daysSinceFirstDayBudget = differenceInDays(new Date(), firstDayBudget);

  const totalBudget =
    Object.keys(dailySpending ?? {}).reduce(
      (sum, date) => sum + ((dailySpending ?? {})[date]?.dailyBudget ?? 0),
      0,
    ) * daysSinceFirstDayBudget;

  return (
    <>
      <Snackbar
        variant="soft"
        color="primary"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbar !== null}
        onClose={() => {
          setSnackbar(null);
        }}
      >
        {snackbar
          ?.filter((n, i, arr) => (arr.length > 1 ? n > 0 : true))
          .map((n) => `$${n}`)
          .join(" + ")}
      </Snackbar>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="small" />}
          sx={{ pl: 0 }}
        >
          <Link underline="none" color="neutral" aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            fontSize={12}
            fontWeight={500}
          >
            Dashboard
          </Link>
        </Breadcrumbs>
      </Box>

      <Typography level="h2" component="h1">
        Dashboard
      </Typography>

      <Divider sx={{ my: 1 }} />

      <DailyModal
        open={!didEnterDailyPrompt}
        onSubmit={(amountSpent) => {
          const today = formatISO(new Date(), { representation: "date" });
          addDailySpending(amountSpent, getDailyAllowedSpending());
        }}
        dailyAllowedSpending={`$ ${getDailyAllowedSpending()}`}
        close={() => {
          setDidEnterDailyPrompt(true);
        }}
      />

      <Box>
        <Button
          size="md"
          onClick={() => {
            setDidEnterDailyPrompt(false);
          }}
        >
          Spend Money
        </Button>
      </Box>

      <Calendar
        blockMargin={5}
        blockSize={25}
        colorScheme="light"
        fontSize={22}
        showWeekdayLabels={true}
        weekStart={1}
        labels={{
          legend: {
            less: "Legend",
            more: "",
          },
          totalCount: "{{count}} transactions in {{year}}",
        }}
        theme={{
          light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
        }}
        data={generateEmptyData(
          Object.keys(dailySpending ?? {}).reduce<Record<string, any>>(
            (items, date) => {
              const limit = (dailySpending ?? {})[date].dailyBudget ?? 0;
              let level = 3;
              if (
                (dailySpending ?? {})[date].spending.reduce(
                  (sum, i) => sum + i,
                  0,
                ) === 0
              )
                level = 1;
              if (
                (dailySpending ?? {})[date].spending.reduce(
                  (sum, i) => sum + i,
                  0,
                ) <= limit
              )
                level = 2;

              items[date] = {
                level,
                count: (dailySpending ?? {})[date].spending.length,
              };

              return items;
            },
            {},
          ),
        )}
        renderBlock={(block, activity) => {
          let title = activity.date;
          if ((dailySpending ?? {})[activity.date] != null)
            title += ` | Spent $${(dailySpending ?? {})[activity.date].spending
              .reduce((sum, i) => sum + i, 0)
              .toFixed(2)}`;
          return <Tooltip title={title}>{block}</Tooltip>;
        }}
        eventHandlers={{
          onClick: () => (activity) => {
            setSnackbar((dailySpending ?? {})[activity.date].spending ?? null);
          },
        }}
      />

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        <Box>
          <Card
            variant="soft"
            color={`${totalBudget - totalSpent > 0 ? "success" : "danger"}`}
            invertedColors
          >
            <CardContent>
              <Box>
                <Paid />
              </Box>

              <Typography level="body-md">Net</Typography>
              <Typography level="h2">
                $ {new Intl.NumberFormat().format(totalBudget - totalSpent)}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Card variant="soft" color="primary" invertedColors>
            <CardContent>
              <Box>
                <MoneyOff />
              </Box>

              <Typography level="body-md">Total Spent</Typography>
              <Typography level="h2">
                $ {new Intl.NumberFormat().format(totalSpent)}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Card variant="soft" color="primary" invertedColors>
            <CardContent>
              <Box>
                <Money />
              </Box>

              <Typography level="body-md">Total Budget</Typography>
              <Typography level="h2">
                $ {new Intl.NumberFormat().format(totalBudget)}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        <Box>
          <Card variant="soft" color="success" invertedColors>
            <CardContent>
              <Box>
                <AccountBalance />
              </Box>

              <Typography level="body-md">Networth</Typography>
              <Typography level="h2">
                ${" "}
                {new Intl.NumberFormat().format(
                  accounts.reduce((net, acc) => {
                    if (acc.type === "credit")
                      return net - acc.balances[acc.balances.length - 1].amount;
                    return net + acc.balances[acc.balances.length - 1].amount;
                  }, 0) +
                    assets.reduce((sum, ass) => {
                      return sum + ass.value;
                    }, 0) -
                    loans.reduce((sum, loan) => sum + loan.balance, 0),
                )}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Card variant="soft" color="danger" invertedColors>
            <CardContent>
              <Box>
                <AccountBalance />
              </Box>

              <Typography level="body-md">Debt</Typography>
              <Typography level="h2">
                $ -
                {new Intl.NumberFormat().format(
                  accounts.reduce((sum, acc) => {
                    if (acc.type === "credit")
                      return sum + acc.balances[acc.balances.length - 1].amount;
                    return sum;
                  }, 0) +
                    loans.reduce((sum, loan) => {
                      return sum + loan.balance;
                    }, 0),
                )}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        {income.map((i) => {
          return getNextPayday(i);
        })[0] != null && (
          <Box>
            <Card variant="soft" color="success" invertedColors>
              <CardContent>
                <Box>
                  <Money />
                </Box>

                <Typography level="body-md">Next Payday</Typography>
                <Typography level="h2">
                  {formatDate(
                    income.map((i) => {
                      return getNextPayday(i);
                    })[0],
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        )}
      </Box>
    </>
  );
}
