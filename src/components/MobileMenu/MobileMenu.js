/* eslint-disable no-unused-vars */
import React from "react";
import "@reach/dialog/styles.css";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay as="div" isOpen onDismiss={onDismiss}>
      <StyledContent>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <PolicyLinks href="/terms">Terms and Conditions</PolicyLinks>
          <PolicyLinks href="/privacy">Privacy Policy</PolicyLinks>
          <PolicyLinks href="/contact">Contact Us</PolicyLinks>
        </Footer>
      </StyledContent>
    </DialogOverlay>
  );
};

const StyledContent = styled(DialogContent)`
  margin: 0 0 0 auto;
  width: min(350px, 80vh);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 22px 32px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  align-self: flex-end;
  height: 44px;
  width: 44px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  color: var(--gray-900);
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;

  &:first-of-type {
    color: var(--secondary);
  }
`;

const PolicyLinks = styled.a`
  font-size: 0.875rem;
  color: var(--grey-700);
  text-decoration: none;
  line-height: 2rem;
`;

export default MobileMenu;
