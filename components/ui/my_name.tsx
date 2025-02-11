import { Roboto_Mono } from "next/font/google";
import { roboto } from "@/app/fonts";


export function MyName() {
  return (
    <>
      <h1 className="text-[12rem] font-bold text-center tracking-[2.2px] pb-6 leading-none ">UTKU BORA EFIL</h1>
      <p className={`text-[22px] ${roboto.className}`}>COMPUTER ENGINEER, FULL STACK WEB DEVELOPER.</p>
    </>
  );
}
