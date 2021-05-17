import React, { useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Registration = () => {
    const paperstyle = { padding: 20, height: '70vh', width: 200, margin: '20px auto' }
    const [userRegister, setUserRegister] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [records, setRecords] = useState([]);
    const history = useHistory();

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

        localStorage.setItem('username', userRegister.username)
        localStorage.setItem('email', userRegister.email)
        localStorage.setItem('password', userRegister.password)

        alert('registered with', newRecords)
        console.log('registration done with ', newRecords)

        history.push('/login')

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

                    <Button type="submit">
                        Submit
                </Button>
                    <div>
                        {
                            records.map((ele, index) => {
                                console.log(ele)
                                return (
                                    <>
                                        <h2 key={index}>{ele.username}</h2>
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
