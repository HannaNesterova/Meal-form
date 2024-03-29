
function MyList({handleAddBtn, text, deleteDay, selectedDay, setSelectedDay}){

    return(
        <div>
            <div>
                <h1>Weekly plan ideas:</h1>
                <button onClick={handleAddBtn} className="button-add">Add</button>
                <button className="button-remove">Delete</button>
                </div>

                <div>
                {text.map(({title, id}) => (
                    <div key={id} 
                    className={`meal ${id === selectedDay ? "selected" : "nonselected"}`}
                    onClick={() => setSelectedDay(id)}>
                        <p  className="textMeal">{title}</p>
                        <button className="button-remove" onClick={() => deleteDay(id)}>Delete</button>
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default MyList;