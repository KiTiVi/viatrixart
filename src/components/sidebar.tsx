'use client';

import styled from 'styled-components';
import { Logo } from './logo';
import { Nav } from './nav';
import Image from 'next/image';
import backgroundImg from '@/assets/ferenc-horvath-skcFiBu91AA-unsplash.jpg';

export const Sidebar = () => {
  return (
    <Aside>
      <ImageContainer>
        <Image
          alt="galaxy"
          src={backgroundImg}
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <Logo />
      <Nav />
    </Aside>
  );
};

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
`;

const ImageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`;
