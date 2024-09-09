import React from "react";

import DetailsPage from "../../_components/property-detail-page/details-page";

const images = [
  "/shortlets/image6.png",
  "/shortlets/image5.png",
  "/shortlets/image2.png",
  "/shortlets/image4.png",
  "/shortlets/image3.png",
];

function Page() {
  return (
    <DetailsPage
      cost={25000}
      description="Our carefully curated collection of stylish shortlets offers the perfect blend of comfort and convenience. Whether you're visiting for business or leisure, our properties provide a home away from home in the heart of Lagos. Enjoy world-class amenities, prime locations, and exceptional service. Book your stay today and experience the best of Lagos living."
      descriptionTitle="Discover your Lagos haven with Haven Homes."
      images={images}
      label="Guest"
      location="1001, Estate, Lekki, Lagos"
      title="Haven Homes"
    />
  );
}

export default Page;
