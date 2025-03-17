import {cookies} from "next/headers";

import {API_ENDPOINTS} from "@/lib/api-endpoints";

export const fetchUser = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}${API_ENDPOINTS.whoAmI}`;
  const cookieStore = cookies();
  const token = cookieStore.get("spacefinda-token");

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
