
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

export default function CategoriesUI({ categories }) {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Categories
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {categories.map((category) => (
          <Chip
            key={category.id}
            label={category.name}
            clickable
          />
        ))}
      </Box>
    </Box>
  );
}
