import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 0 2rem;
    height: 3rem;
    font-size: 1rem;
    border: 0;
    border-radius: 0.25rem;
    background-color: var(--blue-light);
    color: #fff;

    transition: filter 200ms;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;