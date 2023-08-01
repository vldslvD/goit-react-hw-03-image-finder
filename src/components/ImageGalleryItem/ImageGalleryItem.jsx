import { GalleryItem, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

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
