import { Triangle } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <Triangle
      height="80"
      width="80"
      color="#0f3d82"
      ariaLabel="triangle-loading"
      wrapperStyle={{margin: '0 auto'}}
      wrapperClassName=""
      visible={true}
    />
  );
};
