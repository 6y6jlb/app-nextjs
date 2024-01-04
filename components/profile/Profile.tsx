import { getMe } from '@/service/me'
import styles from './styles.module.css'
import Properties from './Properties';
import { redirect } from 'next/navigation';
import Title from '../theme/title/Title';

const Profile = async () => {

  const user = await getMe();
  if (!user) {
    redirect('/auth')
  }

  return (
    <div className={styles.container}>
      <Title title-key='profile.title' />
      <Properties user={user} />
    </div>
  )
}

export default Profile
