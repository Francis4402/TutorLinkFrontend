import Image from "next/image";
import Link from "next/link";

const navRoutes = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Tutors",
    path: "/tutors"
  },
  {
    name: "Sessions",
    path: "/sessions"
  }
];

const Navbar = () => {
  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-5">
      <div className="rounded-full bg-white/80 w-full px-10 py-8 shadow-lg backdrop-blur-md">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-5">
          <Image 
            src={'https://r.mobirisesite.com/1252901/assets/images/g8a76ea9448036ea7c8e3e8556170-h_m7qbhjee.png'} 
            alt="logo" 
            width={50} 
            height={50} 
            className="rounded-full"
          />
          <p className="text-xl font-semibold">TurtorLink</p>
          </div>

          <div className="md:flex items-center lg:gap-20 gap-10 hidden">
            {navRoutes.map((route, index) => (
              <Link key={index} href={route.path} className="font-semibold text-xl">
                {route.name}
              </Link>
            ))}
            <button className="font-semibold bg-amber-400 text-white px-10 py-4 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
