import { useQuery } from "@tanstack/react-query";
import api from "../configs/api.js";

const useAllProducts = (page) => {
    const queryFn = () => api.get(`products?page=${page}&limit=10`);
    const queryKey = ["all-products", page];

    return useQuery({ queryKey, queryFn });
}

export { useAllProducts }

