import React from 'react'
import Slider from 'infinite-react-carousel'
import styled from "styled-components"; 
import SponsorImage from "./sponsors.jpg"; 
import "../components/glimpses.scss"

//Carousal of confirmed sponsors

const Item = styled.div`
width: 100vw; 
 padding: 100px 10vw; 
background-color: #CACDE5;
}`;

const SponsorImageStyle = {
  padding: "10px", 
  margin: "10px",
}


const Sponsors = () => {
    return (
      <Item className = "sponsors-carousel" >
        
        <div className="zx" style={{textAlign:"center",fontSize:"3rem",fontWeight:"500", marginBottom:"30px" }}>Sponsors </div>
      <Slider  className = "carousel-initialised" style = { { margin: "10px", padding: " 10px"}} autoplay = {true}  slidesToShow = {6} arrows = { false} autoplaySpeed = { 900 } >
      
      <img className="sponsors_img" src= {SponsorImage} alt= " not found" style = { SponsorImageStyle} />
      <img className="sponsors_img" src= {SponsorImage} alt= "not found" style = { SponsorImageStyle} />
      <img className="sponsors_img" src= {SponsorImage} alt= "not found" style = { SponsorImageStyle} />
      <img className="sponsors_img" src= {SponsorImage} alt= " not found" style = { SponsorImageStyle} />
      <img className="sponsors_img" src= {SponsorImage} alt= "not found" style = { SponsorImageStyle} />
      <img className="sponsors_img" src= {SponsorImage} alt= " not found" style = { SponsorImageStyle} />
      <img className="sponsors_img" src= {SponsorImage} alt= " not found" style = { SponsorImageStyle} />
      <img className="sponsors_img" src= {SponsorImage} alt= "  not found" style = { SponsorImageStyle} />
      

    </Slider>
    
    </Item>

    );
}

export default Sponsors;





