
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import useCategories from "../hooks/useCategories";
import CategoriesUI from "./CategoriesUI";

export default function Categories() {
  const { data, isPending, isError, error } = useCategories();

  if (isPending) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <Alert severity="error">
        Failed to load categories: {error.message}
      </Alert>
    );
  }

  return <CategoriesUI categories={data} />;
}
