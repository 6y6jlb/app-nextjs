import React from "react"
import style from "./styles.module.css"
import Navigation from "../navigation/Navigation"
import BurgerNavigation from "../burgerNavigation/BurgerNavigation"


const Header = () => {
	return (
		<div className={style.header}>
			<Navigation />
			<BurgerNavigation />
		</div>
	)
}
export default Header
