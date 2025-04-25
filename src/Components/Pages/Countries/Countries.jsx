import React from 'react';
import { useLoaderData } from 'react-router';
import Country from './Country';

const Countries = () => {
    const countryData=useLoaderData()
    return (
        <div>
            <h1 className='lg:text-2xl text-center lg:p-5'>React World On the Go</h1>
            <h1 className='lg:text-2xl text-center lg:p-5'>Total Countries:{countryData.length}</h1>
            <div className="overflow-x-auto">
  <table className="table w-3/4 h-2/4 lg:mx-auto lg:rounded-2xl lg:table-lg table-sm border p-2 m-2 border-[#EFEFEF]">
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