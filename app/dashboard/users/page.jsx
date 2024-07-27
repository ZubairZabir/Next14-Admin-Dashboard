import Image from "next/image";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";

const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Cena
              </div>
            </td>
            <td>johncena@gmail.com</td>
            <td>07.26.2024</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <Link href="/dashboard/users/singleUser">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Cena
              </div>
            </td>
            <td>johncena@gmail.com</td>
            <td>07.26.2024</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Cena
              </div>
            </td>
            <td>johncena@gmail.com</td>
            <td>07.26.2024</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Cena
              </div>
            </td>
            <td>johncena@gmail.com</td>
            <td>07.26.2024</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Cena
              </div>
            </td>
            <td>johncena@gmail.com</td>
            <td>07.26.2024</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>
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

export default UserPage;
