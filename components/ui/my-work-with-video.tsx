import {roboto} from "@/app/fonts";
import Image from "next/image";

export function Video_Work() {
  return (
    <div className="flex gap-16 lg:flex-row  justify-between mb-20">
      <div className="w-2/5 py-16">
        <h2 className="text-[105px] font-semibold leading-[1.2em] mb-6">My<br/> Work</h2>
        <p className={` ${roboto.className} text-xl font-medium opacity-85 tracking-wider`}>
          Deployed scalable travel, event and telemedicine web and hybrid mobile
          apps using React SPA and PWA. Collaborated in 140+ projects with 50+
          clients all around the world. I am also interested in data analytics
          and visualization.
        </p>
      </div>
      <div className="w-3/5  relative flex min-h-full  ">
        <video
          width={850}
          preload="false"
          playsInline
          className="absolute  h-auto   min-w-[850px] -left-28 -top-12 "
          autoPlay
          muted
          loop
        >
          <source src="/video/out.webm" type="video/webm" />
        </video>
        <div className="absolute left-0 bottom-0 flex flex-col gap-4 tracking-wider">
          <Image
            width={124}
            height={200}
            src="/images/right-side-arrow.png"
            alt="arrow"
            className="ml-16"
          />
          <h3 className=" text-xl font-medium">Featured Project</h3>
          <h2 className={`${roboto.className} text-3xl `}>Tryotel App</h2>
          <button className={`${roboto.className} bg-[#9b37ff] rounded-sm px-5 py-3 font-light`}>View Project</button>
        </div>
      </div>
    </div>
  );
}
