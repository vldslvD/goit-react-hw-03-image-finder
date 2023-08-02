import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ gallery }) => {
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

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      pageURL: PropTypes.string,
      type: PropTypes.string,
      tags: PropTypes.string.isRequired,
      previewURL: PropTypes.string,
      previewWidth: PropTypes.number,
      previewHeight: PropTypes.number,
      webformatURL: PropTypes.string.isRequired,
      webformatWidth: PropTypes.number,
      webformatHeight: PropTypes.number,
      largeImageURL: PropTypes.string.isRequired,
      imageWidth: PropTypes.number,
      imageHeight: PropTypes.number,
      imageSize: PropTypes.number,
      views: PropTypes.number,
      downloads: PropTypes.number,
      collections: PropTypes.number,
      likes: PropTypes.number,
      comments: PropTypes.number,
      user_id: PropTypes.number,
      user: PropTypes.string,
      userImageURL: PropTypes.string,
    })
  ),
};
