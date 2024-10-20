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
        <div className='flex gap-5'>
          <a href='https://drive.google.com/file/d/1UF5uqCebnUZEnHtQjPVhNe2y1IswQ62O/view?usp=sharing' className='cursor-pointer mb-auto text-xs'>Datenschutz</a>
          <a href="/copyright-cookies" className='cursor-pointer mb-auto text-xs'>Impressum</a>
        </div>
      </div>           
    </footer>
    )


}



export default Footer