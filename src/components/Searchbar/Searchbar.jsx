import { MdSearch } from "react-icons/md";
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button, ButtonText, Header, SearchField, SearchForm } from './Searchbar.styled';
const initValues = {
  search: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({search}, actions) => {
    onSubmit(search);
}
  return (
    <Header>
      <Formik initialValues={initValues} onSubmit={handleSubmit}>
        <SearchForm autoComplete="off">
          <Button type="submit">
            <MdSearch />
            <ButtonText>Search</ButtonText>
          </Button>

          <SearchField
            type="text"
            autoFocus
            name="search"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};