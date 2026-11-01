
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function ReviewItem({ review }) {
  return (
    <Paper
      sx={{
        p: 3,
        mb: 2,
        borderRadius: "15px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box sx={{ mb: 1 }}>
        <Typography
          sx={{
            fontWeight: 600,
            color: "#33232B",
          }}
        >
          {review.userName}
        </Typography>

        <Typography
          sx={{
            fontSize: 12,
            color: "#8C6D7C",
          }}
        >
          {review.createdAt
            ? new Date(review.createdAt).toLocaleDateString()
            : ""}
        </Typography>
      </Box>

      <Rating
        value={Number(review.rating ?? 0)}
        readOnly
        sx={{ mb: 1 }}
      />

      <Typography sx={{ color: "#8C6D7C" }}>
        {review.comment}
      </Typography>
    </Paper>
  );
}
