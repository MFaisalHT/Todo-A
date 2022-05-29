// import React from "react";

// const users = [
//   {
//     fullName: "Anisul Islam",
//     age: 32,
//     phones : [
//       {home : "01710444"},
//       {office : "87787788"}
//     ]
//   },
//   {
//     fullName: "Abdul Karim",
//     age: 34,
//     phones : [
//       {home : "01710444"},
//       {office : "87787788"}
//     ]
//   }
// ]

// export default function App() {
//   return (
//     <div>
//       <h1>Nested Lists</h1>
//       {users.map((user,index)=> (
//         <article key={index}>
//           <h3>FullName: {user.fullName}</h3>
//           <p>Age: {user.age}</p>
//           {user.phones.map((phone, index) =>(
//             <div key={index}>
//               <p>{phone.home}</p>
//               <p>{phone.office}</p>
//             </div>
//             ))}
//         </article>
//         ))}
//     </div>
//   )
// }



//// tutorial 15////

// import React from "react";
// import Card1 from "./components/Card1";
// import Card2 from "./components/Card2";

// function App(){
//   return (
//     <div>
//       <Card1 name="card1" desc="this is card1"/>
//       <Card2 name="card2"/>
//     </div>
//   )
// }
// export default App;


///// tutorial 17 ///


// import React from 'react'
// import STATE from './STATE'
// import CONDITIONAL_RENDERING from './CONDITIONAL_RENDERING/index'

// export default function App() {
//   return (
//     <div>
//       <CONDITIONAL_RENDERING />
//     </div>
//   )
// }

/// tutorial 18 //


// import React from "react";
// import EVENT_HANDLER_CLASS from "./EVENT_HANDLER_CLASS/index";
// export default function App(){
//   return(
//     <div>
//       <EVENT_HANDLER_CLASS />
//     </div>
//   )
// }

////// Tutorial 19 //////

// import React from "react";
// import EVENT_BINDING from "./EVENT_BINDING/index";


// export default function App() {
//   return (
//     <div>
//       <EVENT_BINDING />
//     </div>
//   )
// }


////      Tutorial 20    ////

// import React from 'react'
// import HOOKS_USESTATE from './HOOKS_USESTATE/index1'
// import HOOKS_USESTATE2 from './HOOKS_USESTATE/index2'

// export default function App() {
//   return (
//     <div>
//       <HOOKS_USESTATE2 />
//     </div>
//   )
// }

/////////// Tutorial 21/22 //////////

// import React from "react";
// import FORM from "./components/FORM/FORM";

// export default function App() {
//   return (
//     <div>
//       <FORM />
//     </div>
//   )
// }


/////   tutorial 23 //////
// import React from 'react'

// import Child from './components/SATET_LIFTING/Child'
// export default function App() {

//   const data = "I am from parents()app";

//   const handleChildData= (childData) => {
//     console.log("App: "+childData);

//   };
//   return (
//     <div>
//       <Child data={data} onChildData={handleChildData}/>
//     </div>
//   );
// }



/////// tutorial 24 ////
// import React from 'react'
// import Home from './components/SATET_LIFTING/Home'

// export default function App() {
//   return (
//     <div><Home /></div>
//   )
// }




import React from 'react'
import Home from './components/Home'


function App() {
  return <>
      <Home />
    </>
}

export default App





