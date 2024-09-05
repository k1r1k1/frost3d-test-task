import React, { Children } from "react";
import './page.css'

const Page = ({ children }) => {
    return (
        <div className="page">
            {
                Children.map(children, (child) => (child))
            }
        </div>
    )
}

export default Page
