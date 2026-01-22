import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchProductById,
  addProduct,
} from "../api/axiosConfig";

export const useGetProducts = () =>
  useQuery({ queryKey: ["products"], queryFn: fetchProducts });

export const useGetProduct = (id) =>
  useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });

  //pending to impliment in UI
export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });
};
