export const API_ENDPOINTS = {
  whoAmI: "/user",

  // AUTH: "auth",
  AUTH: {
    RESET: "auth/reset",
    LOGIN: "auth/login",
    REGISTER: "auth/register",
    SEND_OTP: "auth/send-otp",
    VERIFY_OTP: "auth/verify-otp",
    GOOGLE: "auth/google",
    CHANGE_PASSWORD: "auth/update-user-password",
    UPDATE_ROLE: "/auth/update-user-role",
  },

  UPLOAD: {
    uploadImage: "/media/image",
    uploadVideo: "/media/video",
    uploadBase64: "/media/base64image",
  },

  PROPERTY: {
    create: "/property",
    overview: "/property/overview",
    properties: "/property/management",
    modify: (id: string) => `/property/management/${id}`,
  },

  LISTING: {
    listing: (type: string) => `/lists/${type}`,
    details: (id: string) => `/lists/property/${id}`,
    updateView: (id: string) => `/lists/property/${id}/increase-view`,
    search: (type: "workspace" | "shortlet", searchString: string) =>
      `/lists/search/${type}?q=${searchString}`,
  },

  TRANSACTION: {
    acceptpayment: (params: string) => `/transaction/acceptpayment?${params}`,
    bankpayment: "/transaction/paywithbank",
    getBanks: (query: string) => `/transaction/banks?${query}`,
    verifyBankAccount: (query: string) => `/transaction/verify-account?${query}`,
    initPlan: `/transaction/plan-payment`,
  },

  PRE_BOOKING: `/booking/pre-booking`,

  BOOKING: {
    initBooking: (transactionRef: string) => `/booking/confirm-payment/${transactionRef}`,
    getBookings: (status: string) => `/booking/client/${status}`,
    details: (propertyId: string, date: number) => `/booking/${propertyId}/${date}`,
    bookingPerMonth: "/booking/booking-per-month",
    bookingPerWeek: "/booking/booking-per-week",
    overview: "/booking/overview",
    habit: "/booking/habit",
    locations: "/booking/locations",
  },

  WISHLIST: {
    toggleWishlist: (propertyId: string) => `/wishlist/toggle/${propertyId}`,
    userWishlists: (userId: string) => `/wishlist/lists/${userId}`,
  },

  RATING: {
    create: "/rating/create",
    lists: (id: string) => `/rating/${id}`,
  },

  PAYOUT: {
    payoutMethod: `/payout/payout-method`,
    payouts: `/payout`,
    request: `/payout/request`,
  },

  VIEWS: {
    views: `/views`,
  },

  PROFILE: {
    update: `/user/profile`,
    changePassword: `/user/change-password`,
    delete: (id: string) => `/user/delete/${id}`,
    requestPasswordReset: `/user/reset-password`,
    changeClientPassword: `/user/reset-password`,
    plan: "/user/update-plan",
  },

  OTHER_RENTALS: {
    add: `/other-rentals`,
    delete: (id: string) => `/other-rentals/${id}`,
  },

  CHAT: {
    getRoom: `/room`,
    messages: (id: string) => `/messages/${id}`,
    chatPeer: (id: string) => `/room/${id}`,
  },
};
