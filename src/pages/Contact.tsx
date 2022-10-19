import React, { useRef, useState } from "react";
import "../blocks/contact.css";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import ThankYou from "../components/ThankYou";
import CircularProgress from "@mui/material/CircularProgress";
import SideBar from "../components/SideBar";
import { CodeBlock, dracula } from "react-code-blocks";

export default function Contact(props: { setMenu: any }) {
    const [text, setText] = useState({
        name: "",
        email: "",
        message: "",
        date: new Date().toLocaleTimeString(),
    });
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
    const contactText = `const button = document.querySelector('#sendBtn');

 const message = {
     name: "${text.name}",
     email: "${text.email}",
     // Better break the line until I fix the overflow
     message: "${text.message}", 
     date: "${text.date}"
     }
    
 button.addEventListener('click', () => {
     form.send(message);
 })
`;

    const handleChange = (e: any) => {
        const { value, name } = e.target;
        setText({ ...text, [name]: value });
        console.log(text);
    };

    return (
        <div>
            <section className='contact'>
                <SideBar
                    nav={["contact"]}
                    compToShow={"contact"}
                    isActive={"contact"}
                />
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
                                <legend className='contact__legend'>
                                    name:
                                </legend>
                                <input
                                    type='text'
                                    className='contact__input'
                                    name='name'
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            <label className='contact__label'>
                                <legend className='contact__legend'>
                                    email:
                                </legend>
                                <input
                                    type='email'
                                    className='contact__input'
                                    name='email'
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                <div className='contact__code'>
                    <CodeBlock
                        text={contactText}
                        language={"js"}
                        showLineNumbers={true}
                        theme={dracula}
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}
