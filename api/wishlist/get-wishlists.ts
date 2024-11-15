import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {WishlistResponse} from "@/@types/types";

const getUserWishlists = async (id: string) => {
  const {data} = await api.get<GenericResponse<Response>>(API_ENDPOINTS.WISHLIST.userWishlists(id));

  return data;
};

export function useGetUserWishlists(id: string) {
  return useQuery({
    queryKey: ["wishlist", id],
    queryFn: () => getUserWishlists(id),
  });
}

interface Response {
  wishlists: {
    workspace: WishlistResponse[];
    shortlet: WishlistResponse[];
  };
  total_wishlists: number;
}
