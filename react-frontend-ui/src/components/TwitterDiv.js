import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


export default class TwitterDiv extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            tweets:[]
        }
    }

    componentDidMount(){
        this.findTweets()
    }

    findTweets(){
        var url = "http://localhost:8080/api/tweets"
        axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({tweets:data})
                console.log(data)
            })
    }

    render(){
        return(
            <div style={{border:"blue"}}>

                <div style={{marginRight:"10px"}}>
                    <FontAwesomeIcon icon ={faTwitter} style={{fontSize:"50px", color:"rgb(29, 161 ,242)", float:"left"}}/>
                </div>

                <h3 style={{color:"rgb(29, 161 ,242)"}}>&nbsp;What are our users &nbsp;recommending?</h3> 
                
                {this.state.tweets.map((tweet) => (
                    <div id = {tweet.userName} >
                        <hr/>
                        <img src={tweet.profilePic} alt="API Error" style={{width:"35px", height:"auto", borderRadius:"50%"}}/>
                        <span style={{color:"black"}}> {tweet.username} | </span><span style={{color:"grey"}}>{tweet.userTag}</span>
                        <p style={{textAlign:"left", color:"black"}}>{tweet.text}</p>
                        
                    </div>
                ))}


            </div>
            
        )
    }
}