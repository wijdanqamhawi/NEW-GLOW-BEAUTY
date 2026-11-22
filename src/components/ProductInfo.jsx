
import {
  Typography,
  Rating,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import useAddToCart from "../hooks/useAddToCart";
import { toast } from "react-toastify";

export default function ProductInfo({ product }) {
  const token = useAuthStore((state) => state.token);

  const navigate = useNavigate();

  const {
    mutate: addToCart,
    isPending: addToCartPending,
  } = useAddToCart();

 const handleAddToCart = () => {
  if (!token) {
    toast.error("Please login first!");
    navigate("/login");
    return;
  }

  addToCart(product.id, {
    onSuccess: () => {
      toast.success("Product added to cart successfully!");
    },

    onError: () => {
      toast.error("Failed to add product!");
    },
  });
};

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
        onClick={handleAddToCart}
        disabled={addToCartPending}
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
        {addToCartPending ? "Adding..." : "Add to Cart"}
      </Button>
    </>
  );
}
