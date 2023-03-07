import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './aa.png';
import app from '../../css/app.css'

const animals = ["犬", "ゴリラ", "たぬき"];

const ClickAction = ({name}) => {
    return (
        <div>
            <img src={logo}/>
            <h3>配列の操作</h3>
            <ul>
                <li>{animals[0]}</li>
                <li>{animals[1]}</li>
                <li>{animals[2]}</li>
                <li>{name}</li>
            </ul>
        </div>
    );
};

export default ClickAction;

if (document.getElementById('clickAction')) {
    const Index = ReactDOM.createRoot(document.getElementById("clickAction"));
    Index.render(<ClickAction name="動物"/>)
}
