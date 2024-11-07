import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MyRouter from './routes/MyRouter';

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    console.log("Axios worked")
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTasks(response.data)
      })
  }, [])

  useEffect(() => {
    console.log("Tasks changed", tasks[0])
  }, [tasks])


  return (
    <MyRouter />
  );
}

export default App;
