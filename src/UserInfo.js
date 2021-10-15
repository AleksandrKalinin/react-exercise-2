import { Fragment, Component } from 'react';
import { Button } from 'react-bootstrap';

class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data: this.props.data
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    })
  }


  setVisibility = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>    
        <p><span className="bold">Name: </span>{this.state.data.name}</p>
        <p><span className="bold">Username: </span>{this.state.data.username}</p>
        <p><span className="bold">Email: </span>{this.state.data.email}</p>
        {this.state.isOpen ?
          <>
            <p><span className="bold">Phone </span>{this.state.data.phone}</p>
            <p><span className="bold">Website: </span>{this.state.data.website}</p>
            <p><span className="bold">City: </span>{this.state.data.address.city}</p>
            <p><span className="bold">Address: </span>{this.state.data.address.street}</p>
          </>
        : null}
        <Button onClick = {this.setVisibility}>{!this.state.isOpen ? 'More information' : 'Less information' }</Button>
      </div>
    );
  }
}

export default UserInfo;
