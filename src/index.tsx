import React, { Children } from "react"
import ReactDOM from "react-dom"
import './index.scss'
import Editor from "./lib/Editor"
import Phar from "./lib/Phar"
import Delim from "./lib/Delim"
import Quote from "./lib/Quote"
const tools: { [key: string]: React.FC<any> } = { Phar, Delim, Quote }

const payload = JSON.stringify(
    [
        ...Array.from({ length: 3 }).map((itm, idx) => ({
            data: {
                text: [
                    {
                        text: "BUSINESS TERMS AND CONDTIONS:",
                        styles: { fontStyle: 'italic' }
                    },
                    {
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " + (++idx),
                        styles: { fontStyle: 'normal' }
                    }
                ]
            },
            type: "Phar"
        })),
        {
            data: {
                text: 'Semua akan indah padahal tidak'
            },
            type: "Quote"
        },
        ...Array.from({ length: 2 }).map((itm, idx) => ({
            data: {
                text: [
                    {
                        text: "<b>BUSINESS TERMS AND CONDTIONS:</b>",
                        styles: { fontStyle: 'italic' }
                    },
                ]
            },
            type: "Phar"
        })),
        {
            data: {},
            type: "Delim"
        },
    ]
)
ReactDOM.render(
    <Editor
        payload={payload}
        tools={tools}
        onSave={(a) => console.log("saved ", JSON.parse(a))}
    />, document.getElementById("root"))