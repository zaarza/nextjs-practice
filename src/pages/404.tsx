import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/components/NotFound.module.scss";

const NotFoundPage = () => {
  const router = useRouter();
  const [second, setSecond] = useState<number>(10);

  useEffect(() => {
    second === 0 && router.push("/");
    second > 0 &&
      setInterval(() => {
        setSecond(second - 1);
      }, 1000);
  });

  return (
    <div className={styles.notFound}>
      <h1>Page not found</h1>
      <p>Automatically redirect in {second}</p>
    </div>
  );
};

export default NotFoundPage;
