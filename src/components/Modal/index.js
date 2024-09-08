import React, { Children } from "react";
import './modal.css'

const Modal = ({ caption, onClose, children }) => {

    return (
        <div className="modal-background">
            <div className="modal-wrapper">
                <div className="modal-header">
                    <span>{caption}</span>
                    <button className="modal-close" type="button" onClick={onClose}>×</button>
                </div>
                <div className="modal-body">
                    {Children.map(children, (child) => (child))}
                </div>
            </div>
        </div>
    )
}

export default Modal
