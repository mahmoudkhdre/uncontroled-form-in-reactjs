import React,{Component} from 'react';



  class App extends Component{
    state={
      name:'',
      pass:''
    }
    handleChange=(event)=> {
       const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
 
  
   event.preventDefault();
  
   
}
handleSubmit = (event)=>{
  

alert(` your name is ${this.state.name} and you pass is${this.state.pass}`);
 event.preventDefault();
 
}
    render(){
 return (
    
      <form onSubmit={this.handleSubmit}>
     <input type="text" name="name" id="name" value={this.state.name} placeholder="username"
    onChange={this.handleChange}/>
    <input type="text" name="pass" id="pass" value={this.state.pass} placeholder="password"
    onChange={this.handleChange}/>

    <button type="submit" color="primary"> login</button>
    </form>
    
    
  );
    }
  }
 


export default App;
