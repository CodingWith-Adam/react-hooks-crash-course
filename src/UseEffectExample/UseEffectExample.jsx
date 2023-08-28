import { useEffect, useState } from "react";
import ChatApi from "../ChatApi";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [completedTodoCount, setCompletedTodoCount] = useState(0);

  //Initialized - called once when component is created
  useEffect(() => {
    //network request to get data
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodoList(data));

    const chatApi = new ChatApi();
    chatApi.joinChat();
    return () => {
      //This will run when component is unmounted
      chatApi.leaveChat();
    };
  }, []);

  //Unmounted or removed - called once when component is removed

  //State Updates - called many times
  useEffect(() => {
    setCompletedTodoCount(todoList.filter((x) => x.completed).length);
  }, [todoList]);

  const handleChangeCompletedStatus = (todo) => {
    const todoListCopy = [...todoList];
    const todoIndex = todoListCopy.findIndex((item) => item.id === todo.id);
    const oldTodo = todoListCopy[todoIndex];
    todoListCopy[todoIndex] = { ...oldTodo, completed: !oldTodo.completed };
    setTodoList(todoListCopy);
  };
  return (
    <div>
      <span>Completed Items: {completedTodoCount}</span>
      <ol>
        {todoList?.map((todo) => (
          <li key={todo.id}>
            {todo.title} |{" "}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleChangeCompletedStatus(todo)}
            ></input>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
