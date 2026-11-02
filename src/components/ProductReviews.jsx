
import { Box, Typography } from "@mui/material";
import ReviewItem from "./ReviewItem";

export default function ProductReviews({ reviews }) {
  return (
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

      {Array.isArray(reviews) && reviews.length > 0 ? (
        reviews.map((review, index) => (
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
  );
}
