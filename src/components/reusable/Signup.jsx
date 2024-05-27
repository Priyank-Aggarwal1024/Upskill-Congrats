import React, { useState } from 'react';
import '../../styles/signup.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
}
const validationSchema = Yup.object({
    name: Yup.string().required("Field is required"),
    phone: Yup.string().required("Field is required"),
    email: Yup.string().required("Field is required"),
    password: Yup.string().required("Field is required"),

})
const onSubmit = (value) => {
    console.log(value)
}
function Signup(props) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="signup">
            <Formik initialValues={initialValues} validationSchema={validationSchema}
                onSubmit={onSubmit}>
                <Form>
                    <div className="signup-main">
                        <img src={Logo} alt="Logo" />
                        <div className="field-signup">
                            <label htmlFor="name">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M15 5C16.3261 5 17.5979 5.52678 18.5355 6.46447C19.4732 7.40215 20 8.67392 20 10C20 11.3261 19.4732 12.5979 18.5355 13.5355C17.5979 14.4732 16.3261 15 15 15C13.6739 15 12.4021 14.4732 11.4645 13.5355C10.5268 12.5979 10 11.3261 10 10C10 8.67392 10.5268 7.40215 11.4645 6.46447C12.4021 5.52678 13.6739 5 15 5ZM15 17.5C20.525 17.5 25 19.7375 25 22.5V25H5V22.5C5 19.7375 9.475 17.5 15 17.5Z" fill="#4C4C4C" />
                                </svg>
                            </label>
                            <Field
                                name="name"
                                type="text"
                                id="name"
                                placeholder="Full name"
                            />
                        </div>
                        <div className="field-signup">
                            <label htmlFor="phone">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M8.275 13.4875C10.075 17.025 12.975 19.9125 16.5125 21.725L19.2625 18.975C19.6 18.6375 20.1 18.525 20.5375 18.675C21.9375 19.1375 23.45 19.3875 25 19.3875C25.6875 19.3875 26.25 19.95 26.25 20.6375V25C26.25 25.6875 25.6875 26.25 25 26.25C13.2625 26.25 3.75 16.7375 3.75 5C3.75 4.3125 4.3125 3.75 5 3.75H9.375C10.0625 3.75 10.625 4.3125 10.625 5C10.625 6.5625 10.875 8.0625 11.3375 9.4625C11.475 9.9 11.375 10.3875 11.025 10.7375L8.275 13.4875Z" fill="#4C4C4C" />
                                </svg>
                            </label>
                            <Field
                                name="phone"
                                type="text"
                                id="phone"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="field-signup">
                            <label htmlFor="email">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M25 10L15 16.25L5 10V7.5L15 13.75L25 7.5M25 5H5C3.6125 5 2.5 6.1125 2.5 7.5V22.5C2.5 23.163 2.76339 23.7989 3.23223 24.2678C3.70107 24.7366 4.33696 25 5 25H25C25.663 25 26.2989 24.7366 26.7678 24.2678C27.2366 23.7989 27.5 23.163 27.5 22.5V7.5C27.5 6.83696 27.2366 6.20107 26.7678 5.73223C26.2989 5.26339 25.663 5 25 5Z" fill="#4D4D4D" />
                                </svg>
                            </label>
                            <Field
                                name="email"
                                type="email"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="field-signup">
                            <label htmlFor="password">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M21.2501 17.5H15.8238C15.2341 19.168 14.0736 20.5739 12.5476 21.4691C11.0216 22.3643 9.22822 22.6912 7.48448 22.392C5.74074 22.0928 4.15891 21.1868 3.01855 19.8342C1.8782 18.4815 1.25275 16.7692 1.25275 15C1.25275 13.2308 1.8782 11.5185 3.01855 10.1659C4.15891 8.81319 5.74074 7.9072 7.48448 7.60803C9.22822 7.30885 11.0216 7.63574 12.5476 8.53094C14.0736 9.42613 15.2341 10.832 15.8238 12.5H28.7501V17.5H26.2501V22.5H21.2501V17.5ZM8.75006 17.5C9.41311 17.5 10.049 17.2366 10.5178 16.7678C10.9867 16.2989 11.2501 15.6631 11.2501 15C11.2501 14.337 10.9867 13.7011 10.5178 13.2322C10.049 12.7634 9.41311 12.5 8.75006 12.5C8.08702 12.5 7.45114 12.7634 6.9823 13.2322C6.51346 13.7011 6.25006 14.337 6.25006 15C6.25006 15.6631 6.51346 16.2989 6.9823 16.7678C7.45114 17.2366 8.08702 17.5 8.75006 17.5Z" fill="#4D4D4D" />
                                </svg>
                            </label>
                            <div className="password-div">
                                <Field
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Password"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    <g opacity="0.5">
                                        <path d="M11.23 5.073C11.6516 5.0241 12.0756 4.99973 12.5 5C17.164 5 20.9 7.903 22.5 12C22.1127 12.9966 21.5894 13.9348 20.945 14.788M7.02 6.519C4.98 7.764 3.4 9.693 2.5 12C4.1 16.097 7.836 19 12.5 19C14.4321 19.0102 16.3292 18.484 17.98 17.48M10.38 9.88C10.1014 10.1586 9.8804 10.4893 9.72963 10.8534C9.57885 11.2174 9.50125 11.6075 9.50125 12.0015C9.50125 12.3955 9.57885 12.7856 9.72963 13.1496C9.8804 13.5137 10.1014 13.8444 10.38 14.123C10.6586 14.4016 10.9893 14.6226 11.3534 14.7734C11.7174 14.9242 12.1075 15.0018 12.5015 15.0018C12.8955 15.0018 13.2856 14.9242 13.6496 14.7734C14.0137 14.6226 14.3444 14.4016 14.623 14.123" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.5 4L20.5 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <button className="signup-button"
                            type='submit'
                        >
                            SignUp
                        </button>
                        <Link className='login-link' to="/login">Login</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Signup;