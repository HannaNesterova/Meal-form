
import { useState } from 'react';

import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';
import uuid from 'react-uuid';

function App() {
  const [text, setText] = useState([]);
  const [selectedDay, setSelectedDay] = useState(false);


  const handleAddBtn = () => {
    const newMeal ={
      title: 'Today is ...',
      id:uuid()
    }
    setText([newMeal, ...text])
}


const deleteDay = (mealId) => {
setText(text.filter(({id}) => id !== mealId))
}

const updateDay =(myUpdateMeal) => {
  const updatedMeal = text.map((itemMeal) => {
    if(itemMeal.id === myUpdateMeal.id){
      return myUpdateMeal;
    }
    return itemMeal;
  })
  setText(updatedMeal)
}

const getActiveMeal = () => {
  return text.find(({id}) => id === selectedDay) /// если убрать ID то работает форма,но это же не верно
}
    
  return (
    <div className='App'>
      <MyList handleAddBtn={handleAddBtn}
      text={text} 
      deleteDay={deleteDay}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}/>

      <MyMealsAndIngredients 
      selectedDay={getActiveMeal()}
      updateDay={updateDay}/>
    </div>
  );
}

export default App;
