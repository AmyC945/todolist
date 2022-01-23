import React, { Component } from 'react';
import './App.css';

class App extends Component {

 render() {

const list = ["Post Discussion", "Watch Lecture", "Do Assignment"]
const listItems = list.map((number) =>

   <li>{number}</li>
);
   return (

     <div className="App">
<div>
<h1>To-Do List</h1>
</div>
<div>
<ul className="myUL">
  {listItems}</ul>
</div><div>
  <form>
    <label>
      <input type="text" name="name" placeholder="New Item" />
    </label>
    <input type="submit" value="Add" />
  </form>
     </div></div>
   );
 }
}

export default App;
