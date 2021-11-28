import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import Instagram from "@material-ui/icons/Instagram";
import Github from "@material-ui/icons/GitHub";
import LinkdIn from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/arslaan578/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/maitexh/image/upload/v1638001774/avatars/nldqzqwqp7mrvbswrvef.jpg"
              alt="Founder"
            />
            <Typography>Arslan Iqbal</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span></span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://github.com/Arslaan123Iqbal" target="blank">
              <Github className="youtubeSvgIcon" />
            </a>

            <a
              href="https://www.linkedin.com/in/arslan-iqbal-7989961a0/"
              target="blank"
            >
              <LinkdIn className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
