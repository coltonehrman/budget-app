import {
  AccountBalance,
  DeleteForeverRounded,
  Edit,
  MoreVert,
} from "@mui/icons-material";
import {
  Dropdown,
  type ColorPaletteProp,
  MenuButton,
  Menu,
  MenuItem,
} from "@mui/joy";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import React, { useContext, useState } from "react";
import { Expense } from "./expenses";
import { Store } from "../store";
import EditExpenseForm from "./EditExpenseView";
import { formatDate } from "../common/date";

export default function ExpenseTiles({
  items,
  type,
  setEditItem,
}: {
  items: Expense[];
  type: Expense["type"];
  setEditItem: (value: React.SetStateAction<Expense | null>) => void;
}): JSX.Element {
  const { deleteExpense } = useContext(Store);
  const [editting, setEditting] = useState<Expense | null>(null);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        {items.map((item) => {
          if (item.type !== type) return null;
          let color: ColorPaletteProp = "neutral";

          return (
            <Box key={`item-${item.id}`}>
              {editting != null && (
                <EditExpenseForm
                  key={`edit-${item.id}`}
                  itemToEdit={editting}
                  isOpen={editting != null}
                  onClose={() => setEditting(null)}
                  onSubmit={console.log}
                />
              )}
              <Card variant="soft" color={color} invertedColors>
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    {item.type === "utility" && <AccountBalance />}

                    <Box>
                      <Dropdown>
                        <MenuButton
                          slots={{ root: IconButton }}
                          slotProps={{
                            root: { variant: "outlined", color: "neutral" },
                          }}
                        >
                          <MoreVert />
                        </MenuButton>
                        <Menu>
                          <MenuItem
                            onClick={() => {
                              setEditting(item);
                            }}
                          >
                            Edit
                          </MenuItem>
                          <MenuItem onClick={console.log}>
                            Make Payment
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              deleteExpense(item);
                            }}
                          >
                            Delete
                          </MenuItem>
                        </Menu>
                      </Dropdown>
                    </Box>
                  </Box>

                  <Typography level="body-md">{item.name}</Typography>

                  {item.payments.length > 0 && (
                    <Typography>
                      {item.payments[0].amount} on{" "}
                      {formatDate(item.payments[0].date)}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
