import styled from "styled-components";

export const SkillsWrapper = styled.div`
  background: rgb(255, 236, 224);
  background: linear-gradient(
    0deg,
    rgba(255, 236, 224, 1) 28%,
    rgba(255, 255, 255, 1) 76%
  );
  height: auto;
  padding: 70px 0 50px 0;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    padding: 50px 0;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  font-weight: normal;
  line-height: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 590px) {
    font-size: 25px;
    line-height: 2rem;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  background: #fff;
  box-shadow: -1px 0px 17px -1px rgba(0, 0, 0, 0.29);
  overflow: hidden;
  text-align: center;
  width: 300px;
  margin: 30px;
  border-radius: 15px;
`;
export const Title = styled.h2`
  padding: 10px 0;
  background: var(--peach);
  color: var(--bright-pink);
  /* border-bottom: 2px solid var(--bright-pink); */
`;

export const Items = styled.ul`
  padding: 20px 0;
  li {
    line-height: 1.75;
    color: var(--deep-blue);
    font-weight: bold;
  }
`;

export const CertsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0;
  font-size: 20px;
  a {
    text-decoration: none;
    color: var(--bright-pink);
  }
`;
