import { DeleteForeverRounded, Edit, Work } from "@mui/icons-material";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import React from "react";
import { type Income } from "./income";

export default function IncomeTiles({
  income,
  onDelete,
  setEditItem,
}: {
  income: Income[];
  onDelete: (index: number) => void;
  setEditItem: (value: React.SetStateAction<number | null>) => void;
}): JSX.Element {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
        gap: 2,
      }}
    >
      {income.map((income, i) => {
        return (
          <Box key={i}>
            <Card variant="soft" color="primary" invertedColors>
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Work />

                  <Box>
                    <IconButton
                      sx={{
                        marginRight: 1,
                      }}
                      variant="soft"
                      color="danger"
                      size="sm"
                      onClick={() => {
                        setEditItem(i);
                      }}
                    >
                      <Edit />
                    </IconButton>

                    <IconButton
                      variant="soft"
                      color="danger"
                      size="sm"
                      onClick={() => {
                        onDelete(i);
                      }}
                    >
                      <DeleteForeverRounded />
                    </IconButton>
                  </Box>
                </Box>

                <Typography level="body-md">{income.name}</Typography>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}
