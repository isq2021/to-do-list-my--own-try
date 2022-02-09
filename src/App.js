import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { v4 as uuid } from 'uuid';





class App extends Component {
  constructor() {
    super();
  
    this.state = {
      items: [],
      id: uuid(),
      item: '',
      editItem:false,
      isDone:false,
      completed: [],
      uncompleted:[]

    };
  }

  handleCompleted = () =>{
    const filteredCompleted = this.state.items.filter(item => item.isDone)
    
    this.setState({
      completed:filteredCompleted

    })

    

  }
  
 
  

  handleAddTaskButton = async (e) =>{
    e.preventDefault()

     const newItem = {
      id:this.state.id,
      item:this.state.item,
      isDone:false
    }
    

     const updatedItems = [...this.state.items,newItem];


     await this.setState({
      items:updatedItems,
      item: "",
      id:uuid(),
      editItem:false
      
    })
    localStorage.setItem("items",JSON.stringify(this.state.items))

    
    
   

  }

  



  handleChange =(e)=>{
    this.setState({
      item:e.target.value});

  }

  clearList =() =>{
    this.setState({
      items: []
    })
    localStorage.clear()
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


  checkIsDone=(id) =>{
    const result = this.state.items.map((item) => {
      if (item.id === id) {
          item.isDone = !item.isDone;
      }
      return item;
  });
   this.setState({items:result});
   
  
    

  }

  componentDidMount = () =>{
    const items = localStorage.getItem('items')
    if(items) {
      const savedItems = JSON.parse(items)
      this.setState({
        items : savedItems
      })

    }else {
      console.log('no items')

    }
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
        handleCompleted ={this.handleCompleted}
         />
        <TodoList 
        items = {this.state.items}
        clearList ={this.clearList}
        handleDelete = {this.handleDelete}
        handleEdit = {this.handleEdit}
        checkIsDone = {this.checkIsDone}
        handleCompleted ={this.handleCompleted}
        completedItems = {this.state.completed}
        isDone ={this.state.isDone}
        
        

        />
        
        
        
        
        
      </div>
      
      </>
      
    );
  }
}

export default App;