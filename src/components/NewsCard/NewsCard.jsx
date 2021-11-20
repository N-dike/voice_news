import React, {useEffect} from 'react'
import {Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core'
import classNames from 'classnames'
import useStyles from './styles'

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, activeArticle, i}) => {
    const classes = useStyles()
  

    useEffect(() =>{
        if( activeArticle === i ) { 
            let elmnt = document.getElementById(`card ${i}`);
              elmnt.scrollIntoView(); window.scroll(0, elmnt.offsetTop - 15) } }, [i, activeArticle]);
    

  

   

    return (
        <Card className={classNames( activeArticle === i ? classes.activeCard : classes.card)} id={ `card ${i}` }>
            <CardActionArea href={url} target='_blank'>
                <CardMedia className={classes.media} image={urlToImage || '../../assets/news_placeholder.png'}/>
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondery' component='h2'>
                        {(new Date(publishedAt)).toDateString()}
                    </Typography>
                    <Typography variant='body2' color='textSecondery' component='h2'>
                        {source.name}
                    </Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'>Learn More</Button>
                <Typography variant='h5' color='textSecondery'>
                    {i + 1}
                    </Typography>
            </CardActions>
        </Card>
    )
}


export default NewsCard