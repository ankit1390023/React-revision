import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/ankit1390023`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })

    // })

    return (
        <div className='bg-gray-500 text-center p-6 font-bold text-2xl'>
            Github followers={data.followers}
            <div> name={data.name}</div>
            <div>bio={data.bio}</div>
            <div>
                <img
                    src={data.avatar_url}
                    alt="avatar"
                    width={100}
                    height={100}
                    className="rounded=full"
                />
            </div>

        </div>
    )
}
export default Github;

export const gitHubInfoLoader = async () => {
   const response=await fetch(`https://api.github.com/users/ankit1390023`)
    return response.json();
}