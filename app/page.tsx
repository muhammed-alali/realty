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
        phoneNumber="05368192660"
        accountName="Home Lengo"
        statusMessage="Connected"
        chatMessage="Hello, I have a question about the house."
        avatar="/photo/favicon.ico"
      />
    </>
  );
}
