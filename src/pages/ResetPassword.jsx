
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { resetPasswordSchema } from "../validations/authSchemas";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  InputAdornment,
} from "@mui/material";

import {
  EmailOutlined,
  LockOutlined,
  PinOutlined,
  SpaOutlined,
} from "@mui/icons-material";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: "onBlur",
    defaultValues: {
      email: location.state?.email || "",
    },
  });

  const onSubmit = async (data) => {
    setServerError(null);
    setSuccess(false);

    try {
      const response = await axios.patch(
        "https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword",
        data
      );

      console.log(response.data);

      if (response.data?.success === false) {
        setServerError(
          response.data?.message || "Reset Password Failed"
        );
        return;
      }

      setSuccess(true);
      navigate("/login");

    } catch (err) {
      console.log(err.response);

      setServerError(
        err.response?.data?.errors?.join(" ") ||
        err.response?.data?.message ||
        "Reset Password Failed"
      );
    }
  };

  const fieldStyle = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      backgroundColor: "#FFFFFF",
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        display: "flex",
        backgroundColor: "#F9F4F6",
      }}
    >
      <Box
        sx={{
          width: "42%",
          display: { xs: "none", md: "block" },
          backgroundColor: "#D8C3CA",
          backgroundImage: 'url("/images/login-beauty.png")',
          backgroundSize: "auto 85%",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          borderTopRightRadius: "38% 25%",
          borderBottomRightRadius: "30% 35%",
        }}
      />

      <Box
        sx={{
          width: { xs: "100%", md: "58%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 3,
          py: 5,
        }}
      >
        <Container maxWidth="xs">
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              p: 4,
              borderRadius: "20px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.07)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                mb: 2,
              }}
            >
              <SpaOutlined sx={{ color: "#9E6484" }} />
              <Typography fontWeight={700} color="#69465A">
                Glow & Beauty
              </Typography>
            </Box>

            <Typography
              variant="h5"
              fontWeight={700}
              textAlign="center"
              sx={{ mb: 1, color: "#392B35" }}
            >
              Reset Password
            </Typography>

            <Typography
              textAlign="center"
              sx={{ mb: 3, color: "#887680", fontSize: 13 }}
            >
              Enter your email, verification code,
              and new password.
            </Typography>

            {serverError && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {serverError}
              </Alert>
            )}

            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Password reset successfully!
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                label="Email Address"
                placeholder="Enter your email"
                fullWidth
                size="small"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlined sx={{ color: "#A87992" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={fieldStyle}
              />

              <TextField
                label="Verification Code"
                placeholder="Enter verification code"
                fullWidth
                size="small"
                {...register("code")}
                error={!!errors.code}
                helperText={errors.code?.message}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PinOutlined sx={{ color: "#A87992" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={fieldStyle}
              />

              <TextField
                label="New Password"
                placeholder="Enter new password"
                type="password"
                fullWidth
                size="small"
                {...register("newPassword")}
                error={!!errors.newPassword}
                helperText={errors.newPassword?.message}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlined sx={{ color: "#A87992" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={fieldStyle}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isSubmitting}
                sx={{
                  mt: 1,
                  py: 1.2,
                  borderRadius: "25px",
                  backgroundColor: "#A87992",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#8F607B",
                  },
                }}
              >
                {isSubmitting ? "Loading..." : "Reset Password"}
              </Button>
            </Box>

            <Typography
              textAlign="center"
              sx={{ mt: 3, fontSize: 13 }}
            >
              <Link
                to="/login"
                style={{
                  color: "#9E6484",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Back to Login
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default ResetPassword;
