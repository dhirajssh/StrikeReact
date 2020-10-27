import React from 'react';
import {Link} from 'react-router-dom';

function Signup() {
  return (
    <div className="container">
        <div class="row py-5 mt-4 align-items-center">
            {/* <!-- For Demo Purpose --> */}
            <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt=""
                    class="img-fluid mb-3 d-none d-md-block"/>
                <h1>Create an account</h1>

            </div>

            {/* <!-- Registeration Form --> */}
            <div class="col-md-7 col-lg-6 ml-auto">
                <form action="#">
                    <div class="row">

                        {/* <!-- First Name --> */}
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-user text-muted"></i>
                                </span>
                            </div>
                            <input id="firstName" type="text" name="firstname" placeholder="Full Name"
                                class="form-control bg-white border-left-0 border-md"/>
                        </div>

                        

                        {/* <!-- User Name --> */}
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-user text-muted"></i>
                                </span>
                            </div>
                            <input id="firstName" type="text" name="firstname" placeholder="Enter a username"
                                class="form-control bg-white border-left-0 border-md"/>
                        </div>


                        {/* <!-- Last Name -->
                        <!-- <div class="input-group col-lg-6 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-user text-muted"></i>
                                </span>
                            </div>
                            <input id="lastName" type="text" name="lastname" placeholder="Last Name"
                              
                          class="form-control bg-white border-left-0 border-md">
                        </div>  */}

                        {/* Email address */}
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-envelope text-muted"></i>
                                </span>
                            </div>
                            <input id="email" type="email" name="email" placeholder="Email Address"
                                class="form-control bg-white border-left-0 border-md"/>
                        </div>

                        {/* <!-- Phone Number --> */}
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-phone-square text-muted"></i>
                                </span>
                            </div>

                            <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number"
                                class="form-control bg-white border-md border-left-0 pl-3"/>
                        </div>
                          {/* College Name */}
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fas fa-graduation-cap text-muted"></i>
                                </span>
                            </div>
                          <input id="CollegeName" type="text" name="College Name" placeholder="College Name"
                                class="form-control bg-white border-md border-left-0 pl-3"/>
                        </div>
                        
                        
                        


                        {/* <!-- Job --> */}
                        {/* <!-- <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-black-tie text-muted"></i>
                                </span>
                            </div>
                            <select id="job" name="jobtitle"
                                class="form-control custom-select bg-white border-left-0 border-md">
                                <option value="">Choose your job</option>
                                <option value="">Designer</option>
                                <option value="">Developer</option>
                                <option value="">Manager</option>
                                <option value="">Accountant</option>
                            </select>
                        </div> --> */}

                        {/* <!-- Password --> */}
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="password" type="password" name="password" placeholder="Password"
                                class="form-control bg-white border-left-0 border-md"/>
                        </div>

                        {/* <!-- Password Confirmation --> */}
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="passwordConfirmation" type="password" name="passwordConfirmation"
                                placeholder="Confirm Password" class="form-control bg-white border-left-0 border-md"/>
                        </div>

                        {/* <!-- Submit Button --> */}
                        <div class="form-group col-lg-12 mx-auto mb-0">
                            <a href="#" class="btn btn-primary btn-block py-2">
                                <span class="font-weight-bold">Create your account</span>
                            </a>
                        </div>

                        {/* <!-- Divider Text --> */}
                        <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                            <div class="border-bottom w-100 ml-5"></div>
                            <span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
                            <div class="border-bottom w-100 mr-5"></div>
                        </div>

                        {/* <!-- Social Login --> */}
                        {/* <!-- <div class="form-group col-lg-12 mx-auto">
                            <a href="#" class="btn btn-primary btn-block py-2 btn-facebook">
                                <i class="fa fa-facebook-f mr-2"></i>
                                <span class="font-weight-bold">Continue with Facebook</span>
                            </a>
                            <a href="#" class="btn btn-primary btn-block py-2 btn-twitter">
                                <i class="fa fa-twitter mr-2"></i>
                                <span class="font-weight-bold">Continue with Twitter</span>
                            </a>
                        </div> --> */}

                        {/* <!-- Already Registered --> */}
                        <div class="text-center w-100">
                            <p class="text-muted font-weight-bold">Already Registered?<Link to="/"
                                    class="text-primary ml-2">Login</Link></p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
