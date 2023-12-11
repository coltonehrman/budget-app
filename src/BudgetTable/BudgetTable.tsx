import * as React from "react";
import type { ColorPaletteProp } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Filters from "./Filters";
import MobileFilters from "./MobileFilters";
import Actions from "./Actions";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { type State } from "../AddBudgetSidePane";

export default function BudgetTable({
  items,
  onDeleteItem,
}: {
  items: State[];
  onDeleteItem: (itemIndex: number) => void;
}): JSX.Element {
  const [selected, setSelected] = React.useState<readonly number[]>([]);

  return (
    <React.Fragment>
      <MobileFilters />
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: { xs: "none", sm: "flex" },
          flexWrap: "wrap",
          gap: 1.5,
          "& > *": {
            minWidth: { xs: "120px", md: "160px" },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Search by ...</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
          />
        </FormControl>
        <Filters />
      </Box>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: "none", sm: "initial" },
          width: "100%",
          borderRadius: "sm",
          flexShrink: 1,
          overflow: "auto",
          minHeight: 0,
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            "--TableCell-headBackground":
              "var(--joy-palette-background-level1)",
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground":
              "var(--joy-palette-background-level1)",
            "--TableCell-paddingY": "4px",
            "--TableCell-paddingX": "8px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{ width: 48, textAlign: "center", padding: "12px 6px" }}
              >
                <Checkbox
                  size="sm"
                  indeterminate={
                    selected.length > 0 && selected.length !== items.length
                  }
                  checked={selected.length === items.length}
                  onChange={(event) => {
                    setSelected(
                      event.target.checked
                        ? items.map((_row, index) => index)
                        : [],
                    );
                  }}
                  color={
                    selected.length > 0 || selected.length === items.length
                      ? "primary"
                      : undefined
                  }
                  sx={{ verticalAlign: "text-bottom" }}
                />
              </th>
              <th style={{ width: 120, padding: "12px 6px" }}>Name</th>
              <th style={{ width: 140, padding: "12px 6px" }}>Occurence</th>
              <th style={{ width: 140, padding: "12px 6px" }}>Type</th>
              <th style={{ width: 240, padding: "12px 6px" }}>Amount</th>
              <th style={{ width: 140, padding: "12px 6px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center", width: 120 }}>
                  <Checkbox
                    size="sm"
                    checked={selected.includes(index)}
                    color={selected.includes(index) ? "primary" : undefined}
                    onChange={(event) => {
                      setSelected((ids) =>
                        event.target.checked
                          ? ids.concat(index)
                          : ids.filter((itemId) => itemId !== index),
                      );
                    }}
                    slotProps={{ checkbox: { sx: { textAlign: "left" } } }}
                    sx={{ verticalAlign: "text-bottom" }}
                  />
                </td>
                <td>
                  <Typography level="body-xs">{row.name}</Typography>
                </td>
                <td>
                  {/* <Typography level="body-xs">{row.occurence}</Typography> */}
                </td>
                <td>
                  <Chip
                    variant="soft"
                    size="sm"
                    startDecorator={
                      {
                        income: <ArrowUpward />,
                        expense: <ArrowDownward />,
                      }[row.type]
                    }
                    color={
                      {
                        income: "success",
                        expense: "danger",
                      }[row.type] as ColorPaletteProp
                    }
                  >
                    {row.type}
                  </Chip>
                </td>
                <td>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Chip size="sm">$ {row.amount}</Chip>
                  </Box>
                </td>
                <td>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Actions
                      onDelete={() => {
                        onDeleteItem(index);
                      }}
                    />
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td>
                ${" "}
                {items.reduce(
                  (total, item) =>
                    item.type === "expense"
                      ? total - item.amount
                      : total + item.amount,
                  0,
                )}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </Table>
      </Sheet>
    </React.Fragment>
  );
}
