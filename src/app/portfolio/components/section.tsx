'use client';

import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

type Image = {
  alt: string;
  src: StaticImageData;
};

interface Props {
  title: string;
  images: Image[];
}

export const Section: React.FC<Props> = ({ title, images }) => {
  return (
    <>
      <h3>{title}</h3>
      <ImagesContainer>
        {images?.map(({ alt, src }, i) => (
          <Image key={i} alt={alt} src={src} height={250} objectFit="contain" />
        ))}
      </ImagesContainer>
    </>
  );
};

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
`;
