const ReasonToJoin = () => {
  return (
    <div className="text-white py-10 lg:py-16">
      <p className="font-bold text-3xl lg:text-5xl font-sans text-center">Reasons To Join</p>
      <div className="grid md:grid-cols-2 gap-10 mt-10 lg:mt-20">
        <div className="flex gap-3">
          <img src="src\assets\images\icon_line.png" alt="scale-logo" className="min-w-[56px]"/>
          <div className="flex flex-col gap-2">
            <p className="font-sans font-bold">15000 sq.m.</p>
            <p>
              A specious gym for sports- safe distance between exercise machines
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <img src="src\assets\images\icon_ eqipment.png" alt="dumb-logo" className="max-w-[56px]"/>
          <div className="flex flex-col gap-2">
            <p className="font-sans font-bold">More than 200 equipment</p>
            <p>
              No queues at the simulators. Premium equipment from Lifestyle,
              Hammer Strength, TechnoGym
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <img src="src\assets\images\icon_ fitness zones.png" alt="equ-logo" />
          <div className="flex flex-col gap-2">
            <p className="font-sans font-bold">4 fitness zones</p>
            <p>
              From cardio to functional and cycle. Separate area for boxing and
              mixed martial arts
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <img src="src\assets\images\icon_time.png" alt="clock-logo" />
          <div className="flex flex-col gap-2">
            <p className="font-sans font-bold">Round-the-clock operation</p>
            <p>
              The Gym is open 24 hours a day, also works on all holidays and
              weekends
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonToJoin;
