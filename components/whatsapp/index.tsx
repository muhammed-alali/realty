"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp() {
  return (
    <FloatingWhatsApp
      phoneNumber="+905368192660"
      accountName="Home Lengo"
      statusMessage="Connected"
      chatMessage="مرحباً يسرّنا خدمتكم فيما يخص بيع، شراء أو تأجير العقارات. يرجى تزويدنا بتفاصيل طلبكم وسيتم التواصل معكم في أقرب وقت ممكن."
      avatar="/photo/favicon.ico"
      chatboxHeight={380}
      chatboxClassName="!max-w-[calc(100%-10px)]"
    />
  );
}
