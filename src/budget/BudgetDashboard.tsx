import { AccountBalance } from "@mui/icons-material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Link from "@mui/joy/Link";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import React, { useCallback, useState } from "react";
import AddBudgetItemModal from "./budget-item-modal/AddBudgetItemModal";
import EditBudgetItemModal from "./budget-item-modal/EditBudgetItemModal";
import BudgetTable from "./budget-table/BudgetTable";
import {
  convertToDaily,
  convertToMonthly,
  convertToWeekly,
  convertToYearly,
  typeConverter,
} from "./utils/budget";
import {
  type Budget,
  budgetLoader,
  editBudgetItem,
  deleteBudgetItem,
} from "./budget";

export default function BudgetDashboard(): JSX.Element {
  const [items, setItems] = useState<Budget[]>([]);
  const [addItemOpen, setAddItemOpen] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<number | null>(null);

  const onEditItem = useCallback(
    (index: number, editedItem: Budget) => {
      const newBudgetItems = editBudgetItem(items, index, editedItem);
      budgetLoader.save(newBudgetItems);
      setItems(newBudgetItems);
    },
    [items, setItems],
  );

  const onDeleteItem = useCallback(
    (index: number) => {
      const newBudgetItems = deleteBudgetItem(items, index);
      budgetLoader.save(newBudgetItems);
      setItems(newBudgetItems);
    },
    [items, setItems],
  );

  const dailyIncome = typeConverter(items, "income", convertToDaily);
  const weeklyIncome = typeConverter(items, "income", convertToWeekly);
  const monthlyIncome = typeConverter(items, "income", convertToMonthly);
  const yearlyIncome = typeConverter(items, "income", convertToYearly);
  const dailyExpenses = typeConverter(items, "expense", convertToDaily);
  const weeklyExpenses = typeConverter(items, "expense", convertToWeekly);
  const monthlyExpenses = typeConverter(items, "expense", convertToMonthly);
  const yearlyExpenses = typeConverter(items, "expense", convertToYearly);

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
            const newBudgetItems = [...items, newItem];
            budgetLoader.save(newBudgetItems);
            setItems(newBudgetItems);
          }}
        />
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
