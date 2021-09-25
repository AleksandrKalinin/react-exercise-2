import { Component } from 'react';
import UserInfo from './UserInfo';
import Avatar from './Avatar';
import {Container, Row, Col} from 'react-bootstrap';

class UserDetails extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={4} lg={4} xs={4} >
            <Avatar />
          </Col>
          <Col> 
            <UserInfo data = {this.props.data} />
          </Col>      
        </Row>
      </Container> 
    );
  }

}

export default UserDetails;
