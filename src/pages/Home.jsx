import icon1 from '../assets/img/scenario/scenario1.png';
import icon2 from '../assets/img/scenario/scenario2.png';
import icon3 from '../assets/img/scenario/scenario3.png';
import icon4 from '../assets/img/scenario/scenario4.png';
import icon5 from '../assets/img/scenario/scenario5.png';
import icon6 from '../assets/img/scenario/scenario6.png';
import icon7 from '../assets/img/scenario/scenario7.png';
import icon8 from '../assets/img/scenario/scenario8.png';
import icon9 from '../assets/img/scenario/scenario9.png';
import icon10 from '../assets/img/scenario/scenario10.png';
import icon11 from '../assets/img/scenario/scenario11.png';
import icon12 from '../assets/img/scenario/scenario12.png';
import icon13 from '../assets/img/scenario/scenario13.png';
import icon14 from '../assets/img/scenario/scenario14.png';
import icon15 from '../assets/img/scenario/scenario15.png';
import icon16 from '../assets/img/scenario/scenario16.png';
import icon17 from '../assets/img/scenario/scenario17.png';
import icon18 from '../assets/img/scenario/scenario18.png';
import icon19 from '../assets/img/scenario/scenario19.png';
import icon20 from '../assets/img/scenario/scenario20.png';
import icon21 from '../assets/img/scenario/scenario21.png';
import icon22 from '../assets/img/scenario/scenario22.png';
import icon23 from '../assets/img/scenario/scenario23.png';
import icon24 from '../assets/img/scenario/scenario24.png';
import icon25 from '../assets/img/scenario/scenario25.png';
import icon26 from '../assets/img/scenario/scenario26.png';
import icon27 from '../assets/img/scenario/scenario27.png';
import icon28 from '../assets/img/scenario/scenario28.png';
import icon29 from '../assets/img/scenario/scenario29.png';
import icon30 from '../assets/img/scenario/scenario30.png';

import ScenarioCard from "../components/scenarioCard";

