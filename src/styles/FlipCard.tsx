import React from 'react';
import styled from 'styled-components';

interface CardProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ Icon, title, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          {/* Front Side */}
          <div className="front">
            <div className="front-content">
              <Icon className="icon" />
              <h2 className="title">{title}</h2>
            </div>
          </div>
          {/* Back Side */}
          <div className="back">
            <div className="back-content">
              {/* Added Icon here with back-icon class */}
              <Icon className="back-icon" />
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    width: 300px; /* Adjusted width to make the card wider */
    height: 254px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .front,
  .back {
    background-color: #111827;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
    display: flex; /* Ensures center alignment */
    flex-direction: column;
    justify-content: center; /* Centers content vertically */
    align-items: center; /* Centers content horizontally */
    gap: 20px; /* Spacing between icon and title */
  }

  .back {
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }
  .back-icon {
    font-size: 100px;
    color: #ff9966;
    margin-bottom: 20px; /* Space between icon and description */
  }

  .icon {
    icon-size: 70px; /* Increased size of the icon */
    color: #ff9966;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 0 20px;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;


export default Card;
