import Image from "next/image";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import { fetchUsers } from "@/app/lib/data";

const UserPage = async () => {
  let users = [];
  let error = null;
  try {
    users = await fetchUsers();
    console.log(users);
  } catch (err) {
    console.error("Error fetching users:", err.message);
    error = err.message;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>Failed to load users. Please try again later.</p>
        <p>Error Details: {error}</p>
      </div>
    );
  }

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
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/avatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
              <td>
                <Link href={`/dashboard/users/${user._id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
