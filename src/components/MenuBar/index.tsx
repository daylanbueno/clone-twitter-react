import React from 'react';

import {
   Container,
   Topsider, 
   MenuButton,
   HomeIcon,
   BellIcon,
   EmailIcon,
   FavoriteIcon,
   ProfileIcon,
   ExistIcon,
   ProfileData,
   Avatar,
   Botside
 } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topsider>
        <MenuButton>
          <HomeIcon/>
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon/>
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon/>
          <span>Messagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon/>
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon/>
          <span>Perfil</span>
        </MenuButton>
        
        <button>
          <span>Tweetar</span>
        </button>

      </Topsider>
      <Botside>
        <Avatar/>
         <ProfileData>
           <strong>Dailan Bueno</strong>
           <span>@dbsantos</span>
         </ProfileData>
         <ExistIcon/>
      </Botside>
    </Container>
  );
}

export default MenuBar;