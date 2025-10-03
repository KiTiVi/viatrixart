interface Props {
  alt: string;
  src: string;
  className?: string;
}

export const Image: React.FC<Props> = ({ alt, src, className }) => (
  <img src={`/viatrixart/${src}`} alt={alt} className={className} />
);
