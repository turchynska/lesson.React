//Контрольована елементи

// import React, { useState } from 'react';  // Додайте імпорт useState з React

// const SearchBar = ({ onChange }) => {
//     const [inputValue, setInputValue] = useState("");

//     const handleChange = (evt) => {
//         setInputValue(evt.target.value);
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         onChange(inputValue);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={handleChange}
//                 placeholder="Enter your login"
//             />
//             <p>{inputValue}</p>
//             <button type="submit" className="button">Submit</button>
//         </form>
//     );
// };

// export default SearchBar;