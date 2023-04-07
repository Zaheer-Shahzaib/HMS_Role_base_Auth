import React from "react";


import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Label,
  } from "reactstrap";
  
  import { useEffect, useRef, useState } from "react";
 import axios from "../axios/axios";
  import { useLocation, useNavigate } from "react-router-dom";

  const aler = () => {
    alert("We are Working on it Please sign up with credentials");
  };
  
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EML_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const Register = () => {
    //sharedPrfrences
  //   const data = localStorage.getItem("role");
  // const Navigate =useNavigate();
   
  //   const userRef = useRef();
  //   const errRef = useRef();
  //   const emailRef = useRef();
  
  //   const [user, setUser] = useState("");
  //   const [validName, setValidName] = useState(false);
  //   const [userFocus, setUserFocus] = useState(false);
  
  //   const [pwd, setPwd] = useState("");
  //   const [validPwd, setValidPwd] = useState(false);
  //   const [pwdFocus, setPwdFocus] = useState(false);
  
  //   const [email, setEmail] = useState("");
  //   const [validEmail, setValidEmail] = useState(false);
  //   const [emailFocus, setEmailFocus] = useState(false);
  
  //   const [phone, setPhone] = useState("");
  //   const [phoneFocus, setPhoneFocus] = useState(false);
  
  //   const [errMsg, setErrMsg] = useState("");
  //   const [success, setSuccess] = useState(false);
  
  //   useEffect(() => {
  //     userRef.current.focus();
  //   }, []);
  
  //   useEffect(() => {
  //     setValidName(USER_REGEX.test(user));
  //   }, [user]);
  
  //   useEffect(() => {
  //     setValidPwd(PWD_REGEX.test(pwd));
  //   }, [pwd]);
  
  //   useEffect(() => {
  //     setValidEmail(EML_REGEX.test(email));
  //   }, [email]);
  
  //   useEffect(() => {
  //     emailRef.current
  //   }, []);
  
  //   useEffect(() => {
  //     setErrMsg("");
  //   }, [user, pwd, email]);
  
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const v1 = USER_REGEX.test(user);
  //     const v2 = PWD_REGEX.test(pwd);
  //     const v3 = EML_REGEX.test(email);
  
  //     // if (!v1 || !v2 ||! v3) {
  //     //   setErrMsg("Invalid Entry");
  //     //   return;
  //     // }
  //     try {
  //       console.log(email);
  //       const response = await axios.post(
  //         "/api/v1/auth/signup",
  //         { fullname: user, password: pwd, email, phone, role_name: data },
  //         {
  //           Headers: { "Content-Type": "application/json" },
  //           withCredentials: true,
  //         }
  //       );
  //       console.log(JSON.stringify(response?.data));
  //       setSuccess(true);
  //       //clear the context in the fields
  //       setEmail(" ");
  //       setPwd(" ");
  //       setPhone(" ");
  //       setUser("");
  //     } catch (err) {
  //       if (!err?.response) {
  //         setErrMsg("server not response");
  //       } else if (err.response?.status === 409) {
  //         setErrMsg("UserName Taken");
  //       } else if (user || pwd || email || phone === "") {
  //         setErrMsg("Please Fill all requirments");
  //       } else {
  //         setErrMsg("Registartion Failed");
  //       }
  //     errRef.current.focus();
  //     }
  //   };
  
  //   console.log(data);
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="user">User Name</label>
            <input type="text" className="form-control" id="user"  />
           <label htmlFor="pass">password</label>
           <input type="text" className="form-control" id="user"  />
            
          </div>
        </form>
      </div>
      
    );
  };
  
  export default Register;
  