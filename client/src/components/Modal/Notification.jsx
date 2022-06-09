import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Notification = ({ open, setOpen, type }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          style={{
            backgroundColor: "coral",
            marginTop: "80px",
          }}
          severity={
            type === "copy"
              ? "info"
              : type === "remove"
              ? "hata"
              : type === "remind"
              ? "dikkat"
              : "success"
          }
          variant="filled"
        >
          {type === "add"
            ? "Başarıyla eklendi!"
            : type === "update"
            ? "Başarıyla güncellendi!"
            : type === "remove"
            ? "Başarıyla silindi!"
            : type === "remind"
            ? "Please select size and color first."
            : "Copied to clipboard!"}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Notification;
