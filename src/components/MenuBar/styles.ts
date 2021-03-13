import styled, { css } from 'styled-components';

import {
  Home, 
  Notifications,
  FavoriteBorder,
  Email,
  Person,
  ExitToApp
} from '../../styles/icons'

export const Container = styled.div`
  display:none;

  @media(min-width: 500px) {
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    position:sticky;
    top:0;
    left:0;
    
    padding: 9px 19px 20px;

    max-height:100vh;
    overflow-y:auto;
  }
  
`;

export  const Topsider = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;

  @media (min-width: 1280px) {
    align-items:flex-start;
  }
`;

export  const MenuButton = styled.div`
  display:flex;
  align-items:center;
  flex-shrink:0;
  margin-top: 15px;

  > span {
    display: none;
  }

  @media(min-width: 1280px) {
    > span {
      display: inline;
      margin-left:19px;

      font-weight:bold;
      font-size:19px;
    }
  }

  padding: 8.25px 0;
  outline: 0;
  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    background: var(--twitter);
    border-radius:50%;
    margin-top: 33px;
    width: 40px;
    height:40px;
    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
       height:40px;
      border-radius:8px;
      >span {
        display: inline;
      }
    }
    &:hover {
      opacity: 0.7;
    }

    &:hover, &.active {
      span, svg {
        color: var(--twitter);
        fill: var(--twitter);
      } 
    }

  }

  &:hover {
      opacity: 0.7
  }

`;

const iconCss = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
 ${iconCss}
`;

export  const BellIcon = styled(Notifications)`
 ${iconCss}
`;

export  const EmailIcon = styled(Email)`
 ${iconCss}
`;

export  const FavoriteIcon = styled(FavoriteBorder)`
 ${iconCss}
`;

export  const ProfileIcon = styled(Person)`
 ${iconCss}
`;

export const Botside = styled.div`
  display: flex;
  align-items:center;
  
  margin-top: 20px;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  flex-shrink:0;
  border-radius:50%;
  background:var(--gray);
`;

export const ExistIcon = styled(ExitToApp)`
  display: none;

  @media(min-width: 1280px) {
    display:inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    cursor: pointer; 
    margin-left: 10px;

    &:hover {
      >path {
        color: var(--like)
      }
    }
  }
`;
export const ProfileData = styled.div`
   display: none;

   @media(min-width: 1280px) {
     display:flex;
     flex-direction:column;
     margin-left: 10px;
     font-size:14px;

     > span {
       color:var(--gray)
     }
   }
`;


