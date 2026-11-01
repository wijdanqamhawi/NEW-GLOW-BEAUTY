import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CategoryItem from "./CategoryItem";

export default function CategoriesUI({ categories }) {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Categories
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
          />
        ))}
      </Box>
    </Box>
  );
}