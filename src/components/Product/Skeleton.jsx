import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className='card'
    speed={2}
    width={415.75}
    height={808}
    viewBox='0 0 415.75 808'
    backgroundColor='#222222'
    foregroundColor='#242424'
    {...props}>
    <rect x='0' y='0' rx='0' ry='0' width='416' height='555' />
    <rect x='2' y='711' rx='0' ry='0' width='416' height='40' />
    <rect x='0' y='771' rx='0' ry='0' width='416' height='36' />
    <rect x='0' y='650' rx='0' ry='0' width='416' height='43' />
    <rect x='0' y='582' rx='0' ry='0' width='416' height='45' />
  </ContentLoader>
);

export default Skeleton;
