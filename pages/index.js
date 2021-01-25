import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';


// const BackgroundImage = styled.div`
//   background-image:url(${db.bg});
//   flex:1;
//   background-size:cover;
//   background-position:center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>

        <Widget>

          <Widget.Header>
            <h1>Nerd Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>O QUIZ NERD mais completo do Brasil... É o que dizem.</p>
            <p>Aqui nós veremos:</p>
            <ol>
              <li>Animes</li>
              <li>Séries</li>
              <li>Filmes</li>
              <li>Jogos</li>
            </ol>
          </Widget.Content>

        </Widget>
        <Widget>

          <Widget.Content>
          <h1>Quiz da Galera</h1>
            <ul>
              <li>Quiz 01</li>
              <li>Quiz 01</li>
              <li>Quiz 01</li>
              <li>Quiz 01</li>
            </ul>
          </Widget.Content>

        </Widget>

        <Footer></Footer>
      </QuizContainer>
    <GitHubCorner projectUrl = 'https://github.com/lvleo21/' /> 
    {/* Passar url */}
    </QuizBackground>
  )
}
