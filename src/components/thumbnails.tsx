import { Flex } from '@radix-ui/themes';
import { useState } from 'react';

const Thumbnails = (props: { images: string[]; setImg: any }) => {
  const [mouseOver, setMouseOver] = useState(0);
  const handleImageClick = (src: any, index: number) => {
    props.setImg(src);
    setMouseOver(index);
  };

  return (
    <Flex
      id="thumbnails"
      style={{ position: 'absolute', bottom: 0, right: 0, left: 0 }}
      justify={'center'}
    >
      {props.images.map((image: string, index: number) => (
        <img
          style={{
            cursor: 'pointer',
            opacity: mouseOver === index ? 1 : 0.5,
          }}
          src={image}
          key={index}
          onClick={() => handleImageClick(image, index)}
        />
      ))}
    </Flex>
  );
};
export default Thumbnails;
