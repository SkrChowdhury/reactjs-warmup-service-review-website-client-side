import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/UserContext';

const AddNewService = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const userInfo = data;
    userInfo.email = user.email;

    fetch(`https://reactjs-warmup-server-side.vercel.app/addNewService`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())

      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          alert('Add service by you successfully');
          reset();
        }
      })

      .catch((err) => console.error(err));
  };

  return (
    <div className="text-center m-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="image-url"
          className="w-25 my-3"
          {...register('img')}
          required
        />{' '}
        <br />
        <input
          placeholder="offer name"
          className="w-25"
          {...register('offer')}
          required
        />{' '}
        <br />
        <input
          placeholder="location"
          className="w-25 my-3 "
          {...register('location')}
          required
        />{' '}
        <br />
        <textarea
          placeholder="details"
          className="w-25"
          {...register('details')}
          required
        />{' '}
        <br />
        <input
          style={{
            backgroundColor: '#0071c2',
            borderRadius: '6px',
            padding: '4px 8px',
            color: 'white',
          }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddNewService;
