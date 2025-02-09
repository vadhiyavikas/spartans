import { Instagram, Facebook, Youtube } from "lucide-react";
import scrollToTop from "../scroll/Scroll";
const Footer = () => {
  return (
    <div className="bottom-0 bg-black w-full text-white min-h-10 grid md:grid-cols-3 gap-6 container mx-auto px-4 py-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 cursor-pointer max-sm:justify-center" onClick={scrollToTop}>
          <img
            src="src\assets\logos\updated-logo.png"
            width={72}
            className="rounded-full"
            alt="company-logo"
          />
          <p className="uppercase text-yellow-300 font-sans text-2xl font-bold">
            Spartans
          </p>
        </div>
        <div className="font-bold font-sans max-sm:text-center">
          Strength is the product of struggle, you must do what others don't to
          achieve what others won't
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-sans text-2xl font-bold max-sm:text-center">Address</p>
        <div className="flex flex-col gap-2 font-sans font-semibold max-sm:text-center">
          <p>
            Branch 1: <br />
            Sai Plaza Complex, Oop rajasthan bhavan, 6, Silvasa Rd, Harsh
            Co-Operative Housing Society Limited, Chanod Colony, GIDC, Vapi,
            Gujarat 396195
          </p>
          <p>
            Branch 2: <br /> Emperor tower, Daman Rd, above Italian bakery,
            Chala, Vapi, Gujarat 396195
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-sans text-2xl font-bold max-sm:text-center">Contact</p>
        <div className="max-sm:text-center">
          <a
            href="tel:+91 088663 38858"
            className="text-yellow-300 font-bold underline"
          >
            Call Us: +91 088663 38858
          </a>
          <div className="py-5 flex gap-3 max-sm:justify-center">
            <a href="https://www.instagram.com/spartansfitnessofficial/?hl=en" target="blank">
              <Instagram className="cursor-pointer" size={32} />
            </a>
            <Facebook className="cursor-pointer" size={32} />
            <Youtube className="cursor-pointer" size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
