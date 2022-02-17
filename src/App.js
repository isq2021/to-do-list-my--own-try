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
      isDone:false
      

    };
  }


/* take info from the input to the state */
  handleChange =(e)=>{
    this.setState({
      item:e.target.value});

  }
/* add task button function */
  handleAddTaskButton =  (e) =>{
    e.preventDefault()

     const newItem = {
      id:this.state.id,
      item:this.state.item,
      isDone:false
    }
    

     const updatedItems = [...this.state.items,newItem];


      this.setState({
      items:updatedItems,
      
      item: "",
      id:uuid(),
      editItem:false,
      
      
    })
     localStorage.setItem("items",JSON.stringify(this.state.items))

    
    
   

  }

/* delete task by id  */
  handleDelete = id => {
    
    
    const filteredItems = this.state.items.filter(item => item.id !==id)
    this.setState({
      items:filteredItems
    })
    localStorage.setItem("items",JSON.stringify(filteredItems))
    

  }


  /* edit each task*/

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
/*  button for completed */
  checkIsDone=(id) =>{
    const result = this.state.items.map((item) => {
      if (item.id === id) {
          item.isDone = !item.isDone;
      }
      return item;
  });
   this.setState({items:result});
   localStorage.setItem("items",JSON.stringify(this.state.items))
   
  
    

  }

/* clear all tasks  */
  clearList =() =>{
    this.setState({
      items: []
    })
    localStorage.clear()
  }

  /* search section */
  handleSearch =(e)=>{
    const searchText =  e.target.value.toLowerCase();
    const getForSearch = localStorage.getItem('items');
     const savedInfoForSearch = JSON.parse(getForSearch);
    const SearchResult = savedInfoForSearch.filter(e => {
      let searchFilter = e.item.toLowerCase()
      return searchFilter.indexOf(searchText) !== -1
    })
    this.setState({
     items : SearchResult
   })
    
    
 
 /* completed button */
   }

  handleCompleted = () =>{
    const comp = localStorage.getItem('items');
    const savedcomp = JSON.parse(comp);
    
    const compfiltered = savedcomp.filter(item => item.isDone===true);
    
   
    
    this.setState({
      items:compfiltered
      
      

    })

    

  }
  /* uncompleted button */

  handleUncompleted = () =>{
    const uncomp = localStorage.getItem('items');
    const savedUncomp = JSON.parse(uncomp);
    
    const uncompfiltered = savedUncomp.filter(item => item.isDone===false);
    
    this.setState({
      items:uncompfiltered
      

    })

    

  }
  /* show all button */
  handleAll =() => {
    const all = localStorage.getItem('items');
    const savedAll = JSON.parse(all);
    this.setState({
      items:savedAll
    })
  }
  
 
  

  

  



  
  


 

  /* componentDidMount = () =>{
    const items = localStorage.getItem('items')
    if(items) {
      const savedItems = JSON.parse(items)
      this.setState({
        items : savedItems
      })

    }else {
      console.log('no items')

    }
  } */

 
  


  render() {
    return (
      <>
      
      <div id='app' className='position-absolute m-auto'>
        
       
        <TodoInput 
        item= {this.state.item}
        handleChange={this.handleChange}
        handleAddTaskButton = {this.handleAddTaskButton}
        editItem = {this.state.editItem}
        handleCompleted ={this.handleCompleted}
        handleUncompleted ={this.handleUncompleted}
        handleAll ={this.handleAll}
        items={this.state.items}
        isDone ={this.state.isDone}
        
        
        
        
         />
        <TodoList 
        items = {this.state.items}
        clearList ={this.clearList}
        handleDelete = {this.handleDelete}
        handleEdit = {this.handleEdit}
        checkIsDone = {this.checkIsDone}
        
        

        isDone ={this.state.isDone}
        handleSearch ={this.handleSearch}
        
        
        

        />
        
        
        
        
        
      </div>
      
      </>
      
    );
  }
}

export default App;