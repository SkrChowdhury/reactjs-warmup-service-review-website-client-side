import React, { useEffect, useState } from 'react';

const OrderRow = ({ user,order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, service, status } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])

    

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img && 
                                <img src={user?.img} alt="fitness" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{user?.name}</div>
                        
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm"></span>
            </td>
            <td>{_id}</td>
            <th>
                <button 
                onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;