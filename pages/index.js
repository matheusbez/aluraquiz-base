import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
// eslint-disable-next-line import/no-unresolved
import QuizLogo from '../src/Components/QuizLogo';
import Widget from '../src/Components/Widget';
import QuizBackground from '../src/Components/QuizBackground';
import Footer from '../src/Components/Footer';
import GitHubCorner from '../src/Components/GitHubCorner';
import Input from '../src/Components/Input';
import Button from '../src/Components/Button';

/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

const QuizContainer = styled.div`
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
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <Head>
        <title>{db.title}</title>

        <meta name="title" content="Teemo Quiz" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz-base.matheusbez.vercel.app/" />
        <meta property="og:title" content="Teemo Quiz" />
        <meta property="og:image" content={db.bg} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz-base.matheusbez.vercel.app/" />
        <meta property="twitter:title" content="Teemo Quiz" />
        <meta property="twitter:image" content={db.bg} />

      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Teemo Quiz</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Submissao por meio do react');
              }}
              >
                <p> Teste os seus conhecimentos sobre o Yordle mais odiado de Bandópolis !!! </p>
                <Input
                  name="nomeDoUsuario"
                  onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                  placeholder="Pra começar, escreva seu nome aqui :)"
                  value={name}
                />
                <p>
                  Preparado para entrar no mundo do capetão Teemo,
                  {' '}
                  {name}
                  ? Quer dizer... capitão Teemo?
                </p>
                <Button type="submit" disabled={name.length === 0}>
                  Estou pronto !!!
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h2>Quizes da galera</h2>
              <p>🔧 Em Construção 🔧</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/matheusbez/aluraquiz-base" />
      </QuizBackground>
    </>
  );
}
