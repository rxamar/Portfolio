import { IconButton } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import "./contact.css";
export const ContactContainer = () => {
  return (
    <div>
      <Element>
        <div className="contact_container">
          <h4>Contact</h4>
          <div className="contact_text">
            <p>
              Email : <span>rohitamar331@gmail.com</span>
            </p>
            <p>
              Mobile Number : <span>7397078069</span>
            </p>
            <p>
              Github Userid :
              <span> https://github.com/rxamar/Netflix-Clone-App.git</span>
            </p>

            <div className="contact__icons">
              <a href="google.com">
                <IconButton>
                  <Instagram />
                </IconButton>
              </a>
              <a href="google.com">
                <IconButton>
                  <LinkedIn />
                </IconButton>
              </a>
              <a href="google.com">
                <IconButton>
                  <Facebook />
                </IconButton>
              </a>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};
