import styled from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';


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


//! tupla = (arg1, arg2)
//! arg1, arg2 = tupla

export default function Home() {

  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <link rel="icon" type="image/png" href="https://img.icons8.com/fluent/48/000000/controller.png" />

        <title>GameQuiz - Vai encarar ?</title>
      </Head>

      <QuizContainer>

        <Widget>

          <Widget.Header>
            <h1>Game Quiz</h1>
          </Widget.Header>

          <Widget.Content>

            <form onSubmit={
              function (infosdoEvento) {
                infosdoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
              }
            }>
             
              <input placeholder="Digite seu nome: " onChange={
                function (infosDoEvento) {
                  //! State

                  setName(infosDoEvento.target.value)
                  // name = ; //! pegando o value do input, mas pq o target ?
                  // console.log(name);
                }
              } />

              <button type="submit" disabled={name.length === 0}>
                Sr. {name}, Vamos jogar ?
              </button>
            </form>


          </Widget.Content>

        </Widget>

        <Widget>

          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <ul>
              <li>Quiz 01</li>
              <li>Quiz 02</li>
              <li>Quiz 03</li>
              <li>Quiz 04</li>
            </ul>
          </Widget.Content>

        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lvleo21/" />

    </QuizBackground>
  );
}
