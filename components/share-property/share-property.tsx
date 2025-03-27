"use client";

import Image from "next/image";
import {Share2} from "lucide-react";

import facebook from "../../public/socials/facebook.jpg";
import whatsapp from "../../public/socials/whatsapp-1.jpg";
import x from "../../public/socials/x.jpg";

const ShareButtons = ({postUrl, title}: {postUrl: string; title: string}) => {
  return (
    <div className="flex space-x-3 mt-4 items-center">
      <a
        className="text-blue-600"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image alt="Facebook icon" height={24} src={facebook} width={24} />
      </a>

      <a
        className="text-blue-400"
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(title)}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image alt="X or Twitter icon" height={24} src={x} width={24} />
      </a>

      <a
        className="text-green-500"
        href={`https://wa.me/?text=${encodeURIComponent(title + " " + postUrl)}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image alt="Face icon" height={24} src={whatsapp} width={24} />
      </a>

      <button
        className="bg-gray-800 grid place-content-center h-6 w-6 rounded-md"
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: "Check out my property on spacefinda",
              url: postUrl,
            });
          }
        }}
      >
        <Share2 color="#FFF" size={16} />
      </button>
    </div>
  );
};

export default ShareButtons;
