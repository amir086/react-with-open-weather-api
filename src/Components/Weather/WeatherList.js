import React from 'react'
import IndividualInfo from './IndividualInfo'

import {weatherRemove} from '../../actions'
import {connect} from 'react-redux';


class WeatherList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: ''
        }
    }

    setCurrentIndex = (index) => {
        this.setState({
            currentIndex: index
        })
    };

    removeWeatherData = () => {
        this.props.weatherRemove(this.state.currentIndex);
        this.setCurrentIndex('');
    };

    render() {
        return (
            <React.Fragment>
                {
                    this.props.weathers.map((item, index) => {
                        return <IndividualInfo
                            setCurrentIndex={this.setCurrentIndex}
                            removeWeatherData={this.removeWeatherData}
                            currentIndex={this.state.currentIndex}
                            key={index} item={item} index={index}/>
                    })
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        weathers: state.weathers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        weatherRemove: index => dispatch(weatherRemove(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
