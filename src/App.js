import React from 'react';
import { connect } from 'react-redux';
import Header from './Components/Header.Component/Header.component';
import Online from './Components/Online.Component/Online.Component'
import './appstyling.css';

export class App extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
          <div className='Container'>
            <Header />
            <div className='Body'>
              <p>hej</p>
            </div>
            <Online />
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
)(App);
