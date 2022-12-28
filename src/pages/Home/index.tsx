import React from "react";
import { data } from "../../data/data";
import { Link } from "react-router-dom";

const Home = () => {
  // console.log(data.pdfData);
  return (
    <>
      <h1 className=" inline-block mx-7 w-[200px] pl-4 text-xl py-2 border-b-2">
        Document
      </h1>

      {data.pdfData.map((item, index) => (
        <div key={index} className=" px-16 my-2 text-lg cursor-pointer">
          <Link to={`/${item.id}`}>
            <h2 className="text-blue-600"> - {item.name}</h2>
          </Link>
        </div>
      ))}
    </>
  );
};
export default Home;
