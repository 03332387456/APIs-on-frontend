import { useEffect, useState } from "react";
import Button from '@mui/material/Button'
import { useParams } from "react-router-dom";
import { Get, Post, Put } from "../Api/ApiMethods";

export default function AddProject() {
  const [name, setName] = useState("");
  const [shortName, setshortName] = useState("");
  const [fee, Setfee] = useState("");
  // const [body, setBody] = useState("");
  // const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const params = useParams();

  const getPostById = () => {
    Get(`courses/${params.id}`)
      .then((res) => {
        const comment = res.data;
        setName(comment.name);
        setshortName(comment.shortName);        
        Setfee(comment.fee);        
        // setBody(comment.body);
        // setEmail(comment.email);
        setId(comment.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePost = () => {
    Put(`courses/${id}`, { name, shortName, fee })
      .then((res) => {
        console.log("Post Updated Successfully ==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const submitPost = () => {
    const newComment = {
      name,
      shortName,
      fee
 
    };
  
    Post("courses", newComment)
      .then((res) => {
        console.log("Post Added Successfully ==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (params.id) {
      getPostById();
    }
  }, [params.id]);

  return (
    <div>
      <div className="container mt-5">
        <h1>
          <u className="text-primary">Add comments here</u>
        </h1>
      </div>
      <div className="container border border-success p-3 shadow rounded my-5">
        <div className="container rounded my-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter course Name"
            className="p-3  w-100 rounded shadow"
          />
              <input
            value={shortName}
            onChange={(e) => setshortName(e.target.value)}
            type="text"
            placeholder="Enter course ShortName"
            className="p-3  w-100 rounded shadow"
          />
              <input
            value={fee}
            onChange={(e) => Setfee(e.target.value)}
            type="number"
            placeholder="Enter  Fee"
            className="p-3  w-100 rounded shadow"
          />
          {/* <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="my-3 p-3 w-100 rounded"
            cols={20}
            rows={5}
            placeholder="Enter comment here..."
          ></textarea>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="Email"
            placeholder="Enter your Email"
            className="p-3  w-100 rounded shadow"
          /> */}
          <div className="row mb-4 ">
            <div className="col-md-6 p-2 ">
              <input
                value={id}
                onChange={(e) => setId(e.target.value)}
                type="text"
                placeholder="Enter your ID"
                className="p-3  w-100 rounded shadow"
              />
            </div>
          </div>
        </div>

        {params.id ? (
          <Button variant="contained" color="success" onClick={updatePost}>
            Update
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={submitPost}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}
