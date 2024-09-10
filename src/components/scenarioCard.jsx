import icon from '../assets/img/scenario/scenario1.png'
import { Link } from 'react-router-dom';

const ScenarioCard = ({ icon, title , link, fontColor, bgColor}) => {
  return (
    <Link to={link} className="cursor-pointer">
      <div className={`min-w-[166px] h-[160px] ${bgColor} ${fontColor} font-semibold rounded-lg`}>
        <div className="h-1/2 flex justify-center items-end mb-3">
          <img src={icon} alt="icon" />
        </div>
        <div className='text-center text-xs'>{title}</div>
      </div>
    </Link>
  )
}

export default ScenarioCard;