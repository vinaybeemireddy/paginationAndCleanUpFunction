import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';

const PostsDemo = () => {
    const [page, setPage] = useState(1);
    const [posts,setPosts] = useState([]);
    const [totalCount,setTotalCount] = useState(0);

    const handlePosts =async (page)=>{
        try{
            let url = `https://jsonplaceholder.typicode.com/posts?_limit_=10&_page=${page}`;
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            setPosts(data);
            let count = Number(response.headers.get("X-Total-Count"));
            setTotalCount(count);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        handlePosts(page);
    },[page]);

    const handlePage = (val)=>{
        const data = page + val;
        setPage(data);



    }
  return (
    <div>
        <h1>PostsDemo</h1>
        {
            posts.map((item, id)=>{
                return(
                    <PostItem key={id} id={item.id} title={item.title}/>
                )
            })

        }
        <button disabled ={page===1} onClick={(()=>handlePage(-1))}>prev</button>
        <p>{page}</p>
        <button disabled={page === Math.ceil(totalCount/100)} onClick={handlePage(+1)}>next</button>
        <button onClick={handlePosts}>posts</button>

        <div>
            <h1>{page}</h1>
            {
                new Array(10).filter(0).map((element, id)=>{
                    return <button key = {id} onClick={()=>setPage(id+1)}>{id+1}</button>
                })
            }
        </div>

    </div>
  )
}

export default PostsDemo