import styled, {css} from "styled-components";

const Heading = styled.h1`
${props => props.as === "h1" && css`
 font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
`}
${props => props.as === "h2" && css`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
`}
${props => props.as === "h3" && css`
font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
`
}

 

`;
export default Heading;