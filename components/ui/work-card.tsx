import { StaticImageData } from "next/image";
import { spaceGrotesk } from "@/app/fonts";
import Image from "next/image";
import { Key } from "lucide-react";

interface WorkCardProps {
  keynum: number;
  title: string;
  image: StaticImageData;
  category: string;
  card_design: string;
}

export function Work_Card({
  keynum,
  title,
  image,
  category,
  card_design,
}: WorkCardProps) {
  return (
    <>
      {card_design === "type1" ? (
        <div className={`rounded-[5px]   overflow-hidden row-span-${keynum === 0 ? 2 : 3} col-span-1`}>
          <Image src={image} alt={title} width={380} height={285} className="w-full" />
          <div className="work-card-bg p-12">
            <h2
              className={`whitespace-nowrap overflow-hidden text-ellipsis leading-tight mb-[5px] text-2xl ${spaceGrotesk.className} font-bold`}
            >
              {title}
            </h2>
            <h4 className="text-sm opacity-50 ">{category}</h4>
          </div>
        </div>
      ) : (
        <div className="rounded-[5px] col-span-2 row-span-2 w-full h-full   overflow-hidden">
          <Image
            className="w-full "
            src={image}
            alt={title}
            width={380}
            height={285}
          />
          <div className="work-card-bg p-12">
            <h2
              className={`whitespace-nowrap overflow-hidden text-ellipsis leading-tight mb-[5px] text-2xl ${spaceGrotesk.className} font-bold`}
            >
              {title}
            </h2>
            <h4 className="text-sm opacity-50 ">{category}</h4>
          </div>
        </div>
      )}
    </>
  );
}
