
import { Box, Typography } from "@mui/material";

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
    </Box>
  );
}

export default Home;
