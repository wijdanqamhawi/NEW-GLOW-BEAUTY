
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { registerSchema } from "../validations/authSchemas";

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Divider,
} from "@mui/material";

import {
  PersonOutlined,
  AlternateEmail,
  EmailOutlined,
  LockOutlined,
  PhoneOutlined,
  SpaOutlined,
  FavoriteBorderOutlined,
  Google,
  Apple,
} from "@mui/icons-material";

function Register() {
  const navigate = useNavigate();

  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

 
const onSubmit = async (data) => {
  console.log(data);

  setServerError(null);
  setSuccess(false);

  try {
    const response = await axios.post(
      "https://knowledgeshop.runasp.net/api/auth/Account/Register",
      data
    );

    console.log(response.data);
    setSuccess(true);
    navigate("/login");

  } catch (err) {
  console.log(err.response);

  setServerError(
    err.response?.data?.errors?.join(" ") || "Registration Failed"
  );
}
};


  const fieldStyle = {
    mb: 1.3,

    "& .MuiOutlinedInput-root": {
      color: "#F7EAF1",
      backgroundColor: "transparent",
      borderRadius: "9px",
      fontSize: 12,

      "& fieldset": {
        borderColor: "#75616F",
      },

      "&:hover fieldset": {
        borderColor: "#C993B0",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#E7AFCB",
      },
    },

    "& .MuiInputLabel-root": {
      color: "#E6D2DE",
      fontSize: 12,
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#F0BDD5",
    },

    "& .MuiInputBase-input::placeholder": {
      color: "#B9A5B1",
      opacity: 1,
    },

    "& .MuiFormHelperText-root": {
      color: "#FF9AAB",
      fontSize: 11,
    },
  };

  const inputIconColor = "#C6A9BA";

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        marginLeft: "calc(50% - 50vw)",
        display: "flex",
        backgroundColor: "#241A23",
        overflowX: "hidden",
      }}
    >
      
      <Box
        sx={{
          width: { md: "38%" },
          height: "720px",
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          backgroundImage: 'url("/images/register-beauty.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          ml: "30px",
          borderRadius: "28px",
          alignSelf: "center",
          overflow: "hidden",
        }}
      />

    
      <Box
        sx={{
          width: { xs: "100%", md: "calc(62% - 30px)" },
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #241A23 0%, #2C202B 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 4 },
          py: 3,
          boxSizing: "border-box",
        }}
      >
        <Container maxWidth="xs" sx={{ px: "0 !important" }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 430,
              mx: "auto",
              backgroundColor: "#322630",
              border: "1px solid #50404E",
              borderRadius: "22px",
              boxShadow: "0 16px 45px rgba(0,0,0,0.18)",
              p: { xs: 2.5, sm: 3 },
              boxSizing: "border-box",
            }}
          >
            
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                mb: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: "#8E4D70",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SpaOutlined
                  sx={{
                    color: "#F9D7E7",
                    fontSize: 18,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                Glow & Beauty
              </Typography>
            </Box>

            <Typography
              variant="h4"
              component="h1"
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: 23,
                fontWeight: 700,
                mb: 0.5,
              }}
            >
              Create Your Account
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                color: "#C4B0BE",
                fontSize: 11,
                mb: 2,
              }}
            >
              Join Glow & Beauty and start your customized beauty journey.
            </Typography>

            {serverError && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {serverError}
              </Alert>
            )}

          
            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Registration successful!
              </Alert>
            )}

        
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
            
              <TextField
                label="Full Name"
                placeholder="Enter your full name"
                fullWidth
                size="small"
                {...register("fullName")}
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlined
                          sx={{
                            color: inputIconColor,
                            fontSize: 18,
                          }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={fieldStyle}
              />

              <TextField
                label="User Name"
                placeholder="Choose a username"
                fullWidth
                size="small"
                {...register("userName")}
                error={!!errors.userName}
                helperText={errors.userName?.message}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmail
                          sx={{
                            color: inputIconColor,
                            fontSize: 18,
                          }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={fieldStyle}
              />

        
              <TextField
                label="Email Address"
                placeholder="Enter your email address"
                fullWidth
                size="small"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlined
                          sx={{
                            color: inputIconColor,
                            fontSize: 18,
                          }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={fieldStyle}
              />

              <TextField
                label="Password"
                placeholder="Create password"
                type="password"
                fullWidth
                size="small"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlined
                          sx={{
                            color: inputIconColor,
                            fontSize: 18,
                          }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={fieldStyle}
              />

           
              <TextField
                label="Phone Number"
                placeholder="05XXXXXXXX"
                fullWidth
                size="small"
                {...register("phoneNumber")}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneOutlined
                          sx={{
                            color: inputIconColor,
                            fontSize: 18,
                          }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={fieldStyle}
              />

           
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#E8A9C9",
                      p: 0.5,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#E8A9C9",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      color: "#CDB8C5",
                      fontSize: "11px",
                      lineHeight: 1.6,
                      textAlign: "left",
                    }}
                  >
                    I agree to the Terms of Service, Privacy Policy,
                    and exclusive boutique rewards.
                  </Typography>
                }
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  ml: 0,
                  mr: 0,
                  mb: 2,
                  width: "100%",
                  "& .MuiFormControlLabel-label": {
                    flex: 1,
                    mt: "3px",
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isSubmitting}
                startIcon={<FavoriteBorderOutlined />}
                sx={{
                  py: 1.2,
                  borderRadius: "30px",
                  backgroundColor: "#EAB0CE",
                  color: "#35212F",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#F3C4DD",
                  },
                }}
              >
                {isSubmitting
                  ? "Loading..."
                  : "Create Account & Claim 15% Off"}
              </Button>

           
              <Divider
                sx={{
                  my: 2.2,
                  color: "#C8AFBE",
                  fontSize: 10,
                  "&::before, &::after": {
                    borderColor: "#665361",
                  },
                }}
              >
                OR CONTINUE WITH
              </Divider>

      
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                }}
              >
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: "#FFFFFF",
                    borderColor: "#8A6A7F",
                    borderRadius: "30px",
                    fontSize: 11,
                    textTransform: "none",
                  }}
                >
                  <Google
                    sx={{
                      color: "#4285F4",
                      fontSize: 18,
                      mr: 1,
                    }}
                  />
                  Google
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: "#FFFFFF",
                    borderColor: "#8A6A7F",
                    borderRadius: "30px",
                    fontSize: 11,
                    textTransform: "none",
                  }}
                >
                  <Apple
                    sx={{
                      fontSize: 18,
                      mr: 1,
                    }}
                  />
                  Apple
                </Button>
              </Box>

       
              <Typography
                sx={{
                  textAlign: "center",
                  mt: 2.5,
                  color: "#C9B3C1",
                  fontSize: 11,
                }}
              >
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{
                    color: "#E9A9CA",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Login here
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Register;
