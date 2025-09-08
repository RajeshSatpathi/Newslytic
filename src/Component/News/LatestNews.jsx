import React, { useEffect, useState } from 'react'
import bg1 from "../../assets/bg1.jpg"
function LatestNews({category}) {
    const [latestNews, setlatestNews] = useState();
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    useEffect(() => {
        const FetchLatestNews = () => {
            fetch(url).then(response => response.json()).then(data => setlatestNews(data.articles))
        }
        FetchLatestNews()

    }, [category])

    return (
        <div className='w-full container mx-auto my-5 p-3'>
            <h2 className='text-2xl font-semibold'>latest News</h2>
            <div className='flex gap-5 flex-wrap justify-center'>
                {
                    latestNews?.slice(0, 8).map((news) => (

                        <div className='lg:w-[47%] md:w-full w-full shadow flex  mt-4 '>
                            <img src={news?.urlToImage ? news.urlToImage : bg1} alt="news banner" className='lg:w-45 w-40     ' />
                            <div className='p-3'>
                                <a href={news.url} className='font-bold my-1 cursor-pointer hover:text-blue-700 lg:text-md text-sm'>{news?.title}</a>
                                <p className='text-sm text-gray-700 my-1'>{news?.description}</p>
                                <div className='flex justify-between gap-3'>
                                    <p className='text-sm text-gray-500'>Auther - {news?.author} </p>
                                    <span className='text-sm text-gray-500'>created at {news?.publishedAt}</span>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>
            <div className='flex justify-center items-center my-4'>
                <button className='bg-pink-500 text-white p-2 text-sm cursor-pointer' >View More News</button>
            </div>
        </div>
    )
}

export default LatestNews