import React from 'react';

import ProfilePage from '../ProfilePage';

import {
   Container,
   Header,
   BackIcon,
   ProfileInfo,
   HomeIcon,
   BellIcon,
   EmailIcon,
   SearchIcon,
   BottomMenu
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header className="active">
        <button>
          <BackIcon/>
        </button>
        <ProfileInfo>
          <strong>Dailan Bueno</strong>
          <span>1001 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />
      
      <BottomMenu>
        <HomeIcon></HomeIcon>
        <SearchIcon></SearchIcon>
         <BellIcon></BellIcon>
         <EmailIcon></EmailIcon>
      </BottomMenu>
    </Container>
  );
}

export default Main;