import React from 'react'
import axios from 'axios'
import '../App.css';
import TwitterDiv from "./TwitterDiv"
import { Alert } from 'react-bootstrap';

export default class ShoppingCart extends React.Component{
   
            constructor(props){
                super(props)
                this.state={
                    products:[],
                }
            }
        
            // componentDidMount(){
            //     this.findProducts()
            // }
        
        
        
            // findProducts(){
            //     var url = "http://localhost:8080/api/user/cart/1"
            //     axios.get(url)
            //         .then(response => response.data)
            //         .then((data) => {
            //             this.setState({products:data})
            //             console.log(data)
            //         })
            // }
        
            displaySizes(){
                return(
                    <div>
                        <button className="sizeButton">XS</button>
                        <button className="sizeButton">S</button>
                        <button className="sizeButton">M</button>
                        <button className="sizeButton">L</button>
                    </div>
                )
            }
            cartOnClick(){
                alert('Added to cart')
            }
        
            render(){
                return(
                    <div>
                        <br/><h1 style={{marginLeft:"5%"}}>Shopping Cart<hr/></h1>
                        <div style={{marginLeft:"20%", width:"80%"}}>
                        

                        <div className="shopDiv" style={{float:"none", width:"80%"}}>
                                    <div style={{width:"40%", float:"left"}}>
                                        <img src="https://playfamously.com/wp-content/uploads/2018/01/Bigstock-67613801-Youth-Baseball-game.jpg" alt ="Api error" style ={{height:"225px", margin:"20px"}}/><br/>
                                        
                                    </div>
                                    <div style={{width:"40%",float:"right"}}><br/>
                                        <p>Test Product</p>
                                        <p>$54.99</p>
        
                                        <p>Size: Medium</p>
                                        <p>Quantity: 1</p>
                                    </div>
                                </div>

                                <div className="shopDiv" style={{float:"none", width:"80%"}}>
                                    <div style={{width:"40%", float:"left"}}>
                                        <img src="https://playfamously.com/wp-content/uploads/2018/01/Bigstock-67613801-Youth-Baseball-game.jpg" alt ="Api error" style ={{height:"225px", margin:"20px"}}/><br/>
                                        
                                    </div>
                                    <div style={{width:"40%",float:"right"}}><br/>
                                        <p>Test Product</p>
                                        <p>$54.99</p>
        
                                        <p>Size: Medium</p>
                                        <p>Quantity: 1</p>
                                    </div>
                                </div>

                                <button className="success">Place Order</button>

                        {/* {this.state.products.map((product) => (
                                <div className="shopDiv" id={product.id}>
                                    <div style={{width:"40%", float:"left"}}>
                                        <img src={product.imageUrl} alt ="Api error" style ={{height:"225px", margin:"20px"}}/><br/>
                                        
                                    </div>
                                    <div style={{width:"40%",float:"right"}}>
                                        <p>{product.productName}</p>
                                        <p>${(product.price - product.discount).toFixed(2)}</p>
        
                                        {(product.gender===null)? null :this.displaySizes()}
                                        <button className="cartButton" ><span className="icon"><i class="fas fa-shopping-cart"></i></span> Add to cart </button>
                                    </div>
                                </div>
                                ))}
                               */}
                        </div>
                        </div>
        )
        
    }
}
