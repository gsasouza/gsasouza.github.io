import * as React from 'react';
import { Link as _Link } from 'gatsby';
import styled from 'styled-components';

type Props = {
  siteTitle: string;
}

const StyledHeader = styled.header`
  margin-bottom: '1.45rem';
  border-bottom: 2px dashed #b5e853;
`;

const Link = styled(_Link)`
  color: #b5e853;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }: Props) => (
  <StyledHeader>
    <Wrapper>
      <h2 style={{ margin: 0 }}>
        <Link
          to='/'
        >
          {`./ ${siteTitle}`}
        </Link>
      </h2>
    </Wrapper>
  </StyledHeader>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
