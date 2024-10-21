import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Data = [
  {
    id: 1,
    name: 'Bertie Yates',
    age: 29,
    image: 'https://www.course-api.com/images/people/person-1.jpeg',
  },
  {
    id: 2,
    name: 'Hester Hogan',
    age: 32,
    image: 'https://www.course-api.com/images/people/person-2.jpeg',
  },
  {
    id: 3,
    name: 'Larry Little',
    age: 36,
    image: 'https://www.course-api.com/images/people/person-3.jpeg',
  },
  {
    id: 4,
    name: 'Sean Walsh',
    age: 34,
    image: 'https://www.course-api.com/images/people/person-4.jpeg',
  },
  {
    id: 5,
    name: 'Lola Gardner',
    age: 29,
    image: 'https://www.course-api.com/images/people/person-5.jpeg',
  },
];

function App() {

  const [friends, setFriends] = useState(Data);
  
 

  const ClearFunction = () => {
    setFriends([]);
  };

  const DeleteFunction = (ev) => {
    const selectedId = Number(ev.target.id); 
    const filteredFriends = friends.filter(friend => friend.id !== selectedId);
    setFriends(filteredFriends);
  }
  return (
    <div>
      <h1>{friends.length} Birthdays today</h1>
      {friends.map((friend) => (
        <div key={friend.id} className='friend-list'>
          <div className='picture'>
            <img src={friend.image} alt={friend.name} className='friend-picture' />
          </div>
          <div className='name-years'>
            <h2>{friend.name}</h2>
            <h4>{friend.age} years</h4>
          </div>
          <button 
            className='delete-item' 
            id={friend.id} 
            onClick={DeleteFunction}>
            Delete
          </button>
        </div>
      ))}
      <div className='clear-button-div'>
        <button className='Clear' onClick={ClearFunction}>
          Clear All
        </button>
      </div>
    </div>
  );
}


export default App




