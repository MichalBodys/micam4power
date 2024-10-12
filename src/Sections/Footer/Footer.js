import './Footer.scss';

const Footer = () => {
  const year = (new Date).getFullYear();

    return(
    <footer className='footer border-t'>
      <div className='flex justify-between w-full'>
          <div className='copyright'>&copy;{year} made by michał bodys</div>
          <a href="/copyright-cookies" className='cursor-pointer mb-auto'>copyright</a>
      </div>           
    </footer>
    )


}



export default Footer