import React, { useState, useContext, createContext, useEffect } from 'react';

const TaskContext = createContext();

export const useTask = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Llamada a la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error al obtener tareas:', error);
      }
    };

    fetchData();
  }, []); 

  // Función para cambiar el estado de la tarea
  const updateTaskStatus = (taskId, completed) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};
