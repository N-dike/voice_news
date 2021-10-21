import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    card: {
        alignItem: 'center',
        borderRadius: 10,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: '45vh',
        justifyContent: 'space-between',
        padding: '10% 3%',
        width: '100%',
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    }
})


export default styles