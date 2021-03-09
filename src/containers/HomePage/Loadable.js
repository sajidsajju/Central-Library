import React, { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('./index'));

const Loadable = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  );
};
export default Loadable;
