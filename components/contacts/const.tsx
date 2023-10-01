import { faEnvelopeOpen, faMapMarkerAlt, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



import Image from 'next/image'
 

export const contacts = [
	{ item: <FontAwesomeIcon icon={faEnvelopeOpen}/>, title: "mail", link: "mailto:6y6jl@gmail.com" },
	{ item: <FontAwesomeIcon icon={faPaperPlane}/>, title: "tg", link: "https://t.me/qwertybro" },
	{
		item: <FontAwesomeIcon icon={faMapMarkerAlt}/>,
		title: "place",
		link: "https://www.google.ru/maps/place/%D0%94%D0%BE%D0%BB%D0%B3%D0%BE%D0%BF%D1%80%D1%83%D0%B4%D0%BD%D1%8B%D0%B9,+%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB./@55.9478723,37.4280179,12z/data=!3m1!4b1!4m5!3m4!1s0x46b53bd7a745d0eb:0x307afaf3fbe15b15!8m2!3d55.947064!4d37.4992755",
	},
	{ item: <FontAwesomeIcon icon={faPhone}/>, title: "phone", link: "tel:+79254489116" },
	{ item: <Image src="/assets/icons/linkedin.svg" alt="linkedin" width="34" height="34" />, title: "linkedIn", link: "https://www.linkedin.com/in/alexey-basalov-329bb420a/" },
	{ item: <Image src="/assets/icons/github.svg" alt="github" width="34" height="34" />, title: "gitHub", link: "https://github.com/6y6jlb" },
	{ item: <Image src="/assets/icons/codewars.svg" alt="codewars" width="34" height="34" />, title: "codeWars", link: "https://www.codewars.com/users/6y6jlb" },
]