import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../context/UserContext';
import MyReview from '../MyReview/MyReview';

const Details = () => {
  const { _id, img, price, title, description } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.uname.value;
    const email = user?.email || 'unregistered';

    const message = form.review.value;

    const img = form.img.value;

    const order = {
      service: _id,
      serviceName: title,
      reviewer: name,
      email,
      message,
      img,
    };

    fetch('https://reactjs-warmup-server-side.vercel.app/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())

      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          alert('Review add successfully');
          form.reset();
        }
      })

      .catch((err) => console.error(err));
  };

  return (
    <div className="row row-cols-md m-4">
      <h2>{title}</h2>

      <div className="col-md-6 col-sm-12">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="fitness" className="w-100" />
          </PhotoView>
        </PhotoProvider>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl text-orange-600 font-semibold">
            Price: ${price}
          </p>

          <p className="text-2xl text-orange-600 font-semibold">
            {' '}
            {description}
          </p>
        </div>
      </div>

      {/* review part form */}

      <div className="col-md-6 col-sm-12 ">
        <h3>Give your valuabe review.</h3>

        <form onSubmit={handleReview}>
          <label for="name" class="form-label">
            Name
          </label>
          <input
            name="uname"
            className="m-2 w-50"
            placeholder="Enter your name"
          />{' '}
          <br />
          <div className="d-flex">
            <label for="floatingTextarea">Review</label>
            <textarea
              name="review"
              className="form-control w-75"
              placeholder="Leave a review here"
              id="floatingTextarea"
            ></textarea>
          </div>
          <label for="img">E-mail</label>
          <input
            name="email"
            type="email"
            className="m-2 w-50"
            defaultValue={user?.email}
            placeholder="Your mail"
          />{' '}
          <br />
          <label for="img">Image</label>
          <input name="img" className="m-2 w-50" placeholder="Image url" />{' '}
          <br />
          <input
            style={{
              backgroundColor: '#0071c2',
              borderRadius: '6px',
              padding: '4px 8px',
              color: 'white',
            }}
            type="submit"
            value="Review"
            className="m-2"
          />
        </form>
      </div>

      {/* review part form end */}

      {/* review all start */}

      <h2>Review given by user.</h2>

      <MyReview></MyReview>
    </div>
  );
};

export default Details;
