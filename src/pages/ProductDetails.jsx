
import { useParams } from "react-router-dom";

import {
  Box,
  Container,
  Grid,
  CircularProgress,
  Alert,
} from "@mui/material";

import useProduct from "../hooks/useProduct";

import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import ProductReviews from "../components/ProductReviews";

export default function ProductDetails() {
  const { id } = useParams();

  const { data, isPending, isError, error } = useProduct(id);

  if (isPending) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <Alert severity="error">
        Failed to load product: {error.message}
      </Alert>
    );
  }

  const product = data?.data ?? data;

  if (!product) {
    return (
      <Alert severity="warning">
        Product not found.
      </Alert>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FFF7FA",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          sx={{ alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <ProductImage product={product} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ProductInfo product={product} />
          </Grid>
        </Grid>

        <ProductReviews reviews={product.reviews} />
      </Container>
    </Box>
  );
}
