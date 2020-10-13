import React from 'react'
import TokenService from '../services/TokenService'
import axios from 'axios'

export default class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:{}
        }
    }

    componentDidMount(){
        this.findUser()
    }

    findUser(){
        var url = "http://localhost:8080/api/user/" + TokenService.getUserId()
        axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({user:data})
                console.log(data)
            })
    }

    
    render(){
        return(
            <div>
                <table  style={{marginLeft:"auto", marginRight:"auto"}}>
					<tr >
						<th >User Id</th>
						<th >First Name</th>
						<th >Last Name</th>
						<th >Address</th>
						<th >Contact Number</th>
						<th >Password</th>
					</tr>
					<tr key = {this.state.user.id}>
						<td >{this.state.user.userId}</td>
						<td >{this.state.user.firstName}</td>
						<td >{this.state.user.lastName}</td>
						<td >{this.state.user.address}</td>
						<td >{this.state.user.contactNumber}</td>
						<td >{this.state.user.userPassword}</td>
					</tr>
				</table >
            </div>
        )
    }

}
