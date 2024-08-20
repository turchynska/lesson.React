
import { useState } from 'react';
import css from "./LoginForm.module.css";

//контрольована форма
const LoginForm = ({onLogin}) => {
    const [values, setValues] = useState({
        login: "",
        password: ""
    });
//Використовуючи синтаксис обчислюваних властивостей об'єкта,
// ми можемо записати handleChange так, щоб значення оновлюваної властивості 
//стану було значенням атрибута name.
//   const handleLoginChange = (evt) =>{
//         setValues({
//             ...values,
//             login: evt.target.value,
//         });
//     }
//     const handlePwdChange = (evt) => {
//         setValues{(
//             ...values,
//             password: evt.target.value,
//         )};
//   }
//Це дозволяє обробляти зміну всіх полів однією функцією, замінивши дві раніше оголошені.
const handleChange = (evt) => {
    setValues({
        ...values,
        [evt.target.name]: evt.target.value,
    });
}

//Щоб отримати значення полів контрольованої форми під час відправлення,
//створюємо функцію, наприклад handleSubmit, в якій ми звертаємося до її стану.
const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values);
    console.log(values);

// Очищаємо форму
setValues({
    login: "",
    password: "",
});   
}
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='login'>Login:</label>
            <input
             type='text' 
             name='login' 
             value={values.login}
             onChange={handleChange}// Додаємо обробник onChange
             placeholder='Login'
             
             />
             <label htmlFor='password'>Password:</label>
            <input 
            type='password' 
            name='password' 
            value={values.password}
            onChange={handleChange} // Додаємо обробник onChange
            placeholder='Password'
            />
            <button type="submit">Login</button>
        </form>
        )
}
export default LoginForm
//імена властивостей об'єкта стану (login та password) збігаються зі значеннями атрибутів name елементів форми. 
//Ми використовуємо це пізніше для оптимізації обробки значень.












//неконтрольовані елементи
// import { useId } from 'react';
// const LoginForm = ({ onLogin }) => {
//     const loginId = useId();
//     const passwordId = useId();

//     const handleLogin = (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const userData = {
//             login: formData.get('login'),
//             password: formData.get('password')
//         };
//         onLogin(userData);
//     };
//     return(
//     <form>
//         <label htmlFor={loginId}>Login</label>
//         <input type="text" name="login" id={loginId}/>

//         <label htmlFor={passwordId}>Password</label>
//         <input type="password" name="password" id={passwordId}></input>

//         <button type="submit">Login</button>
//     </form>
//     )
// }

// export default LoginForm;
//  //неконтольвана форма
// const LoginForm = ({ onLogin }) => {
//     const handleSubmit = (evt) => {
//         evt.preventDefault();

       
       
//         const form = evt.target;
//         const {login, password} = form.elements;

//         console.log(login.password);
//         console.log(login.value, password.value);
       
//         onLogin({
//             login: login.value,
//             password: password.value,
//         })
//         form.reset();
//     }
// return(
//     <form onSubmit={handleSubmit} className={css.form}>
//         <input type="text" name="login" className={css.login}/>
//         <input type="password" name="password" className={css.password}/>
//         <button type="submit" name="submit" className={css.button}>Login</button>
//     </form>
// )
// }
