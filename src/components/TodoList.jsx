import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const {items,clearList,handleDelete,handleEdit} = this.props
    return (
    <>
        
        
       

         <div class="right__side">
            <div class="search__bar">
              <form class="d-flex align-items-center justify-content-center">
                <input placeholder="Search Task" id="searchtextbox" />
              </form>
            </div>
            <ul className="to__do__list"> 
            {
              items.map(item => {
                return(
                  <TodoItem 
                  key ={item.id} 
                  title = {item.item} 
                  handleDelete = {() => handleDelete(item.id)}
                  handleEdit = {() => handleEdit(item.id)}
                  />

                )
              })
            }
            
            <div className='task__controls'>
                    <button id="clearlist" onClick={clearList}>
                        
                      <span>Clear list</span>
                    </button>

            </div>
        
        
            </ul>
            
         </div>

    </>
    )
  }
}
