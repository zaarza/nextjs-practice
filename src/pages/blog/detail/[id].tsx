import React from "react";
import { useRouter } from "next/router";
import { MainLayout } from "@/layouts";
import Link from "next/link";
import styles from "@/styles/components/DetailPost.module.scss";
import PostTypes from "@/utils/interfaces/Post";

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3001/posts");
  const posts: PostTypes[] = await response.json();
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}

interface getStaticPropsTypes {
  params: {
    id: number;
  };
}

export async function getStaticProps({ params }: getStaticPropsTypes) {
  const response = await fetch(`http://localhost:3001/posts/${params.id}`);
  const post: PostTypes = await response.json();
  return {
    props: {
      post,
    },
  };
}

interface DetailPostTypes {
  post: PostTypes;
}

export default function DetailPost({ post }: DetailPostTypes) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <MainLayout title="Detail">
      <div className={styles.detailPost}>
        <p>use getStaticPaths to fetch all post</p>
        <div className={styles.detailPost__item}>
          <h1 className={styles.detailPost__title}>{post.title}</h1>
          <p className={styles.detailPost__body}>{post.body}</p>
        </div>
        <Link className={styles.detailPost__A} href="/blog">
          Back
        </Link>
      </div>
    </MainLayout>
  );
}
