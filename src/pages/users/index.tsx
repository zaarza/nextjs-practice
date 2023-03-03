import React from "react";
import { MainLayout } from "@/layouts";
import styles from "@/styles/components/Users.module.scss";

const Users = () => {
  return (
    <MainLayout title="Users">
      <div className={styles.users}>Users</div>
    </MainLayout>
  );
};

export default Users;
