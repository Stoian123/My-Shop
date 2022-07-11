import React from 'react';
import { SearchContext } from '../App';
import Filter from '../components/Filter/Filter';
import News from '../components/News/News';
import Pagination from '../components/Pagination/Pagination';
import Product from '../components/Product/Product';
import Skeleton from '../components/Product/Skeleton';

function Home() {
  const { searchValue } = React.useContext(SearchContext);
  const categories = ['Sale', 'Clothing', 'Shoes', 'Bags'];
  const [product, setProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'popularity',
    filterProperty: 'rating',
  });
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const products = product.map((product) => (
    <Product key={product.id} {...product} />
  ));
  React.useEffect(() => {
    setIsLoading(true);
    const sortBy = sortType.filterProperty.replace('-', '');
    const order = sortType.filterProperty.includes('-') ? 'ask' : 'desc';
    const category = categoryId > 0 ? `category=${categories[categoryId]}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    fetch(
      `https://62c5de03134fa108c25e6e44.mockapi.io/products?page=${currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);
  return (
    <>
      <News />
      {/* {currentPage === 1 && <News />} */}
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
            {isLoading ? skeletons : products}
          </div>
          <Pagination onChangePage={(number) => setCurrentPage(number)} />
        </div>
      </section>
    </>
  );
}

export default Home;
