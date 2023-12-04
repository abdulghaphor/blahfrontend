import React from "react";
import { Form, useActionData } from "react-router-dom";
function Home() {
  return (
    <div>
      <Form
        method="post"
        replace
        className="bg-gray-400 w-[600px] m-auto h-[1000px] flex flex-col p-5"
      >
        <label>Title</label>
        <input name="title"></input>
        <label>Content</label>
        <textarea name="content"></textarea>
        <button className="border mt-3" type="submit">
          GENERATE!
        </button>
      </Form>
    </div>
  );
}

export default Home;
