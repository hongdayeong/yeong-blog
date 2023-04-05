import React from "react";
import Layout from "../components/layout";

function AboutPage() {
  return (
    <Layout>
      <title>자기소개</title>

      <h1>자기소개 페이지 입니다.</h1>
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
}
export default AboutPage;