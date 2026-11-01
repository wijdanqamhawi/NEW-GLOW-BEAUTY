
import { useParams } from "react-router-dom";
import ReviewItem from "../components/ReviewItem";

import {
  Box,
  Container,
  Grid,
  Typography,
  CardMedia,
  Rating,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";

import useProduct from "../hooks/useProduct";

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
    return <Alert severity="warning">Product not found.</Alert>;
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
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                p: 3,
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: 400,
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              sx={{
                color: "#33232B",
                fontWeight: 700,
                mb: 2,
              }}
            >
              {product.name}
            </Typography>

            <Rating
              value={Number(product.rate ?? product.rating ?? 0)}
              readOnly
              sx={{ mb: 2 }}
            />

            <Typography
              variant="h5"
              sx={{
                color: "#B85C83",
                fontWeight: 700,
                mb: 3,
              }}
            >
              ${product.price}
            </Typography>

            <Typography
              sx={{
                color: "#8C6D7C",
                lineHeight: 1.9,
                mb: 3,
              }}
            >
              {product.description}
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#B85C83",
                borderRadius: "30px",
                px: 5,
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#9D456B",
                },
              }}
            >
              Add to Cart
            </Button>
          </Grid>

        </Grid>

        {/* Customer Reviews */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: "#33232B",
              fontWeight: 700,
            }}
          >
            Customer Reviews
          </Typography>

          {Array.isArray(product.reviews) &&
          product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <ReviewItem
                key={review.id ?? index}
                review={review}
              />
            ))
          ) : (
            <Typography sx={{ color: "#8C6D7C" }}>
              No reviews yet.
            </Typography>
          )}
        </Box>

      </Container>
    </Box>
  );
}
