'use client'
import { useTranslations } from "next-intl";
import style from "./styles.module.css";
import { useRouter } from "next/navigation";

const Greeting = () => {
	const t = useTranslations("common");
	const router = useRouter();

	const sneakyRedirect = () => {
		router.push('/weather')
	}


	return (
		<div id={"common"} className={`${style.main} background-face`}>
			<div className={`main-container ${style.container}`}>
				<p className={style.description}>{t('main.description')}</p>
				<p className={style.typing}>{t('typing.i')} {t('typing.frontend')}/ {t('typing.backend')}/ {t('typing.fullstack')} {t('typing.developer')}</p>
				<div onClick={sneakyRedirect} className={style.block}></div>
			</div>
		</div>
	)
}
export default Greeting
