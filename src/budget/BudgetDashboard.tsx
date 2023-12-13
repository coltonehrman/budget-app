import { AccountBalance } from "@mui/icons-material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import Link from "@mui/joy/Link";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import React, { useCallback, useEffect, useState } from "react";
import AddBudgetItemModal, {
  type State,
} from "./budget-item-modal/AddBudgetItemModal";
import BudgetTable from "./budget-table/BudgetTable";
import {
  convertToDaily,
  convertToMonthly,
  convertToWeekly,
  convertToYearly,
} from "./utils/budget";
import EditBudgetItemModal from "./budget-item-modal/EditBudgetItemModal";

export default function BudgetDashboard(): JSX.Element {
  const [items, setItems] = useState<State[]>([]);
  const [addItemOpen, setAddItemOpen] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<number | null>(null);

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

  const typeConverter = useCallback(
    (type: State["type"], converter: (item: State) => number): string =>
      items
        .filter((i) => i.type === type)
        .reduce((sum, i) => sum + converter(i), 0)
        .toFixed(2),
    [items],
  );

  const dailyIncome = typeConverter("income", convertToDaily);
  const weeklyIncome = typeConverter("income", convertToWeekly);
  const monthlyIncome = typeConverter("income", convertToMonthly);
  const yearlyIncome = typeConverter("income", convertToYearly);
  const dailyExpenses = typeConverter("expense", convertToDaily);
  const weeklyExpenses = typeConverter("expense", convertToWeekly);
  const monthlyExpenses = typeConverter("expense", convertToMonthly);
  const yearlyExpenses = typeConverter("expense", convertToYearly);

  return (
    <>
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
      <Box>
        <Typography level="h2" component="h1">
          Budget
        </Typography>

        <Box>
          <Button
            size="sm"
            onClick={() => {
              setAddItemOpen(!addItemOpen);
            }}
          >
            Add new
          </Button>
        </Box>

        {editItem != null && (
          <EditBudgetItemModal
            open={editItem !== null}
            onEditItem={(edits) => {
              onEditItem(editItem, edits);
            }}
            itemState={items[editItem]}
            setOpen={(open) => {
              if (open === false) setEditItem(null);
            }}
          />
        )}

        <AddBudgetItemModal
          open={addItemOpen}
          setOpen={setAddItemOpen}
          addItem={(newItem) => {
            setItems([...items, newItem]);
          }}
        />
      </Box>

      <Box>
        <FormControl size="sm">
          <Input
            fullWidth
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
          />
        </FormControl>
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
          <Card variant="soft" color="primary" invertedColors>
            <CardContent>
              <Box>
                <AccountBalance />
              </Box>

              <Typography level="body-md">Daily Budget</Typography>
              <Typography level="h2">
                ${" "}
                {new Intl.NumberFormat().format(
                  Number(dailyIncome) - Number(dailyExpenses),
                )}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Card variant="soft" color="primary" invertedColors>
          <CardContent>
            <Box>
              <AccountBalance />
            </Box>

            <Typography level="body-md">Monthly Budget</Typography>
            <Typography level="h2">
              ${" "}
              {new Intl.NumberFormat().format(
                Number(monthlyIncome) - Number(monthlyExpenses),
              )}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box>
        <BudgetTable
          items={items}
          onDeleteItem={onDeleteItem}
          setEditItem={setEditItem}
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
            <td>$ {new Intl.NumberFormat().format(Number(dailyIncome))}</td>
          </tr>

          <tr>
            <th>Weekly</th>
            <td>$ {new Intl.NumberFormat().format(Number(weeklyIncome))}</td>
          </tr>

          <tr>
            <th>Monthly</th>
            <td>$ {new Intl.NumberFormat().format(Number(monthlyIncome))}</td>
          </tr>

          <tr>
            <th>Yearly</th>
            <td>$ {new Intl.NumberFormat().format(Number(yearlyIncome))}</td>
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
            <td>$ {new Intl.NumberFormat().format(Number(dailyExpenses))}</td>
          </tr>

          <tr>
            <th>Weekly</th>
            <td>$ {new Intl.NumberFormat().format(Number(weeklyExpenses))}</td>
          </tr>

          <tr>
            <th>Monthly</th>
            <td>$ {new Intl.NumberFormat().format(Number(monthlyExpenses))}</td>
          </tr>

          <tr>
            <th>Yearly</th>
            <td>$ {new Intl.NumberFormat().format(Number(yearlyExpenses))}</td>
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
              ${" "}
              {new Intl.NumberFormat().format(
                Number(dailyIncome) - Number(dailyExpenses),
              )}
            </td>
          </tr>

          <tr>
            <th>Weekly</th>
            <td>
              ${" "}
              {new Intl.NumberFormat().format(
                Number(weeklyIncome) - Number(weeklyExpenses),
              )}
            </td>
          </tr>

          <tr>
            <th>Monthly</th>
            <td>
              ${" "}
              {new Intl.NumberFormat().format(
                Number(monthlyIncome) - Number(monthlyExpenses),
              )}
            </td>
          </tr>

          <tr>
            <th>Yearly</th>
            <td>
              ${" "}
              {new Intl.NumberFormat().format(
                Number(yearlyIncome) - Number(yearlyExpenses),
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
