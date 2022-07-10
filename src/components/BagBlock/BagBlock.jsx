import s from './BagBlock.module.scss';
import bbImg from '../../assets/img/shop/13834043_17150075_170.webp';

const BagBlock = () => {
  return (
    <div className={s.bag}>
      <h1 className={s.title}>Shopping bag</h1>
      <div className={s.inner}>
        <div className={s.details}>
          <ul className={s.list}>
            <li className={s.block}>
              <span className={s.country}>
                Sending from: <b>Ukraine</b>
              </span>
              <ul className={s.items}>
                <li className={s.product}>
                  <div className={s.product__media}>
                    <img src={bbImg} alt='Product' />
                  </div>
                  <div className={s.product__info}>
                    <span>
                      <b>Gucci</b>
                    </span>
                    <span>Gucci Blade cotton T-shirt</span>
                    <span>My-Shop ID: 123123</span>
                  </div>
                  <div className={s.product__price}>
                    <p>
                      <b>$520</b>
                    </p>
                  </div>
                  <div className={s.product__size}>
                    <div className={s.product__details}>
                      <span>Size</span>
                      <p>
                        <b>L</b>
                      </p>
                    </div>
                    <div className={s.product__details}>
                      <span>Quantity</span>
                      <p>
                        <b>1</b>
                      </p>
                    </div>
                  </div>
                </li>
                <li className={s.product}>
                  <div className={s.product__media}>
                    <img src={bbImg} alt='Product' />
                  </div>
                  <div className={s.product__info}>
                    <span>
                      <b>Gucci</b>
                    </span>
                    <span>Gucci Blade cotton T-shirt</span>
                    <span>My-Shop ID: 123123</span>
                  </div>
                  <div className={s.product__price}>
                    <p>
                      <b>$520</b>
                    </p>
                  </div>
                  <div className={s.product__size}>
                    <div className={s.product__details}>
                      <span>Size</span>
                      <p>
                        <b>L</b>
                      </p>
                    </div>
                    <div className={s.product__details}>
                      <span>Quantity</span>
                      <p>
                        <b>1</b>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className={s.block}>
              <span className={s.country}>
                Sending from: <b>USA</b>
              </span>
              <ul className={s.items}>
                <li className={s.product}>
                  <div className={s.product__media}>
                    <img src={bbImg} alt='Product' />
                  </div>
                  <div className={s.product__info}>
                    <span>
                      <b>Gucci</b>
                    </span>
                    <span>Gucci Blade cotton T-shirt</span>
                    <span>My-Shop ID: 123123</span>
                  </div>
                  <div className={s.product__price}>
                    <p>
                      <b>$520</b>
                    </p>
                  </div>
                  <div className={s.product__size}>
                    <div className={s.product__details}>
                      <span>Size</span>
                      <p>
                        <b>L</b>
                      </p>
                    </div>
                    <div className={s.product__details}>
                      <span>Quantity</span>
                      <p>
                        <b>1</b>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={s.summ}>
          <div className={s.summ__inner}>
            <h2 className={s.summ__title}>Summary</h2>
            <div className={s.summ__details}>
              <div className={s.summ__info}>
                <span>Subtotal</span>
                <span>$1,247.00</span>
              </div>
              <div className={s.summ__info}>
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className={s.summ__info}>
                <span>Promotions</span>
                <span>-$48.30</span>
              </div>
              <div className={s.underline}></div>
              <div className={s.summ__info}>
                <span>Total</span>
                <span>
                  USD <b>$1,198.70</b>
                </span>
              </div>
            </div>
            <div className='chekout'>
              <button className='chekout__btn'>Go to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagBlock;
