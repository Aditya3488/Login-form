import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ResetPassword = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      password_confiramation: data.get("password_confiramation")
    };
    // console.log(actualData);
    if (actualData.password && actualData.password_confiramation) {
      // console.log(actualData);
      if (actualData.password === actualData.password_confiramation) {
        document.getElementById("password-reset-form").reset();
        setError({
          status: true,
          msg: "Password. Redirecting To Login Page...",
          type: "success"
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setError({
          status: true,
          msg: "password and confirm password does not match",
          type: "error"
        });
      }
    } else {
      setError({
        status: true,
        msg: "All fields are Required",
        type: "error"
      });
    }
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <h1>Reset Password</h1>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="password-reset-form"
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="New Password"
              type="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password_confiramation"
              name="password_confiramation"
              label="New Confirm Password"
              type="password"
            />

            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Confirm
              </Button>
            </Box>
            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default ResetPassword;
