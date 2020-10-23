import React from "react";
import Chatbot from "react-simple-chatbot";
function chatBot(props){
    const config = {
        width: "700px",
        height: "400px",
        floating: true
    };
    const steps=[
        {
            id: "greet",
            message:" HEllo, Welcome to this chatbot made by my dumb developer devanshi",
            trigger:"Done"
        } ,
        {
            id: "Done",
            message:" Have a great day, stay safe. keep washing your hands please",
            end:true
        }
    ];
    return <Chatbot steps={steps} {...config}/>;
}
export default chatBot;