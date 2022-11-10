import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { Link } from 'react-router-dom';




const ServiceCard = ({service}) => {

    const {_id,img, price, title,description} = service;


    return (
        <div    className="card card-compact w-25 bg-base-100 shadow-xl d-flex">





{/* <figure><img src={img} alt="fitness" className='w-100' /></figure> */}



 
<PhotoProvider>
      <PhotoView src={img}>
      <img src={img} alt="fitness" className='w-100' />
      </PhotoView>
    </PhotoProvider>



            
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>

                <p className='text-2xl text-orange-600 font-semibold'> {description.slice(0,100)}</p>



                <div className="card-actions justify-end">


  <Link to={`/details/${_id}`}>
  <button className="btn btn-primary">See Details</button>
  
  </Link> 




                    
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;