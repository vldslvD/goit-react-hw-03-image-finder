import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';


export const ImageGallery = ({ gallery}) => {
  return (
    <Gallery>
      {gallery.map(picture => {
        return (
          <li key={picture.id}>
            <ImageGalleryItem picture={picture} />
          </li>
        );
      })}
    </Gallery>
  );
};
