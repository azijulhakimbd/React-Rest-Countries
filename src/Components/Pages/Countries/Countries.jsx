import React from 'react';
import { useLoaderData } from 'react-router';
import Country from './Country';

const Countries = () => {
    const countryData=useLoaderData()
    return (
        <div>
            <h1 className='text-2xl text-center p-5'>React World On the Go</h1>
            <h1 className='text-2xl text-center p-5'>Total Countries:{countryData.length}</h1>
            <div className="overflow-x-auto">
  <table className="table w-3/4 mx-auto rounded-2xl table-xs border p-2 m-2 border-[#EFEFEF]">
    <thead>
      <tr>
        <th>TLD</th>
        <th>Country Name</th>
        <th>Official Name</th>
        <th>Capital</th>
        <th>Population</th>
        <th>Flags</th>
        <th>Timezones</th>
      </tr>
    </thead>
    <tbody>
      
            {
                countryData.map(country=> <Country key={country.cca3} country={country}></Country>)
            }
              
    </tbody>
   
        </table>
        </div>
        </div>
    );
};

export default Countries;