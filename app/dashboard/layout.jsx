import Sidebar from "../ui/sidebar/sidebar";
import styles from "@/app/ui/dashboard/dashboard.module.css";

const layout = ({ children }) => {
  return (
    <div className={styles.menu}>
      <Sidebar />
    </div>
  );
};

export default layout;
