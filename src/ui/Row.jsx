import styled, {css} from "styled-components";

const Row = styled.div`
  display: flex;
  ${props=> props.direction === "horizontal" && css`
    align-items: center;
    justify-content: space-between;
    `}

  ${props=> props.direction === "vertical" && css`
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    `}
 
`;

Row.defaultProps = {
  type: "horizontal",
};
export default Row;
  /* flex-direction: row;
  align-items: center;  
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  margin: 0.5rem 0;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: var(--color-grey-100);
    box-shadow: var(--shadow-md);
  }  
  & > * {
    margin-right: 1rem;
  }
  & > *:last-child {
    margin-right: 0;
  } */
