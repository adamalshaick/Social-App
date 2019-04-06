import styled, { keyframes } from "styled-components";

const ease = keyframes`
0% {
  opacity: 0;
}

50% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: -1;
`;

export const Strip = styled.div`
  @media (min-width: 1000px) {
    border-right: lightgrey solid 1px;
  }
`;

export const Marker = styled.div`
  position: absolute;
  top: 80%;
  font-size: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Montserrat" sans-serif;
  @media (min-width: 1150px) {
    position: absolute;
    top: 40%;
    font-size: 1.4rem;
    transform: translateY(33%);
    left: 250px;
  }
`;

export const LandingImage = styled.img`
  animation: ${ease} 1.9s;
  width: 100%;
  max-width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 1150px) {
    height: 367px;
    width: auto;
    position: absolute;
    left: 44%;
    top: 31%;
    transform: translate(0, 0);
  }
`;

export const ImageCover = styled.div`
  @media (min-width: 1150px) {
    height: 367px;
    left: 44%;
    top: 31%;
    background-color: #353835;
    animation: image-cover 1.5s cubic-bezier(0.19, 1, 0.2, 1) forwards;
    width: 0;
    position: absolute;
    @keyframes image-cover {
      0% {
        width: 0;
        transform: translateX(0);
      }

      50% {
        width: 550px;
        transform: translateX(0);
      }

      100% {
        width: 0px;
        transform: translateX(550px);
      }
    }
  }
`;

export const LandingText = styled.img`
  position: absolute;
  left: 50%;
  top: 70%;
  width: 200px;
  transform: translate(-50%, -50%);
  @media (min-width: 1150px) {
    position: absolute;
    left: 68%;
    top: 57%;
    transform: translate(0, 0);
    width: 300px;
    animation: ${ease} 2.9s;
  }
`;

export const TextCover = styled.div`
  @media (min-width: 1150px) {
    position: absolute;
    left: 68%;
    top: 57%;
    height: 70px;
    background-color: whitesmoke;
    width: 0px;
    animation: text-cover 1.5s cubic-bezier(0.19, 1, 0.2, 1) forwards;
    animation-delay: 1s;
    @keyframes text-cover {
      0% {
        width: 0;
        transform: translateX(0);
      }

      50% {
        width: 305px;
        transform: translateX(0);
      }

      100% {
        width: 0px;
        transform: translateX(305px);
      }
    }
  }
`;
