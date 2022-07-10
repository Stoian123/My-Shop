import React from 'react';
import Filter from '../components/Filter/Filter';
import News from '../components/News/News';
import Product from '../components/Product/Product';
import Skeleton from '../components/Product/Skeleton';

function Home() {
  const categories = ['Sale', 'Clothing', 'Shoes', 'Bags'];
  const [product, setProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'popularity',
    filterProperty: 'rating',
  });
  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sortType.filterProperty.replace('-', '');
    const order = sortType.filterProperty.includes('-') ? 'ask' : 'desc';
    fetch(
      `https://62c5de03134fa108c25e6e44.mockapi.io/products?search=${categories[categoryId]}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, [categoryId, sortType]);
  return (
    <>
      <News />
      <Filter
        categories={categories}
        categoryId={categoryId}
        sortType={sortType}
        onChangeCategory={(id) => setCategoryId(id)}
        onChangeFilter={(i) => setSortType(i)}
      />
      <section className='product'>
        <div className='product__inner'>
          <h2 className='product__title'>Best of sale</h2>
          <div className='product__items'>
            {isLoading
              ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              : product.map((product) => (
                  <Product key={product.id} {...product} />
                ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
