import React from "react";
import "../blocks/thanks.css";

export default function ThankYou() {
    return (
        <div className='thanks'>
            <h2 className='thanks__title'>Thank you! 🤘</h2>
            <p className='thanks__message'>
                Your message has been accepted. You will receive answer really
                soon!
            </p>
        </div>
    );
}
