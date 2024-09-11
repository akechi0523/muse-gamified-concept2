import back from "../assets/img/icons/return-back-button.svg";

const ScenarioHeader = ({id, title}) => {
  return (
    <div className="relative w-full py-10 text-center">
      <div className="absolute top-10 left-20 cursor-pointer" onClick={() => window.history.back()}>
        <img src={back} alt="back" />
      </div>
      <div className="text-xl font-semibold text-[#4570EA] mb-2">
        Scenario {id} of 30
      </div>
      <div className="text-4xl font-bold">
        {title}
      </div>
    </div>
  )
}

export default ScenarioHeader;