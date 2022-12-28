import React, { useEffect } from "react";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";

const DocumentPage = () => {
  const { myid } = useParams();
  const pdfData = data.pdfData.find((item) => item.id === parseInt(myid!));
  console.log(pdfData);
  return (
    <div className="flex flex-row text-lg ">
      <div className="flex w-full flex-col">
        <div className="min-h-full">
          <h1>labels</h1>
          <div className="flex flex-row space-x-4 ">
            <button className="bg-orange-400 px-2 py-1">Title</button>
            <button className="bg-green-400 px-2 py-1">Author</button>
          </div>
        </div>
        <div className="min-h-full">bottom left</div>
      </div>
      <div className="w-full">Right</div>
    </div>
  );
};

export default DocumentPage;
