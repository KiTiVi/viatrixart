'use client';

import Image from 'next/image';
import styled from 'styled-components';

export default function Home() {
  return (
    <Main>
      <div className="logo">
        <Image
          alt="Viatrix Art"
          src="/viatrixart/assets/logo_shadow.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h2>Sidan är under uppbyggnad</h2>
      <div className="message">
        Under tiden kan ni nå mig här, puss och smisk. /Via
      </div>
      <div className="links">
        <a className="link" href="https://www.facebook.com/viatrixsart">
          <Image
            alt="Viatrix Art"
            src="/viatrixart/assets/svg/fb.svg"
            height={32}
            width={32}
          />
          <span>viatrixsart</span>
        </a>
        <a className="link" href="https://www.instagram.com/viatrixart">
          <Image
            alt="Viatrix Art"
            src="/viatrixart/assets/svg/ig.svg"
            height={32}
            width={32}
          />
          <span>viatrixsart</span>
        </a>
      </div>
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
  text-align: center;

  .logo {
    height: 300px;
    position: relative;
  }

  h2 {
    margin-bottom: 8px;
  }

  .message {
    margin-bottom: 16px;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .link {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;

    span {
      margin-left: 8px;
    }
  }
`;
