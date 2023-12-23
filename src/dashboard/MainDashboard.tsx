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
import { eachDayOfInterval, formatISO } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import Calendar, { type Activity, type Level } from "react-activity-calendar";
import { convertToDaily, typeConverter } from "../budget/utils/budget";
import { Store } from "../store";
import DailyModal from "./DailyModal";

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

const STORAGE_KEY = "daily-spending";

type DailySpending = Record<string, number[]>;

export default function MainDashboard(): JSX.Element {
  const [snackbar, setSnackbar] = useState<number[] | null>(null);
  const { accounts, assets, loans, budget } = useContext(Store);
  const [dailySpending, setDailySpending] = useState<DailySpending>({});
  const [didEnterDailyPrompt, setDidEnterDailyPrompt] = useState(true);

  useEffect(() => {
    const storedDailySpending: DailySpending = JSON.parse(
      localStorage.getItem(STORAGE_KEY) ?? "{}",
    );
    const today = formatISO(new Date(), { representation: "date" });

    if (storedDailySpending[today] == null) {
      setDidEnterDailyPrompt(false);
    }

    setDailySpending(storedDailySpending);
  }, []);

  const getDailyAllowedSpending = (): number => {
    const dailyIncome = parseFloat(
      typeConverter(budget, "income", convertToDaily),
    );
    const dailyExpenses = parseFloat(
      typeConverter(budget, "expense", convertToDaily),
    );

    return parseFloat((dailyIncome - dailyExpenses).toFixed(2));
  };

  const totalSpent = Object.keys(dailySpending).reduce((sum, date) => {
    const dailyTotal = dailySpending[date].reduce((sum, i) => sum + i, 0);
    return sum + dailyTotal;
  }, 0);

  const totalBudget = Object.keys(dailySpending).reduce((sum, date) => {
    const limit = getDailyAllowedSpending();
    return sum + limit;
  }, 0);

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
          const dailySpending = JSON.parse(
            localStorage.getItem(STORAGE_KEY) ?? "{}",
          ) as DailySpending;
          const today = formatISO(new Date(), { representation: "date" });

          if (dailySpending[today] != null) {
            dailySpending[today].push(amountSpent);
          } else {
            dailySpending[today] = [amountSpent];
          }
          localStorage.setItem(STORAGE_KEY, JSON.stringify(dailySpending));
          setDailySpending(dailySpending);
          setDidEnterDailyPrompt(true);
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
          Object.keys(dailySpending).reduce<Record<string, any>>(
            (items, date) => {
              const limit = getDailyAllowedSpending();
              let level = 3;
              if (dailySpending[date].reduce((sum, i) => sum + i, 0) === 0)
                level = 1;
              if (dailySpending[date].reduce((sum, i) => sum + i, 0) <= limit)
                level = 2;

              items[date] = {
                level,
                count: dailySpending[date].length,
              };

              return items;
            },
            {},
          ),
        )}
        renderBlock={(block, activity) => {
          let title = activity.date;
          if (dailySpending[activity.date] != null)
            title += ` | Spent $${dailySpending[activity.date]
              .reduce((sum, i) => sum + i, 0)
              .toFixed(2)}`;
          return <Tooltip title={title}>{block}</Tooltip>;
        }}
        eventHandlers={{
          onClick: () => (activity) => {
            setSnackbar(dailySpending[activity.date] ?? null);
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
                      return sum + ass.value - ass.debt;
                    }, 0),
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
    </>
  );
}
