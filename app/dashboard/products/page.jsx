import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/dashboard/products/products.module.css";

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}></div>
              <Image src="/avatar.png" height={40} width={40} />
              Laptop
            </td>
            <td>
              The XYZ Laptop combines sleek design with powerful performance,
              featuring a high-resolution display, fast processor, and
              long-lasting battery life. Perfect for both work and
              entertainment, it offers seamless multitasking and immersive
              visuals.
            </td>
            <td>$1000</td>
            <td>07.26.2024</td>
            <td>available</td>
            <td>
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
            </td>
            <td>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
