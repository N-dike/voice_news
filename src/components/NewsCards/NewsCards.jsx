import { Grid, Grow, Typography } from '@material-ui/core'
import NewsCard from '../NewsCard/NewsCard'
import React from 'react'
import useStyles from './styles.jsx'


const infoCards = [
    {color: '#00838f', title: 'Latest News', text: 'Get me the latest news'},
    {color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, Sport, Technology, science', text:'Get me the latest in technology news'},
    {color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, Nintendo, Apple, Facebook', text:'Get me headlines Apple'},
    {color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time', text:'Get me news from BBC news'},
]

const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles()
    
    if(!articles.length){
        return(
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}> 
                {infoCards.map((infoCard)=> (
                    <Grid className={classes.infoCard} item xs={12} sm={6} md={4} lg={3}>
                        <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                            <Typography variant='h5'>
                                {infoCard.title}
                            </Typography>
                            {infoCard.info ? (<Typography variant='h6'>
                                <strong>
                                    {infoCard.title.split(' ')[2]}:
                                    <br />
                                    {infoCard.info}
                                </strong>
                            </Typography>) : null}
                            <Typography variant='h6'>Try saying: <br /> <i>{infoCard.text}</i></Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>        
        </Grow>
        )
    }
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {articles.map((article, i)=>(
                    <Grid item xs={12} sm={6} md={4} lg={3} key={i} style={{ display: 'flex'}}>
                    <NewsCard 
                    article={article}
                    activeArticle={activeArticle}
                    i={i} />
                    </Grid>
                 ))}
            </Grid>        
        </Grow>
    )
}

export default NewsCards
