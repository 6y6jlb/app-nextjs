import Contacts from "@/components/contacts/Contacts";
import Languages from "@/components/languages/Languages";
import Main from "@/components/main/Main";
import Projects from "@/components/projects/Projects";
import RemoteJob from "@/components/remoteJob/RemoteJob";
import style from "./styles.module.css"

export default function Home() {
  return (
    <main className={style.main}>
      <Main />
      <Languages />
      <Projects />
      <RemoteJob/>
      <Contacts/>
    </main>
  )
}
