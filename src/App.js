import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { v4 as uuid } from 'uuid';





class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      items: [],
      id: uuid(),
      item: '',
      editItem:false
    };
  }

  handleAddTaskButton = e =>{
    e.preventDefault()

    const newItem = {
      id:this.state.id,
      item:this.state.item
    }

    const updatedItems = [...this.state.items,newItem];

    this.setState({
      items:updatedItems,
      item: "",
      id:uuid(),
      editItem:false
    })
   

  }
  handleChange =(e)=>{
    this.setState({
      item:e.target.value});

  }

  clearList =() =>{
    this.setState({
      items: []
    })
  }

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !==id)
    this.setState({
      items:filteredItems
    })

  }

  handleEdit = id =>{
    const filteredItems = this.state.items.filter(item => item.id !==id)

    const selectedItem = this.state.items.find(item => item.id === id)



    this.setState({
      items:filteredItems,
      item: selectedItem.item,
      editItem: true,
      id:id
      


    })
  }
 

  render() {
    return (
      <>
      <h1>Fenix</h1>
      <div id='app' className='position-absolute m-auto'>
        
       
        <TodoInput 
        item= {this.state.item}
        handleChange={this.handleChange}
        handleAddTaskButton = {this.handleAddTaskButton}
        editItem = {this.state.editItem}
         />
        <TodoList 
        items = {this.state.items}
        clearList ={this.clearList}
        handleDelete = {this.handleDelete}
        handleEdit = {this.handleEdit}

        />
        
        
        
        
      </div>
      
      </>
      
    );
  }
}

export default App;