import React from 'react';
//select
const LangSwitcher = ({ value, onSelect }) => {
    const selectID = "lang-select"; 

    return (
        <div>
            <label htmlFor={selectID}>Choose Language</label>
            <select
                id={selectID}
                value={value}
                onChange={(evt) => onSelect(evt.target.value)} 
            >
                <option value="en">English</option>
                <option value="uk">Ukrainian</option>
                <option value="pl">Polish</option>
            </select>
        </div>
    );
};
export default LangSwitcher
//Якщо селект використовується поза формою, то ми працюємо з ним як з контрольованим елементом