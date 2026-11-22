import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store/useAuthStore";
import { addToCart } from "../api/cartApi";

export default function useAddToCart() {
  const token = useAuthStore((state) => state.token);

  return useMutation({
    mutationFn: (productId) => addToCart(productId, token),
  });
}