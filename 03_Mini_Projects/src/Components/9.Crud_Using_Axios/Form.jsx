import React, { useEffect, useState } from "react";
import { postData, updateData } from "./Api/PostApi";

function Form({ data, setData, updateDataApi, setUpdateDataApi }) {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  //? Get the updated Data and add into input field

  let isEmpty = Object.keys(updateDataApi).length === 0;

  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  //? UPDATE POST DATA
  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);
      console.log(res);

      if (res.status === 200) {
        setData((prev) => {
          return prev.map((currElem) => {
            return currElem.id === updateDataApi.id ? res.data : currElem;
          });
        });

        setAddData({title : "" , body:""});
        setUpdateDataApi({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addPostData = async () => {
    const res = await postData(addData);
    console.log("Response", res);

    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const action = event.nativeEvent.submitter.value;

    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add Title"
          value={addData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoComplete="off"
          id="body"
          name="body"
          placeholder="Add Post"
          value={addData.body}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" value={isEmpty ? "Add" : "Edit"}>
        {isEmpty ? "Add" : "Edit"}
      </button>
    </form>
  );
}

export default Form;
