import Link from "next/link";
import styles from "@/app/ui/sidebar/menuLink/menuLink.module.css"

const MenuLink = ({ item }) => {
  return (
    <div>
      <Link href={item.path} className={styles.container}>
        {item.icon}
        {item.title}
      </Link>
    </div>
  );
};

export default MenuLink;
