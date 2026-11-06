
import { Box, Typography, Alert } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Categories from "../components/Categories";
import Products from "../components/Products";

function Home() {
  const { token } = useContext(AuthContext);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 72px)",
        backgroundColor: "#FFF7FA",
        p: 5,
      }}
    >
      {token ? (
        <Alert severity="success">
          Welcome Back!
        </Alert>
      ) : (
        ""
      )}

      <Typography
        variant="h4"
        sx={{
          color: "#33232B",
          fontWeight: 700,
        }}
      >
        Welcome to Glow & Beauty
      </Typography>

      <Typography sx={{ mt: 2, color: "#8C6D7C" }}>
        Discover your favorite beauty products.
      </Typography>

      <Categories />
      <Products />
    </Box>
  );
}

export default Home;
