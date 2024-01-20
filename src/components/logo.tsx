import Image from 'next/image';
import logo from '@/assets/logo.png';

export const Logo = () => {
  return (
    <Image
      alt="viatrixart.com"
      src={logo}
      width={150}
      style={{ marginTop: '48px', marginBottom: '20px' }}
    />
  );
};
