import ImagesGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onSelect }) => {
  return (
    <ul className={s.ImageGallery}>
      {images &&
        images.map(({ webformatURL, tags, largeImageURL }, index) => {
          return (
            <ImagesGalleryItem
              key={index}
              webformatURL={webformatURL}
              tag={tags}
              onSelect={() => onSelect(largeImageURL)}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
