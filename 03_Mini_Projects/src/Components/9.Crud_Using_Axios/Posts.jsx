import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "./Api/PostApi";
import Form from "./Form";

function Posts() {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  const handleUpdatePost = (currElem) => {
    return setUpdateDataApi(currElem);
  };

  //? Handling Post data
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      
      // console.log(res);

      if (res.status === 200) {
        const newUpdatedPosts = data.filter((currPost) => {
          return currPost.id !== id;
        });
        setData(newUpdatedPosts);
      } else {
        console.log("Failed to delete the post :", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <section className="section-form">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>

      <section className="section-post">
        <ol>
          {data.map((currElem) => {
            const { id, body, title } = currElem;
            return (
              <li key={id}>
                <p>Title : {title}</p>
                <p>Body : {body}</p>
                <button onClick={() => handleUpdatePost(currElem)}>Edit</button>
                <button
                  className="btn-delete"
                  onClick={() => {
                    handleDeletePost(id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}

export default Posts;
