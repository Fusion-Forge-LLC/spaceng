import React from "react";

import EmailVerification from "../../../../_components/email-verification/email-verification";

function Page() {
  return <EmailVerification redirect="/auth/business/login/forgot-password/new-password" />;
}

export default Page;
