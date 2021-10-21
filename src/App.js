import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import React, {useState, useEffect} from 'react'
import useStyles from './styles'
import { Typography } from '@material-ui/core'

const alanKey='8a92c4e2fc12c818817c909248fd15d42e956eca572e1d8b807a3e2338fdd0dc/stage'

const App=() => {
  const classes = useStyles()
  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) =>{
        if(command === 'newHeadlines'){
          setNewsArticles(articles)
        }else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle) =>prevActiveArticle + 1)
        }
      } 
    })
  },[])
  return (
    <div className='App'>
      <div className={classes.logoContainer}>
     <Typography variant='h2'>News App with  </Typography>
     <img src='assets/alan-logo-icon-color.png' alt='logo here'/>
    
     </div>
     <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  )
}

export default App;
