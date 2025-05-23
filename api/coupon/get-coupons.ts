import {useQuery} from "@tanstack/react-query";

import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {CouponResponse} from "@/@types/types";

const getCouponList = async (query: {[k: string]: string}) => {
  const sortBy = query["sort"] || "newest";
  const location = query["location"] || "all";
  const bedrooms = query["bedrooms"] || "all";
  const searchString = query["q"] || "";
  const page = query["page"] || "1";
  const {data} = await api.get<GenericResponse<CouponResponse[]>>(API_ENDPOINTS.COUPON.lists());

  return data;
};

export function useGetCouponList(query: {[k: string]: string}) {
  return useQuery({
    queryKey: ["coupon-list", query],
    queryFn: () => getCouponList(query),
  });
}
