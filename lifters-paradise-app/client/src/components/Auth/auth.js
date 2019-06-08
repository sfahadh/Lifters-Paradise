// import React, { Component } from 'react';
// import decode from 'jwt-decode'
// import { loginUser, registerUser } from '../../services/apiHelper'
// import { Switch, Route, withRouter } from 'react-router-dom'
// import Login from './components/LandingPage/Login'
// import Register from './components/LandingPage/Register'

// class Auth extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             currentUser: null,
//             authFormData: {
//                 // first_name: "",
//                 // last_name: "",
//                 username: "",
//                 email: "",
//                 password: ""
//             }
//         }
//         this.handleLogin = this.handleLogin.bind(this);
//         this.handleRegister = this.handleRegister.bind(this);
//         this.authHandleChange = this.authHandleChange.bind(this);
//         this.handleLoginButton = this.handleLoginButton.bind(this);
//         this.handleLogout = this.handleLogout.bind(this);
//     }

//     componentDidMount() {
//         const checkUser = localStorage.getItem("jwt")
//         if (checkUser) {
//             const user = decode(checkUser)
//             this.setState({
//                 currentUser: user
//             })
//         }
//     }

//     async handleLogin() {
//         console.log("clicked")
//         const userData = await loginUser(this.state.authFormData)
//         if (userData) {
//             this.setState({
//                 currentUser: decode(userData.token)
//             })
//             localStorage.setItem("jwt", userData.token);
//         } else {
//             this.props.history.push('/auth/login');
//         }
//     }

//     async handleRegister(e) {
//         e.preventDefault()
//         const userData = await registerUser({ "user": this.state.authFormData })
//         console.log("info", userData)
//         this.handleLogin();
//     }

//     handleLogout() {
//         localStorage.removeItem("jwt")
//         this.setState({
//             currentUser: null
//         })
//     }

//     authHandleChange(e) {
//         const { name, value } = e.target;
//         this.setState(prevState => ({
//             authFormData: {
//                 ...prevState.authFormData,
//                 [name]: value
//             }
//         }))
//         console.log(this.state.authFormData.username)
//     }

//     handleLoginButton(e) {
//         e.preventDefault();
//         this.handleLogin();
//         this.props.history.push('/');
//         console.log(this.state.authFormData)
//     }

//     render() {
//         const { currentUser, authFormData } = this.state

//         return (
//             <div className="App">
//                 <h1>Jeopardy Blog</h1>
//                 { currentUser ? <p>Hello, {currentUser.username}</p> : null }
//                     <Route exact path="/" 
//                         render={() => currentUser ? 
//                         <button 
//                             className="button" 
//                             type="button" 
//                             onClick={this.handleLogout}>Log Out
//                         </button> : 
//                         <button 
//                             className="button" 
//                             type="button" 
//                             onClick={() => this.props.history.push('/auth/login')}>Log In
//                         </button>} 
//                     />

//                     <Route 
//                         exact path="/" 
//                         render={() => 
//                         <Login 
//                             handleLogin={props.handleLogin} 
//                             handleChange={props.authHandleChange} 
//                             formData={props.authFormData} 
//                             handleLoginButton={props.handleLoginButton} 
//                         />} 
//                     />
                            
//                     <Route 
//                         exact path="/register" 
//                         render={() => 
//                         <Register 
//                             handleRegister={props.handleRegister} 
//                             handleChange={props.authHandleChange} 
//                             formData={props.authFormData} 
//                         />} 
//                     />

//             </div>
//         );
//     }
// }

// export default withRouter(Auth);