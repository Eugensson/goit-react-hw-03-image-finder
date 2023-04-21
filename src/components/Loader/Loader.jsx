import { Grid } from 'react-loader-spinner';

function Loader() {
  return (
    <Grid
      height="60"
      width="60"
      color="#000000"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClass=""
      visible={true}
    />
  );
}

export default Loader;
