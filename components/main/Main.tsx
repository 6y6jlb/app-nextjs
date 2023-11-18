import { useTranslations } from "next-intl";
import style from "./styles.module.css";

const Main = () => {
	const t = useTranslations("common");

	const sneakyRedirect = () => {

	}


	return (
		<div id={"common"} className={style.main}>
			<div className={`main-container ${style.container}`}>
				<p className={style.description}>{t('main.description')}</p>
				<p className={style.typing}>{t('typing.i')}&nbsp;{t('typing.frontend')}/{t('typing.backend')}/{t('typing.fullstack')}&nbsp;{t('typing.developer')}</p>
				<div className={style.block}></div>
			</div>
		</div>
	)
}
export default Main
