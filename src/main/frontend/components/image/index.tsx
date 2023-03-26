import React from 'react';

import useClass from 'classnames';
import NextImage from 'next/image';

type ImageProps = {
  src: string;
  alt: string;
};

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <div className={useClass('a-image')}>
    <NextImage src={src} alt={alt} fill />
  </div>
);

export default Image;
