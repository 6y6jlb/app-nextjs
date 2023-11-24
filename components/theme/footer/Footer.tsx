import moment from "moment"
import style from "./styles.module.css"


const Footer = (props: any) => {
	return (
		<div className={style.container}>
			<div className={style.description}>{moment().year()}</div>
		</div>
	)
}
export default Footer
