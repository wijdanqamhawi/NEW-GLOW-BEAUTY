
import axios from "axios";


export const getProducts = async () => {
  const response = await axios.get(
    "https://knowledgeshop.runasp.net/api/Products",
    {
      headers: {
        "Accept-Language": "en",
      },
    }
  );

  return response.data.response.data;
};


export const getProductById = async (id) => {
  const response = await axios.get(
    `https://knowledgeshop.runasp.net/api/Products/${id}`,
    {
      headers: {
        "Accept-Language": "en",
      },
    }
  );

  return response.data.response;
};
