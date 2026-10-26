
import { Box, Typography } from "@mui/material";
import Categories from "../components/Categories";

function Home() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 72px)",
        backgroundColor: "#FFF7FA",
        p: 5,
      }}
    >
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
    </Box>
  );
}

export default Home;
