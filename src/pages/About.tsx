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
                <Accordion
                    sx={{
                        bgcolor: "#1e2d3d",
                        fontFamily: "Fira Code",
                        color: "white",
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <Footer />
        </section>
    );
}
