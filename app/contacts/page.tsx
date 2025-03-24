import Image from "next/image";
import React from "react";
import { İletişimİtem } from "./item";
import Map from "./map/page";
export default function İletişim() {
  return (
    <div className="py-[100px] ">
      <div className="grid grid-cols-12 gap-12 container mx-auto">
        <div className="col-span-4 bg-[rgb(171_199_243/80%)] rounded-lg h-fit py-[40px] pl-[40px] pr-[20px]">
          <h2 className="mb-5 text-[25px] font-medium text-Title">
            Get In Touch
          </h2>
          {İletişimİtem.map((item) => {
            return (
              <>
                <div className="flex gap-4 mt-[30px]">
                  <div>
                    {" "}
                    <div className="py-[18px]  bg-SiteColor  w-16 h-16 rounded-[50%] hover:shadow-[6px_6px_13px_0_rgba(0,0,0,0.15)] duration-300">
                      <span className="text-[27px] flex justify-center text-white ">
                        {item.icon}
                      </span>
                    </div>
                  </div>
                  <div className="my-auto">
                    <h6 className="text-[16px] font-medium pt-[6px] mb-[6px] text-Title ">
                      {item.title}
                    </h6>
                    <p className="text-[14px] font-normal  text-[rgb(62_62_62/95%)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="col-span-7">
          <Image
            src={"/photo/image-contacts.png"}
            alt=""
            height="878"
            width="849"
          ></Image>
        </div>
      </div>
      <Map />
    </div>
  );
}

{
  /* <div>
            <span className="border border-SiteColor text-SiteColor mt-4  text-[11px] leading-4 bg-[#b2cedb]  rounded-xl font-bold py-[4px] px-[10px] ">
              İLETIŞIM
            </span>
            <h1 className="font-bold xs:text-[27px] md:!text-[36px] text-Title mb-5">
              Bizler ile İletişime Geçin
            </h1>
            <p className="text-[16px] font-normal mb-5 text-Desc">
              Hizmetlerimiz ve Eğitimlerimiz ile ilgili daha detaylı bilgi alın
            </p>
          </div> */
}
