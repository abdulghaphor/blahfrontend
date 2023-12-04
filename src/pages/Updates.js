import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Updates() {
  const data = useLoaderData() || null;

  useEffect(() => {
    console.log(data.contentList);
  }, [data]);

  return (
    <div>
      {data.contentList.map((el) => (
        <div className="block">
          <Link to={`${el._id}`}>GENERATED LINK to {el.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Updates;
