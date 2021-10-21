import { makeStyles } from '@material-ui/core/styles'


export default makeStyles({
    activeCard:{
        borderBottom: '10px solid #22289a',
    },
    border: {
        border: 'solid',
    },
    card: {
        borderBottom: '10px solid white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        },
        cardActions: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 16px 8px 16px',
        },
        details: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '20px',
        },
        fullHeightCard:{
            height: '100%',
        },
        grid: {
            display: 'flex',
        }, 
    media: {
        height: 250, 
    },          
        title: {
            pading:'0 16px',
        },
     
})