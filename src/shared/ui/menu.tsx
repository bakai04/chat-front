import { IconButton, MenuItem, Menu as MenuWrapper } from "@mui/material";
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface MenuProps {
  children: React.ReactNode;
}

export const Menu = (props: MenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <MenuWrapper
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          {"asdasd"}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {"asdasd"}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {"asdasd"}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {"asdasd"}
        </MenuItem>
      </MenuWrapper>
    </div>

  )
}
