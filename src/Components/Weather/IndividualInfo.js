import React from 'react';
import moment from 'moment'

class IndividualInfo extends React.Component {

    handleButtonPress = (index) => {
        this.buttonPressTimer = setTimeout(() => this.props.setCurrentIndex(index), 1500);
    };

    handleButtonRelease = (index) => {
        clearTimeout(this.buttonPressTimer);
    };

    convertTemp = (temp) => {
        return (temp - 273.15).toFixed(2)
    };

    convertDate = (date) => {
        let _date = 1000 * date;
        return moment(_date).format("DD/MM/YYYY")
    };

    convertOnlyTime = (date) => {
        let _date = 1000 * date;
        return moment(_date).format('hh:mm A')
    };


    render() {
        return (
            <React.Fragment>
                <section
                    onTouchStart={() => this.handleButtonPress(this.props.index)}
                    onTouchEnd={this.handleButtonRelease}
                    onMouseDown={() => this.handleButtonPress(this.props.index)}
                    onMouseUp={this.handleButtonRelease}
                    onMouseLeave={this.handleButtonRelease}>

                    <h1 className="date-heading">Date - {this.convertDate(this.props.item.dt)}</h1>
                    <ul>
                        <li>
                            Max Temp <span>{this.convertTemp(this.props.item.temp.max)}<sup>o</sup>C</span>
                        </li>
                        <li>
                            Min Temp <span>{this.convertTemp(this.props.item.temp.min)}<sup>o</sup>C</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Sunrise <span>{this.convertOnlyTime(this.props.item.sunrise)}</span>
                        </li>
                        <li>
                            Sunset <span>{this.convertOnlyTime(this.props.item.sunset)}</span>
                        </li>
                    </ul>
                    {this.props.index === this.props.currentIndex ?
                        <button className="button" type="button"
                                onClick={this.props.removeWeatherData}>Remove</button> : ''}
                </section>
            </React.Fragment>


        )
    }
}

export default IndividualInfo
