import React, { useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Form } from 'react-bootstrap';


const Registration = () => {
    const paperstyle = { padding: 20, height: '70vh', width: 200, margin: '20px auto' }
    const [userRegister, setUserRegister] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log('vsalues', name, value);

        setUserRegister({ ...userRegister, [name]: value })

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecords = { ...userRegister, id: new Date().getTime().toString() }
        setRecords([...records, newRecords])
        console.log(newRecords);
        setUserRegister({ username: '', email: '', password: '' })
    }

    return (
        <div>
            <div>
                <Form onSubmit={handleSubmit} style={{
                    width: "50",
                    height: '10vh',
                    display: "-ms-flexbox"
                }} >

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"
                            value={userRegister.username}
                            placeholder="Enter username"
                            onChange={handleInput}
                            name="username"

                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                            value={userRegister.email}
                            placeholder="Enter email"
                            onChange={handleInput}
                            name="email"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            value={userRegister.password}
                            placeholder="Password"
                            onChange={handleInput}
                            name="password"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                    <div>
                        {
                            records.map((ele) => {
                                console.log(ele)
                                return (
                                    <>
                                        <h2>{ele.username}</h2>
                                        <h2>{ele.email}</h2>
                                    </>
                                )
                            })
                        }
                    </div>
                </Form>

            </div>

        </div>

    )
}

export default Registration
