"use client";

import type { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="space-y-8">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="rounded-lg bg-base-200 p-8">
          <h2 className="text-2xl font-semibold">Content Block {i + 1}</h2>
          <p className="mt-4">
            This is a tall content block to demonstrate scrolling behavior. Each block takes up significant vertical
            space.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
