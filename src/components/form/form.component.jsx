import React from "react";
import './form.styles.scss';
import Input from "../input/input.component";
import {connect} from "react-redux";



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
        const {title, fields, submit} = this.props.form;
        return (
            <div className="bo-form-container">
                <a name="form" />
                <h3 className="title">
                    {title}
                </h3>
                <div className="bo-form">
                    <form className='bo-input-form' action="">
                        <Input
                            required
                            label={fields[0].label}
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            label={fields[1].label}
                            name='secondName'
                            value={this.state.secondName}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            label={fields[2].label}
                            name='company'
                            value={this.state.company}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            label={fields[3].label}
                            name='position'
                            value={this.state.position}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            label={fields[4].label}
                            name='site'
                            value={this.state.site}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            name='contactNumber'
                            label={fields[5].label}
                            value={this.state.contactNumber}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            type='email'
                            name='email'
                            label={fields[6].label}
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <Input
                            required
                            label={fields[7].label}
                            name='city'
                            value={this.state.city}
                            onChange={this.handleChange}
                        />
                        <button className='submit-button' type='submit'>{submit}</button>
                    </form>
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({schema:{form}}) => ({
    form
});

export default connect(mapStateToProps, null)(Form);