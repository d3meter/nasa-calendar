import React, { useState, useEffect, useRef } from "react";
import "./css/Login.css";
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
import { login } from "../auth/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [logState, setLogState] = useState("logged out");
  const [errorMessage, setErrorMessage] = useState(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogState(`logged in`);
      } else {
        setLogState(`logged out`);
      }
    });
  }, []);

  const handleLog = async (event) => {
    event.preventDefault();
    const password = passwordRef.current.value;
    try {
      await login(email, password).then((userData) => setUser(userData));
    } catch (error) {
      setErrorMessage("Wrong email or password!");
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <h2>...if you need some space.</h2>
      {logState === "logged out" ? (
        <form>
          <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
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
            <Button onClick={handleLog} variant="outlined">
              Login
            </Button>
          </FormControl>
          <p
            className="error-text"
            style={{ display: errorMessage ? "block" : "none" }}
          >
            {errorMessage}
          </p>
          <p>
            Are you new cadet?
            <Link to="/registration">
              <Button>CLICK HERE</Button>
            </Link>
            for registration!
          </p>
        </form>
      ) : (
        <>
          <p>Login successful with {user.email} </p>
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

export default Login;
