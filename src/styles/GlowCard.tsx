import React from "react";
import styled from "styled-components";

const GlowCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-info">{children}</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --background: linear-gradient(to right, #13b37f 0%, #11a3c8 100%);
    width: 100%;
    height: 100%;
    padding: 1px;
    border-radius: 0.7rem;
    overflow: visible;
    background: #f7ba2b;
    background: var(--background);
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card::after {
    position: absolute;
    content: "";
    top: -22px;
    left: 0px;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    transform: scale(0.9);
    filter: blur(35px);
    background: #f7ba2b;
    background: var(--background);
    transition: opacity 0.5s;
  }

  .card-info {
    --color: #1f1a1d;
    background: var(--color);
    color: white;
    width: 100%;
    height: 100%;
    border-radius: 0.7rem;
    padding: 16px;
    box-sizing: border-box;
  }

  /*Hover Effect*/
  .card:hover::after {
    opacity: 0.6;
    padding: 0.7rem 0;
    top: 18px;
    transition: 0.6s;
  }

  .card:hover .card-info {
    color: #fff9f9;
    transition: color 1s;
  }
`;

export default GlowCard;
