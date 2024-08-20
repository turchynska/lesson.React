// import { useState } from 'react';
// import './App.css';

/***************контрольована форма */
// import LoginForm from './components/LoginForm/LoginForm';

// const App = () => {
// const handleLogin = (userData) => {
//   console.log("Login Data: ", userData)
// }
//   return(
//     <div>
//       <h1>Login</h1>
//       <LoginForm onLogin={handleLogin} />
//     </div>
//   )
// }

// export default App

/********* Чекбокси */
// const App = () =>{
//   const [hasAccepted, setHasAccepted] = useState(false);

//   const handleChange = (evt) => {
//     //Щоб дізнатися, обраний чекбокс чи ні при зміні, у функції-обробнику звертаємося до властивості DOM evt.target.checked, 
//     //значення якої буде true або false, і записуємо його в стан.
//     setHasAccepted(evt.target.checked)
//   };
//   return(
//     <div>
//       <label>
//       <input 
//       type='checkbox' 
//       name='terms'
//       checked={hasAccepted}
//       onChange={handleChange}
//       />
//       I accept terms and conditions
//       </label>
//       <button type='button' disabled={!hasAccepted}>Proceed</button>
//     </div>
//   )
// }
// export default App



/* радіо кнопки **********.
// const App = () => {
//   //Обране значення зберігається в стані.
//   const [coffeSize, setCoffeSize] = useState("sm");
// const handleSizeChange = (evt) =>{
//   setCoffeSize(evt.target.value);
// }
//   return(
//     <>
//     <h1>Select coffe size</h1>
//     <label>
//       <input 
//       type='radio' 
//       name="coffeSize" 
//       value="sm"
//       checked={coffeSize ==="sm"}
//       onChange={handleSizeChange}
//       />
//       Small
//     </label>
//     <label>
//       <input 
//       type='radio' 
//       name='coffeSize' 
//       value="md"
//       checked={coffeSize ==="md"}
//       onChange={handleSizeChange}
//       />
//       Medium
//     </label>
//     <label>
//       <input 
//       type='radio' 
//       name='coffeSize' 
//       value="lg"
//       checked={coffeSize ==="lg"}
//       onChange={handleSizeChange}
//       />
//       Large
//     </label>
//     </>
//   )
// }
// export default App
//Передамо кожній радіо-кнопці в групі атрибут onChange, значенням якого буде функція, 
//всередині якої ми записуємо обране значення в стан компонента.


/********робота з формою select */
//import LangSwitcher from "./components/LangSwitcher/LangSwitcher"
// function App() {
// const [lang, setLang] = useState("uk");
// return(
//   <>
//   <p>Select Language : {lang}</p>
//   < LangSwitcher value={lang} onSelect={setLang}/>
//   </>
// )
// }
// export default App 


/******контрольовані елементи****/
// import SearchBar from './components/SearchBar/SearchBar';
// function App() {
//   const handleChange = (userData) => {
//       console.log(userData);
//   };

//   return (
//       <div>
//           <h1>Please enter your login</h1>
//           <SearchBar onChange={handleChange} />
//       </div>
//   );
// }

// export default App;

/******неконтольовані елементи */
//// import LoginForm from './components/LoginForm/LoginForm';
// import MyComponent from './components/MyComponent/MyComponent';
// function App() {
// const handleLogin = (userData) => {
//   console.log(userData)
// }
// return (
//   <div>
//     <h1>Please login to your account !</h1>
// <LoginForm onLogin={handleLogin}/> 
// </div>
// )
// }

//Ім'я пропса для компонента форми може бути будь-яким, не обов'язково onLogin, це не вбудований пропс, як у елемента form.