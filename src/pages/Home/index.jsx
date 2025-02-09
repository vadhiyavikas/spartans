import AuthLayout from "../../components/layouts/AuthLayout";
import ReasonToJoin from "./ReasonToJoin";
import MemberShipPage from "./MemberShip";
import ProfileCard from "./TrainerStaff";
const HomePage = () => {
  return (
    <AuthLayout>
      <div className="text-white h-full grid md:grid-cols-2 gap-6 items-center py-10 lg:py-16">
        <div className="flex flex-col gap-6  text-center lg:text-left">
          <p className="text-3xl lg:text-5xl font-bold">
            {" "}
            Free trial session <br /> with a trainer
          </p>
          <div>
            <button className="bg-yellow-300 font-semibold p-1 lg:p-3 rounded-3xl w-1/3 lg:w-1/2 text-lg lg:text-xl cursor-pointer">
              Detailed
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="\assets\images\lovepik-gym-running-workout-picture_501311150.jpg"
            alt="trainer-image"
            className="rounded-3xl"
          />
        </div>
      </div>
      <ReasonToJoin />
      <MemberShipPage/>
      <ProfileCard/>
    </AuthLayout>
  );
};

export default HomePage;
