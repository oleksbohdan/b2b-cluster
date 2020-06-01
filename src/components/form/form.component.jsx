import React from "react";
import './form.styles.scss';
import Input from "../input/input.component";



class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: '',
            secondName: '',
            company:'',
            position: '',
            site: '',
            contactNumber:'',
            email: '',
            city: ''
        }
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="bo-form-container">
                <h3 className="title">
                    Покращуй свій бізнес вже сьогодні!
                </h3>
                <div className="bo-form">
                    <form className='bo-input-form' action="">
                        <Input
                            required
                            label='Ім’я'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            label='Прізвище'
                            name='secondName'
                            value={this.state.secondName}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            label='Назва компанії'
                            name='company'
                            value={this.state.company}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            label='Посада'
                            name='position'
                            value={this.state.position}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            label='Сайт'
                            name='site'
                            value={this.state.site}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            name='contactNumber'
                            label='Контактний номер'
                            value={this.state.contactNumber}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            type='email'
                            name='email'
                            label='Електронна скринька'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            label='Місто'
                            name='city'
                            value={this.state.city}
                            onChange={this.handleChange}
                        />
                        <button className='submit-button' type='submit'>Надіслати</button>
                    </form>
                </div>
            </div>
        );
    }
};
export default Form;