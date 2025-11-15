import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    padding: 0 15px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 15px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
