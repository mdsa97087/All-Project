// import React,{useState} from "react";
// import './User.css'
// import {openForm,closeForm} from "../App"

// function UserPage() {
//       const [open, setOpen] = useState('Open Form')
//       const [close, setClose] = useState(true)
//       const style1={
//             display:"block"
//       }
//       const style2={
//             display:"none"
//       }


//       function openForm(){
//             setOpen(open==="Open Form" ? style1.style
//             : style2.style
//             )
//       }

//   return (
//     <div>
//       hello userpage
      
//       <h2>Popup Form</h2>
//       <button className="open-button" onClick={openForm}>{open}</button>
//       <div className="form-popup" >
//   <form action="/action_page.php" className="form-container">
//     <h1>Login</h1>

//     <label for="email"><b>Email</b></label>
//     <input type="text" placeholder="Enter Email" name="email" required/>

//     <label for="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="psw" required/>

//     <button type="submit" className="btn">Login</button>
//     <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
//   </form>
// </div>



//     </div>
//   );
// }

// export default UserPage;
