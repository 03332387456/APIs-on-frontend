import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Get , Delete } from "../Api/ApiMethods";
import { useNavigate } from "react-router-dom";


function Project() {
  const [commentData, setCommentData] = useState<any>([]);
  const navigate = useNavigate();

  // const deleteComment = (id: any) => {
  //   Delete(`courses/${id}` , id)
  //     .then(() => {
  //       console.log("Course Deleted Successfully");
  //       fetchData();
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  const deleteComment = (id : any) => {
    if (id) {
      Delete("courses", id)
        .then(() => {
          console.log("Course Deleted Successfully");
          fetchData();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.error("Invalid ID for deletion");
    }
  };

  // const fetchData = () => {
  //   Get("courses" )
  //     .then((res) => {
  //       setCommentData([...res.data]);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };


  const fetchData = () => {
    Get("courses")
      .then((res) => {
        console.log("Response data:", res.data);
        const courses = res.data.data; // Update this line based on the actual property structure
        if (courses) {
          setCommentData([...courses]);
        } else {
          console.error("Invalid response data structure");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center my-5">API methods</h1>
      <div className="container mb-4">
        <Button
          onClick={() => navigate("/add")}
          variant="contained"
          color="primary" 
        >
         Add courses here 
        </Button>
      </div>
      {commentData.map((x :any) => (
        <div className="container mb-4" key={x.id}>
          <div className="row">
            <div className="col-md-12">
              <div className="shadow rounded border border-dark p-2">
                <h2>Name: {x.name}</h2>
                <p>
                  <b className="text-info">shortName:</b>
                  {x.shortName}
                </p>
                <p>
                  <b className="text-info">fee:</b>
                  {x.fee}
                </p>

                <IconButton
                  onClick={() => deleteComment(x.id)}
                  color="error" 
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    navigate(`/add/${x.id}`);
                  }}
                  color="primary"
                  aria-label="edit"
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;