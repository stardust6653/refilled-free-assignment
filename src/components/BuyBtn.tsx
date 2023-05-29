import styles from "../../styles/BuyBtn.module.scss";

const BuyBtn = ({ list, setClick }: any) => {
  const totalPrice = () => {
    let total = 0;
    if (list !== undefined) {
      list.map((item: any) => {
        total += item.price;
      });
    }
    return total.toLocaleString("es-Us");
  };

  return (
    <div className={styles.component} onClick={setClick}>
      <div className={styles.buyBtn}>
        {list !== undefined ? list.length : 0}개 | {totalPrice()}원 구매하기
      </div>
    </div>
  );
};

export default BuyBtn;
