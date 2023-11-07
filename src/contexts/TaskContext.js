import React, { useState, useContext, createContext } from 'react';

const TaskContext = createContext();

export const useTask = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

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