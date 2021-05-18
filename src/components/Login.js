import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core'

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import '../login.css'


const Login = () => {
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });
    const [loggedIn, setLoggedIn] = useState(false);

    const [records, setRecords] = useState([]);
    const history = useHistory();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log('vsalues', name, value);

        setUserLogin({ ...userLogin, [name]: value })

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecords = { ...userLogin, id: new Date().getTime().toString() }
        setRecords([...records, newRecords])
        console.log(newRecords);

        const email = newRecords.email
        const password = newRecords.password
        console.log('email', email, 'password', password);


        setUserLogin({ email: '', password: '' })

        const getemail = localStorage.getItem('email')
        const getpassword = localStorage.getItem('password')

        console.log('email', getemail);
        console.log('password', getpassword);

        if (email === getemail && password === getpassword) {
            console.log('logged in..!');
            localStorage.setItem('token', "dasdasdas");
            // console.log(localStorage.getItem('token'))
            setLoggedIn(true)
            history.push('/dashboard')

        } else {
            alert('invalid email or password');
        }


    }

    return (
        <div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                            value={userLogin.email}
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
                            value={userLogin.password}
                            placeholder="Password"
                            onChange={handleInput}
                            name="password"
                        />
                    </Form.Group>

                    <Button type="submit">
                        Submit
                </Button><br />
                    <span>You don't have an account? Please Register..!</span><br />
                    <Link to='/registration'><Button>Registration</Button></Link>
                    <div>
                        {
                            records.map((ele, index) => {
                                console.log(ele)
                                return (
                                    <>
                                        <h2 key={index}>{ele.email}</h2>
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

export default Login
