
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import { sendCodeSchema } from "../validations/authSchemas";

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
  ArrowBackOutlined,
  MarkEmailReadOutlined,
  SpaOutlined,
} from "@mui/icons-material";

function SendCode() {
  const navigate = useNavigate();

  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(sendCodeSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setServerError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        "https://knowledgeshop.runasp.net/api/auth/Account/SendCode",
        data
      );

      console.log(response.data);
      setSuccess(true);

      navigate("/reset-password", {
        state: { email: data.email },
      });

    } catch (err) {
      console.log(err.response);

      setServerError(
        "Unable to send verification code. Please check your email and try again."
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
        backgroundColor: "#FFF7FA",
        overflowX: "hidden",
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
        }}
      />

      <Box
        sx={{
          width: { xs: "100%", md: "calc(62% - 30px)" },
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 4 },
          py: 3,
          boxSizing: "border-box",
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0 18px 55px rgba(184,92,131,0.08)",
              borderRadius: "28px",
              p: { xs: 3, sm: 4 },
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <SpaOutlined
                sx={{
                  fontSize: 28,
                  color: "#B85C83",
                }}
              />
              <Typography
                sx={{
                  fontSize: 11,
                  color: "#9B5874",
                  fontWeight: 700,
                }}
              >
                GLOW & BEAUTY ATELIER
              </Typography>
            </Box>

            <Typography
              variant="h4"
              component="h1"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                color: "#30212A",
                fontSize: 30,
                mb: 1,
              }}
            >
              Forgot Password?
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                color: "#957987",
                fontSize: 13,
                mb: 3,
              }}
            >
              Enter your email address to receive a verification code.
            </Typography>

            {serverError && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {serverError}
              </Alert>
            )}

            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Verification code requested successfully.
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
                            color: "#927684",
                            fontSize: 19,
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
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isSubmitting}
                startIcon={<MarkEmailReadOutlined />}
                sx={{
                  mt: 2,
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
                {isSubmitting ? "Sending..." : "Send Code"}
              </Button>

              <Button
                component={Link}
                to="/login"
                fullWidth
                startIcon={<ArrowBackOutlined />}
                sx={{
                  mt: 2,
                  color: "#B85C83",
                  textTransform: "none",
                }}
              >
                Back to Login
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default SendCode;
