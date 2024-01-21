import { getMe } from '@/service/me';
import { getTasks } from '@/service/tasks';
import { redirect } from 'next/navigation';
import TasksList from './tasksList/TasksList';
import styles from './styles.module.css';
import StoreItem from './storeItem/StoreItem';
import Title from '@/modules/common/theme/title/Title';

const Tasks = async () => {

  const user = await getMe();
  if (!user) {
    redirect('/auth')
  }

  const tasks = await getTasks()

  return (
    <div className={styles.container}>
      <Title title-key='tasks.title' />
      <TasksList tasks={tasks} />
      <StoreItem notCreatedYet={!(tasks && tasks.length)} hasTelegramId={!!user.telegram_id} />
    </div>
  )
}

export default Tasks
