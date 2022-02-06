import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
      const {item,handleChange,handleAddTaskButton,editItem} = this.props


    return (
       <>

       <form className="
          left__side
          d-flex
          align-items-center
          justify-content-between
          flex-column
        " onSubmit={handleAddTaskButton} >
             <div className="task__input">
                    <input
                     type="text"
                      placeholder="Enter Task" 
                      id="addtaskinput"
                       autofocus="" 
                       value={item}
                       onChange = {handleChange}
                       required
                       />
                    
            </div>
            <div className='task__controls'>
                    <button
                     id="addtaskbtn"
                     className={editItem ? "addtaskbtnedit" : "addtaskbtn"}
                     >
                        <img src="https://raw.githubusercontent.com/bhupenderhere/to-do-list-web-application/658cbe1ec20867d446ab3b919d52d4dbb5fa833b/images/svg/add.svg" alt="add" />
                        
                        <span> {editItem ? "Edit Task" : "Add Task"} </span>
                    </button>

            </div>

       </form>
           
       </>
        )
  }
    
    
}
