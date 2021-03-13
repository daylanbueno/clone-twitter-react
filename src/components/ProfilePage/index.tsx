import React from 'react';

import Feed from '../Feed'
import { Container,Banner, Avatar, ProfileData,LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container >
        <Banner>
          <Avatar> 
           <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHhI8zfEY-9sA/profile-displayphoto-shrink_100_100/0/1559222711663?e=1620864000&v=beta&t=fZoW5CzdyI4S3NYNc3LjFwIa7ygSAL4Mfxq06FbCmSA" alt=""/>
          </Avatar>
        </Banner>
        <ProfileData>
          <EditButton outlined>Editar Perfil</EditButton>
          <h1>Dailan Bueno</h1>
          <h2>@dbsantos</h2>
          <p>
           Full Stack Developer | Stefanini <a href="https://www.linkedin.com/in/dailan-bueno-b0b955b7/">@Linkdin</a>
          </p>
          <ul>
            <li>
              <LocationIcon/>
              Brasília, Brasil
            </li>
            <li>
              <CakeIcon/>
              Nascido em 02 de junho de 1993
            </li>
            <Followage>
              <span>
                  seguindo <strong>102</strong>
              </span>

              <span>
                285 <strong>Seguidores</strong>
              </span>
            </Followage>
          </ul>
          
    
    
        </ProfileData>
        <Feed/>
      </Container>
    );
}

export default ProfilePage;