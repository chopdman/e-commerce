import axios from "axios";

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || "jwt-token";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchProducts = () =>
  axiosConfig.get("/products").then((res) => res.data.products);
export const fetchProductById = (id: string) =>
  axiosConfig.get(`/products/${id}`).then((res) => res.data);

//Pending to create the from and show the demo in UI
export const addProduct = (product: any) =>
  axiosConfig.post("/products", product).then((res) => res.data);

export default axiosConfig;
