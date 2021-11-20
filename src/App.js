import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import React, {useState, useEffect} from 'react'
import useStyles from './styles'
import { Typography } from '@material-ui/core'
import wordsToNumbers from 'words-to-numbers'

const alanKey='8a92c4e2fc12c818817c909248fd15d42e956eca572e1d8b807a3e2338fdd0dc/stage'

const App=() => {
  const classes = useStyles()
  const [activeArticle, setActiveArticle] = useState(-1);
  const [newsArticles, setNewsArticles] = useState([])


  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) =>{
        if(command === 'newHeadlines'){
          setNewsArticles(articles)
        }else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle) =>prevActiveArticle + 1)
        }else if (command === 'open')   {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}): number
          const article = articles[parsedNumber - 1]
          if (parsedNumber > articles.length){
            alanBtn().playText('Please try again.')          }
          else if(article){
            console.log(article);
            window.open(article.url, '_blank')
            alanBtn().playText('Opening the article on a new tab')
          } else {
            alanBtn().playText('Please try that again.')
          }
        }
      },
    })
  },[])
  return (
    <div className='App'>
      <div className={classes.logoContainer}>
     <Typography variant='h3'>News App with  </Typography>
     <img src='assets/alan-logo-icon-color.png' alt='logo here'/>
    
     </div>
     <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
     {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant="body1" component="h2">
            Created by
            <a className={classes.link} href='https://www.linkedin.com/in/nnadike-nnadike-800228225/'> Nnadike</a>
          </Typography>
        </div>
      ) : null}
    </div>
  )
}

export default App;
