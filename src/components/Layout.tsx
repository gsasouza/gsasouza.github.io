import * as React from "react"
import { StaticQuery, graphql } from "gatsby";
import styled from 'styled-components';

import Header from "./Header"
import "./layout.css"

const Main = styled.main`
  margin: 30px auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Wrapper = styled.div``;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
      </Wrapper>
    )}
  />
)

export default Layout
