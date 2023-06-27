import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <main>
      <h1>Welcome to the Home screen</h1>
      <Link href="/calculator">Go to Calculator</Link>
    </main>
  );
};
export default Home;
