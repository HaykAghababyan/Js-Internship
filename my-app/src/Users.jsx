import React, { Component } from 'react';
import Form from './Form';

class Users extends Component {
  


    constructor() {
    
        super();
        this.object = {
          "id":'',
          "balance":'',
          "picture":'',
          "age":'',
          "name":'',
          "gender":'',
          "company":'',
          "email":''
        };
        this.state = { users:[] };  
     
    }

    componentDidMount() {
       

        fetch("http://localhost:3001/users")
        .then( response => {
            
            if( response.ok ) {
                return response.json();
            }else  {
              throw new Error('Something went wrong on api server!');
            }
        })
        .then ( response => {
         
          this.setState({users:response});
       
         })
         .catch( error => {
          console.error(error);
          });
      }     

    deleteUser = (index) => {
    
        const newUsers = [...this.state.users];
        let item = newUsers.splice(index,1);
        

        fetch(`http://localhost:3001/users/${item[0].id}`, {
            method: 'DELETE'
        })
        .then(res => {
          if(res.ok){
            this.setState({users:newUsers});
            return res.json();
          }
        })
        .then(res => console.log(res))
    }

    editUser = () => {
       const newUsers = [...this.state.users];
       const newObject = {...this.object};
       newUsers.forEach( ( user, index ) => {
         if(user.id === this.object.id ) {

            newUsers.splice(index,1, newObject);
            fetch(`http://localhost:3001/users/${user.id}` ,{
              method: 'PUT',
              headers:{
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newObject)
          })
          .then(res => {
            if(res.ok){
              this.setState({users:newUsers});
              return res.json();
            }
          });
          
        }
      })
    }
    handleSubmit = (e) => {
        const newUsers = [...this.state.users];
        const newObject = {...this.object};
        newUsers.push(newObject);
        
        if(!this.object.id) { 
          console.log("please insert id"); 
          e.preventDefault();
           return; 
        }
         
        const request = new Request('http://localhost:3001/users', {
          method: 'POST',
          headers: { "Content-Type" : "application/json" },
          body: JSON.stringify(newObject)
          });

        fetch(request)
        .then(response => {
            if (response.ok) {
                this.setState({ users:newUsers});
                return response.json();
            } else {
                throw new Error('Something went wrong on api server!');
             }
        })
        .catch(error => {
            console.error(error);
        });
   
        e.preventDefault();
    }

    handleChange = (e) => {
    
        this.object[e.target.name] = e.target.value;
        
    }
     
    render() {
  
        let listUser = this.state.users.map( ( user,index) => {
            let listData = [];
            for(let key in user) {
                listData.push( <td key  = {key}>{ user[key] }</td> );
            }
           
            listData.push(<td key = "1"><button onClick={this.deleteUser.bind(this,index)}>Delete</button></td>)
      
          return <tr key={index}>{listData}</tr>;
          });
     
        return <div>
        
            <Form onSubmit={this.handleSubmit} onChange={this.handleChange} onEdit = {this.editUser}/>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Balance</th>
                  <th>Picture</th>
                  <th>Age</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Company</th>
                  <th>Email</th>  
                  <th>Delete</th> 
                </tr> 
              </thead>
              <tbody>
                {listUser}
              </tbody>
              </table>
            </div>
   
    }
}
export default Users;