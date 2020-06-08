import React from "react";
import Slider from 'react-slick';
import './slick-slider.styles.scss';

export default class SlickSlider extends React.Component{
    constructor(props) {
        super(props);
        const presets = {

        };
    }


    render() {
        const {images} = this.props;
        return(
            <div className="outer-wrapper">
            <div className="wrapper">
                <Slider
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={true}
                    dots={true}
                >
                    {
                        images && images.length ?
                            images.map((image, index) => (
                                <div key={index} className="item">
                                    <div
                                        key={index}
                                        className={'img-wrapper'}
                                        style={{backgroundImage: `url(${image})`}}
                                    />
                                </div>
                            )) :
                            null
                    }
                </Slider>
            </div>
            </div>
        );
    }
}