#### React Tutorial

1. ###### How to create and nest component?

   a. Use ```npx create-react-app project_name``` to provide env for react develop, like ```ng new project_name``` in angular. We get this initial project directory:

   App.js is main file in react, like app.component.ts in angular project, you can choose what component you want to display via add them to it.

   <img src="./image-20230916165419211.png" alt="image-20230916165419211" style="zoom:50%;" />

   b. Any function could be a component it can be reuse any where you want, define once use anywhere.(like JDK, compile once,run anywhere),example below: 

   ###### // Note: component must named starts with CAPS letter

   ```react
   export default function My1stReactComponent() {
     return (
       <h1>Hello Forrest!</h1>
     );
   }
   // or this way, The default keyword can be omitted, but in same file can only have 1 
   // default function
   export function My1stReactComponent() {
     return (
       <h1>Hello Forrest!</h1>
     );
   }
   ```

2. ###### How to pass props to other component

   ```react
   export default function My1stReact() {
       const data = {
           name: 'Forrest',
           age: 26
       }
       return (
         // <Component_name need_pass_data={real_data} />
           <><My2rdReact data={data}/></>
       )
   }
   
   export function My2rdReact(props) {
       const {name, age}= props.data;
       return (
           <>
               <h1> I'm {name}!</h1>
               <br/>
               <h2>I'm {age} !</h2>
           </>
       )
   }
   ```



4. ###### How to choose what content to display

   You can choose index.js in root directory then add js file what you want to display.

5. ###### How to respond to events and update the screen

   I would like to use a click event to introduce how to handle event in React.

   ```react
   // 1.  
   export default function Button(props) {
     
      /* function handleClick() {
           alert('clicked!')
       }
   
       return (
           <button onClick={handleClick}>
               click me !
           </button>
       )*/
   
      /* return (
           <button onClick={function handleClick2() {
               alert("clicked2")
           }
           }>
               click me !
           </button>
       )*/
   
       return (
           <button onClick={() => alert('click by anonymous function')}>click me</button>
       )
   };
   
   // 2.
   export function AlertButton({message, children}) {
       return (
           <button onClick={() => alert(message)}>
               {children}
           </button>
       );
   }
   
   export function Toolbar() {
       return (
           <div>
               <AlertButton message="Playing movie now！">
                  Play Chang An (长安三万里)
               </AlertButton>
               <AlertButton message="正在上传！">
                  Upload image of Himalaya
               </AlertButton>
           </div>
       );
   }
   ```

   

6. ###### How to share data between components