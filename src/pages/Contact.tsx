import React from "react";
import "../blocks/contact.css";
import Footer from "../components/Footer";

export default function Contact(props: { setMenu: any }) {
    const handleBack = () => {
        props.setMenu("menu");
    };
    return (
        <section className='contact'>
            <div>
                <p className='back' onClick={handleBack}>
                    Back
                </p>
                <form className='contact__form'>
                    <label className='contact__label'>
                        <legend className='contact__legend'>name:</legend>
                        <input
                            type='text'
                            name='name'
                            className='contact__input'
                        />
                    </label>

                    <label className='contact__label'>
                        <legend className='contact__legend'>email:</legend>
                        <input
                            type='text'
                            name='email'
                            className='contact__input'
                        />
                    </label>
                    <label className='contact__label'>
                        <legend className='contact__legend'>message:</legend>
                        <textarea className='contact__text-area'></textarea>
                    </label>
                    <button type={"submit"} className='contact__submit'>
                        submit-message
                    </button>
                </form>
            </div>

            <Footer />
        </section>
    );
}
