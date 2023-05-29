import Link from "next/link";
import styles from "../../styles/BuyBtn.module.scss";
import { DataProps } from "../types/types";

const BuyBtn = ({ list }: { list: DataProps[] | undefined }): JSX.Element => {
  const totalPrice = (): string => {
    let total: number = 0;
    if (list !== undefined) {
      list.map((item: DataProps) => {
        total += item.price;
      });
    }
    return total.toLocaleString("es-Us");
  };

  return (
    <div className={styles.component}>
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
