import { Menu, SearchInput } from "@/shared/ui";
import { AppBar, Avatar, Box, Toolbar } from "@mui/material";
import React from "react";

export const LeftColumnHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ gap: "10px" }}>
          <Avatar style={{
            width: "40px",
            height: "40px",
          }} />
          <Menu>adsasd</Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
} 