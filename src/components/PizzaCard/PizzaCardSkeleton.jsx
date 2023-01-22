import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaCardSkeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="110" r="110" />
    <rect x="0" y="260" rx="5" ry="5" width="280" height="27" />
    <rect x="0" y="305" rx="15" ry="15" width="280" height="88" />
    <rect x="0" y="410" rx="15" ry="15" width="100" height="45" />
    <rect x="128" y="410" rx="15" ry="15" width="151" height="45" />
  </ContentLoader>
);

export default PizzaCardSkeleton;
