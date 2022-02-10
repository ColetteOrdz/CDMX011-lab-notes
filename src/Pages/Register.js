import React, { useState } from "react"

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";
import Button from '@mui/material/Button';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import Chip from '@mui/material/Chip';

import Logo from "../assets/logo-ln.png"

const Register = () => {

    const [values, setValues] = useState({
        name: "",
        password: "",
        email: "",
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      
    return (
        <>
         <img src={Logo} alt="logo" />
        <p>Create an account to start sharing your ideas!</p>
           <form>
           <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
          <Input
            id="standard-adornment-name"
            value={values.name}
            onChange={handleChange("name")}
            endAdornment={
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
          <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
          <Input
            id="standard-adornment-email"
            value={values.email}
            onChange={handleChange("email")}
            endAdornment={
              <InputAdornment position="end">
                <EmailOutlinedIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl sx={{ m: 1, mt: 3, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? (
                    <VisibilityOffRounded />
                  ) : (
                    <VisibilityRounded />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button sx={{mt: 3}} variant="contained">Log in</Button>
      </form>
      <div>
      <p>Continue with:</p>
      <Chip icon={<GoogleIcon />} label="Google" variant="outlined" />
      <Chip icon={<FacebookOutlinedIcon />} label="Facebook" variant="outlined" />
      </div> 
        </>
    )
}

export default Register
