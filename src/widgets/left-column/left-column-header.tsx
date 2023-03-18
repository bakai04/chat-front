import { Menu, SearchInput } from "@/shared/ui";
import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";

export const LeftColumnHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{gap: "10px"}}>
          <Menu>adsasd</Menu>
          <SearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  )
} 