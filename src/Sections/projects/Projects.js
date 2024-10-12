import './Projects.scss'



const Projects = () => {




    return(
      <section id='projects' >
        <div className="grid grid-rows-3 grid-cols-3 gap-4 justify-center items-center min-h-screen ">
          <div className="row-span-1 col-span-3 w-[200px] h-[200px] bg-gray-950 mx-auto mt-auto rounded-lg shadow-inner carousel-card flex justify-center items-center">
           <p>text</p>
          </div>
          <div className="w-[200px] h-[200px] bg-gray-950 ms-auto rounded-lg shadow-md carousel-card flex justify-center items-center">
           <p>text</p>
          </div>
          <div className="w-[200px] h-[200px] bg-gray-950 mx-auto rounded-lg shadow-md carousel-card flex justify-center items-center">
         <p>text</p>
          </div>
          <div className="w-[200px] h-[200px] bg-gray-950 me-auto rounded-lg shadow-md carousel-card flex justify-center items-center">
         <p>text</p>
          </div>
          <div className="row-span-1 col-span-3 w-[200px] h-[200px] bg-gray-950 mx-auto  mb-auto rounded-lg shadow-inner carousel-card flex justify-center items-center">
         <p>text</p>
          </div>
        </div>
      </section>
    )
}


export default Projects