import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useMoviesByCategory = (category) => {
    return useQuery({
        queryKey: ['movie', category],
        queryFn: () => api.get(`/movie/${category}`),
        select: (data) => data.data,
    });
};