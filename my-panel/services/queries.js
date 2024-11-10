import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const useAllProducts = (page, search) => {
    const queryFn = () => api.get(`products?page=${page}&limit=10,${search}`);
    const queryKey = ["all-products", page, search];

    return useQuery({ queryKey, queryFn });
}

export { useAllProducts }

