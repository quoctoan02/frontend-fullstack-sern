import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import MedicalFacility from './Section/MedicalFacility';
import Specialty from './Section/Specialty';
import HomeFooter from './HomeFooter';
import HandBook from './Section/HandBook';
import OutstandingDoctor from './Section/OutstandingDoctor';
import About from './Section/About';
import './HomePage.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import MaterialTable from 'material-table'


class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        }

        return (
            <div>
                <HomeHeader isShowBanner={true} />
                <Specialty settings={settings} />
                <MedicalFacility settings={settings} />
                <OutstandingDoctor settings={settings} />
                <HandBook settings={settings} />
                <About />
                <HomeFooter />

                <div style={{ height: '300px' }}>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
