import React from "react";
import Chatbot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
function chatBot(props){
    const theme = {
        background: '#14274e',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#000000',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#000000',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };
    const config = {
        width: "700px",
        height: "400px",
        floating: true
    };
    const steps=[
        {
            id: "greet",
            message:" Hello, Welcome to this chatbot made by my dumb developer devanshi",
            trigger:"Ask Name"
        } ,
        {
            id: "Ask Name",
            message: "Please type your name?",
            trigger: "Waiting user input for name"
        },

        {
            id: "Waiting user input for name",
            user: true,
            trigger: "remark after name"
        },
        {
            id: "remark after name",
            message: "hello {previousValue}, nice to meet ya",
            trigger: "Ask where from"
        },
        {
            id: "Ask where from",
            message: "Please enter where you from",
            trigger: "Waiting user input for place info"
        },
        {
            id: "Waiting user input for place info",
            user: true,
            trigger: "comment on place one"
        },
        {
            id: "comment on place one",
            message: "{previousValue}'s a good place, isnt it!!",
            trigger: "comment on place"
        },
        {
            id: "comment on place",
            message: "I really want to visit {previousValue}",
            trigger: "Asking options to eat"
        },
        {
            id: "Asking options to eat",
            message: "Hi Please click on what you want to eat!",
            trigger: "Displaying options to eat"
        },
        {
            id: "Displaying options to eat",
            options: [
                {
                    value: "pizza",
                    label: "Pizza",
                    trigger: "Asking for Tomatoes in Pizza"
                },
                {
                    value: "burger",
                    label: "Burger",
                    trigger: "Burger Not available"
                }
            ]
        },
        {
            id: "Burger Not available",
            message: "Sorry, We don't have burger available at the moment. Would you like to try our pizza?",
                trigger: "Asking for pizza after burger"
},
    {
        id: "Asking for pizza after burger",
            options: [
        {
            value: true,
            label: "Yes",
            trigger: "Asking for Tomatoes in Pizza"
        },
        {
            value: "false",
            label: "No",
            trigger: "Done"
        }
    ]
    },
    {
        id: "Asking for Tomatoes in Pizza",
            message: "Would you like to have tomatoes in your pizza",
        trigger: "Adding Tomatoes in Pizza"
    },
    {
        id: "Adding Tomatoes in Pizza",
            options: [
        {
            value: true,
            label: "Yes",
            trigger: "Asking for Mushroom in Pizza"
        },
        {
            value: "false",
            label: "No",
            trigger: "Asking for Mushroom in Pizza"
        }
    ]
    },

    {
        id: "Asking for Mushroom in Pizza",
            message: "Would you like to have mushroom in your pizza",
        trigger: "Adding Mushroom in Pizza"
    },

    {
        id: "Adding Mushroom in Pizza",
            options: [
        {
            value: true,
            label: "Yes",

            trigger: "Asking for Corn in Pizza"
        },
        {
            value: "false",
            label: "No",
            trigger: "Asking for Corn in Pizza"
        }
    ]
    },
    {
        id: "Asking for Corn in Pizza",
            message: "Would you like to have corn in your pizza",
        trigger: "Adding Corn in Pizza"
    },

    {
        id: "Adding Corn in Pizza",
            options: [
        {
            value: true,
            label: "Yes",
            trigger: "Asking for Veggies in Pizza"
        },
        {
            value: "false",
            label: "No",
            trigger: "Asking for Veggies in Pizza"
        }
    ]
    },

    {
        id: "Asking for Veggies in Pizza",
            message: "Would you like to have veggies in your pizza",
        trigger: "Adding Veggies in Pizza"
    },

    {
        id: "Adding Veggies in Pizza",
            options: [
        {
            value: true,
            label: "Yes",
            trigger: "Done"
        },
        {
            value: "false",
            label: "No",
            trigger: "Done"
        }
    ]
    },
        {
            id: "Done",
            message:" thansk for ordering <br/>Have a great day, stay safe. keep washing your hands please",
            end:true
        }
    ];
    return   <ThemeProvider theme={theme}>
        <Chatbot steps={steps} {...config}/>;
    </ThemeProvider>;
}
export default chatBot;