import React, { useState, useRef } from "react";
import "./css/Registration.css";
import { Link } from "react-router-dom";
import {
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import { registration } from "../auth/auth";

function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfrim, setShowPasswordConfirm] = useState(false);
  const [email, setEmail] = useState("");
  const [finished, setFinished] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const handleReg = async () => {
    const password = passwordRef.current.value;
    try {
      await registration(email, password);
      setFinished(true);
    } catch (error) {
      setErrorMessage("Email already in use!");
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);

  const handleMouseDownPasswordConfirm = (event) => {
    event.preventDefault();
  };

  const checkData = () => {
    if (passwordRef.current.value.length < 6) {
      setErrorMessage("Password must be at least 6 characters long!");
    } else if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setErrorMessage("Passwords must match!");
    } else if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("Invalid email format!");
    } else {
      handleReg();
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    checkData();
  };

  return (
    <div className="Registration">
      <h1>Registration</h1>
      {!finished ? (
        <>
          <h2>Please add your email and a password here.</h2>
          <form onSubmit={handleFormSubmit}>
            <FormControl sx={{ m: 1, width: "30ch" }}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "30ch" }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                inputRef={passwordRef}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "30ch" }}>
              <InputLabel htmlFor="outlined-adornment-password-confirm">
                Confirm password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-confirm"
                type={showPasswordConfrim ? "text" : "password"}
                inputRef={passwordConfirmRef}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPasswordConfirm}
                      onMouseDown={handleMouseDownPasswordConfirm}
                      edge="end"
                    >
                      {showPasswordConfrim ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm password"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "30ch" }}>
              <Button onClick={checkData} variant="outlined" type="submit">
                Registration
              </Button>
            </FormControl>
            <p
              className="error-text"
              style={{ display: errorMessage ? "block" : "none" }}
            >
              {errorMessage}
            </p>
          </form>
        </>
      ) : (
        <>
          <p>Registration successful, you are logged in.</p>
          <Link to="/calendar">
            <Button>
              <span className="material-icons">arrow_back_ios</span>
              <p>Go to the calendar</p>
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Registration;
