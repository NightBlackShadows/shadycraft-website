import React from 'react';
import { connect } from 'react-redux';
import '../../appstyling.css';

export class Online extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
          <div className='Side'>
            <p>The server is $online</p>
            <br />
            <p>These people are online:</p>
            
          </div>
        );
    }

}

const listOnline = ({list}) => (
    <ul>
        {list.map(user =>(
            <li key={user.name}>{user.name}</li>
        ))}
    </ul>
); 

const mapStateToProps = state => {
    return {
    };
};

export default connect(
    mapStateToProps,
    {  }
)(Online);
