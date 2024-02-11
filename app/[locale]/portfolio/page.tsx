import Contacts from "@/modules/portfolio/contacts/Contacts";
import Languages from "@/modules/portfolio/languages/Languages";
import Greeting from "@/modules/portfolio/greeting/Greeting";
import Projects from "@/modules/portfolio/projects/Projects";
import RemoteJob from "@/modules/portfolio/remoteJob/RemoteJob";
import { takeLanguages } from "@/service/lang/lang";
import { getRepos } from "@/service/repos/repos";
import style from "./styles.module.css";

export default async function Page() {

  const repos = await getRepos()
  return (
    <main className={style.main}>
      <Greeting />
      <Languages languages={takeLanguages(repos.data)} />
      <Projects projects={repos.data} />
      <RemoteJob />
      <Contacts master='BASALOV ALEXSEY' />
    </main>
  )
}
