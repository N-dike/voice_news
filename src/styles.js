import { makeStyles } from "@material-ui/core";

export default makeStyles ((theme) => ({
    footer: {
        alignItems: 'center',
        bottom: 0,
        color: 'black',
        display: 'flex',
        height: '120px',
        justifyContent: 'center',
        left: 0,
        position: 'fixed',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]:{
        display: 'none',
    },
    },
    link: {
        color: 'rgba(21, 101, 192)',
        textDecoration: 'none'
    },
    image: {
        marginLeft: 20,
    },
    card: {
        alignItems: 'center',
        backgroundColor: 'rgba(21, 101, 192)',
        borderRadius: 10,
        color: 'white',
        height:'25vmin',
        justifyContent: 'center',
        margin: '0 12px',
        padding: '3%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column-reverse',
            height:'initial',
            textAlign:'center',
            width: '100%',
            '&:nth-of-type(1)':{
                marginBottom:'12px',
            },
        }

    },
    infoContainer: {
        alignItems:'center',
        display:'flex',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
        },
    },
    logoContainer: {
        alignItems:'center',
        color: '#0D1940',
        display: 'flex',
        justifyContent:'center',
        flexDirection:'row',
        width: '100%',
        [theme.breakpoints.down('sm')]:{
            height: '35vmin',
        },
    },
}))