import Contacts from "@/components/contacts/Contacts";
import Languages from "@/components/languages/Languages";
import Main from "@/components/main/Main";
import Projects from "@/components/projects/Projects";
import RemoteJob from "@/components/remoteJob/RemoteJob";
import { takeLanguages } from "@/service/lang";
import { getRepos } from "@/service/repos";
import style from "./styles.module.css";
import RootLayout from "@/layouts/RootLayout";
import { LINK_TYPE_ENUM } from "@/config/navigation";
import { ReactElement } from "react";

export default async function Page() {

  const repos = await getRepos()
  return (
    <main className={style.main}>
      <Main />
      <Languages languages={takeLanguages(repos.data)} />
      <Projects projects={repos.data} />
      <RemoteJob />
      <Contacts master='BASALOV ALEXSEY' />
    </main>
  )
}


Page.getLayout = function getLayout(page: ReactElement) {
  return (
      <RootLayout params={{ locale:'ru', type: LINK_TYPE_ENUM.SNEAKY }}>
          {page}
      </RootLayout>
  )
}
