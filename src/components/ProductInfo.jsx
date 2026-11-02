
import { useState } from "react";

import {
  Typography,
  Rating,
  Button,
} from "@mui/material";

export default function ProductInfo({ product }) {
  const [rating, setRating] = useState(
    Number(product.rate ?? product.rating ?? 0)
  );

  return (
    <>
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
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
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
    </>
  );
}
