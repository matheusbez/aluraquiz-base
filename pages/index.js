import styled from 'styled-components';
import Head from 'next/head';

import db from '../db.json';
import Widget from '../src/Components/Widget';
import QuizBackground from '../src/Components/QuizBackground';
import Footer from '../src/Components/Footer';
import GitHubCorner from '../src/Components/GitHubCorner';

/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

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
    <>
    <Head>
        <title>Teemo Quiz</title>
        <meta name="title" content="Teemo Quiz" />

        {/* Open Graph / Facebook */}
        <meta property="og:type"  content="website" />
        <meta property="og:url"   content="https://aluraquiz-base.matheusbez.vercel.app/" />
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
      <Widget>
        <Widget.Header>
            <h1>Teemo</h1>
          </Widget.Header>
        <Widget.Content>
          <p> lorem ipsum dolor sit amet...</p>
        </Widget.Content>
      </Widget>
        
      <Widget>
        <Widget.Content>
          <h1>Quizes da galera</h1>

          <p> lorem ipsum dolor sit amet...</p>
        </Widget.Content>
      </Widget>
      <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/matheusbez/aluraquiz-base" />
    </QuizBackground>
    </>
  );
}
