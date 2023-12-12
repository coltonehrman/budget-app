import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Sidebar from "./Sidebar";
import BudgetTable from "./BudgetTable/BudgetTable";
import { type State } from "./BudgetTable/BudgetItemModal/AddBudgetItemModal";
import Table from "@mui/joy/Table";

const convertToDaily = (item: State): number => {
  switch (item.occurence) {
    case "daily":
      return Number(item.amount);
    case "bi-weekly":
      return Number((item.amount * 26) / 365);
    case "weekly":
      return Number((item.amount * 52) / 365);
    case "monthly":
      return Number((item.amount * 12) / 365);
    case "yearly":
      return Number(item.amount / 365);
    default:
      return 0;
  }
};

const convertToWeekly = (item: State): number => {
  switch (item.occurence) {
    case "weekly":
      return Number(item.amount);
    case "bi-weekly":
      return Number((item.amount * 26) / 52);
    case "daily":
      return Number((item.amount * 52) / 52);
    case "monthly":
      return Number((item.amount * 12) / 52);
    case "yearly":
      return Number(item.amount / 52);
    default:
      return 0;
  }
};

const convertToMonthly = (item: State): number => {
  switch (item.occurence) {
    case "monthly":
      return Number(item.amount);
    case "bi-weekly":
      return Number((item.amount * 26) / 12);
    case "daily":
      return Number((item.amount * 52) / 12);
    case "weekly":
      return Number((item.amount * 12) / 12);
    case "yearly":
      return Number(item.amount / 12);
    default:
      return 0;
  }
};

const convertToYearly = (item: State): number => {
  switch (item.occurence) {
    case "yearly":
      return Number(item.amount);
    case "bi-weekly":
      return Number(item.amount * 26);
    case "daily":
      return Number(item.amount * 365);
    case "weekly":
      return Number(item.amount * 52);
    case "monthly":
      return Number(item.amount * 12);
    default:
      return 0;
  }
};

export default function App(): JSX.Element {
  const [items, setItems] = useState<State[]>([]);

  useEffect(() => {
    if (items.length === 0) {
      const storedItems = localStorage.getItem("budget-items");

      if (storedItems !== null) {
        const parsedStoredItems = JSON.parse(storedItems) as State[];
        setItems(parsedStoredItems);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("budget-items", JSON.stringify(items));
  }, [items]);

  const onEditItem = useCallback(
    (itemIndex: number, edits: State) => {
      items[itemIndex] = edits;
      setItems([...items]);
    },
    [items, setItems],
  );

  const onDeleteItem = useCallback(
    (itemIndex: number) => {
      items.splice(itemIndex, 1);
      setItems([...items]);
    },
    [items, setItems],
  );

  const dailyIncome = items
    .filter((i) => i.type === "income")
    .reduce((sum, i) => sum + convertToDaily(i), 0)
    .toFixed(2);

  const weeklyIncome = items
    .filter((i) => i.type === "income")
    .reduce((sum, i) => sum + convertToWeekly(i), 0)
    .toFixed(2);

  const monthlyIncome = items
    .filter((i) => i.type === "income")
    .reduce((sum, i) => sum + convertToMonthly(i), 0)
    .toFixed(2);

  const yearlyIncome = items
    .filter((i) => i.type === "income")
    .reduce((sum, i) => sum + convertToYearly(i), 0)
    .toFixed(2);

  const dailyExpenses = items
    .filter((i) => i.type === "expense")
    .reduce((sum, i) => sum + convertToDaily(i), 0)
    .toFixed(2);

  const weeklyExpenses = items
    .filter((i) => i.type === "expense")
    .reduce((sum, i) => sum + convertToWeekly(i), 0)
    .toFixed(2);

  const monthlyExpenses = items
    .filter((i) => i.type === "expense")
    .reduce((sum, i) => sum + convertToMonthly(i), 0)
    .toFixed(2);

  const yearlyExpenses = items
    .filter((i) => i.type === "expense")
    .reduce((sum, i) => sum + convertToYearly(i), 0)
    .toFixed(2);

  return (
    <Box sx={{ display: "flex", minHeight: "100dvh", overflow: "scroll" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          px: { xs: 2, md: 6 },
          pt: {
            xs: "calc(12px + var(--Header-height))",
            sm: "calc(12px + var(--Header-height))",
            md: 3,
          },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 5,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
        }}
      >
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
            <Typography color="primary" fontWeight={500} fontSize={12}>
              Budget
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box
          sx={{
            display: "flex",
            mb: 1,
            gap: 1,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "start", sm: "center" },
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography level="h2" component="h1">
              Budget
            </Typography>

            <BudgetTable
              addNewItem={(newItem) => {
                setItems([...items, newItem]);
              }}
              onEditItem={onEditItem}
              onDeleteItem={onDeleteItem}
              items={items}
            />
          </Box>

          <Typography fontWeight={500}>Income</Typography>

          <Table borderAxis="both" variant="soft" color="success">
            <thead>
              <tr>
                <th>Occurence</th>
                <th>Income Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Daily</th>
                <td>$ {dailyIncome}</td>
              </tr>

              <tr>
                <th>Weekly</th>
                <td>$ {weeklyIncome}</td>
              </tr>

              <tr>
                <th>Monthly</th>
                <td>$ {monthlyIncome}</td>
              </tr>

              <tr>
                <th>Yearly</th>
                <td>$ {yearlyIncome}</td>
              </tr>
            </tbody>
          </Table>

          <Typography fontWeight={500}>Expenses</Typography>

          <Table variant="soft" color="danger">
            <thead>
              <tr>
                <th>Occurence</th>
                <th>Expenses Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Daily</th>
                <td>$ {dailyExpenses}</td>
              </tr>

              <tr>
                <th>Weekly</th>
                <td>$ {weeklyExpenses}</td>
              </tr>

              <tr>
                <th>Monthly</th>
                <td>$ {monthlyExpenses}</td>
              </tr>

              <tr>
                <th>Yearly</th>
                <td>$ {yearlyExpenses}</td>
              </tr>
            </tbody>
          </Table>

          <Typography fontWeight={500}>Net</Typography>

          <Table variant="soft" color="success">
            <thead>
              <tr>
                <th>Occurence</th>
                <th>Net Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Daily</th>
                <td>
                  $ {(Number(dailyIncome) - Number(dailyExpenses)).toFixed(2)}
                </td>
              </tr>

              <tr>
                <th>Weekly</th>
                <td>
                  $ {(Number(weeklyIncome) - Number(weeklyExpenses)).toFixed(2)}
                </td>
              </tr>

              <tr>
                <th>Monthly</th>
                <td>
                  ${" "}
                  {(Number(monthlyIncome) - Number(monthlyExpenses)).toFixed(2)}
                </td>
              </tr>

              <tr>
                <th>Yearly</th>
                <td>
                  $ {(Number(yearlyIncome) - Number(yearlyExpenses)).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}
