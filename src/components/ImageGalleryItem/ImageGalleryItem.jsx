import {
  GalleryItem,
  GalleryItemImage,
} from './ImageGalleryItem.styled';

function ImageGalleryItem({ largeImageURL, webformatURL, tags, modalClick }) {
  return (
    <GalleryItem onClick={() => modalClick(largeImageURL)}>
      <GalleryItemImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
}

export default ImageGalleryItem;
