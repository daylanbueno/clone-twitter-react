import React from 'react';

import { Container, SearchWrapper, SearchIcon, Body,Novidades } from './styles';

const SideBar: React.FC = () => {
  return (
  <Container>
      <SearchWrapper>
        <input type="text" placeholder="Buscar no twitter"/>
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <strong>Talvez você curta</strong>
        <ul>
          <li>
             <div>
                <img src="https://professordoiphone.com.br/wp-content/uploads/2019/07/file_0-41.jpg" alt="Avatar"/>
                <div>
                  <strong>Luiz Batanero</strong>
                  <span>@lukemorales</span>
                </div>
             </div>
             <button>
               Seguir
             </button>
          </li>
          <li>
            <div>
            <img src="https://professordoiphone.com.br/wp-content/uploads/2019/07/file_0-41.jpg" alt="Avatar"/>
              <div>
                <strong>Amanda Crisitna</strong>
                <span>@amandacristina</span>
              </div>
            </div>
            <button>
               Seguir
             </button>
          </li>
          <li>
            <div>
            <img src="https://professordoiphone.com.br/wp-content/uploads/2019/07/file_0-41.jpg" alt="Avatar"/>
              <div>
                <strong>Dilan Bueno</strong>
                <span>@bueno</span>
              </div>
            </div>
            <button>
              Seguir
            </button>
          </li>
        </ul>
        <Novidades>
          <strong>O que está acontecendo</strong>
          <ul>
            <li>
              <strong>Assuntos do momento no Brasil</strong>
              <span>Muita treta sempre!</span>
            </li>

            <li>
              <strong>Assuntos do momento no Brasil</strong>
              <span>Muita treta sempre!</span>
            </li>

            <li>
              <strong>Assuntos do momento no Brasil</strong>
              <span>Muita treta sempre!</span>
            </li>
          </ul>
        </Novidades>
      </Body>
  </Container>
  )
}

export default SideBar;