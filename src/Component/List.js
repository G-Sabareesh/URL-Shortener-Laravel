import React, { useContext } from "react";
import ListContent from "./ListContent";
import UrlContext from "../DataContent/UrlContext";

const List = () => {
  const { urlData } = useContext(UrlContext);

  return (
    <div
      className="container d-flex align-items-center justify-content-start flex-column col-sm-8   p-2 overflow-y-auto overflow-x-hidden gap-3"
      style={{ height: "55%" }}
    >
      {urlData?.map((item, index) => (
        <ListContent key={index} item={item} />
      ))}
      {!urlData && (
        <span className="fs-5 fw-semibold text-white w-100 text-center">
          No shortened URLs.
        </span>
      )}
    </div>
  );
};

export default List;
