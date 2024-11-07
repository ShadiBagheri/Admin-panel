import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../configs/api";
import {data} from "autoprefixer";

const useRegister = () => {
  const mutationFn = (data) => api.post("auth/register", data);

  return useMutation({ mutationFn });
};

const useLogin = () => {
  const mutationFn = (data) => api.post("auth/login", data);

  return useMutation({ mutationFn });
};

const useCreateProducts = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("products", data);

  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["all-products"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const mutationFn = (id) => api.delete(`products/${id}`);

  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["all-products"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

const useEditProduct = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put(`products/${data.id}`, data);

  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["all-products"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

const useSearchProduct = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.get("products", data);

  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["all-products"] });
  }

  return useMutation({ mutationFn, onSuccess })
}

export { useRegister, useLogin, useCreateProducts, useDeleteProduct, useEditProduct, useSearchProduct };
