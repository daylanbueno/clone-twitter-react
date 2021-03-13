import styled from 'styled-components';
import { Search } from '../../styles/icons'

export const Container = styled.div`
  display: none;
  @media(min-width:1000px) {
    display: flex;
    flex-direction: column;
    margin: 10px 26px 0 24px;
    width: 399px;
    height:977px;
  }
`;

export  const SearchWrapper = styled.div`
  display: flex;
  position:fixed;
  z-index:2;

  > input {
    width: 350px;
    height: 39px;
    border-radius:19.5px;
    background:#202327;
    padding:11px 56px;
    
    font-size:14px;
    line-height:16.41px;
    color:var(--gray);
    outline: none;
  }
`; 

export  const SearchIcon = styled(Search)`
  width:19.68px;
  height: 19.68px;
  position: absolute;
  top:12px;
  left: 21px;
`;

export  const Body = styled.div`
  display:flex;
  flex-direction:column;
  position:fixed;
  z-index:2;

  margin-top: 62px;
  width: 350px;
  height:262px;
  margin-left:24px;
  border-radius:14px;
  background:#15181C;

  > strong {
    padding:13px 16px;
    font-size:19px;
    line-height:22.27px;
    border-bottom: 1px solid var(--outline);
    width:100%;
  }

  > ul li {
    display:flex;
    justify-content:space-between;
    list-style: none;
    padding: 10px;
  }

  > ul li div {
    display:flex;
    align-items:center;
  }

  > ul li div img { 
    width:49px;
    height:49px;
    border-radius:50%;
  }

  > ul li div div {
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:10px;
  }

  > ul li button {
    width: 78px;
    height: 30px;
    color:var(--twitter);
    border:1px solid var(--twitter);
    box-sizing:border-box;
    border-radius:15.5px;

    cursor:pointer;
    outline:none;

    &:hover {
      opacity: 0.7;
    }
  } 
`;

export const Novidades = styled.div`
  display:flex;
  flex-direction:column;

  margin-top: 15px;
  width: 350px;
  height:255px;
  background:#15181C;
   > strong {
     padding: 13px 16px;
     font-size: 19px;
     line-height:22px;
     font-weight:bold;
     border-bottom: 1px solid var(--outline);
     margin-bottom: 10px;
   }

   > ul li {
     display: flex;
     flex-direction: column;
     list-style: none;
     padding: 13px 16px;
  }

  ul li strong {
    font-size:14px;
    line-height:14px;
    color: var(--gray);
  }

  ul li span {
    font-size:14px;
    line-height:16px;
    color: var(--white)
  }
`;  