import React from "react";
import styled from "styled-components";
import { Bio } from "../../Data/Constants";
import {
  LinkedIn,
} from "@mui/icons-material";
import StyledStarCanvas from "../Canvas/Stars";

const StyledIcon = styled.img`
 width : 23px;
 height : 23px;
 margin : 0px 10px ;
 padding : 4px; 
 transition : transform 0.2s ease-in-out;
 background-color: white;
 border-radius : 5px;
 &:hover {
   transform: scale(1.1);
 }
` 

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;
const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <StyledStarCanvas/>
      <FooterWrapper>
        <Logo>ADITYA GUPTA</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.Leetcode} target="display">
            <StyledIcon src="/leetcode.svg" alt="LeetCode" />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.Codeforces} target="display">
            <StyledIcon src="/codeforces.svg" alt="Codeforces" />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.CodeChef} target="display">
            <StyledIcon src="/codechef.svg" alt="CodeChef" />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.GeeksForGeeks} target="display">
            <StyledIcon src="/geeksforgeeks.svg" alt="GeeksforGeeks" />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedIn />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2025 ADITYA GUPTA. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
