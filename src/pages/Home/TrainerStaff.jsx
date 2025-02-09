import { Instagram } from "lucide-react";
const staffData = [
  {
    image: "/assets/Trainers/photo.png",
    name: "abc",
    instagram: "abc",
  },
  {
    image: "/assets/Trainers/photo (1).png",
    name: "abc",
    instagram: "abc",
  },
  {
    image: "/assets/Trainers/photo.png",
    name: "abc",
    instagram: "abc",
  },
  {
    image: "/assets/Trainers/photo (1).png",
    name: "abc",
    instagram: "abc",
  },
  {
    image: "/assets/Trainers/photo.png",
    name: "abc",
    instagram: "abc",
  },
  {
    image: "/assets/Trainers/photo (1).png",
    name: "abc",
    instagram: "abc",
  },
];
const ProfileCard = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="text-white text-center text-3xl lg:text-5xl font-bold font-sans">
        Trainers Staff
      </div>
      <div className="mt-10 lg:mt-20">
        <div className="grid md:grid-cols-3 gap-5 lg:gap-10">
          {staffData.map((s, index) => {
            return (
              <div className="bg-zinc-800 rounded-2xl shadow-lg p-6 text-center relative group transition-all duration-300 hover:shadow-2xl border-2 border-white hover:border-amber-300" key={index}>
                {/* Profile Image */}
                <div className="flex flex-col">
                  <img
                    src={s.image}
                    alt="Profile"
                    // className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Bio */}
                <h2 className="mt-4 text-xl md:text-2xl font-semibold text-white">
                  John Doe
                </h2>

                {/* Social Media Links */}
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href="#"
                    className="text-white hover:text-blue-600 transition"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
