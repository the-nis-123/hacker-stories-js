import * as React from 'react';

// const title = "React";
// const welcome = {
//   greeting: "Hey",
//    title: "React",
// };

// function getTitle(title) {
//   return title;
// };

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Lordan walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


//Search Component
const Search = () => {
  return(
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
  </div>  
)}

//list item
const ListItem = ({item}) => {
  return(
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
)}


//List Component
const List = () => {
  return(
  <ul>
    { list.map( item => <ListItem key={item.objectID} item={item}/> ) }
  </ul>
)}


function App() {
  return (
  <div style={{ textAlign: 'center' }}>
    <h1>My Hacker Stories </h1>
    <Search />
    <hr />
    <List />
  </div>
  );
}

export default App;
