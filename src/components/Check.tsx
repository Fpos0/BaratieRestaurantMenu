import { Link } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';
import { useContext } from 'react';
import { FoodsContext } from 'contexts/FoodsContext';
import styles from '../styles/components/Check.module.css';
// import { CheckCard } from './CheckCard';
import { CheckCardsContainer } from './CheckCardsContainer';

export function Check() {
  const { getTotalPrice } = useContext(FoodsContext);
  return (
    <>
      <div className={styles.HeaderContainer}>
        <div>
          <span>
            <Link to="/" className={styles.styleLink}>
              <IoChevronBackSharp size={40} />
            </Link>
          </span>
        </div>

        <div>
          <span>Sacola</span>
        </div>

        <div>
          <span />
        </div>
      </div>

      <div className={styles.ProductCardsContainer}>
        <CheckCardsContainer />
      </div>

      <div className={styles.footerBtns}>
        <div>
          <span>Total</span>
          <span>R$ {getTotalPrice()}</span>
        </div>

        {/*  PROBLEMA DE USABILIDADE AQUI,QUANDO TEM 4 ITENS NAO DA PRA VER O QUARTO  */}
        <div className={styles.FinishBtn}>
          <div>
            <Link to="/">
              <div>Voltar ao cardapio</div>
            </Link>
          </div>
          <div>
            <Link to="/">
              <div>Finalizar</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
