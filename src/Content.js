import { Component, Fragment } from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import axios from 'axios';

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            albums: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/albums')
             .then((res) => this.setState({ albums: res.data, isLoaded: true }, ()=>console.log(this.state) ))
    }

    render(){
      return (
        <Container>
          <Row>
            <Col>
                {this.state.isLoaded ?
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Title</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.albums.map((item, index) => 
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.title}</td>
                            </tr>
                        )}                      
                      </tbody>
                    </Table>                    
                : <div>Loading...</div>}
       
            </Col>
          </Row>
        </Container>
      );
    }
}

export default Content;