const Home = () => {
  const homeData = [
    {
      icon: icon1,
      title: ["Young Professional,", <br/>, "Single, One Job"],
      link:"/scenario1",
      fontColor:"text-[#5D87FF]",
      bgColor: "bg-[#ECF2FF]"
    },
    {
      icon: icon2,
      title: ["Dual-Income No Kids", <br/>, "(DINK), Married"],
      link:"/scenario2",
      fontColor:"text-[#FFAE1F]",
      bgColor: "bg-[#FEF5E5]"
    },
    {
      icon: icon3,
      title: ["Single Parent with", <br/>, "Two Kids"],
      link:"/scenario3",
      fontColor:"text-[#49BEFF]",
      bgColor: "bg-[#E8F7FF]"
    },
    {
      icon: icon4,
      title: ["Married, Sole Earner,", <br/>, "Three Kids"],
      link:"/scenario4",
      fontColor:"text-[#FA896B]",
      bgColor: "bg-[#FBF2EF]"
    },
    {
      icon: icon5,
      title: ["High-Income Single,", <br/>, "Multiple Jobs"],
      link:"/scenario5",
      fontColor:"text-[#13DEB9]",
      bgColor: "bg-[#E6FFFA]"
    },
    {
      icon: icon6,
      title: ["Retired Couple,", <br/>, "Pension and Social", <br/>, "Security"],
      link:"/scenario6",
      fontColor:"text-[#539BFF]",
      bgColor: "bg-[#EBF3FE]"
    },
    {
      icon: icon7,
      title: ["Freelancer with", <br/>, "Variable Income"],
      link:"/scenario7",
      fontColor:"text-[#5D87FF]",
      bgColor: "bg-[#ECF2FF]"
    },
    {
      icon: icon8,
      title: ["Dual-Income No Kids", <br/>, "(DINK), Married"],
      link:"/scenario8",
      fontColor:"text-[#FFAE1F]",
      bgColor: "bg-[#FEF5E5]"
    },
    {
      icon: icon9,
      title: ["Married, One Working,", <br/>, "One Unemployed"],
      link:"/scenario9",
      fontColor:"text-[#49BEFF]",
      bgColor: "bg-[#E8F7FF]"
    },
    {
      icon: icon10,
      title: ["Single, High Earner,", <br/>, "Investment Income"],
      link:"/scenario10",
      fontColor:"text-[#FA896B]",
      bgColor: "bg-[#FBF2EF]"
    },
    {
      icon: icon11,
      title: ["College Student", <br/>, "Working Part-Time"],
      link:"/scenario11",
      fontColor:"text-[#13DEB9]",
      bgColor: "bg-[#E6FFFA]"
    },
    {
      icon: icon12,
      title: ["Married with Non", <br/>, "Working", <br/>, "Spouse, Two Kids"],
      link:"/scenario12",
      fontColor:"text-[#539BFF]",
      bgColor: "bg-[#EBF3FE]"
    },
    {
      icon: icon13,
      title: ["Divorced,", <br/>, "Paying Alimony"],
      link:"/scenario13",
      fontColor:"text-[#5D87FF]",
      bgColor: "bg-[#ECF2FF]"
    },
    {
      icon: icon14,
      title: ["Married, Both Part-", <br/>, "Time Jobs, One Child"],
      link:"/scenario14",
      fontColor:"text-[#FFAE1F]",
      bgColor: "bg-[#FEF5E5]"
    },
    {
      icon: icon15,
      title: ["Widowed Senior", <br/>, "with Fixed Income"],
      link:"/scenario15",
      fontColor:"text-[#49BEFF]",
      bgColor: "bg-[#E8F7FF]"
    },
    {
      icon: icon16,
      title: ["Young Couple,", <br/>, "Newly Married"],
      link:"/scenario16",
      fontColor:"text-[#FA896B]",
      bgColor: "bg-[#FBF2EF]"
    },
    {
      icon: icon17,
      title: ["Single, Owning", <br/>, "Rental Properties"],
      link:"/scenario17",
      fontColor:"text-[#13DEB9]",
      bgColor: "bg-[#E6FFFA]"
    },
    {
      icon: icon18,
      title: ["Married, One", <br/>, "Spouse Self", <br/>, "Employed"],
      link:"/scenario18",
      fontColor:"text-[#539BFF]",
      bgColor: "bg-[#EBF3FE]"
    },
    {
      icon: icon19,
      title: ["Immigrant on", <br/>, "Work Visa, Single "],
      link:"/scenario19",
      fontColor:"text-[#5D87FF]",
      bgColor: "bg-[#ECF2FF]"
    },
    {
      icon: icon20,
      title: ["Young Professional,", <br/>, "Paying Student Loans"],
      link:"/scenario20",
      fontColor:"text-[#FFAE1F]",
      bgColor: "bg-[#FEF5E5]"
    },
    {
      icon: icon21,
      title: ["Recent College", <br/>, "Graduate, First Job"],
      link:"/scenario21",
      fontColor:"text-[#49BEFF]",
      bgColor: "bg-[#E8F7FF]"
    },
    {
      icon: icon22,
      title: ["Married Couple,", <br/>, "Dual Income, No Kids"],
      link:"/scenario22",
      fontColor:"text-[#FA896B]",
      bgColor: "bg-[#FBF2EF]"
    },
    {
      icon: icon23,
      title: ["Single Parent", <br/>, "with Two Children"],
      link:"/scenario23",
      fontColor:"text-[#13DEB9]",
      bgColor: "bg-[#E6FFFA]"
    },
    {
      icon: icon24,
      title: ["High-Income Single", <br/>, "Professional "],
      link:"/scenario24",
      fontColor:"text-[#539BFF]",
      bgColor: "bg-[#EBF3FE]"
    },
    {
      icon: icon25,
      title: ["Retired Couple", <br/>, "with Pension and", <br/>, "Social Security"],
      link:"/scenario25",
      fontColor:"text-[#5D87FF]",
      bgColor: "bg-[#ECF2FF]"
    },
    {
      icon: icon26,
      title: ["Newly Married Couple,", <br/>, "Combining Finances"],
      link:"/scenario26",
      fontColor:"text-[#FFAE1F]",
      bgColor: "bg-[#FEF5E5]"
    },
    {
      icon: icon27,
      title: ["Single, Freelance", <br/>, "Graphic Designer"],
      link:"/scenario27",
      fontColor:"text-[#49BEFF]",
      bgColor: "bg-[#E8F7FF]"
    },
    {
      icon: icon28,
      title: ["Married with One", <br/>, "Spouse in School, One", <br/>, "Working"],
      link:"/scenario82",
      fontColor:"text-[#FA896B]",
      bgColor: "bg-[#FBF2EF]"
    },
    {
      icon: icon29,
      title: ["Divorced, Paying", <br/>, "Alimony, Two Kids"],
      link:"/scenario29",
      fontColor:"text-[#13DEB9]",
      bgColor: "bg-[#E6FFFA]"
    },
    {
      icon: icon30,
      title: ["Mid-Career Professional, ", <br/>, "Maximizing Retirement", <br/>, "Savings"],
      link:"/scenario30",
      fontColor:"text-[#539BFF]",
      bgColor: "bg-[#EBF3FE]"
    },
  ]





  return (
    <div className="h-full bg-[#EBF3FE] flex justify-center px-20 py-10">
      <div>
        <div className="text-xl text-[#333B54] font-semibold mb-6 text-center">Choose a scenario</div>
        <div className="bg-white m-auto text-center px-14 py-6 rounded-3xl">
          <div className="grid grid-cols-6 gap-4">
            {homeData.map((item, index) => (
              <ScenarioCard key={index}  icon={item.icon} title={item.title} link={item.link} fontColor={item.fontColor} bgColor={item.bgColor}/>
            ))} 
          </div>          
        </div>
      </div>  
    </div>
  )
}

export default Home;