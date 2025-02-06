import { Hambuger } from "./ui/hamburger_menu";
import { Menu } from "./ui/mega_menu";

export function Navbar () {
  return (
    <div className="absolute px-10 py-14 w-full flex justify-center z-10">
        <Hambuger/>
      <h1 className=" text-3xl absolute left-10 ">Utku Bora </h1> 
        <Menu/>
    </div>
  );
};
