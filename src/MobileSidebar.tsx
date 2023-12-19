import { Menu, MoneyOutlined } from "@mui/icons-material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import { listItemButtonClasses } from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import React from "react";
import { DialogTitle, Drawer } from "@mui/joy";
import Sidebar from "./Sidebar";

export default function MobileSidebar({
  isOpen,
  toggle,
  close,
}: {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}): JSX.Element {
  return (
    <Drawer
      open={isOpen}
      onClose={close}
      sx={{
        width: 224,
      }}
    >
      <DialogTitle>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <IconButton variant="soft" color="primary" size="sm">
            <MoneyOutlined />
          </IconButton>
          <Typography level="title-lg">Budgeter</Typography>
        </Box>
      </DialogTitle>
      <Input
        size="sm"
        startDecorator={<SearchRoundedIcon />}
        placeholder="Search"
      />
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <Sidebar />
      </Box>
    </Drawer>
  );
}
