import Contacts from "@/components/contacts/Contacts";
import Languages from "@/components/languages/Languages";
import Portfolio from "@/components/main/Portfolio";
import Projects from "@/components/projects/Projects";
import RemoteJob from "@/components/remoteJob/RemoteJob";
import { takeLanguages } from "@/service/lang";
import { getRepos } from "@/service/repos";
import style from "./styles.module.css";

export default async function Page() {

  const repos = await getRepos()
  return (
    <main className={style.main}>
      <Portfolio />
      <Languages languages={takeLanguages(repos.data)} />
      <Projects projects={repos.data} />
      <RemoteJob />
      <Contacts master='BASALOV ALEXSEY' />
    </main>
  )
}
