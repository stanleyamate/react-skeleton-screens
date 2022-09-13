import React,{useState, useEffect} from "react"
import SkeletonArticle from "./skeletons/SkeletonArticle";

const Articles = () => {

  const [articles, setArticles] = useState(null)

  useEffect(() => {
    setTimeout( async() => {
   const res =  await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    const data = await res.json()
    setArticles(data)
    console.log(articles)
    }, 5000);
  }, [])
  return (
    <div>
     <h2>Articles</h2>
     {
      articles?articles.map(article =>(
     <>
      <div id={article.id}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
      </div><br />
      </>
      )):([1,2,3,4,5].map(n=><SkeletonArticle key={n}/>))

     }
    </div>
  )
}
export default Articles
