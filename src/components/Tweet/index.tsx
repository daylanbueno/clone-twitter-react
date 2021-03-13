import React from 'react';

import {
   Container,
   Retweeted,
   RocketSeatIcon,
   Body,
   Content,
   Header,
   Dot,
   Description,
   ImageContent,
   Icons,
   Status,
   CommentIcon,
   RetweetIcon,
   LikeIcon,
   Avatar

} from './styles';

const Tweet: React.FC = () => {
  return(
  <Container> 
    <Retweeted>
       <RocketSeatIcon />  
       Você retweetou
    </Retweeted>  

    <Body>
     <Avatar/>
     <Content>
       <Header>
         <strong>Rocketseat </strong>
         <span>@rocketseat</span>
         <Dot/>
         <time> 27 de junho </time>
       </Header>

      <Description> Foguete não tem valta</Description>
      
      <ImageContent/>

      <Icons>
        <Status>
          <CommentIcon />
           18
        </Status>
        <Status>
          <RetweetIcon />
           21
        </Status>
        <Status>
          <LikeIcon />
           2328
        </Status>
      </Icons>
     </Content>
    </Body>
  

  </Container>
  ) ;
}

export default Tweet;