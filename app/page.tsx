import { Hero } from "@/components/hero";
import { Expertise } from "@/components/expertise";
import { MyWorks } from "@/components/my-works";

export default function Home() {
  return (
    <main>
    <div className="w-full h-screen ">
        <Hero/>
    </div>
    <div className=" px-[50px] pt-32 pb-96">
      <Expertise/>
      <MyWorks/>
    </div>
  </main>
  );
}
