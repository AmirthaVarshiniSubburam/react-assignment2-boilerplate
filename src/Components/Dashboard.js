import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DisplayCard from './DisplayCard';

const Dashboard = () => {
  
  const[trending,setTrending] =  useState([]);
    const[readlaterdb,setReadlaterdb] =useState([]);

      // axios.get(`https://newsapi.org/v2/top-headlines?country=in&apikey=dbaefe94344341b6b68c526c4070fe6f`)
      // https://newsapi.org/v2/everything?q=bitcoin&apiKey=dbaefe94344341b6b68c526c4070fe6f


    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apikey=dbaefe94344341b6b68c526c4070fe6f`)
 
        .then((res)=>{
            setTrending(res.data.articles);
            // console.log(res.data.articles);
        })
        },[]);

    const readLater = (newCard) => {
            axios
              .post('http://localhost:3000/readLater', newCard
              
              , {
                headers: { 'Content-Type': 'application/json' },
              })
              .then(function (response) {
                if (response.status === 201) {
                  setReadlaterdb([...readlaterdb, response.data]);
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          };
  
  
  return (
    <div className="container">
      {/* <Link  to="/login">Login</Link>
        <Link  to="/register">Register</Link>

        
        <Outlet /> */}
            <div className="row">
        {trending.map((news)=>(
            
            <div className="col-sm-3" key={news.url} >
            <DisplayCard 
            
            description={news.description}
            urlToImage = {news.urlToImage}
            title = {news.title}
            readLater={readLater}
            author = {news.author}
            url = {news.url}
            />
            </div>

          ))

        }

        </div>
        </div>
  )
}

export default Dashboard