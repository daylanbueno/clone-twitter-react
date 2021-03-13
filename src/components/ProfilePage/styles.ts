import styled, { css } from "styled-components";
import { LocationOn, Cake } from '../../styles/icons'
import Button from '../Button'
export const Container = styled.div `
  display:flex;
  flex-direction:column;

  max-width:100%;
  overflow-y:auto;

  scrollbar-width:none;
  ::-webkit-scrollbar {
    display:none
  }
`;
export const Banner = styled.div`
  flex-shrink:0;

  width:100%;
  height:min(33vw, 199px);
  background:var(--twitter);

  position:relative;
`;
export const  Avatar = styled.div`
   img {
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px,22vw));

    border: 3.25px solid #fff;
    border-radius:50%;
    background:var(--gray);
    position:absolute;
    bottom: max(-50px);
    left:15px;
    flex-shrink: 0;
   }


  @media(min-width: 600) {
    bottom: max(-30);
  }
`;
export const  ProfileData = styled.div`
  padding:min(calc(10vw +7px), 67px) 16px 0;
  display:flex;
  flex-direction:column;

  position:relative;

  > h1 {
    font-weight:bold;
    font-size:19px;
  }

  >h2  {
    font-weight:normal;
    font-size:15px;
    
    color:var(--gray);
  }
  > p {
    font-size:15px;
    margin-top:11px;

    > a {
      text-decoration:none;
      color:var(--twitter)
    }
  }
  > ul {
    list-style:none;
    margin-top: 10px;
    margin-bottom:10px;

    >li {
      display: flex;
      align-items:center;

      font-size:15px;
      color:var(--gray);

      >svg {
        fill:var(--gray);
        margin-right: 5px
      }
    }
  }
`;
export const  Followage = styled.div`
    display:flex;
    > span {
        font-size:15px;
        color:var(--gray);
        margin-right: 10px;
    }
`;

const iconCss = css`
  width: 20px;
  height:20px;
  color:var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCss}
`;
export const  CakeIcon = styled(Cake)`
  ${iconCss}
`;

export const  EditButton = styled(Button)`
  position: absolute;
  top:2vw;
  right:7px;

  padding:4px 16px;
  font-size: 13px;

  @media(min-width: 320px) {
    padding: 10px 19px;
    font-size:15px;

  }

`