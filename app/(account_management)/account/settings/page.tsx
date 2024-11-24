/* eslint-disable prettier/prettier */

import SettingsCard from "../_components/settingsCard/settingsCard";

function Settings() {
  return (
    <div className="px-5 lg:px-24 py-8 md:py-10 lg:py-20 text-grey-200 ">
      <div className="mb-4 md:mb-11 lg:mb-14 flex flex-col gap-3 lg:gap-4">
        <h1 className="text-grey font-semibold text-xl lg:text-2xl">Account settings</h1>
        <p className="text-sm lg:text-base">
          <span className="font-semibold">Akin Peters,</span> opapa34@gmail.com{" "}
          <span>Go to your profile</span>{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-10 w-full justify-stretch ">
        {settingsList.map((setting, index) => (
          <SettingsCard
            key={index}
            description={setting.description}
            image={setting.image}
            link={setting.link}
            title={setting.title}
            url={setting.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Settings;

const settingsList = [
  {
    title: "Personal info",
    description: "Provide personal info and how we can reach you",
    link: "Manage personal info",
    image: "/account_management/personalcard.svg",
    url: "/account/settings/personal-info",
  },
  {
    title: "Security",
    description: "Change your security settings, secure your account or delete your account",
    link: "Manage account security",
    image: "/account_management/securitycard.svg",
    url: "/account/settings/security",
  },
  {
    title: "Payment info",
    description: "Securely add or remove payment methods when you book ",
    link: "Manage payment info",
    image: "/account_management/paymentcard.svg",
    url: "/account/settings/payment-info",
  },
  {
    title: "Email Notification",
    description: "Choose notification preferences and how you want to be contacted",
    link: "Manage notifications",
    image: "/account_management/notificationcard.svg",
    url: "/account/settings/notifications",
  },
  {
    title: "Other renters",
    description: "Add or edit information about the people you want to share space with",
    link: "Manage renters",
    image: "/account_management/user-add.svg",
    url: "/account/settings/renters",
  },
  {
    title: "Privacy",
    description: "Exercise your privacy rights and control how your data is been used",
    link: "Manage Privacy",
    image: "/account_management/privacy.svg",
    url: "/account/settings/privacy",
  },
  {
    title: "Privacy",
    description: "Change your language, currency and time zone",
    link: "Manage preferences",
    image: "/account_management/preference.svg",
    url: "/account/settings/preferences",
  },
];
