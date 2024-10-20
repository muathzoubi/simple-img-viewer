const MainViewer = (props: { img: string }) => {
  return (
    <img
      src={props.img}
      id="main"
      alt="image"
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
        maxHeight: '80%',
        maxWidth: '80%',
      }}
    />
  );
};
export default MainViewer;
