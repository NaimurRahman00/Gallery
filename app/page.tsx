
import { Carousel } from "./carousels/Carousel";
import Navbar from "./components/Navbar";
import Movies from "./ui/movies/Movies";

export default function Home() {
  return (
    <div className="">
      <div className="bg-gradient-to-br from-slate-700 to-[#1e2028]">
        <Navbar />
        <Carousel/>
        <Movies/>
      </div>
    </div>
  );
}
