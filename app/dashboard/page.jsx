import Transactions from "../ui/transactions/transactions";
import styles from "@/app/ui/dashboard/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {" "}
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;
