import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  height: 200px;
  border: 2px solid #b4b9b4;
  border-radius: 1rem;
  position: relative;
  margin: 1rem;
  &:hover {
    border: 2px solid orange;
  }
  .img {
    width: 100%;
    border-radius: 1rem 1rem 0 0;
  }
  .logo-img {
    width: 40px;
    height: 40px;
    margin: 0 1rem;
  }
  .caption {
    width: 100%;
    height: 70px;
    background-color: #d8d6d2;
    position: absolute;
    bottom: 0;
    border-radius: 0 0 1rem 1rem;
    display: flex;
    align-items: center;
  }
  .cand {
    margin: 0;
    font-size: 1.3rem;
    color: #000400;
  }
  .party {
    margin: 0;
    font-size: 0.8rem;
    color: #000400;
    font-weight: 200;
  }
  .smaller {
    margin: 0;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
  }
`;

const PhotoCard = ({ name, logo, party, image }) => {
  return (
    <Container>
      <img className="img" src={image} alt="Obi" />
      <div className="caption">
        <img className="logo-img" src={logo} alt="Obi" />
        <div className="smaller">
          <h6 className="cand">{name}</h6>
          <h6 className="party">{party}</h6>
        </div>
      </div>
    </Container>
  );
};

export default PhotoCard;
