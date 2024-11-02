import './FacebookRegestrationPage.css'
const FacebookRegestrationPage = () => {
    return (
        <>
            <div className="regestration-page-container">
                <div>
                    <b>facebook</b>
                </div>

                <div className='form-container' >
                    <form >
                        <div>
                            <strong>Create a new account</strong>
                            <p>It's quick and easy.</p><hr />
                        </div>
                        {/* form first inputs */}
                        <div className='form-input'>
                            <input type="text" placeholder="First name" />
                            <input type="password" placeholder="Surname" />
                        </div>
                        {/* form first inputs end */}

                        <div className='date-of-birth'>Date of birth?</div>

                        {/* form input second */}
                        <div className='select-container'>
                            <div className='select1'>
                                <select  >
                                    {/* <option selected> </option> */}
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className='select2'>
                                <select >
                                    {/* <option selected> </option> */}
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">March</option>
                                </select>
                            </div>
                            <div className='select3'>
                                <select >
                                    {/* <option selected> </option> */}
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                        </div>
                        <div className='Gender'>Gender?</div>

                        <div className='radio-container' >


                            <div class="form-check check-box1">
                                <label class="form-check-label" for="gridRadios1">
                                    Female
                                </label>
                                <input type="radio" id="gridRadios1" value="option1" name="gridRadios" />

                            </div>

                            <div class="form-check check-box2">
                                <label class="form-check-label" for="gridRadios2">
                                    Male
                                </label>
                                <input type="radio" id="gridRadios2" value="option2" name="gridRadios" />

                            </div>

                            <div class="form-check check-box3">
                                <label class="form-check-label" for="gridRadios3">
                                    Custom
                                </label>
                                <input type="radio" id="gridRadios3" value="option3" name="gridRadios" />

                            </div>

                        </div>

                        <div className='form-input1'>
                            <input type="text" placeholder="Email address or phone number" />
                            <input type="password" placeholder=" New Password" />
                        </div>
                        <div>
                            <p className='small'>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                        </div>
                        <div>
                            <p className='small1'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                        </div><br/>
                        <div>
                        <button type="button" class="btn btn-success">Sign Up</button>

                        </div><br/>
                        {/* form input second end */}
                    </form>

                </div>
            </div>
        </>
    )
}
export default FacebookRegestrationPage