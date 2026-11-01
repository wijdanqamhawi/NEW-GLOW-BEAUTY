
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function Products() {
  const { data, isPending, isError, error } = useProducts();

  if (isPending) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <Alert severity="error">
        Failed to load products: {error.message}
      </Alert>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          color: "#B85C83",
          fontWeight: 600,
        }}
      >
        Our Products
      </Typography>

      <Grid container spacing={3}>
        {data.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
