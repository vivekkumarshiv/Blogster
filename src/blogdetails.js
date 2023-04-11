import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const{id}=useParams()
    const {data:blog,isPending,error}=useFetch("http://localhost:8000/animes/"+id);
    const nav=useNavigate();
    const handleDelete=()=>{
        fetch('http://localhost:8000/animes/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            nav("/")
        })

    }
    return ( 
        <div className="blogdetails">
            {isPending && <div>Loading...</div>}
            {error&& <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete anime</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;