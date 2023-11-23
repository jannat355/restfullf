import React from 'react'
import goalpic from '../assets/img2.jpeg'
import goallogo from '../assets/img3.jpeg'

const Home  = () => {
  return (
    <main className='container pt-5'>
      <div className='row justify-content-between align-items-center pb-4'> 
        <div className=' col-sm-12 col-md-4'>
          <img src={goalpic} alt="goalpic" className='img-fluid img-thumbnail rounded' />
        </div>
        <div className=' col-sm-12 col-md-6'>
          <h2>Improve productivity by managing<span className='text-primary'> Your user</span></h2>
          <p className='py-4'>Lorem ipsum dolor sit amet consectetur. Ut nisl nisl cursus massa sed. Turpis ac aliquet lacinia justo turpis amet at arcu. Diam vulputate suspendisse aliquam enim sagittis cursiodio ultrices. Condimentum lacus nunc rhoncus massa. Tortorstiu ultricies neque aliquam sit non. Diam vehicula dignissimepei pellentesque eros vitae. Viverra in vitae nunc lorem eget lciou imperdiet tortor. Ac mauris vel non amet eget egestas inoriou pellentesque commodo amet. Facilisi sed ut nisi pellentesque diam egestas et turpis donor amet.</p>
          <div className='d-flex gap-5'>
            <button className="btn btn-primary btn-lg">+ New User</button>
          <button className=" btn btn-primary btn-lg">All Users</button>
          </div>
        </div>
      </div>
    </main>

    
  )
}

export default Home 