import React from 'react';
import { connect } from 'react-redux';
import '../../appstyling.css';

export class Header extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
          <div className='Header'>
            <div className='Header-img'>
              <img alt='Logo' width='40px' height='40px'></img>
            </div>
            <h1>ShadyCraft</h1>
          </div>
        );
    }
}


const mapStateToProps = state => {
    return {
    };
};

export default connect(
    mapStateToProps,
    {  }
)(Header);
