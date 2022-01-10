import React from 'react';

type Props = {
  loading: boolean,
  children: React.ReactNode
}


const Loader = ({ loading, children }: Props) => {
  return (
    <>
      {loading && (
        <div>
          {children}
        </div>
      )}
    </>
  );
};

export default Loader;