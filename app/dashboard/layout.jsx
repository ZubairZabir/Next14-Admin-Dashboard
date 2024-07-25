import Sidebar from "../ui/sidebar/sidebar";
import Navbar from "../ui/navbar/navbar";
import styles from "@/app/ui/dashboard/dashboard.module.css";

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
    <div className={styles.menu}>
      <Sidebar />
    </div>
    <div className={styles.content}>
      <Navbar />
    </div>
    </div>
  );
};

export default layout;
