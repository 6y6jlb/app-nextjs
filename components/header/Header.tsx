import { LINKS, LINK_TYPE_ENUM } from "@/config/navigation"
import { ILink } from "@/config/types"
import BurgerNavigation from "../burgerNavigation/BurgerNavigation"
import Navigation from "../navigation/Navigation"
import style from "./styles.module.css"


const Header = ({linkType}: IProps) => {

	

	return (
		<div className={style.header}>
			<Navigation links={LINKS[linkType] as ILink[]}/>
			<BurgerNavigation links={LINKS[linkType] as ILink[]}/>
		</div>
	)
}
export default Header


interface IProps {
	linkType: LINK_TYPE_ENUM
}