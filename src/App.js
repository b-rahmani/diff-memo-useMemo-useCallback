import { useState, useMemo, useCallback, useEffect } from "react";

import Todo from "./Todo";
import "./App.css";
export default function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState({ id: "", title: "" });
  const [todos, setTodos] = useState([]);


  const todoHandler = (e) => {
    setTodo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // setTodo(prev=>[...prev,{id:e.target.value}])
    // alert(e.target.name);
  };

    const word = count;
    const computeLetterCount = (word) => {
        console.log("calulating ...");
        let i = 0;
        while (i < 1000000000) i++;
        return word;
    };

  const addTodo = useCallback(() => {
    console.log("work add to do");
    if (Object.values(todo).some((el) => !el)) {
      Object.entries(todo).map(([key, value]) => {
        if (!value) {
          alert(`${key} is null`);
        }
      });
    } else {
      setTodos((prev) => [...prev, todo]);
      setTodo({ id: "", title: "" });
    }
  }, [todos, todo]);

    // Memoize computeLetterCount so it uses cached return value if input array ...
    // ... values are the same as last time the function was run.
    const letterCount = useMemo(() => computeLetterCount(word), [word]);


  return (
    <div className="App">
<h1>useCallback vs memo vs  useMemo test behavior</h1>
        <h6>open console and then test it</h6>
        <div className="box">
            <span>id : </span> <input type="text" name="id" onChange={todoHandler} value={todo.id} />
        </div>
<div className="box">
    <span>title : </span>
    <input
        type="text"
        name="title"
        onChange={todoHandler}
        value={todo.title}
    />
</div>

      <div >
          **
        when change count dont rerender todo component because react memo in
        todo component allow only rerender when depended on this component used
        but we pass callback function from child to parent for setSate and for
        this problem (rerender again ) useCallback to prevent extra state that
        not depended to child

          **
      </div>



        <div style={{margin:"30px"}}>
            and about useMemo =>   in body of component have expensive Calculation function  but memo my useMemo and this dependency add (count)
            this means only when count changed this expensive calculation runs ;
        </div>

      <h1> test in code </h1>

        <div className="divider">
            <div>
                <div className="flex">
                    <button onClick={() => setCount((prev) => prev + 1)}>increase count</button>
                    <button onClick={() => setCount((prev) => prev - 1)}>decrease count</button>
                </div>


                <div className="m-5">
                    count is :{count}
                </div>

            </div>
            <div >
                <Todo todos={todos} addTodo={addTodo} />
            </div>
            <div>
                <p style={{margin:0}}>letter count :</p>
                {letterCount}
            </div>
        </div>

    </div>
  );
}
