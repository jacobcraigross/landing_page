import {useState} from "react";

function Button() {
    const [value, setValue] = useState("click if you dare..");
    const dummyFunction = () => {
        setValue("BANG BANG !!!!!");
    };
    return (<button onClick={dummyFunction} title="dummyButton">{value}</button>);
}

export default Button;
