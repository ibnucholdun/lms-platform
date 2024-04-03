import prisma from "@/lib/db";
import React from "react";
import Categories from "./_components/Categories";

const SearchPage = async () => {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return (
    <div className="p-6 ">
      <Categories items={categories} />
    </div>
  );
};

export default SearchPage;
