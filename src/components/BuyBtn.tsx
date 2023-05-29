import Link from "next/link";
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
        {list !== undefined && list.length !== 0 ? (
          `${list.length}개 | ${totalPrice()}원 구매하기`
        ) : (
          <Link href={"/shop"} className={styles.noItem}>
            제품 추가하기
          </Link>
        )}
      </div>
    </div>
  );
};

export default BuyBtn;
