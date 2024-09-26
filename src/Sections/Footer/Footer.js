import './Footer.scss';

const Footer = () => {
  const year = (new Date).getFullYear();

    return(
    <footer className='footer'>           
          <span className='copyright'>&copy;{year} made by michał bodys</span>
    </footer>
    )


}



export default Footer