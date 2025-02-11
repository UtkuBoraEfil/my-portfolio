import { Work_Card } from "@/components/ui/work-card";

import img1 from "@/public/images/temp-works/ailabgranada.com-poster.jpg";
import img2 from "@/public/images/temp-works/all-the-roads-of-chittagong-cover.jpg";
import img3 from "@/public/images/temp-works/flighlocal-cover-image.jpg";
import img4 from "@/public/images/temp-works/kananaskis-nordic-spa-poster.jpg";
import img5 from "@/public/images/temp-works/khora-urban-thinkers-poster-r.jpg";
import img6 from "@/public/images/temp-works/tapy-co-poster (1).jpg";
import img7 from "@/public/images/temp-works/tryotel-b2c-cover.jpg";
import img8 from "@/public/images/temp-works/tryotel_ios_mockup-scaled.jpg";
import img9 from "@/public/images/temp-works/ailabgranada.com-poster.jpg";




export function MyWorks () {

  const works = [{
    title: "BNla bla Bla Bla asfkasdfsdahfjkasdhfkjasdhfjklhasd",
    image: img1,
    category: "Web Development",
    card_design: "type1",
  },
  {
    title: "All the Roads of Chittagong",
    image: img2,
    category: "Web Development",
    card_design: "type1",
  },
  {
    title: "Flight Local",
    image: img3,
    category: "Web Development",
    card_design: "type1",
  },
  {
    title: "Kananaskis Nordic Spa",
    image: img4,
    category: "Web Development",
    card_design: "type2",
  },
  {
    title: "Khora Urban Thinkers",
    image: img5,
    category: "Web Development",
    card_design: "type1",
  },
  {
    title: "Tapy Co",
    image: img6,
    category: "Web Development",
    card_design: "type1",
  },
  {
    title: "Tryotel B2C",
    image: img7,
    category: "Web Development",
    card_design: "type1",
  },
  {
    title: "Tryotel iOS Mockup",
    image: img8,
    category: "Web Development",
    card_design: "type1",
  },
  {
    title: "Ailabgranada.com",
    image: img9,
    category: "Web Development",
    card_design: "type2",
  }
]

  return (
    <div>
      <div className="flex justify-between items-center max-w-[1260px] mx-auto flex-wrap gap-5 ">
        {works.map((work, index) => (
         <Work_Card key={index} title={work.title} image={work.image} category={work.category} card_design={work.card_design}/>
        ))}
      </div>
      
    </div>
  );
};
