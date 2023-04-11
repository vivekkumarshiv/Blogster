import { useState } from "react";
import {useNavigate}  from 'react-router-dom'

const Create = () => {
  const [ title, setTitle ] = useState("");
  const [ body, setBody ] = useState("");
  const [ author, setAuthor ] = useState("Eren");
  const [isPending,setIsPending]=useState(false)
  const nav=useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault()
    const blog={title,body,author}
    setIsPending(true);
    fetch("http://localhost:8000/animes",{
      method:'POST',
      headers:{"Content-type":"application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log('new blog added')
      setIsPending(false)
      nav("/",{replace:true})
    })
  }
  return (
    <div className="create">
      <h2>Add a new anime blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Anime Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Anime Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Anime Title:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Eren">Eren</option>
          <option value="Ichigo">Ichigo</option>
        </select>
        {!isPending &&<button>Add anime</button>}
        {isPending &&<button disabled>Adding anime</button>}
      </form>
    </div>
  );
};

export default Create;
