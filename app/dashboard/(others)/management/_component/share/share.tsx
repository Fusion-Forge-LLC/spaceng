import {Copy, Share2} from "lucide-react";
import Image from "next/image";
import React from "react";
import {toast} from "sonner";

import ModalWrapper from "@/components/ui/modals/modal-wrapper";

import facebook from "../../../../../../public/socials/facebook.jpg";
import whatsapp from "../../../../../../public/socials/whatsapp-1.jpg";
import x from "../../../../../../public/socials/x.jpg";

function Share({title, type, id}: {title: string; type: string; id: string}) {
  const postUrl = typeof window !== "undefined" ? `${window.location.origin}/${type}/${id}` : "";

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(postUrl);
      toast.success("Url copy to clipboard");
    } catch (err) {
      toast.error("An error occured");
    }
  }

  return (
    <ModalWrapper
      title="Share"
      trigger={
        <button className="property-page-link text-blue w-full hover:bg-blue hover:text-white flex justify-center items-center gap-2">
          Share <Share2 size={16} />
        </button>
      }
    >
      <div className="max-w-72 sm:max-w-96 overflow-hidden">
        <div className="flex space-x-6 mt-4 items-center">
          <a
            className="text-blue-600"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image alt="Facebook icon" height={48} src={facebook} width={48} />
          </a>

          <a
            className="text-blue-400"
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(title)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image alt="X or Twitter icon" height={48} src={x} width={48} />
          </a>

          <a
            className="text-green-500"
            href={`https://wa.me/?text=${encodeURIComponent(title + " " + postUrl)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image alt="Face icon" height={48} src={whatsapp} width={48} />
          </a>

          <button
            className="bg-gray-800 grid place-content-center h-12 w-12 rounded-md"
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
        <div className="flex items-center overflow-hidden mt-4 border max-w-full">
          <div className="flex-1 overflow-hidden p-2 rounded whitespace-nowrap text-ellipsis">
            <span className="w-full overflow-hidden">{postUrl}</span>
          </div>
          <button className="bg-grey/10 flex items-center gap-2 p-2" onClick={copyToClipboard}>
            Copy Url <Copy />
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default Share;
