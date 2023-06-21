const ImageGalleryItem = ({ imageUrl, altText, toggleModal, largeImageURL }) => {
  return (
    <li className="gallery-item" onClick={() => toggleModal(largeImageURL)}>
      <img src={imageUrl} alt={altText} width={300} height={200}  />
    </li>
  );
};
export default ImageGalleryItem; 