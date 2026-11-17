import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router";

const BoxInfo = (props) => {
    const redBoxStyle = {
        
        // Set the background color to red
        backgroundColor: 'grey',
        
        // Add padding for spacing
        padding: '20px',
        
        // Set the text color to white
        color: 'white',
    };
    const navigate = useNavigate();

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <Card>
                <Card.Body>
                    <div style={redBoxStyle}>
                        {/* <h5 className="card-title">
                            {props.title}
                        </h5> */}
                        <Button variant="secondary" onClick={() => navigate('/dashboard')}>{props.title}</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

    );
};

export default BoxInfo;
