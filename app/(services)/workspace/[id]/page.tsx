import React from "react";

import DetailsPage from "../../_components/property-detail-page/details-page";

const images = [
  "/workspace/image4.png",
  "/workspace/image5.png",
  "/workspace/image6.png",
  "/workspace/image7.png",
  "/workspace/image8.png",
];

function Page() {
  return (
    <DetailsPage
      cost={5000}
      description="Experience the perfect blend of productivity and community at our co-working space with Co-Worka. Connect with like-minded professionals, network, and thrive in a dynamic environment."
      descriptionTitle="Lagos' Premier Co-Working Destination"
      images={images}
      label="Team"
      location="1001, Estate, Lekki, Lagos"
      title="Co-Worka"
    />
  );
}

export default Page;
