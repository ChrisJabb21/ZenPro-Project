import React, { Component } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import 'react-calendar/dist/Calendar.css';
 
class Events extends Component {
    constructor(props){
        super(props)
        this.state={
            date: new Date(),
            events:[],
            isModalOpen: false,
            isModal2Open: false
        }
    }

    componentDidMount(){
        this.findEvents()
    }

    findEvents(){
        var url = "http://localhost:8080/api/events"
        axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({events:data})
                console.log(data)
            })
    }
 
    onChange = date => this.setState({ date })
    openModal = () => this.setState({ isModalOpen: true})
    closeModal = () => this.setState({ isModalOpen: false})
    openModal2 = () => this.setState({ isModal2Open: true})
    closeModal2 = () => this.setState({ isModal2Open: false})
    
    render() {
        return (
        <div>
            <Modal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal}>
                <h1 style={{textAlign:"center", color:"#006555", fontFamily:"Roboto Slab, serif", textDecoration:"underline"}}>Event Sign Up Form</h1>
                <br/>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4" className="label">First Name</label>
                            <input type="text" class="form-control" id="fname" placeholder="First Name"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4" className="label">Last Name</label>
                            <input type="text" class="form-control" id="lname" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4" className="label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4" className="label">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress" className="label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity" className="label">City</label>
                            <input type="text" class="form-control" id="inputCity" placeholder="City"/>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState" className="label">State</label>
                            <input type="text" class="form-control" id="inputState" placeholder="State"/>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip" className="label">Zip</label>
                            <input type="text" class="form-control" id="inputZip" placeholder="#####"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-11">
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                        </div>
                        <div class="form-group col-md-0">
                            <button className="btn btn-danger" onClick={this.closeModal}>Close</button>
                        </div>
                    </div>
                </form>
                <br/>
                <h1 style={{textAlign:"center"}}>Thank you!</h1>
            </Modal>
            <Modal isOpen={this.state.isModal2Open} onRequestClose={this.closeModal2}>
                <h1 style={{textAlign:"center", color:"#006555", fontFamily:"Roboto Slab, serif", textDecoration:"underline"}}>ZenPro Family Sign Up</h1>
                <br/>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4" className="label">First Name</label>
                            <input type="text" class="form-control" id="fname" placeholder="First Name"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4" className="label">Last Name</label>
                            <input type="text" class="form-control" id="lname" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4" className="label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4" className="label">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress" className="label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity" className="label">City</label>
                            <input type="text" class="form-control" id="inputCity" placeholder="City"/>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState" className="label">State</label>
                            <input type="text" class="form-control" id="inputState" placeholder="State"/>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip" className="label">Zip</label>
                            <input type="text" class="form-control" id="inputZip" placeholder="#####"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-11">
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                        </div>
                        <div class="form-group col-md-0">
                            <button className="btn btn-danger" onClick={this.closeModal2}>Close</button>
                        </div>
                    </div>
                </form>

                <h1 style={{textAlign:"center"}}>Thank you!</h1>
                
            </Modal>
            <br/>
            <div className="sticky">
                <h4 style={{textAlign:"center"}}>Event Calendar View</h4>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    minDate={new Date()}
                />
                <br/>
                <h6 style={{textAlign:"center"}}>Become apart of the ZenPro family!!</h6>
                <h6 style={{textAlign:"center"}}>Gain access to exclusive deals</h6>
                <h6 style={{textAlign:"center"}}>Earn bonus reward points</h6>
                <h6 style={{textAlign:"center"}}>Earn free ZenPro merch</h6>
                <button className="btn btn-success" onClick={this.openModal2}>Sign Up!!</button>

                <img src="https://tinyurl.com/y2stnkt5" alt="Point Up" style={{width:"100%", height:"250px", border:"2px solid #006555"}}/>
            </div>

            <div style={{marginLeft:"5%", width:"80%"}}>
                {/* <h1 style={{textAlign:"center", color:"#006555", fontFamily:"Roboto Slab, serif", textDecoration:"underline"}}>ZenPro Upcoming Events</h1><br/> */}
                <h1 style={{}}>ZenPro Upcoming Events</h1><hr/>

                {this.state.events.map((event) => (
                    <div id={event.eventId}>
                        <table style={{borderBottom:"7px solid #006555"}}>
                            <tbody>
                                <tr>
                                    <td><img src={event.eventImg} alt ="Api error" style ={{height:"250px", width:"450px", border:"3px solid #006555"}}/></td>
                                    <td style={{width:"550px", textAlign:"center"}}>
                                        <h5 style={{textAlign:"center", fontWeight:"bold"}}>{event.eventName}</h5>
                                        <h5 style={{color:"#006555", fontStyle:"italic"}}>{event.eventDescription} To attend this event please click the Sign Up button below and fill out the provided information.</h5>
                                        <button className="btn btn-success" onClick={this.openModal} id={event.eventId} style={{marginLeft:"5px"}}>Sign Up!!</button>
                                        <h5 style={{fontWeight:"bold"}}>Event Details: {event.eventDate}</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
        );
    }
}

export default Events;