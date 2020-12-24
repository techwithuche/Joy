
import Footer from './Footer'
import Head from 'next/head'
import Header from './Header'


const Layout = (props) => (
	<div>
       <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
       <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="slick/slick.css" />
        <link rel="stylesheet" href="slick/slick-theme.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/tooplate-style.css" />
        </Head>
        <Header/>
        {props.children}
        
        <Footer/>
    <script src="js/jquery-1.11.0.min.js"></script>
    <script src="js/background.cycle.js"></script>
    <script src="slick/slick.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src= "js/script2.js"></script>
    
    </div>
);

export default Layout


