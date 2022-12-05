import React, { useEffect } from 'react';
import { useState } from 'react';

const Attend = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/allUsers', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data)
            })
    }, [])
    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-100">
            <div className='text-gray-500 text-center my-5'>
                <h2 className=" text-2xl font-semibold leading-tight ">Users Information: </h2>
                <p>Here is all that user have sign up before: </p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-5/6 mx-auto p-6 text-xs text-left whitespace-nowrap border">
                    <colgroup>
                        <col className=''></col>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className='' />
                    </colgroup>
                    <thead>
                        <tr className=" bg-primary bg-gradient-to-r from-secondary">

                            <th className="p-3">First Name</th>
                            <th className="p-3">Last Name</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Email</th>

                        </tr>
                    </thead>
                    <tbody className="border-b  bg-accent  border-gray-700">
                        {
                            user?.map(details => <tr key={details._id}>
                                <td className="px-3 py-2">
                                    <p>{details.first_name}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>{details.last_name}</span>

                                </td>
                                <td className="px-3 py-2">
                                    <p>{details.phone_number}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>{details.email}</p>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Attend;