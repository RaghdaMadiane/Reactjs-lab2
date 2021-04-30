import React from 'react';
import Menu from './Menu';
import {Redirect} from "react-router-dom";
class App extends React.Component{

    constructor(){
        super();
		const token=localStorage.getItem("Token");
        let isLoggedIn=true
		if(token==null){
			console.log("isLoggedIn=false")
			isLoggedIn=false
		}
        this.state={
            tasks:[],
			isLoggedIn
        }
		
    }

    componentDidMount(){
        if(localStorage["tasks"]){
        let tasks = JSON.parse(localStorage["tasks"])
        this.setState({tasks:tasks})
        }
    }

    addTask=(task)=>{
        this.state.tasks.push(task);
        this.setState({tasks:this.state.tasks});
        this.saveToLocalStorage();
    }

    saveToLocalStorage=()=>{
        localStorage["tasks"] = JSON.stringify(this.state.tasks);
    }

    render(){
		
		if(this.state.isLoggedIn==false){
            return <Redirect to="/"/>
        }

        return <div>
            <Menu></Menu>
            <h1>tasks</h1>
            <DisplayTasks tasks={this.state.tasks} />
            <AddTask addTask={this.addTask} />
        </div>
    }

}


class AddTask extends React.Component{

    constructor(props){
        super();
        this.state={
            task:"",
            
        }
    }

    addTask=()=>{
        let task = {
           task:this.state.task,
            
        }

        this.props.addTask(task);
    }

  

    render(){
        return <div className="card w-70">
             <div className="card-footer">
            {this.state.error}<br/>
            Task: <input type="text" value={this.state.Task} onChange={(e)=>this.setState({task:e.target.value})} />
            
            
            <button onClick={this.addTask} className='btn btn-primary' >Add</button>
        </div>
</div>
    }
}


class DisplayTasks extends React.Component{
    render(){
        return <div>
            {this.props.tasks.length > 0 ?this.props.tasks.map((item)=>{
                return <DisplayTask task={item}  />
            }):"Empty"}
        </div>
    }
}

DisplayTasks.defaultProps={
    tasks:[]
}

class DisplayTask extends React.Component{
    render(){
        return <div className="card w-70">
<div className="card-body">
<div className="list-group list-group-flush">
            Task : {this.props.task.task} <br/>
         </div>
        </div>
</div>
    }
}


export default App;