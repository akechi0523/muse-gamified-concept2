import logo from "../assets/img/icons/logo.svg";
const Header = () => {
  return (
    <div className="flex py-8 justify-center items-center border-b-[1px] border-[#EBF3FE] gap-4">
      <img src={logo} alt="logo" />
      <div className="text-2xl font-bold text-[#2A3547]">Mordernize</div>
    </div>
  )
}

export default Header;