import { getMe } from '@/service/me';
import { getTasks } from '@/service/tasks';
import { redirect } from 'next/navigation';
import Title from '../theme/title/Title';
import TasksList from './TasksList/TasksList';
import styles from './styles.module.css';

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
    </div>
  )
}

export default Tasks
