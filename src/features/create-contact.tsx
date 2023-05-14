import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { Button, Modal, Paper } from "@mui/material"
import styled from "@emotion/styled";


const CreatButton = styled(Button)`
  position: absolute;
  z-index: 2;
  bottom: 20px;
  right: 20px;
  height: 65px;
  border-radius: 50%;
`

// const ModalContent = styled(Paper) `
//   width:
// `

const CreateContact = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CreatButton variant="contained" onClick={handleOpen}>
        <CreateIcon fontSize={"large"} />
      </CreatButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Paper>
          sadasdasd
        </Paper>
      </Modal>
    </>
  )
}

export default CreateContact