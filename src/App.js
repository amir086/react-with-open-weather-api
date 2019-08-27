import React from 'react';
import './App.css';

import {weatherFetch} from './actions'
import {connect} from 'react-redux';
import WeatherList from './Components/Weather/WeatherList'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="button-container">
                    <button className="weather-button" type="button" onClick={this.props.weatherFetch}>Get Weather information</button>
                </div>
                <div className="container">
                    <WeatherList weathers={this.props.weathers}/>
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    weathers: state.weathers
});


export default connect(mapStateToProps, {weatherFetch})(App);
