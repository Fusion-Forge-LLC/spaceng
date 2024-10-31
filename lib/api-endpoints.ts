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
  },

  PROPERTY: {
    create: "/property",
    overview: "/property/overview",
    properties: "/property/management",
  },
};
