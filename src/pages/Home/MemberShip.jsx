import { CircleCheckBig } from "lucide-react";
const membershipData = [
  {
    title: "Pass 'Trial'",
    price: "Rs.0",
    details: [
      { key1: "Access to the gym from 8:00 to 14:00" },
      { key2: "The trainer on duty will introduce you to the gym" },
    ],
  },
  {
    title: "Pass 'Easy Start'",
    price: "Rs.9000",
    details: [
      { key1: "Visit without restriction 24/7" },
      { key2: "Individual training program" },
      { key3: "Access to the VTRAINER application" },
      { key3: "Trainer Support" },
    ],
  },
  {
    title: "Pass 'Trial'",
    price: "Rs.0",
    details: [
      { key1: "Access to the gym from 8:00 to 14:00" },
      { key2: "The trainer on duty will introduce you to the gym" },
    ],
  },
];
const MemberShipPage = () => {
  return (
    <div className="py-10 lg:py-16">
      <p className="text-center text-white text-3xl lg:text-5xl font-bold">
        Gym membership
      </p>
      <div className="my-20 grid md:grid-cols-3 gap-5">
        {membershipData.map((d, index) => {
          return (
            <div
              className="flex flex-col justify-between bg-zinc-800 p-6 rounded-2xl shadow-md transition-transform transform hover:scale-105 border-2 border-amber-50 hover:border-amber-300"
              key={index}
            >
              <div className="">
                <h2 className="text-xl font-semibold text-white text-center">
                  {d.title}
                </h2>
                <p className="text-white mt-2 text-center">{d.price}</p>
                {d.details &&
                  d.details.length &&
                  d.details.map((detail) => {
                    return (
                      <div className="text-white flex gap-2 my-2">
                        <CircleCheckBig />
                        {detail?.key1}
                        {detail?.key2}
                        {detail?.key3}
                      </div>
                    );
                  })}
              </div>
              <div className="text-center">
                <button className="bg-yellow-300 p-2 text-white rounded-3xl px-5 text-semibold cursor-pointer">
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemberShipPage;
