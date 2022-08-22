import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ModalInfo from './modal'

class FormTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            favActivity: '',
            likeCar: false,
            typeofPerson: '',
            showModal: false,

        }


    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            userName: e.target.userName.value,
            favActivity: e.target.activity.value,
            likeCar: e.target.likeCar.cheked,
            typeOfPerson: e.target.typeOfPerson.value,
            showModal: true,

        })
        console.log({
            userName: e.target.userName.value,
            favActivity: e.target.activity.value,
            likeCar: e.target.likeCar.checked,
            typeOfPerson: e.target.typeOfPerson.value
        })
    }
    render() {
        return (
            <>
                <h1>add info here</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" id="userName" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Youer fav activity</Form.Label>
                        <Form.Control type="text" placeholder="Enter Youer activity" id="activity" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="do you like Cars?" id="likeCar" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="typeOfPerson"> type of person</Form.Label>
                        <Form.Select id="typeOfPerson">
                            <option value="car person">car person</option>
                            <option value=" i like cat"> cat person</option>
                            <option value="i dont like animal">i dont like animal</option>

                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <ModalInfo showModal={this.state.showModal} closeModal={this.handleClose} userInfo={this.state} />
            </>

        )
    }
}



export default FormTest