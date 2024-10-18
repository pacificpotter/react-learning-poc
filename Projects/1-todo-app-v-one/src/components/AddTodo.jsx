import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            onChange={handleNameChange}
            value={todoName}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={handleDateChange}
            value={dueDate}
          ></input>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
