import './FacebookPage.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const FacebookPage = () => {
    return (
        <>
            <div className="facebook-container">
                <div className="facebook-logo">
                    <b>facebook</b>
                    <h1>Facebook helps you connect and share with the people in your life.</h1>
                </div>

                {/* FORM PAGE  */}
                <div style={{textAlign:'center'}}>
                <div className='form-box'>
                    <input type="text"  placeholder="Email address or phone number" />
                    <input type="password" placeholder="Password" />
                    <button className='login-button'><b>Log in</b></button>
                    <a href='https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0' className='forgot-password'>Forgotten password?</a><hr/>
                    <button className='create-account'> <Link to='/FacebookRegestrationPage' style={{textDecoration:'none', color:'white'}}> <b>Create new account</b></Link> </button>
                </div>
                <p><b>create a Page</b> for a celebrity, brand or business.</p>
                </div>

            </div>
        </>
    )
}
export default FacebookPage