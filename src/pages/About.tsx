import React from "react";

type AboutProps = {
    title: string;
}

const About: React.FC<AboutProps> = ({title}) => {
    return (
        <>
        <h1>About Page</h1>
        <p>This is the about page</p>
        <p>{title}</p>
        </>

        
    );
    };


export default About;