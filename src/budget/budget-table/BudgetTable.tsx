import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import Chip from "@mui/joy/Chip";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import type { ColorPaletteProp } from "@mui/joy/styles";
import * as React from "react";
import Actions from "./Actions";
import { type Budget } from "../budget";

export default function BudgetTable({
  items,
  onDeleteItem,
  setEditItem,
}: {
  items: Budget[];
  onDeleteItem: (itemIndex: number) => void;
  setEditItem: React.Dispatch<React.SetStateAction<number | null>>;
}): JSX.Element {
  const [selected, setSelected] = React.useState<readonly number[]>([]);

  return (
    <>
      <Box
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
                style={{
                  width: 48,
                  textAlign: "center",
                  padding: "12px 6px",
                }}
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
                  {typeof row.occurence !== "undefined" && (
                    <Chip variant="soft" size="sm" color="neutral">
                      {row.occurence}
                    </Chip>
                  )}
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
                    <Chip size="sm">
                      $ {new Intl.NumberFormat().format(row.amount)}
                    </Chip>
                  </Box>
                </td>
                <td>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Actions
                      onEdit={() => {
                        setEditItem(index);
                      }}
                      onDelete={() => {
                        onDeleteItem(index);
                      }}
                    />
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </>
  );
}
