import {Check, X} from "lucide-react";
import React, {useEffect} from "react";

import Wrapper from "./wrapper";

function BookingSuccess({isShown, close}: {isShown: boolean; close: () => void}) {
  useEffect(() => {
    if (isShown) {
      document.body.classList.add("overflow-hidden");
    }
  }, [isShown]);

  return (
    <>
      {isShown && (
        <Wrapper>
          <div className="bg-white p-6 rounded-lg z-10 relative">
            <button
              className="right-4 top-4 absolute h-9 w-9 grid place-content-center hover:bg-black/20 rounded-full"
              onClick={close}
            >
              <X color="#E94235" />
            </button>
            <div className="flex flex-col items-center gap-3 pb-5 w-56">
              <div className="bg-[#F4F7FE] p-5 w-fit rounded-full">
                <div className="bg-blue h-9 w-9 grid place-content-center rounded-full">
                  <Check color="#FFF" />
                </div>
              </div>

              <h4 className="text-grey-200 text-lg ">Request Sent</h4>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
}

export default BookingSuccess;
