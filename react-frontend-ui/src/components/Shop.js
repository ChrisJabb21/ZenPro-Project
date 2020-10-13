import React from 'react'
import axios from 'axios'
import '../App.css';
import TwitterDiv from "./TwitterDiv"
import { Alert } from 'react-bootstrap';



export default class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state={
            products:[],
            tweets:[]
        }
    }

    componentDidMount(){
        this.findProducts()
    }



    findProducts(){
        var url = "http://localhost:8080/api/products"
        axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({products:data})
                console.log(data)
            })
    }

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

                <div className="sticky" style={{border: "1px solid blue"}}>
                    <TwitterDiv/>
                </div>

                <div style={{marginLeft:"5%", width:"80%"}}><br/>
                <h1>Recommended for you</h1><hr/>
                

                <div class="shopDiv">
                    <div style={{width: "40%", float: "left"}}>
                        <img src="https://dks.scene7.com/is/image/GolfGalaxy/16RAWUFFCLLGCRPGRBSB?wid=1000&amp;fmt=pjpeg" alt="Api error" style={{height: "225px", margin: "20px"}}/><br/>
                    </div>
                    <div style={{width: "40%", float: "right"}}>
                        <p style={{textAlign: "left"}}>Rawlings ROLB1/R14U Official League Baseball</p>
                        <p>$5.99</p><button class="cartButton">
                        <span class="icon"><i class="fas fa-shopping-cart"></i></span> Add to cart </button><br/><br/>
                        <p><a href=""></a></p>
                    </div>
                </div>

                <div class="shopDiv">
                    <div style={{width: "40%", float: "left"}}>
                        <img src="https://dks.scene7.com/is/image/GolfGalaxy/16LSLAS3XSHNTRLXXWBT?wid=1000&fmt=pjpeg" alt="Api error" style={{height: "225px", margin: "20px"}}/><br/>
                    </div>
                    <div style={{width: "40%", float: "right"}}>
                        <p style={{textAlign: "left"}}>Louisville Slugger Series 3X Ash Bat</p>
                        <p>$29.99</p><button class="cartButton">
                        <span class="icon"><i class="fas fa-shopping-cart"></i></span> Add to cart </button><br/><br/>
                        <p><a href=""></a></p>
                    </div>
                </div>

                <div class="shopDiv">
                    <div style={{width: "40%", float: "left"}}>
                        <img src="https://dks.scene7.com/is/image/GolfGalaxy/19QYFU2PKDSGBSBLLAPA_Navy?qlt=70&wid=1100&fmt=webp" alt="Api error" style={{height: "225px", margin: "20px"}}/><br/>
                    </div>
                    <div style={{width: "40%", float: "right"}}>
                        <p style={{textAlign: "left"}}>DSG Baseball Socks</p>
                        <p>$5.99</p>
                        <div>
                <button className="sizeButton">XS</button>
                <button className="sizeButton">S</button>
                <button className="sizeButton">M</button>
                <button className="sizeButton">L</button>
            </div><button class="cartButton">
                        <span class="icon"><i class="fas fa-shopping-cart"></i></span> Add to cart </button><br/><br/>
                        <p><a href=""></a></p>
                    </div>
                </div>

                <div class="shopDiv">
                    <div style={{width: "40%", float: "left"}}>
                        <img src="https://dks.scene7.com/is/image/GolfGalaxy/16MCCASGNTRWHTBG2BTG_White_Red?qlt=70&wid=1100&fmt=webp" alt="Api error" style={{height: "225px", margin: "20px"}}/><br/>
                    </div>
                    <div style={{width: "40%", float: "right"}}>
                        <p style={{textAlign: "left"}}>Marucci Adult Signature Series Batting Gloves</p>
                        <p>$39.99</p><button class="cartButton">
                        <span class="icon"><i class="fas fa-shopping-cart"></i></span> Add to cart </button><br/><br/>
                        <p><a href="">#MarucciBattingGloves</a></p>
                    </div>
                </div>
                <h1>Products</h1><hr/>
                
                {this.state.products.map((product) => (
                        <div className="shopDiv" id={product.id}>
                            <div style={{width:"40%", float:"left"}}>
                                <img src={product.imageUrl} alt ="Api error" style ={{height:"225px", margin:"20px"}}/><br/>
                                
                            </div>
                            <div style={{width:"40%",float:"right"}}>
                                <p style={{textAlign:"left"}}>{product.productName}</p>
                                <p>${(product.price - product.discount).toFixed(2)}</p>

                                {(product.gender===null)? null :this.displaySizes()}
                                <button className="cartButton" ><span className="icon"><i class="fas fa-shopping-cart"></i></span> Add to cart </button><br/><br/>
                                <p><a href="">{product.productDescription}</a></p>
                            </div>
                        </div>
                        ))}
                      
                </div>
                <div style={{visibility:"hidden"}}>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/> hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>
                hj<br/>hj<br/>
                </div>
            </div>
        )
    }

}
