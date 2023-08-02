import { LoadMoreBtn } from "./Button.styled"
import PropTypes from 'prop-types';

export const Button = ({onLoadMore}) => {
  return (
    <LoadMoreBtn type="button" onClick={() => onLoadMore()}>Load more</LoadMoreBtn>
  )
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};