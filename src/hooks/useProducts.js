
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsApi";

export default function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });
}
