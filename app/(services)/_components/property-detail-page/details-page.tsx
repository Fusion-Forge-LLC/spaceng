"use client";

import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {
  ArrowRight,
  CalendarDaysIcon,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  HandCoins,
  ImageIcon,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useSwipeable} from "react-swipeable";
import {toast} from "sonner";

import Wrapper from "@/components/wrapper/wrapper";
import {cn} from "@/lib/utils";
import {useUpdateViews} from "@/api/property/update-view";
import {ReviewTypes} from "@/@types/types";
import ShareButtons from "@/components/share-property/share-property";
import SingleMap from "@/components/map/singlemap";
import {useUser} from "@/context/user";
import {useGetChatRoom} from "@/api/chat/get-room";

import ReviewCard from "../review-card/review-card";
import BookShortlet from "../booking-page/booking";

import PropertyVideos from "./property-videos";

function DetailsPage({
  images,
  title,
  location,
  descriptionTitle,
  description,
  cost,
  label,
  amenities,
  reviews,
  coordinate,
  cautionFee,
  video,
  property_terms,
  ownerId,
}: {
  images: string[];
  title: string;
  location: string;
  descriptionTitle: string;
  description: string;
  cost: number;
  label: "Guest" | "Team";
  amenities: string[];
  reviews: ReviewTypes[];
  coordinate?: number[];
  cautionFee?: number;
  video: string[];
  property_terms: string;
  ownerId: string;
}) {
  useUpdateViews();
  const postUrl = typeof window !== "undefined" ? window.location.href : "";
  const [fullScreenImage, setFullScreenImage] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;

      if (hash.startsWith("#gallery-")) {
        const imageIndex = parseInt(hash.replace("#gallery-", ""), 10);

        if (!isNaN(imageIndex) && imageIndex >= 1 && imageIndex <= 10) {
          setFullScreenImage(imageIndex);
        }
      }
    }
  }, []);

  const closeFullScreen = () => {
    setFullScreenImage(null);
    router.push("");
  };

  const prevImage = () => {
    setFullScreenImage((prevImage) => {
      if (prevImage) {
        return prevImage > 1 ? prevImage - 1 : prevImage;
      } else {
        return null;
      }
    });
    if (fullScreenImage && fullScreenImage > 1) {
      router.push(`#gallery-${fullScreenImage - 1}`);
    }
  };

  const nextImage = () => {
    setFullScreenImage((prevImage) => {
      if (prevImage) {
        return prevImage === images.length ? prevImage : prevImage + 1;
      } else {
        return null;
      }
    });
    if (fullScreenImage && fullScreenImage < images.length) {
      router.push(`#gallery-${fullScreenImage + 1}`);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    //@ts-ignore
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <main>
      <Wrapper className="py-10">
        <div>
          <nav className="text-sm pb-4">
            <ul className="flex items-center space-x-2">
              <li>
                <Link className="text-blue-600 hover:underline" href="/">
                  Home
                </Link>
              </li>

              {pathSegments.map((segment, index) => {
                const isLast = index === pathSegments.length - 1;
                const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
                const formattedName = segment.replace(/-/g, " ");

                return (
                  <li
                    key={index}
                    className="flex items-center space-x-2 whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <span>/</span>
                    {isLast ? (
                      <span className="text-gray-500">{title}</span>
                    ) : (
                      <Link className="text-blue-600 hover:underline capitalize" href={url}>
                        {formattedName}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="max-sm:space-y-3">
          <h5 className="md:text-lg font-medium">{title}</h5>
          <p className="flex gap-1 ">
            <MapPin /> {location}{" "}
          </p>
        </div>

        <div className="py-10">
          <div
            className={cn(
              "hidden sm:grid gap-3",
              images.length >= 4
                ? "grid-cols-4"
                : images.length === 3
                  ? "grid-cols-3"
                  : images.length === 2
                    ? "grid-cols-2"
                    : "grid-cols-1",
            )}
          >
            {images.map((item, index) => {
              if (index > 4) return;

              return (
                <PropertyImage
                  key={index}
                  index={index}
                  setFullScreenImage={setFullScreenImage}
                  totalImage={images.length}
                  url={item}
                />
              );
            })}
          </div>

          <div className="aspect-[331/321] relative rounded-md sm:hidden overflow-hidden">
            <Image
              fill
              alt="Shortlet property image"
              className="object-cover object-center"
              src={images[0]}
            />
            <button
              className="bg-[#F4F4F4]/80 rounded-lg items-center px-5 py-3 gap-4 flex absolute right-4 bottom-4"
              onClick={() => setFullScreenImage(1)}
            >
              <ImageIcon /> Gallery
            </button>
          </div>

          <div className="py-12 text-grey-200 flex gap-10 lg:gap-40 relative">
            <article className="text-grey-200 flex-1">
              <div>
                <h4 className="mb-6">About Us</h4>

                <h5 className="text-lg mb-6 font-medium text-grey">{descriptionTitle}</h5>
                <div
                  dangerouslySetInnerHTML={{__html: description}}
                  className="leading-loose mb-8"
                />

                <h5 className="text-lg  md:mb-6 font-medium text-grey">Amenities</h5>
                <ul className="sm:grid grid-rows-3 grid-flow-col gap-6 py-3">
                  {amenities.map((item, index) => {
                    return (
                      <li key={index} className="py-3 sm:py-0 flex items-center gap-2">
                        <CheckCheck size={18} /> {item}
                      </li>
                    );
                  })}
                </ul>

                {video?.length ? <PropertyVideos src={video[0]} /> : null}

                {property_terms && (
                  <div className="pt-10">
                    <h5 className="text-lg mb-6 font-medium text-grey">Property Terms</h5>
                    <div
                      dangerouslySetInnerHTML={{__html: property_terms}}
                      className="leading-loose mb-8"
                    />
                  </div>
                )}

                {coordinate?.length ? (
                  <div className="pt-10">
                    <h5 className="text-lg  md:mb-6 font-medium text-grey">Property Location</h5>
                    <div className="h-80">
                      <SingleMap posix={[coordinate[0], coordinate[1]]} />
                    </div>
                  </div>
                ) : null}
              </div>

              <BookingCard
                cautionFee={cautionFee}
                className="md:hidden my-16"
                cost={cost}
                label={label}
                ownerId={ownerId}
              />

              <div className="pt-12">
                <h5 className="text-lg mb-2 font-medium text-grey">Share</h5>
                <ShareButtons postUrl={postUrl} title={title} />
              </div>

              <div className="pt-12">
                <h4 className="mb-6">Reviews & Ratings</h4>

                <h5 className="text-lg mb-6 font-medium text-grey">
                  Our Guest Reviews & Ratings for {title}
                </h5>

                <ul>
                  {reviews.map((item, index) => {
                    return (
                      <ReviewCard
                        key={index}
                        image={item.client.profile_image}
                        name={item.name}
                        rating={item.rating}
                        text={item.review_text}
                      />
                    );
                  })}
                </ul>
                {reviews.length === 0 && <p className="py-10 italic text-center">No review yet</p>}
              </div>
            </article>

            <BookingCard
              cautionFee={cautionFee}
              className="hidden md:block sticky top-0 right-0"
              cost={cost}
              label={label}
              ownerId={ownerId}
            />
          </div>
        </div>
        {fullScreenImage !== null && (
          <div
            {...handlers}
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          >
            <div className="absolute top-0 left-0 px-4 py-2 flex justify-between items-center w-full text-white">
              <span className="text-sm">
                {fullScreenImage}/{images.length}
              </span>
              <button className="text-2xl" onClick={closeFullScreen}>
                ✖
              </button>
            </div>
            <div className="flex justify-between w-full left-0 top-1/2 -translate-y-1/2 absolute  px-2 md:px-4">
              <button
                className="h-8 sm:h-10 w-8 sm:w-10 bg-black/30 hover:bg-black/50 grid place-content-center disabled:cursor-not-allowed disabled:hover:bg-black/30"
                disabled={fullScreenImage === 1}
                onClick={prevImage}
              >
                <ChevronLeft color="#FFF" size={24} />
              </button>
              <button
                className="h-8 sm:h-10 w-8 sm:w-10 bg-black/30 hover:bg-black/50 grid place-content-center disabled:cursor-not-allowed disabled:hover:bg-black/30"
                disabled={fullScreenImage === images.length}
                onClick={nextImage}
              >
                <ChevronRight color="#FFF" size={24} />
              </button>
            </div>
            <div className="w-[95%] sm:w-[80%] h-[80%] rounded-lg relative">
              <Image
                fill
                alt={`Property`}
                className="object-contain"
                src={images[fullScreenImage - 1]}
              />
            </div>
          </div>
        )}
      </Wrapper>
    </main>
  );
}

function BookingCard({
  className,
  cost,
  label,
  cautionFee,
  ownerId,
}: {
  className: string;
  cost: number;
  label: "Guest" | "Team";
  cautionFee: number | undefined;
  ownerId: string;
}) {
  const pathname = usePathname();
  const {mutateAsync: getRoom, isPending} = useGetChatRoom();
  const {User} = useUser();
  const router = useRouter();
  const pathName = usePathname();

  const chatOwner = async () => {
    const userId = User?._id;

    if (User?.role === "business") return toast.error("Please use a client account");
    if (userId) {
      const result = await getRoom({
        clientId: userId,
        vendorId: ownerId,
      });

      router.push(`/account/messages/${result.data._id}`);
    } else {
      toast.error("You must login first");
      sessionStorage.setItem("redirectLink", pathName);
      router.push("/auth/client/signin");
    }
  };

  return (
    <div className={cn("sm:w-[310px] lg:w-[435px] shrink-0 space-y-5", className)}>
      <Link className="flex items-center group property-book gap-4" href={`${pathname}/booking`}>
        <CalendarDaysIcon />
        <span>Arrange a visit</span>

        <ArrowRight className="ml-auto group-hover:scale-150 transition-all" color="#205BF3" />
      </Link>

      <div className="property-book ">
        <p className="text-2xl font-bold text-[#443344] flex items-center gap-2">
          ₦ {cost.toLocaleString("en-Us")}{" "}
          <span className="text-[#333] text-xs font-normal">/night</span>
        </p>
        {cautionFee && (
          <div>
            <span className="text-[#443344]">
              Caution Fee: ₦{cautionFee.toLocaleString("en-Us")}
            </span>{" "}
            <span className="italic text-xs">Refundable</span>{" "}
          </div>
        )}
        <div>
          <BookShortlet showBtn label={label} />
        </div>
      </div>

      <button className="flex items-center group property-book gap-4 w-full" onClick={chatOwner}>
        <HandCoins />
        <span>Request Discount</span>

        <ArrowRight className="ml-auto group-hover:scale-150 transition-all" color="#205BF3" />
      </button>
    </div>
  );
}

function PropertyImage({
  url,
  totalImage,
  setFullScreenImage,
  index,
}: {
  url: string;
  totalImage: number;
  setFullScreenImage: Dispatch<SetStateAction<null | number>>;
  index: number;
}) {
  const router = useRouter();

  const handleImageClick = () => {
    router.push(`#gallery-${index + 1}`);
    setFullScreenImage(index + 1);
  };

  return (
    <div
      className={cn(
        "aspect-[300/255] group relative rounded-md first:rounded-lg overflow-hidden",
        totalImage >= 5 || totalImage === 3
          ? "first:col-span-2 first:row-span-2"
          : totalImage === 4
            ? "first:col-span-3 first:row-span-3"
            : null,
      )}
    >
      <Image
        fill
        alt="Shortlet property"
        className="object-cover object-center"
        src={url}
        onClick={handleImageClick}
      />
      {totalImage >= 5 && (
        <button
          className="bg-[#F4F4F4]/80 hover:bg-[#F4F4F4] rounded-lg items-center px-3 lg:px-5 py-2 lg:py-3 gap-4 hidden group-last:flex absolute right-2 md:right-3 lg:right-6 bottom-2 md:bottom-3 lg:lbottom-6"
          onClick={handleImageClick}
        >
          <ImageIcon /> Gallery (+{totalImage - 4})
        </button>
      )}
    </div>
  );
}

export default DetailsPage;
