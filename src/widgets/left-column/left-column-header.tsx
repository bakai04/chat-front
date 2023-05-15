import { api } from "@/shared/api";
import { IContact } from "@/shared/interfaces";
import { AppBar, Avatar, Box, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";

export const LeftColumnHeader = () => {
  const [userData, setUserData] = useState<IContact>();

  useEffect(() => {
    api.contacts.getUserSetting().then(resp => {
      const body = JSON.stringify({ chatId: resp.wid });
      api.contacts.getContactInfo(body).then(resp =>{
        setUserData(resp);
      })
    })
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ gap: "10px" }}>
          <Avatar style={{
            width: "45px",
            height: "45px",
          }} src={userData?.avatar} />
        </Toolbar>
      </AppBar>
    </Box>
  )
} 