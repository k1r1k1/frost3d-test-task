import React from "react";
import './sideNav.css'

const SideNav = () => {
    return (
        <div className="sideNav">
            <ul>
                {
                    Array(100).fill(0).map((_, index) => (<li key={`side-item-${index}`}>{index}-hi</li>))
                }
            </ul>
        </div>
    )
}

export default SideNav
