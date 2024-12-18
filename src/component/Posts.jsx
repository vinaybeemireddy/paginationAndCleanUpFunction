import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';

const Posts = () => {
    const [post, setPost]=useState([]);
   const [page, setPage]= useState(1);
   const [totalCount, setTotalCount]=useState(0)

const getData= async(page)=>{
    try{

        let response= await fetch(`https://jsonplaceholder.typicode.com/posts?_limit_=10&_page=${page}`);
        let data= await response.json();
        setPost(data);
        let count= Number(response.headers.get("X-Total-Count"))
        setTotalCount(count)

    }
    catch(error){
        console.log("fetch error",error);
    }
}

useEffect(()=>{
    getData(page);
},[page]);
const handlePageChange=(val)=>{
    const updatePage= page +val //-1 /+1
    setPage(updatePage);
}



  return (
    <div>

        {post.map((item,id)=>{
            return (
                <PostItem key={id} id={item.id} title={item.title}/>
            )
        })}

        <div style={{ display:"flex"}}>
            <button disabled={page===1} onClick={()=>handlePageChange(-1)}>prev</button>
            <p>{page}</p>
            <button disabled={page=== Math.ceil(totalCount/10)}onClick={()=>handlePageChange(+1)}>next</button>
        </div>

        <div>
            <h1>{page}</h1>
            {new Array(10).fill(0).map((element,id)=>{
               return <button key={id} onClick={()=>setPage(id+1)}>{id+1}</button>
            })}
            
        </div>
    </div>
  )
}

export default Posts

//new Array(10).fill(0)
//new Array(10) ==>[undefined, undefined,....undefined];
//new Array(10).fill(0)-->[0,0,.....,0]