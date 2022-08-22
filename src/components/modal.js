import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class ModalInfo extends React.Component {
    render() {
        return (
            <>
                {/* <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button> */}

                <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>my name is {this.props.userInfo.userName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>my fav activity is {this.props.userInfo.favActivity}</p>
                        {(this.props.userInfo.likeCar) ?
                            <p>i like car</p> :
                            <p>i dont like car</p>}
                        <p>my type is {this.props.userInfo.typeOfPerson} </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeModal}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>

                <h1>heloo from modal</h1>
            </>

        )

    }
}

export default ModalInfo


