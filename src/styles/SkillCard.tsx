// src/styles/SkillCard.tsx
import React from "react";
import styled from "styled-components";

interface SkillCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ Icon, title, description }) => {
  return (
    <CardWrapper>
      <div className="card">
        <div className="first-content">
          <Icon size={50} color="#d4af37" /> {/* Golden icon */}
          <span>{title}</span> {/* Title will appear in golden color via CSS */}
        </div>
        <div className="second-content">
          <span>{description}</span>
        </div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  .card {
    width: 300px;
    height: 300px;
    background: rgb(1, 3, 7); /* Blackish blue background */
    transition: all 0.4s;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.705);
    font-size: 30px;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff; /* Default text color (affects description) */
  }

  .card:hover {
    border-radius: 15px;
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.705);
    background: rgb(2, 5, 10); /* Slightly lighter on hover */
  }

  .first-content {
    width: 100%;
    transition: all 0.4s;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
    border-radius: 15px;
    font-family: 'Avenir LT Pro', sans-serif;
    color: #996515 ; /* Golden color for icon & title */
  }

  .first-content span {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    text-align: center;
    color: #FFFFFF ; /* Golden title text */
  }

  /* On hover, hide the first content (icon & title) */
  .card:hover .first-content {
    height: 0px;
    opacity: 0;
  }

  .second-content {
    height: 0%;
    width: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transition: all 0.4s;
    font-size: 0px;
    transform: rotate(90deg) scale(-1);
    text-align: center;
    padding: 0 1rem;
  }

  /* On hover, reveal the description with a smaller font size */
  .card:hover .second-content {
    opacity: 1;
    height: 100%;
    font-size: 1.0rem;
    transform: rotate(0deg);
  }
`;

export default SkillCard;
