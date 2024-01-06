import React from 'react'
import {FiThumbsUp} from 'react-icons/fi';
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo,UserPicture} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/imgs/react.png'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/106674529?v=4'/>
                <div>
                    <h4>Marcelino Albuquerque</h4>
                    <p>Há 6 minutos</p>

                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <strong>Ver Mais</strong></p>
                
            </PostInfo>
            <HasInfo>
                <h4>HTML, CSS E JavaScript</h4>
                <p>
                    <FiThumbsUp /> 15
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }