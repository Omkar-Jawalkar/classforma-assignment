import React, { useEffect, useState } from "react";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DocumentPage = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const { myid } = useParams();
  const pdfData = data.pdfData.find((item) => item.id === parseInt(myid!));
  console.log(pdfData);
  return (
    <div className="flex flex-row text-lg ">
      <div className="flex w-full flex-col">
        <div className="min-h-[400px] mx-8 space-y-2">
          <h1 className=" border-b-2">labels</h1>
          <div className="flex flex-row space-x-4 ">
            <button className="bg-orange-400 px-2 py-1">Title</button>
            <button className="bg-green-400 px-2 py-1">Author</button>
          </div>
        </div>
        <div className="min-h-full  mx-8 ">Box Coordinates</div>
      </div>
      <div className="w-full">
        <Document file={pdfData?.link} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
};

export default DocumentPage;
