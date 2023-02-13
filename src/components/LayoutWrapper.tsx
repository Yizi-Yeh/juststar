import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Header from './Header';

const LayoutWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default LayoutWrapper;
