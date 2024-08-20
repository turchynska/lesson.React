// import initialTask from '../../tack.json'
// import Form from '../Form/From'
// import Filter from '../Filter/Filter'
// import TaskList from '../TaskList/TaskList'
// import css from './App.module.css'
// import {useState} from 'react'


// export default function App() {
//     const [tasks, setTasks] = useState(initialTask);
//     const [filter, setFilter] = useState('');
  
//     const addTask = (newTask) => {//масив таксків на момент оновлення
//       setTasks((prevTasks) => {
//         return [...prevTasks, newTask];//розпилюємо старий масив і додаємо новий
//       });
//     };
  
//     const deleteTask = (taskId) => {
//       setTasks((prevTasks) => {
//         return prevTasks.filter((task) => task.id !== taskId);
//       });
//     };
  
//     const visibleTasks = tasks.filter((task) =>
//       task.text.toLowerCase().includes(filter.toLowerCase())
//     );
  
//     return (
//       <div className={css.container}>
//         <Form onAdd={addTask} />
//         <Filter value={filter} onFilter={setFilter} />
//         <TaskList tasks={visibleTasks} onDelete={deleteTask} />
//       </div>
//     );
//   }