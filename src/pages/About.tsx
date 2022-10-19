import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../components/Footer";
import "../blocks/about.css";

export default function About(props: { setMenu: any }) {
    const handleBack = () => {
        props.setMenu("menu");
    };
    return (
        <section className='about'>
            <div>
                <p className='back' onClick={handleBack}>
                    Back
                </p>
                <div className='about__options'>
                    <Accordion
                        sx={{
                            bgcolor: "#1e2d3d",
                            fontFamily: "Fira Code",
                            color: "white",
                            borderRadius: 0,
                        }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1a-content'
                            id='panel1a-header'>
                            <Typography sx={{ fontFamily: "Fira Code" }}>
                                personal-info
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontFamily: "Fira Code" }}>
                                Hello there. My name is Amit Bar-Gil and I'm 22
                                years old and currently live in Afula (North
                                Israel). I love to learn new things, challenge
                                myself and collaborate with others on projects
                                and interesting ideas. Some of my hobbies:
                                music, sport, and chess.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{
                            bgcolor: "#1e2d3d",
                            fontFamily: "Fira Code",
                            color: "white",
                        }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel2a-content'
                            id='panel2a-header'>
                            <Typography sx={{ fontFamily: "Fira Code" }}>
                                professional-info
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontFamily: "Fira Code" }}>
                                I'm a full stack web developer with experience
                                of developing, maintaining, testing and
                                deploying E2E web applications. Some of my
                                methodologies:
                                <ul>
                                    <li>
                                        REST API for the server side and
                                        Single-Page-Application for the
                                        front-end implementation.
                                    </li>
                                    <p> </p>
                                    <li>
                                        OOP & COP patterns: reusability, single
                                        task functions, generic functions &
                                        classes.
                                    </li>
                                    <p> </p>
                                    <li>
                                        Great balance between Imperative and
                                        declarative programming approaches.
                                    </li>
                                    <p> </p>
                                    <li>
                                        Test-Driven-Development using modern
                                        testing frameworks.
                                    </li>
                                    <p> </p>
                                    <li>
                                        Attention to performance, efficiency,
                                        and edge cases.
                                    </li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <Footer />
        </section>
    );
}
