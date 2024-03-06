import { redirect } from 'next/navigation';
import TasksList from './tasksList/TasksList';
import styles from './styles.module.css';
import StoreButton from './storeButton/StoreButton';
import Title from '@/modules/common/theme/title/Title';
import { getTasks } from '@/service/task/tasks';
import { getMe } from '@/service/me/me';

const Tasks = async () => {

  const user = await getMe();
  if (!user) {
    redirect('/auth')
  }

  const tasks = await getTasks()

  return (
    <div className={styles.container}>
      <Title title-key='tasks.title' />
      <StoreButton notCreatedYet={!(tasks && tasks.length)} hasTelegramId={!!user.telegram_id} userId={user._id} />
      <TasksList tasks={tasks} />
    </div>
  )
}

export default Tasks
