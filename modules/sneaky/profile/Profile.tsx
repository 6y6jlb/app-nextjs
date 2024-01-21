import Title from '@/modules/common/theme/title/Title';
import { getMe } from '@/service/me';
import { redirect } from 'next/navigation';
import Content from './content/Content';
import styles from './styles.module.css';

const Profile = async () => {

  const user = await getMe();
  if (!user) {
    redirect('/auth')
  }

  return (
    <div className={styles.container}>
      <Title title-key='profile.title' />
      <Content user={user} />
    </div>
  )
}

export default Profile
