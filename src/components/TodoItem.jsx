import React, { Component } from 'react';


export default class TodoItem extends Component {
  render() {
      const {title,handleDelete,handleEdit} = this.props
    
    return (
        <>
            
            <li id="addedtasklist">
                
                <span className="icon" onClick={handleEdit}  ><i class="fa fa-pencil" ></i></span>
                <h6>{title}</h6>
                <span className="icon" onClick={handleDelete}  ><i class="fa fa-trash" ></i></span>
                
               
            </li>  
            


        </>
    )
  }
}
