import React, { useState } from 'react';
import '../../styles/login.css'
import { Form, Formik, Field } from 'formik';
import Logo from '../../assets/logo.png'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
function Login(props) {
    const validationSchema = Yup.object({
        email: Yup.string().required("Field is required"),
        password: Yup.string().required("Field is required"),
        logincheck: Yup.bool().oneOf([true], 'Field must be checked')
    })
    const initialValues = {
        email: "",
        password: "",
        logincheck: false,
    }
    const onSubmit = (value, { resetForm }) => {
        console.log(value);
        resetForm(initialValues)

    }
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="login">
            <Formik validationSchema={validationSchema} initialValues={initialValues}
                onSubmit={onSubmit} >
                <Form>
                    <div className="login-main">
                        <img src={Logo} alt="Logo" />
                        <button
                            type="button" className="login-google">
                            <p>Login with google</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.66 12.6927C20.66 12.09 20.6059 11.5105 20.5055 10.9541H12.5V14.2421H17.0746C16.8775 15.3046 16.2786 16.2048 15.3784 16.8075V18.9403H18.1255C19.7327 17.4605 20.66 15.2814 20.66 12.6927Z" fill="#4285F4" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 21.0002C14.795 21.0002 16.7191 20.2391 18.1254 18.9409L15.3784 16.8082C14.6173 17.3182 13.6436 17.6196 12.5 17.6196C10.2861 17.6196 8.41224 16.1243 7.74383 14.1152H4.90405V16.3175C6.30269 19.0955 9.17724 21.0002 12.5 21.0002Z" fill="#34A853" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.74387 14.1149C7.57387 13.6049 7.47728 13.0601 7.47728 12.4999C7.47728 11.9397 7.57387 11.3949 7.74387 10.8849V8.68262H4.90409C4.32841 9.83012 4 11.1283 4 12.4999C4 13.8715 4.32841 15.1697 4.90409 16.3172L7.74387 14.1149Z" fill="#FBBC05" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 7.38069C13.7479 7.38069 14.8684 7.80955 15.7493 8.65183L18.1873 6.21387C16.7152 4.84227 14.7911 4 12.5 4C9.17724 4 6.30269 5.90478 4.90405 8.68273L7.74383 10.885C8.41224 8.87592 10.2861 7.38069 12.5 7.38069Z" fill="#EA4335" />
                            </svg>
                        </button>
                        <p className="or">or</p>
                        <div className="input-field">
                            <label htmlFor="email">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M25 10L15 16.25L5 10V7.5L15 13.75L25 7.5M25 5H5C3.6125 5 2.5 6.1125 2.5 7.5V22.5C2.5 23.163 2.76339 23.7989 3.23223 24.2678C3.70107 24.7366 4.33696 25 5 25H25C25.663 25 26.2989 24.7366 26.7678 24.2678C27.2366 23.7989 27.5 23.163 27.5 22.5V7.5C27.5 6.83696 27.2366 6.20107 26.7678 5.73223C26.2989 5.26339 25.663 5 25 5Z" fill="#4D4D4D" />
                                </svg>
                            </label>
                            <Field name="email" id="email" placeholder="Email" className="email-field" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M21.2501 17.5H15.8239C15.2341 19.168 14.0737 20.5739 12.5477 21.4691C11.0216 22.3643 9.22828 22.6912 7.48454 22.392C5.7408 22.0928 4.15897 21.1868 3.01861 19.8342C1.87826 18.4815 1.25281 16.7692 1.25281 15C1.25281 13.2308 1.87826 11.5185 3.01861 10.1659C4.15897 8.81319 5.7408 7.9072 7.48454 7.60803C9.22828 7.30885 11.0216 7.63574 12.5477 8.53094C14.0737 9.42613 15.2341 10.832 15.8239 12.5H28.7501V17.5H26.2501V22.5H21.2501V17.5ZM8.75013 17.5C9.41317 17.5 10.0491 17.2366 10.5179 16.7678C10.9867 16.2989 11.2501 15.6631 11.2501 15C11.2501 14.337 10.9867 13.7011 10.5179 13.2322C10.0491 12.7634 9.41317 12.5 8.75013 12.5C8.08708 12.5 7.4512 12.7634 6.98236 13.2322C6.51352 13.7011 6.25013 14.337 6.25013 15C6.25013 15.6631 6.51352 16.2989 6.98236 16.7678C7.4512 17.2366 8.08708 17.5 8.75013 17.5Z" fill="#4D4D4D" />
                                </svg>
                            </label>
                            <Field name="password" id="password"
                                type={showPassword ? 'text' : 'password'} placeholder="Password" className="pass-field" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"
                                onClick={() => setShowPassword(!showPassword)}>
                                <g opacity="0.5">
                                    <path d="M11.23 5.073C11.6516 5.0241 12.0756 4.99973 12.5 5C17.164 5 20.9 7.903 22.5 12C22.1127 12.9966 21.5894 13.9348 20.945 14.788M7.02 6.519C4.98 7.764 3.4 9.693 2.5 12C4.1 16.097 7.836 19 12.5 19C14.4321 19.0102 16.3292 18.484 17.98 17.48M10.38 9.88C10.1014 10.1586 9.8804 10.4893 9.72963 10.8534C9.57885 11.2174 9.50125 11.6075 9.50125 12.0015C9.50125 12.3955 9.57885 12.7856 9.72963 13.1496C9.8804 13.5137 10.1014 13.8444 10.38 14.123C10.6586 14.4016 10.9893 14.6226 11.3534 14.7734C11.7174 14.9242 12.1075 15.0018 12.5015 15.0018C12.8955 15.0018 13.2856 14.9242 13.6496 14.7734C14.0137 14.6226 14.3444 14.4016 14.623 14.123" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.5 4L20.5 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </g>
                            </svg>
                        </div>
                        <div className="remember">
                            <div className="input-check">
                                <Field name="logincheck" id="logincheck" type="checkbox"
                                    className="check-field"
                                />
                                <label htmlFor="logincheck">Remember me</label>
                            </div>
                            <Link className="forgot-password" to="">Forget password </Link>
                        </div>
                        <button className="login-page-button"
                            type="submit"
                        >
                            Login
                        </button>
                        <Link className="new-user" to="/signup">New User? Register Here</Link>

                    </div>

                </Form>
            </Formik>
        </div>
    );
}

export default Login;