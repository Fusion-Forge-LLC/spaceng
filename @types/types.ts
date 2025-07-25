export interface PropertyType {
  image: string;
  title: string;
  location: string;
  labels: string[];
  rating: number;
  reviewNum: number;
  price: number;
}

export interface DashboardIconsProps {
  fill: "#205BF3" | "#9D9D9D";
}

export interface PropertyPayload {
  property_title: string;
  property_description: string;
  property_address: string;
  price: number;
  old_price?: number;
  price_prefix?: string;
  price_postfix?: string;
  type: "workspace" | "shortlet";
  location?: string;
  neighborhood?: string;
  state: string;
  coordinates?: (number | undefined)[];
  bedroom?: number;
  gallery: string[];
  video: string[];
  features: string[];
  property_terms: string;
}

export interface PropertyResponse {
  bedroom: number;
  createdAt: string;
  features: string[];
  gallery: string[];
  price: number;
  old_price: number;
  price_postfix: string;
  caution_fee: number;
  property_address: {
    address: string;
    location: string;
    neighborhood: string;
    state: string;
    coordinates?: number[];
  };
  property_description: string;
  property_title: string;
  reviews: ReviewTypes[];
  type: "shortlet" | "workspace";
  updatedAt: string;
  user: string;
  video: string[];
  __v: number;
  _id: string;
  labels: string;
  status: "Active" | "Pending Approval" | "Inactive";
  wishlists: {
    _id: string;
    user_id: string;
    property_id: string;
  }[];
  disabledDates: Date[];
  property_terms: string;
  enableDiscount: boolean;
  minimum_duration: number;
  percentage: number;
}

export interface WishlistResponse {
  _id: string;
  __v: number;
  user_id: string;
  property_id: PropertyResponse;
  type: string;
}

export interface BookingType {
  amount_paid: number;
  checkin: string;
  checkout: string;
  client_id: string;
  createdAt: string;
  duration: number;
  id: string;
  payment_method: string;
  property_id: PropertyResponse;
  property_owner: string;
  status: "pending" | "active" | "completed";
  transaction_id: string;
  updatedAt: string;
}

export interface ReviewTypes {
  _id: string;
  name: string;
  review_text: string;
  rating: number;
  property: string;
  user: string;
  __v: number;
  client: {
    profile_image: string;
  };
}

export interface PayoutTypes {
  id: string;
  amount: number;
  date: string;
  status: "pending" | "completed" | "failed";
}

export type PayoutResponse = {
  amount: number;
  profile: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  __v: 0;
};

export type Role = "PharmacyProfile" | "User";

export type UserDetails = {
  avatar: null | string;
  name: string;
};

export interface MessageTypes {
  chatId: string;
  createdAt: string;
  isRead: boolean;
  message: string;
  readAt: null | string;
  receiver: string;
  receiverDetails: UserDetails;
  receiverRole: Role;
  sender: string;
  senderDetails: UserDetails;
  senderRole: Role;
  updatedAt: string;
}

export interface Messages {
  __v: number;
  _id: string;
  createdAt: string;
  creator: string;
  isRead: boolean;
  message: string;
  readAt: null | string;
  receiver: string;
  receiverRole: "client" | "business";
  roomId: string;
  senderRole: "client" | "business";
  updatedAt: string;
}

export interface GeoLocation {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  boundingbox: string[];
}

export interface CouponResponse {
  createdAt: string;
  amount: number;
  expiry_date?: Date;
  minimum_duration: number;
  property: {
    _id: string;
    property_title: string;
  };
  creator: string;
  is_expired: boolean;
  is_used: boolean;
  _id: string;
  code: string;
}
