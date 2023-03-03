import React from "react";
import Link from "next/link";
import { MainLayout } from "@/layouts";
import PostTypes from "@/utils/interfaces/Post";
import styles from "@/styles/components/Blog.module.scss";

export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/posts");
  const posts: PostTypes[] = await response.json();
  return {
    props: {
      posts,
    },
  };
}

interface BlogTypes {
  posts: PostTypes[];
}

export default function Blog({ posts }: BlogTypes) {
  return (
    <MainLayout title="Blog">
      <div className={styles.blog}>
        <div className={styles.blog__header}>
          <h1 className={styles.blog__title}>Blog</h1>
          <p>Learn to use getStaticProps to return posts as props</p>
        </div>
        <ul className={styles.blog__posts}>
          {posts.map((post, index) => (
            <li className={styles.blog__post} key={`post-${index}`}>
              <Link className={styles.blog__A} href={`/blog/detail/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}
