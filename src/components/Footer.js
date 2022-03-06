import React from "react"
import "./footer.css"

export default function Footer(){
    const date = new Date()
    const year = date.getFullYear()
    return(
        <footer>
            <h4>Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }}/> {year}</h4>
        </footer>
    )
}