"use client";

import About from "@/components/home/about/index";
import Hero from "@/components/home/hero";
import TabsBodyCom from "@/components/home/tabsBody";
import HomeLocations from "@/components/home/homelocation";
import Solutions from "@/components/home/solutions";
import Blog from "@/components/home/blog";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TabsBodyCom />
      <HomeLocations />
      <Solutions />
      <Blog />
      <FloatingWhatsApp
        phoneNumber="+905368192660"
        accountName="Home Lengo"
        statusMessage="Connected"
        chatMessage="مرحباً يسرّنا خدمتكم فيما يخص بيع، شراء أو تأجير العقارات. يرجى تزويدنا بتفاصيل طلبكم وسيتم التواصل معكم في أقرب وقت ممكن."
        avatar="/photo/favicon.ico"
        chatboxHeight={380}
        chatboxClassName="!max-w-[calc(100%-10px)]"
      />
    </>
  );
}
