import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Sidebar from "./Sidebar";
import BudgetTable from "./BudgetTable/BudgetTable";
import { type State } from "./BudgetTable/AddBudgetItemModal";

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

  return (
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
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
          <Typography level="h2" component="h1">
            Budget
          </Typography>
        </Box>
        <BudgetTable
          addNewItem={(newItem) => {
            setItems([...items, newItem]);
          }}
          onEditItem={onEditItem}
          onDeleteItem={onDeleteItem}
          items={items}
        />
      </Box>
    </Box>
  );
}
