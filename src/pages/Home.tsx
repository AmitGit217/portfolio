import React from "react";
import "../blocks/home.css";

function Home() {
    return (
        <section className='home'>
            <div className='home__blur-green'></div>
            <div className='home__blur-blue'></div>
            <div className='home__main-text'>
                <p className='home__per-title'>Hi all. I am</p>
                <h1 className='home__title'>Amit</h1>
                <p className='home__prof'>{"> "}Software developer</p>
            </div>
            <div className='home__github'>
                <p className='home__github-comment'>
                    {"// "}find my profile on Github:{" "}
                </p>
                <p className='home__github-link'>
                    <span className='const'>const</span>{" "}
                    <span className='var'>githubLink</span>{" "}
                    <span className='equal-sign'>=</span>{" "}
                    <span>
                        <a
                            className='value'
                            target={"_blank"}
                            rel='noreferrer'
                            href='https://github.com/AmitGit217'>
                            "https://github.com/AmitGit217"
                        </a>
                    </span>
                </p>
            </div>
        </section>
    );
}

export default Home;
