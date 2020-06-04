import React from "react";
import './carousel.styles.scss';
import arrow from '../../assets/arr.svg'

class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            images: this.props.images,
            counter: 1
        };
        this.slideRef = React.createRef();
    }

    neighbourNodes = () => {
        const {counter} = this.state;
        const {childNodes} = this.slideRef.current;
        return Array.from(childNodes).slice(counter + 1, counter + 5);
    };

    clearWhenOvercome = () => {
        this.neighbourNodes().forEach(node => node.className = 'img-wrapper');
    };

    next = () => {
        this.setState(({counter}) => {
            if(counter === 17) return {};
            return {counter: counter + 1}
        }, () => {
            this.computeSlide();
        });
    };

    prev = () => {
        this.setState(({counter}) => {
            if(counter === 0) return {};
            return {counter: counter - 1}
        }, this.computeSlide);
    };

    computeSlideValue = () => {
        const {counter} = this.state;
        const {style, clientWidth,childNodes} = this.slideRef.current;
        style.transform = `translateX(${((-100 * (counter + 1))  - ((clientWidth - 900)/(5/(counter + 1))))}px)`;
        childNodes[counter + 3].className = 'img-wrapper scaled';
        childNodes[counter + 2].className = 'img-wrapper medium';
        childNodes[counter + 4].className = 'img-wrapper medium';
        childNodes[counter + 1].className = 'img-wrapper';
        childNodes[counter + 5].className = 'img-wrapper';
    } ;

    computeSlide = () => {
        this.computeSlideValue();
    };

    componentDidUpdate(prevProps, {counter}, snapshot) {
        const {current} = this.slideRef;
        if(counter === 1 || counter === 16) {
            current.style.transition = '400ms ease all';
            current.childNodes.forEach(node => node.style.transition = '400ms ease-in-out all')
        }
    }

    componentDidMount() {
        this.slideRef.current.style.transition = '400ms ease all';
        const {childNodes} = this.slideRef.current;
        childNodes.forEach(each => each.style.transition = '400ms ease-in-out all');
        window.addEventListener('resize', this.computeSlide);
        this.slideRef.current.childNodes[21].addEventListener('transitionend', () => {
            if(this.state.counter === 17) {
                this.setState(({counter}) => {
                    this.clearWhenOvercome(counter);
                    return {counter: 1};
                }, () => {
                    this.slideRef.current.style.transition = 'none';
                    this.neighbourNodes().forEach((each) => each.style.transition = 'none');
                    this.computeSlideValue();
                })
            }
        });
        this.slideRef.current.childNodes[3].addEventListener('transitionend', () => {
            if(this.state.counter === 0) {
                this.setState(({counter}) => {
                    this.clearWhenOvercome(counter);
                    this.neighbourNodes().forEach((each) => each.style.transition = 'none');
                    return {counter: 16};
                }, () => {
                    this.slideRef.current.style.transition = 'none';
                    this.neighbourNodes().forEach((each) => each.style.transition = 'none');
                    this.computeSlideValue();
                })
            }
        })
    }

    render() {
        const {images} = this.state;
        return(
            <>
                <div className="bo-carousel-container">
                    <div
                        className="carousel-slide"
                        ref={this.slideRef}
                    >
                        <div
                            className="img-wrapper"
                            style={{backgroundImage: `url(${images[images.length - 4]})`}}
                        />
                        <div
                            className="img-wrapper"
                            style={{backgroundImage: `url(${images[images.length - 3]})`}}
                        />
                        <div
                            className="img-wrapper"
                            style={{backgroundImage: `url(${images[images.length - 2]})`}}
                        />
                        <div
                            className="img-wrapper medium"
                            style={{backgroundImage: `url(${images[images.length - 1]})`}}
                        />
                        {
                            images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`${index === 0 ? 'scaled' : index === 1 ? 'medium' : ''} img-wrapper`}
                                    style={{backgroundImage: `url(${img})`}}
                                />
                            ))
                        }
                        <div
                            className="img-wrapper"
                            style={{backgroundImage: `url(${images[0]})`}}
                        />
                        <div
                            className="img-wrapper"
                            style={{backgroundImage: `url(${images[1]})`}}
                        />
                        <div
                            className="img-wrapper"
                            style={{backgroundImage: `url(${images[2]})`}}
                        />
                        <div
                            className="img-wrapper"
                            style={{backgroundImage: `url(${images[3]})`}}
                        />
                    </div>
                    <div className="button-container">
                        <button style={{backgroundImage: `url(${arrow})`}} onClick={this.prev}/>
                        <button style={{backgroundImage: `url(${arrow})`}} onClick={this.next}/>
                    </div>
                </div>

            </>
        )
    }
}

export default Carousel;