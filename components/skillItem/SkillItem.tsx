import style from './Skill.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SkillItem = (props:any) => {
const active = props.active === props.skillTitle
   
//const newStyle = {fontSize: active?'68px':'60px'}


    return (
        <div  onMouseEnter={()=>props.setActive(props.skillTitle)} className={!active?style.skill:`${style.skill} ${style.active}`}>
                <div className={style.icon}>
                    <FontAwesomeIcon icon={props.icon}/>
                </div>
                <h4 className={style.title}>{props.skillTitle}</h4>
                {/*//for description place
                <p className={style.description}>{props.skillDescription}</p>*/}

            </div>
    )
}
export default SkillItem;