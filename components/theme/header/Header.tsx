import BurgerNavigation from "@/components/theme/burgerNavigation/BurgerNavigation"
import Navigation from "@/components/theme/navigation/Navigation"
import { LINKS, LINK_TYPE_ENUM, PRIVACY_TYPE_ENUM } from "@/config/navigation"
import { ILink } from "@/config/types"
import { getMe } from "@/service/me"
import style from "./styles.module.css"


const Header = async ({ linkType }: IProps) => {

	const user = await getMe();

	const permissions = [PRIVACY_TYPE_ENUM.PUBLIC]

	if (user) {
		permissions.push(PRIVACY_TYPE_ENUM.PRIVATE)
	}

	const links = LINKS[linkType]?.filter(link => permissions.includes(link.privacy_type)) as ILink[]

	return (
		<div className={style.header}>
			<Navigation links={links} />
			<BurgerNavigation links={links} />
		</div>
	)
}
export default Header


interface IProps {
	linkType: LINK_TYPE_ENUM
}