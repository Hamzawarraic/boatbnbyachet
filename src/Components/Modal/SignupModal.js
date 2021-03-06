import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import signupImg from '../../assets/images/signup-wrap.png';
import ConfirmEmail from '../Modal/ConfirmEmail';

const SignupModal = (props) => {
    const { handleShow, handleClose } = props;

    const [show, setShow] = useState(false);
  
    // const handleEmailClose = () => setShow(false);
    const handleEmailShow = () => {
        setShow(true);
        handleClose(true)
    }
    const closeModal = () => {
        alert("xyz");
        setShow(false)
    }
    return(
        <>
        <Modal
        show={handleShow}
        onHide={handleClose}
        open={handleShow}
        backdrop="static"
        keyboard={false}
        centered='true'
        size='xl'
        className="custom-modal custom-large-modal"
      >
        <div class="modal-content">
      <div class="modal-header no-border">
        <button type="button" class="btn-close"  onClick={handleClose}><i class="fa fa-times"></i></button>
      </div>
      <div class="modal-body">
        <div class="custom-modal-inner">
          <div class="side-img-left">
            <img src={signupImg} alt="" />
          </div>
          <div class="modal-content-inner-text">
            <h4 class="bold">Sign Up</h4>
            <div class="form-text-inner">
              <div class="row">
                <div class="col-md-6 col-sm-12 py-2">
                  <div class="custom-input-field">
                    <label>First Name</label>
                    <input  type="text" class="custom-input" placeholder="Abc" />
                  </div>
                  <div class="custom-input-field error-msj">
                    <label>Email</label>
                    <input type="email" class="custom-input" placeholder="Johnlaila@Email.Com" />
                    <p class="small-txt-error">Invalid email</p>
                  </div>
                    <div class=" custom-input-field">
                      <label>Password</label>
                      <div class="tooltip-wrapper">
                      <input id="password-field" type="password" class="custom-input" name="password" value="12345" />
                      <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                      <div class="tooltip-dialogue"> 
                        <p class="small-text bold">Choosing a password</p>
                        <p class="small-text dark-grey">Your password must include</p>
                        <ul>
                          <li class="small-text">At Least 8 characters</li>
                          <li class="small-text">Upper and lower case</li>
                          <li class="small-text">Numbers</li>
                          <li class="small-text">Special characters</li>
                        </ul>
                      </div>
                      </div>
                  </div>
                
                </div>
                <div class="col-md-6 col-sm-12 py-2">
                  <div class="custom-input-field">
                    <label>Last Name</label>
                    <input type="text" class="custom-input" placeholder="xyz" />
                  </div>
                  <div class="custom-input-field error-msj">
                    <label>Date of Birth </label>
                    <div id="datepicker" class="input-group date" data-date-format="mm-dd-yyyy">
                        <input class="custom-input" type="text" readonly="" />
                        <p class="small-txt-error">Enter date of birth</p>
                        <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                    </div>
                    </div>
                    <div class="custom-input-field pswd-field">
                      <label>Confirm Password</label>
                      <div class="p-relative">
                      <input id="password-field" type="password" class="custom-input" name="password" value="12345" />
                      <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-cnfrm-pswd"></span>
                    </div>
                </div>
                </div>
                <div class="col-sm-12 custom-margin text-right mobile-padding-btns">
                  <label class="custom-checkbox">
                    <input type="checkbox" />
                    <p class="small-text">I agree to BnBYacht's <a href="javascript:void(0)" class="underline-blue-link">Payment,Privacy Policy and Nondiscrimination Policy</a></p>
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="col-sm-12 py-2 pb-3 text-center">
                  <button class="custom-btn blue big-btn" onClick={handleEmailShow}>Agree & Continue </button>
                </div>
                <div class="col-sm-12 text-center">
                  <p class="small-text light">Already have an Account?  <a href="javascript:void(0)" class="underline-blue-link" data-bs-toggle="modal" data-bs-target="#login-modal" data-bs-dismiss="modal">Log in</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
      </Modal>
      <ConfirmEmail handleEmailShow={show} handleEmailClose={handleClose}/>
      </>
    )
}
export default SignupModal;