import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import "./footer.css";

export const Footer = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [tooltipContent, setTooltipContent] = useState("");

  const clickHandler = (content) => {
    setShow(!show);
    switch (content) {
      case "copyright":
        setTooltipContent("Copyright by Ella und Uwe");
        break;
      case "impressum":
        setTooltipContent("Impressum interessiert nicht");
        break;
      case "about":
        setTooltipContent("Ella und Uwe are the best WebDevs Ever, Ever, Ever");
        break;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav className="footer py-4 d-flex justify-content-around">
        <button
          className="footerButton"
          ref={target}
          onClick={() => clickHandler("copyright")}
        >
          Copyright
        </button>
        <button
          className="footerButton"
          ref={target}
          onClick={() => clickHandler("impressum")}
        >
          Impressum
        </button>
        <button
          className="footerButton"
          ref={target}
          onClick={() => clickHandler("about")}
        >
          About
        </button>

        <Overlay target={target.current} show={show} placement="top" rootClose>
          {(props) => (
            <Tooltip id="overlay-example" {...props} className="tooltip">
              <div id="target">{tooltipContent}</div>
            </Tooltip>
          )}
        </Overlay>
      </nav>
    </div>
  );
};
