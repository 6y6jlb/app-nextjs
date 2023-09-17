
import { useTranslations } from "next-intl"
import Title from "../title/Title"
import style from "./styles.module.css"

const Contacts = () => {
	const t = useTranslations("common");
	const onSubmit = (e:any) => {
		e.preventDefault()
		// feedbackStore.send()
	}

	return (
		<div id={"contact"} className={style.contactsBlock}>
				<div className={`main-container ${style.container}`} >
					{true && (
						<div className={style.modal}>
							<div className={style.modalText}>
							{t('notification.feedback.sended')}
							</div>
						</div>
					)}
					<Title title-key="contacts.title" />
					{/* <form onSubmit={onSubmit} className={style.form} action="form">
						<label id={"contacts"}></label>
						<input
							onChange={(e) => feedbackStore.update("senderContacts", e.currentTarget.value)}
							placeholder={"contacts/email/phone"}
							name={"contacts"}
							value={feedbackStore.data.senderContacts}
							type="text"
							className={`${style.rounded} ${style.padding} `}
						/>
						<label id={"name"}></label>
						<input
							onChange={(e) => feedbackStore.update("senderName", e.currentTarget.value)}
							placeholder={"name"}
							name={"name"}
							value={feedbackStore.data.senderName}
							type="text"
							className={`${style.rounded} ${style.padding} `}
						/>
						<textarea
							placeholder={"message"}
							onChange={(e) => feedbackStore.update("body", e.currentTarget.value)}
							value={feedbackStore.data.body}
							className={`${style.rounded} ${style.textArea} ${style.padding} `}
						/>
						<button
							disabled={!feedbackStore.canBeSubmit()}
							className={`${style.rounded} ${style.button} ${style.padding} ${
								!feedbackStore.canBeSubmit() ? style.buttonActive : ""
							}`}
						>
							<FormattedMessage id="buttons.save" />
						</button>
					</form> */}
				</div>
		</div>
	)
}
export default Contacts
