import {useQuery} from "@tanstack/react-query";

import {API_ENDPOINTS} from "@/lib/api-endpoints";
import {GenericResponse} from "@/lib/generic-types";
import {getRequest} from "@/lib/http-helpers";
import {PayoutTypes} from "@/@types/types";

export type User = {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  role: "business" | "client" | "admin";
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  _v: number;
};

export type BusinessProfile = {
  app_notifications: {
    booking: boolean;
    promotion: boolean;
    Offers: boolean;
    _id: string;
  };
  bookings: [];
  login_history: [];
  notifications: [];
  payout_methods: [];
  payouts: PayoutTypes[];
  pending_payout: number;
  profile_image: string;
  sms_notifications: {
    booking: boolean;
    promotion: boolean;
    Offers: boolean;
    _id: string;
  };
  total_earnings: number;
  __v: number;
  _id: string;
};

export type ClientProfile = {
  _id: string;
  profile_image: string;
  newsletter_and_services: {
    deal_discovery: boolean;
    rewards: boolean;
    refer_a_friend: boolean;
    search_assistant: boolean;
    direct_mail: boolean;
    _id: string;
  };
  product_and_services: {
    for_business: boolean;
    customer_feedback: boolean;
    product_announcement: boolean;
    _id: string;
  };
  appointment_emails: {
    upcoming_appointments: boolean;
    review_impacts: boolean;
    Offers_in_confirmation_emails: boolean;
    booking_confirmation_emails: boolean;
    _id: string;
  };
  other_rentals: [];
  __v: 0;
};

export type whoAmIResponse = User & {
  app_notifications: {
    booking: boolean;
    promotion: boolean;
    Offers: boolean;
    _id: string;
  };
  bookings: [];
  login_history: [];
  notifications: [];
  payout_methods: [];
  payouts: PayoutTypes[];
  pending_payout: number;
  profile_image: string;
  sms_notifications: {
    booking: boolean;
    promotion: boolean;
    Offers: boolean;
    _id: string;
  };
  total_earnings: number;
  _id: string;
  newsletter_and_services: {
    deal_discovery: boolean;
    rewards: boolean;
    refer_a_friend: boolean;
    search_assistant: boolean;
    direct_mail: boolean;
    _id: string;
  };
  product_and_services: {
    for_business: boolean;
    customer_feedback: boolean;
    product_announcement: boolean;
    _id: string;
  };
  appointment_emails: {
    upcoming_appointments: boolean;
    review_impacts: boolean;
    Offers_in_confirmation_emails: boolean;
    booking_confirmation_emails: boolean;
    _id: string;
  };
  other_rentals: [];
  __v: 0;
};

export type WhoAmIBusinessResponse = {
  user: User;
  profile: BusinessProfile;
};

export type WhoAmIClientResponse = {
  user: User;
  profile: ClientProfile;
};

async function whoAmI() {
  return getRequest<GenericResponse<WhoAmIBusinessResponse | WhoAmIClientResponse>>({
    url: API_ENDPOINTS.whoAmI,
  });
}

export function useWhoAmI() {
  const {data, isLoading, refetch} = useQuery({
    queryFn: whoAmI,
    queryKey: ["whoami"],
  });

  if (data?.data) {
    const {user, profile} = data.data;

    const payload = {
      ...user,
      ...profile,
    };

    return {
      data: payload as whoAmIResponse,
      isLoading,
    };
  } else {
    return {
      data: null,
      isLoading,
      fetchWhoAmI: refetch,
    };
  }
}
