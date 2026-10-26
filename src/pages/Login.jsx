
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { loginSchema } from "../validations/authSchemas";

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Alert,
  InputAdornment,
  Divider,
} from "@mui/material";

import {
  EmailOutlined,
  LockOutlined,
  SpaOutlined,
  DarkModeOutlined,
  LoginOutlined,
  Google,
  Facebook,
} from "@mui/icons-material";

function Login() {
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setServerError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        "https://knowledgeshop.runasp.net/api/auth/Account/Login",
        {
          email: data.email,
          password: data.password,
        }
      );

      console.log("Login Response:", response.data);

      if (response.data?.success === false) {
        setServerError(
          response.data?.message || "Login Failed"
        );
        return;
      }

      setSuccess(true);
      navigate("/home");

    } catch (err) {
      console.log("Login Error:", err.response?.data);

      const message = err.response?.data?.message;
      const errors = err.response?.data?.errors;

      setServerError(
        message ||
        (Array.isArray(errors) ? errors.join(" ") : null) ||
        "Login Failed"
      );
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        display: "flex",
        alignItems: "stretch",
        backgroundColor: "#FFF7FA",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: { md: "38%" },
          height: "720px",
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          backgroundImage: 'url("/images/login-beauty.png")',
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
          minWidth: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          py: { xs: 4, md: 3 },
          px: { xs: 2, md: 4 },
          boxSizing: "border-box",
        }}
      >
        <DarkModeOutlined
          sx={{
            position: "absolute",
            top: 30,
            right: 35,
            fontSize: 19,
            color: "#795B69",
          }}
        />

        <Container
          maxWidth="sm"
          sx={{
            px: "0 !important",
            width: "100%",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "0 18px 55px rgba(184, 92, 131, 0.08)",
              p: { xs: 3, sm: 4 },
              borderRadius: "28px",
              width: "100%",
              maxWidth: "500px",
              mx: "auto",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "#FCE9F0",
                  borderRadius: "30px",
                  px: 2,
                  py: 0.8,
                }}
              >
                <SpaOutlined
                  sx={{ color: "#B85C83", fontSize: 18 }}
                />

                <Typography
                  sx={{
                    fontSize: 10,
                    color: "#9B5874",
                    fontWeight: 700,
                    letterSpacing: 0.7,
                  }}
                >
                  GLOW & BEAUTY ATELIER
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h4"
              component="h1"
              sx={{
                textAlign: "center",
                mb: 1,
                fontWeight: 700,
                color: "#30212A",
                fontSize: { xs: 29, sm: 34 },
              }}
            >
              Welcome Back
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                color: "#957987",
                fontSize: 12,
                mb: 3,
              }}
            >
              Sign in to continue your personalized beauty ritual
            </Typography>

            {serverError && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {serverError}
              </Alert>
            )}

            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Login successful!
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                label="EMAIL ADDRESS"
                placeholder="Enter your email address"
                fullWidth
                margin="normal"
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
                            fontSize: 19,
                            color: "#927684",
                          }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "9px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: 12,
                  },
                }}
              />

              <TextField
                label="PASSWORD"
                placeholder="Enter your password"
                type="password"
                fullWidth
                margin="normal"
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
                            fontSize: 19,
                            color: "#927684",
                          }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "9px",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: 12,
                  },
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 1,
                  mb: 2,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      {...register("rememberMe")}
                      sx={{
                        color: "#B85C83",
                        "&.Mui-checked": {
                          color: "#B85C83",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: 12 }}>
                      Remember me
                    </Typography>
                  }
                />

                <Button
                  component={Link}
                  to="/send-code"
                  sx={{
                    color: "#B85C83",
                    fontSize: 11,
                    textTransform: "none",
                    minWidth: 0,
                  }}
                >
                  Forgot Password?
                </Button>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isSubmitting}
                startIcon={<LoginOutlined />}
                sx={{
                  mt: 1,
                  py: 1.3,
                  backgroundColor: "#B85C83",
                  borderRadius: "30px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#9D456B",
                  },
                }}
              >
                {isSubmitting
                  ? "Loading..."
                  : "Sign In to Account"}
              </Button>

              <Divider
                sx={{
                  my: 3,
                  color: "#9B8791",
                  fontSize: 11,
                }}
              >
                OR SIGN IN WITH
              </Divider>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={
                    <Google
                      sx={{
                        color: "#4285F4",
                        fontSize: 18,
                      }}
                    />
                  }
                  sx={{
                    borderRadius: "30px",
                    borderColor: "#EBDCE3",
                    color: "#51434A",
                    textTransform: "none",
                    fontSize: 12,
                  }}
                >
                  Google
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={
                    <Facebook
                      sx={{
                        color: "#1877F2",
                        fontSize: 18,
                      }}
                    />
                  }
                  sx={{
                    borderRadius: "30px",
                    borderColor: "#EBDCE3",
                    color: "#51434A",
                    textTransform: "none",
                    fontSize: 12,
                  }}
                >
                  Facebook
                </Button>
              </Box>

              <Typography
                sx={{
                  textAlign: "center",
                  mt: 3,
                  fontSize: 12,
                  color: "#927684",
                }}
              >
                Don't have an account yet?{" "}
                <Link
                  to="/register"
                  style={{
                    color: "#B85C83",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Create Account
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Login;
