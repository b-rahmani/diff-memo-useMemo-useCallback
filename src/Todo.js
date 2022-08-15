import React from "react";
const Todo = ({ todos, addTodo }) => {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
          margin   :"0px",
      }}
    >
      {console.log("rerender todo")}
      <button onClick={addTodo}>add to do</button>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            width: "150px",
            height: "100px",
            backgroundColor: "#eeee",
            alignItems: "center",
          }}
        >
          <div>{todo.id}</div>
          <div>{todo.title}</div>
          {/* {alert("rerender")} */}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Todo);
// export default Todo;
//
