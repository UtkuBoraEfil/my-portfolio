import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export function MyName() {
  return (
    <>
      <h1 className="text-9xl font-bold text-center tracking-[2.2px] pb-6 ">UTKU BORA EFIL</h1>
      <p className={`text-[22px] ${robotoMono.className}`}>COMPUTER ENGINEER, FULL STACK WEB DEVELOPER.</p>
    </>
  );
}
