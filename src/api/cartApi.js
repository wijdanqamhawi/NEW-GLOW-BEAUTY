import axios from "axios";

export const addToCart = async (productId, token) => {
  const response = await axios.post(
    "https://knowledgeshop.runasp.net/api/Carts",
    {
      ProductId: productId,
      Count: 1,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};