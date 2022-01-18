import React from "react";
import styled from "styled-components/macro";

import { BREAKPOINTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton/UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <MobileIcons>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
          </UnstyledButton>
        </MobileIcons>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--grey-300);

  ${BREAKPOINTS.tablet} {
    justify-content: space-between;
  }
`;

const MobileIcons = styled.div`
  display: none;

  ${BREAKPOINTS.tablet} {
    flex: 1;
    justify-content: flex-end;
    display: flex;
    gap: clamp(0.5rem, 2vw, 1.5rem);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(32px, 3.5vw, 48px);
  margin: 0px 48px;

  ${BREAKPOINTS.tablet} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  ${BREAKPOINTS.tablet} {
    flex: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--grey-900);
  font-weight: var(--font-medium);

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default Header;
