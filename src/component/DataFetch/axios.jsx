 import axios from 'axios';
import { useEffect, useState } from 'react';

const AxiosComponent=() =>{
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);

   useEffect(() => {
    //  fetch('https://jsonplaceholder.typicode.com/posts/1')
    // fetch('https://dummyjson.com/users')
   	// .then((res) => {
    //  	if (!res.ok) throw new Error('Network response was not ok');
    //  	return res.json();
   	// })
   	// .then((data)=>{
    //     setData(JSON.stringify(data))
    // })
   	// .catch(setError);
    axios.get('https://dummyjson.com/users')
    .then((response) =>{
      console.log(response)
       setData(JSON.stringify(response.data.users))
    })
   	.catch(setError);
   }, []);

   if (error) return <div>Error: {error.message}</div>;
   if (!data) return <div>Loading...</div>;
   return <pre>{data}</pre>;
 }
 export  default AxiosComponent