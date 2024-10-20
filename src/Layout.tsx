import { Flex } from '@radix-ui/themes';
import MainViewer from './components/mainviewer';
import Thumbnails from './components/thumbnails';
import '@radix-ui/themes/styles.css';
import { useEffect, useState } from 'react';
const imageList: string[] = [
  'https://getsamplefiles.com/download/png/sample-1.png',
  'https://getsamplefiles.com/download/png/sample-2.png',
  'https://getsamplefiles.com/download/png/sample-3.png',
  'https://getsamplefiles.com/download/png/sample-4.png',
  'https://getsamplefiles.com/download/png/sample-5.png',
];
const Layout = () => {
  const [images, setImages] = useState(imageList);
  const [opasity, setOpasity] = useState(0);
  const [imgsrc, setImg] = useState(
    'https://getsamplefiles.com/download/png/sample-1.png'
  );
  useEffect(() => {
    setImages(imageList);
    setOpasity(1);
  }, []);
  return (
    <Flex
      className="App"
      direction="column"
      style={{ opacity: opasity, transition: 'opacity 2.5s' }}
    >
      <MainViewer img={imgsrc} />
      <Thumbnails images={images} setImg={setImg} />
    </Flex>
  );
};
export default Layout;
