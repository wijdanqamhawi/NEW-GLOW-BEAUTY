import Chip from "@mui/material/Chip";

export default function CategoryItem({ category }) {
  return (
    <Chip
      label={category.name}
      clickable
    />
  );
}