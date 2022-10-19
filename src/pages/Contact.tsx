import React, { useRef, useState } from "react";
import "../blocks/contact.css";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import ThankYou from "../components/ThankYou";
import CircularProgress from "@mui/material/CircularProgress";

export default function Contact(props: { setMenu: any }) {
    const [sended, setSended] = useState(false);
    const [isInDeliver, setDeliver] = useState(false);
    const form = useRef<any | null>();
    const handleBack = () => {
        props.setMenu("menu");
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDeliver(true);
        emailjs
            .sendForm(
                "service_rgyi2cv",
                "template_2xfwz2t",
                form.current,
                "Myjq48-ct_Ytji2Aw"
            )
            .then(
                (result) => {
                    if (result.status === 200) {
                        setSended(true);
                        setDeliver(false);
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className='contact'>
            <div>
                <p className='back' onClick={handleBack}>
                    Back
                </p>
                {!sended ? (
                    <form
                        className='contact__form'
                        ref={form}
                        onSubmit={onSubmit}>
                        <label className='contact__label'>
                            <legend className='contact__legend'>name:</legend>
                            <input
                                type='text'
                                className='contact__input'
                                name='name'
                                required
                            />
                        </label>

                        <label className='contact__label'>
                            <legend className='contact__legend'>email:</legend>
                            <input
                                type='email'
                                className='contact__input'
                                name='email'
                                required
                            />
                        </label>
                        <label className='contact__label'>
                            <legend className='contact__legend'>
                                message:
                            </legend>
                            <textarea
                                className='contact__text-area'
                                name='message'
                                required
                            />
                        </label>
                        <button type={"submit"} className='contact__submit'>
                            submit-message
                        </button>
                        {isInDeliver && (
                            <div className='contact__progress'>
                                <CircularProgress />
                            </div>
                        )}
                    </form>
                ) : (
                    <ThankYou />
                )}
            </div>

            <Footer />
        </section>
    );
}
