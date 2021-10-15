import { Component } from 'react';
import { Image } from 'react-bootstrap'; 

class Avatar extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className="image-wrapper">
        <Image src="avatar.png" roundedCircle />
      </div>
    );
  }
}

export default Avatar;
