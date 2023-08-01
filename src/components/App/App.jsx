import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getPictures } from 'pixaAPI';
import { Component } from 'react';
import { Container } from './App.styled';

export default class App extends Component {
  state = {
    search: '',
    gallery: [],
    pageCount: 1,
    status: 'idle',
  };

  handleSearch = search => {
    this.setState({
      search,
    });
  };

  handleLoadMore = async () => {
    const { search, pageCount } = this.state;
    const nextPage = pageCount + 1;
    const response = await getPictures(search, nextPage);
    this.setState(prevState => ({
      gallery: [...prevState.gallery, ...response.data.hits],
      pageCount: prevState.pageCount + 1,
    }));
  };

  async componentDidMount() {
    const { search, pageCount } = this.state;
    const response = await getPictures(search, pageCount);
    this.setState({
      gallery: response.data.hits,
    });
  }
  async componentDidUpdate(prevProps, prevState) {
    const { search, pageCount } = this.state;
    if (prevState.search !== search) {
      this.setState({
        status: 'pending',
      });
      const response = await getPictures(search, pageCount);
      this.setState({
        gallery: response.data.hits,
        pageCount: 1,
        status: 'resolved',
      });
    }
  }
  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.status === 'pending' ? (
          <Loader />
        ) : (
          <ImageGallery gallery={this.state.gallery} />
        )}
        {this.state.gallery.length >= 12 && (
          <Button onLoadMore={this.handleLoadMore} />
        )}
      </Container>
    );
  }
}
