

function MyMealsAndIngredients({selectedDay, updateDay}){

    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selectedDay,
            [myInput]: value
        })
    }

    if(!selectedDay) return <p className="notSelectedDay">Plan your week ahead of time!</p>
   
    return(
        <div className="whole-plan">
            <div className="meal-editing">
                <input 
                type="text"
                className="myInput"
                placeholder="Today is..."
                id='title'
                value={selectedDay.title}
                onChange={(e) => editMyMeal('title', e.target.value)}/>

                <textarea 
                placeholder="Type your text"/>

                <textarea 
                placeholder="List of ingredients" />
            </div>
            
        </div>
    )
}

export default MyMealsAndIngredients;