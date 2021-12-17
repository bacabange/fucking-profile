import { useRouter } from "next/router";
import React from "react";
import Layout from "../../layout/Layout";

const SinglePost = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <div className="page-content p-20">
        <div>My post madafaca {slug}</div>
      </div>
    </Layout>
  );
};

export default SinglePost;
