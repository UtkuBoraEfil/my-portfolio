import { Work_Card } from "@/components/ui/work-card";

import img1 from "@/public/images/temp-works/flighlocal-cover-image.jpg";
import img2 from "@/public/images/temp-works/ailabgranada.com-poster.jpg";
import img3 from "@/public/images/temp-works/khora-urban-thinkers-poster-r.jpg";
import img4 from "@/public/images/temp-works/tryotel_ios_mockup-scaled.jpg";
import img5 from "@/public/images/temp-works/tapy-co-poster (1).jpg";
import img6 from "@/public/images/temp-works/walkerip-com-poster.jpg";
import img7 from "@/public/images/temp-works/tryotel-b2c-cover.jpg";
import img8 from "@/public/images/temp-works/kananaskis-nordic-spa-poster.jpg";
import img9 from "@/public/images/temp-works/ahigherthought.com-poster.jpg";
import img10 from "@/public/images/temp-works/all-the-roads-of-chittagong-cover.jpg";

export function MyWorks() {
  const works = [
    {
      title: "Flighlocalfasdfasdfsdfsdfasdfasdfsdafasd",
      image: img1,
      category: "Web Design",
      card_design: "type1",
    },
    {
      title: "Ailab Granada",
      image: img2,
      category: "Poster Design",
      card_design: "type1",
    },
    {
      title: "Khora Urban Thinkers",
      image: img3,
      category: "Poster Design",
      card_design: "type1",
    },
    {
      title: "Tryotel iOS App",
      image: img4,
      category: "Mobile App Design",
      card_design: "type2",
    },
    {
      title: "Tapy & Co",
      image: img5,
      category: "Poster Design",
      card_design: "type1",
    },
    {
      title: "Walkerip",
      image: img6,
      category: "Poster Design",
      card_design: "type2",
    },
    {
      title: "Tryotel B2C",
      image: img7,
      category: "Web Design",
      card_design: "type1",
    },
    {
      title: "Kananaskis Nordic Spa",
      image: img8,
      category: "Poster Design",
      card_design: "type1",
    },
    {
      title: "A Higher Thought",
      image: img9,
      category: "Poster Design",
      card_design: "type1",
    },
    {
      title: "All The Roads of Chittagong",
      image: img10,
      category: "Book Cover Design",
      card_design: "type1",
    },
  ];

  const works_right = [works[2], works[4], works[6], works[7], works[9], ];
  const works_important = [works[3], works[5]];
  const works_left = [
    works[0],
    works[1],
    works[3],
    works[5],
    works[8],
    
  ];

  return (
    <div className=" max-w-[1220px] mx-auto ">
      <div className="flex pb-14 text-base text-[ffffffbf] opacity-80">
        <p>Filter by</p>
        <div className=" flex ">
          <button className="mx-4 relative hover:text-[#66d9ed] transition-all duration-500">All <span className="text-xs absolute -top-2 px-1">{works.length}</span></button>
          <p>/</p>
        </div>
        <div className="flex">
          <button className="mx-4 relative hover:text-[#66d9ed] transition-all duration-500">Data Visualization <span className="text-xs absolute -top-2 px-1">{works.length}</span></button>
          <p>/</p>
        </div>
        <div className="flex">
          <button className="mx-4 relative hover:text-[#66d9ed] transition-all duration-500">Web Development <span className="text-xs absolute -top-2 px-1">{works.length}</span></button>
        </div>

      </div>
      <div className="flex justify-center   gap-10 ">
        <div className="lg:flex-2/3   h-full">
          <div className="flex gap-10 flex-wrap flex-col lg:flex-row">
            {works_left.map((work, index) => (
              <Work_Card key={index} {...work} />
            ))}
          </div>
        </div>
        <div className="lg:flex-1/3  flex flex-col gap-10">
          {works_right.map((work, index) => (
            <Work_Card key={index} {...work} />
          ))}
        </div>
      </div>
    </div>
  );
}
