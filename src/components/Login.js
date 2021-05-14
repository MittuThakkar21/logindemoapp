import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import '../login.css'


const Login = () => {
    const paperstyle = { padding: 20, height: '70vh', width: 200, margin: '20px auto' }
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    const [records, setRecords] = useState([]);

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
        setUserLogin({ email: '', password: '' })
    }

    return (
        // <div className="container-fluid">
        //     <div className="row">
        //         <div className="d-flex justify-content-center align-items-center container">
        //             <div className=" form-group">
        //                 {/* <!--Email--> */}
        //                 <label id="email">Email Address</label>
        //                 <div className="input-group">
        //                     <div className="input-group-prepend">
        //                         <div className="input-group-text">
        //                             <span className="fas fa-user"></span>
        //                         </div>

        //                     </div>
        //                     <input type="email" placeholder="Enter Email" className="form-control" id="email1" name="email" />
        //                 </div><br></br>

        //                 {/* <!--password--> */}
        //                 <label id="align">Password</label>
        //                 <div className="input-group">
        //                     <div className="input-group-prepend">
        //                         <div className="input-group-text">
        //                             <i className="fas fa-key"></i>
        //                         </div>
        //                     </div>

        //                     <input type="password" placeholder="Enter Password" className="form-control" name="password" />


        //                 </div>
        //                 <br />
        //                 <div className="custom-control custom-checkbox">
        //                     <input type="checkbox" className="custom-control-input" id="chk1" />
        //                     <label className="custom-control-label" for="chk1">Remember Me</label>
        //                 </div>

        //                 <button type="button" className="btn btn-primary btn-block btn-md" id="login" id="button" >Login</button>

        //                 <br />
        //                 <button type="button" className="btn btn-danger" >Cancel</button>
        //                 <span className="psw" id="forget">
        //                     "Forget" <a href="#">Password? </a>
        //                 </span>

        //             </div>

        //         </div>  <br />
        //     </div>
        // </div>


        <div>
            <div>
                <Form onSubmit={handleSubmit} style={{
                    width: "50",
                    height: '10vh',
                    display: "-ms-flexbox"
                }} >


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

                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                    <div>
                        {
                            records.map((ele) => {
                                console.log(ele)
                                return (
                                    <>
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

export default Login
