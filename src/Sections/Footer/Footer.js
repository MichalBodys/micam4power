import './Footer.scss';

const Footer = () => {

  
  const year = (new Date).getFullYear();

    return(
    <footer className='footer border-t'>
      <div className='flex justify-between w-full'>
        <div>
          <div>Alle Rechte vorbehalten ADDECODER</div>
          <div className='copyright'>&copy;{year}<a href='https://www.linkedin.com/in/michal-bodys/'> made by Michał Bodys</a></div>
        </div>
        <div className='flex flex-col'>
          <a href="/copyright-cookies" className='cursor-pointer mb-auto'>@copyright</a>
          <a href='https://drive.google.com/file/d/1UF5uqCebnUZEnHtQjPVhNe2y1IswQ62O/view?usp=sharing' className='cursor-pointer mb-auto'>Impressum</a>
        </div>
      </div>           
    </footer>
    )


}



export default Footer