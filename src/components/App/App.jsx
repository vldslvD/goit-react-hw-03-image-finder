import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getPictures } from 'pixaAPI';
import { Component } from 'react';
import { Container } from './App.styled';
import { animateScroll as scroll } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    search: '',
    gallery: [],
    pageCount: 1,
    status: 'idle',
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({
          status: 'pending',
        });
      const { search, pageCount } = this.state;
      const response = await getPictures(search, pageCount);
      this.setState({
        gallery: response.data.hits,
        status: 'resolved',
      });
    } catch (error) {
      this.setState({
        error,
        status: 'rejected',
      });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    try {
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
    } catch (error) {
      this.setState({
        error,
        status: 'rejected',
      });
    }
  }
  handleSearch = search => {
    this.setState({
      search,
    });
  };

  handleLoadMore = async () => {
    try {
      const { search, pageCount } = this.state;
      const nextPage = pageCount + 1;
      const response = await getPictures(search, nextPage);
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...response.data.hits],
        pageCount: prevState.pageCount + 1,
      }));
      scroll.scrollToBottom();
    } catch (error) {
      this.setState({
        error,
        status: 'rejected',
      });
    }
  };

  renderError = (message) => {
    toast.error(message);
  }
  renderInfo = (message) => {
    toast.info(message);
  }
  render() {
    const { search, status, error, gallery } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearch} />
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <ImageGallery gallery={gallery} />}
        {status === 'resolved' && gallery.length === 0 && this.renderInfo(`There are no pictures for ${search}`)}
        {status === 'rejected' && this.renderError(error.message)}
        {this.state.gallery.length >= 12 && (
          <Button onLoadMore={this.handleLoadMore} />
        )}
        <ToastContainer/>
      </Container>
    );
  }
}
