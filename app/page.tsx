
import { Carousel } from "./carousels/Carousel";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">
      <div className="bg-gradient-to-br from-slate-500 to-violet-300 opacity-70">
        <Navbar />
        <Carousel/>
      </div>
    </div>
  );
}
