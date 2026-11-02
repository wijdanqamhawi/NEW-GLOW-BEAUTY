
import { Box, CardMedia } from "@mui/material";

export default function ProductImage({ product }) {
  return (
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
  );
}
