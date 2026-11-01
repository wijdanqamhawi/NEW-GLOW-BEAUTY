
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        borderRadius: "15px",
        backgroundColor: "#FFF7FA",
        height: "100%",
      }}
    >
      <CardActionArea
        component={Link}
        to={`/products/${product.id}`}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            height: 220,
            objectFit: "contain",
          }}
        />

        <CardContent>
          <Typography variant="h6">
            {product.name}
          </Typography>

          <Rating
            value={Number(product.rate ?? product.rating ?? 0)}
            readOnly
          />

          <Typography
            variant="h6"
            sx={{
              color: "#B85C83",
              mt: 1,
            }}
          >
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
