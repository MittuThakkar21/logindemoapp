import React from 'react'
import { useForm } from 'react-hook-form'

const FormReactHook = () => {

    const { register, handleSubmit } = useForm();

    return (
        <div>
            <div className="container">
                <div className="col-sm-12">
                    <h3>Register Profile</h3>
                </div>
                <div className="col-sm-12">
                    <form>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Username"
                                name="Username"

                            />

                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Name"
                                name="Name"
                            />

                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="tel"
                                placeholder="Mobile number"
                                name="MobileNumber"
                            />

                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Email"
                                name="Email"
                            />

                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Password"
                                name="Password"
                            />

                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="genderOptions"
                                    value="Male"
                                    id="inlineRadio1"
                                />
                                <label className="form-check-label" htmlFor="inlineRadio1">
                                    Male
                            </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="genderOptions"
                                    value="Female"
                                    id="inlineRadio2"
                                />
                                <label className="form-check-label" htmlFor="inlineRadio2">
                                    Female
                         </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="genderOptions"
                                    value=" Non-binary"
                                    id="inlineRadio3"
                                />
                                <label className="form-check-label" htmlFor="inlineRadio3">
                                    Non-binary
                          </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="datetime"
                                placeholder="Date of Birth"
                                name="DateofBirth"

                            />

                        </div>

                        <div className="form-group">
                            <input
                                type="checkbox"
                                placeholder="Subscribe to Newsletter"
                                name="Subscribe to Newsletter"
                                id="customCheck1"
                            />
                            <label htmlFor="customCheck1"> Subscribe to Newsletter</label>
                        </div>
                        <div className="form-group">
                            <input className="btn btn-primary" type="submit" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default FormReactHook
