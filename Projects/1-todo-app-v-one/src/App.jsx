import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2024",
    },
    {
      name: "Like this",
      dueDate: "4/10/2024",
    },
  ];
  return (
    <div>
      {/* <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center> */}
      <List />
    </div>
  );
}

export default App;
