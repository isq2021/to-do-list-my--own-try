import React, { Component } from 'react';


export default class TodoItem extends Component {
    
    

  render() {
      const {title,handleDelete,handleEdit,checkIsDone} = this.props
      
      
      
    
    return (
        <>
           
            <li className = {this.props.item.isDone  ? "addtaskbtnedit" : "addtaskbtn"} >
                
                <span className="icon" onClick={handleEdit}  ><i class="fa fa-pencil" ></i></span>
                <span onClick={checkIsDone}   ><i class="fa fa-check" ></i></span>
                <h6 >{title}</h6>
                <span className="icon" onClick={handleDelete}  ><i class="fa fa-trash" ></i></span>
                
               
            </li>  
            
            
            


        </>
    )
    
  }
  
}
