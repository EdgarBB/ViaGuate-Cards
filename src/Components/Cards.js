import React, {Component} from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import { MdPeople, MdAirlineSeatFlat, MdAirlineSeatLegroomNormal, MdLocationOn, MdFavoriteBorder } from "react-icons/md";


export default class Cards extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos: [],
        }

    }
    componentDidMount() {
    fetch('https://viaguate-10-backend-cliente.mybluemix.net/api/accommodation/ViewVacationrentals')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }

    render(){
        
        return(
            <>
                {this.state.todos.map((todos, index) =>{
                    return <ConstInfo todos ={todos} key={index}/>
                })}
            </>
        );
    }
}
class ConstInfo extends React.Component {
    render(){
       
        return(
            <>
                <Col xs={12} md={4} lg={3}>                  
                    <Card className="image-area">
                        <div className="img-wrapper">
                            <Card.Body>
                                <Card.Img variant="top" src={this.props.todos.mainPicture.urlPhoto} alt="Card image"/>
                                <Card.ImgOverlay>
                                    <div className="after">After</div>
                                    <div className="heart"><MdFavoriteBorder/></div>
                                    <Card.Text className="front text"><span className="text-price">$</span>{this.props.todos.basePrice}<span className="text-price2">/nigth</span></Card.Text>
                                </Card.ImgOverlay>
                                <Card.Title className="title">{this.props.todos.title}</Card.Title>
                                <Card.Text className="address"><MdLocationOn/>{this.props.todos.address.realAddress}</Card.Text>
                                <hr></hr>
                                    <div className="clearfix">
                                        <div className="float-left">
                                            <Card.Text><MdPeople className="icon-services"/>{this.props.todos.capacityOfPeople}</Card.Text>
                                            <div className="quantity">
                                                Capacity
                                            </div>
                                        </div>
                                        <div className="float-left center">
                                            <Card.Text><MdAirlineSeatFlat className="icon-services"/>{this.props.todos.noBedroom}</Card.Text>
                                            <div  className="quantity">
                                                Bedrooms
                                            </div>
                                            
                                        </div>
                                        <div className="float-right service-right">
                                            <Card.Text><MdAirlineSeatLegroomNormal className="icon-services"/>{this.props.todos.noBathroom}</Card.Text>
                                            <div className="quantity">
                                                Bathrooms
                                            </div>
                                            
                                        </div>
                                    </div>
                                                       

                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </>
        )
    }
}    


