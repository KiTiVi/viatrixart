import Image from 'next/image';
import logo from './logo.png';
import { useEffect } from 'react';

export const Logo = () => {
  useEffect(() => {
    const test = [
      'commission_1.jpg',
      'commission_business_card.tif',
      'commission_business_card_and_logo.png',
      'commission_character.png',
      'commission_logo.png',
      'commission_painting_1.jpeg',
      'commission_painting_2.png',
      'commission_portrait_1.jpg',
      'commission_portrait_2.jpg',
      'commission_portrait_3.jpg',
      'commission_portrait_4.jpg',
      'commission_portrait_5.png',
      'commission_portrait_6.png',
      'commission_portrait_7.tif',
      'commission_wedding_1.png',
      'commission_wedding_2.jpg',
    ];

    test.forEach((element) => {
      console.log(
        `import ${element} from "@/assets/images/commissions/${element}"`
      );
    });
    console.log('');
    console.log('');
    console.log('');
  }, []);

  return (
    <Image
      alt="viatrixart.com"
      src={logo}
      width={150}
      style={{ marginTop: '48px', marginBottom: '20px' }}
    />
  );
};
