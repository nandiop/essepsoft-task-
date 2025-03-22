import React, { useState, useEffect } from "react";
import { data } from "./data";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/fonts.css';

function Pagination() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => setFadeIn(true), 20);
    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 270);
    return () => clearTimeout(timer);
  }, [selectedIndex]);

  const fadeStyle = {
    opacity: fadeIn ? 1 : 0,
    transition: "opacity 0.8s cubic-bezier(0.1, 0, 0.1, 1)",
    visibility: fadeIn ? "visible" : "hidden",
    fontFamily: 'Khand, sans-serif'
  };

  return (
    <div className="p-4" style={{ fontFamily: 'Khand, sans-serif' }}>
      <div className="justify-content-center gap-3 mb-4 pl-20">
        {data.map((number, index) => (
          <Button
            key={number}
            onClick={() => setSelectedIndex(index)}
            className={`${selectedIndex === index ? "bg-gray-300 !important" : "bg-white"}`}
            style={{ 
              width: "150px",
              border: "none",
              borderBottom: selectedIndex === index ? "2px solid black" : "none",
              backgroundColor: selectedIndex === index ? "#F0F0F0" : "white",
              boxShadow: "none",
              outline: "none",
              fontFamily: 'Khand, sans-serif'
            }}
          >
            <img src={number.tabIcon} alt="/" className="w-30" />
          </Button>
        ))}
      </div>

      <div className="d-flex">
        <div className="w-50">
          <img 
            src={data[selectedIndex].img} 
            alt={`Content ${selectedIndex + 1}`} 
            className="img-fluid"
            style={fadeStyle}
          />
        </div>
        <div className="w-50 ps-4 mb-10">
          <h1 style={{ 
            color: "#54595F",
            ...fadeStyle,
            marginBottom: "30px",
            fontWeight: 400
          }}>{data[selectedIndex].heading}</h1>
          <p style={{
            ...fadeStyle,
            marginBottom: "30px",
            color: "gray",
            fontWeight: 300
          }}>{data[selectedIndex].subHeading}</p>
          
          <div className="grid-template-columns-2 gap-0">
            <div className="d-flex w-100 gap-0">
              {data[selectedIndex].icons.slice(0, 4).map((icon, index) => (
                <div key={index} className="text-center w-50 p-3 d-flex flex-column align-items-center justify-content-center" 
                  style={{ 
                    height: "150px", 
                    borderColor: "#204A63", 
                    borderWidth: "0.5px",
                    ...fadeStyle,
                    transitionDelay: `${index * 0.15}s`
                  }}>
                  <img src={icon.src} alt={icon.text} className="mb-2" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                  <p className="mb-0 text-center" style={{ fontWeight: 500 }}>{icon.text}</p>
                </div>
              ))}
            </div>
            <div className="d-flex w-100 gap-0">
              {data[selectedIndex].icons.slice(4, 8).map((icon, index) => (
                <div key={index} className="p-3 text-center w-25 d-flex flex-column align-items-center justify-content-center" 
                  style={{ 
                    height: "150px", 
                    borderColor: "#204A63", 
                    borderWidth: "0.5px",
                    ...fadeStyle,
                    transitionDelay: `${(index + 4) * 0.15}s`
                  }}>
                  <img src={icon.src} alt={icon.text} className="mb-2" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                  <p className="mb-0 text-center" style={{ fontWeight: 500 }}>{icon.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
