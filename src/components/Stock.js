import React from "react"
import "../ComponentsStyles/stock.css"
export default function Stock(props){
    return (
        <div>
            <p>{props.stock}</p>
        </div>
    )
}