import { GalleryItem, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModalShown: false,
  };

  toggleModal = () => {
    this.setState(({ isModalShown }) => ({
      isModalShown: !isModalShown,
    }));
  };
  render() {
    const { webformatURL, largeImageURL, tags } = this.props.picture;
    const { isModalShown } = this.state;
    return (
      <GalleryItem>
        <Image src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {isModalShown && <Modal href={largeImageURL} alt={tags} onClose={this.toggleModal} />}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  picture: PropTypes.exact({
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
}
