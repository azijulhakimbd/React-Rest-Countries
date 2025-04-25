import React from 'react';

const Country = ({country}) => {
    console.log(country);
    
    return (
        
          <tr>
        <th>{country.tld}</th>
        <td>{country.name.common}</td>
        <td>{country.name.official}</td>
        <td>{country.capital}</td>
        <td>{country.population}</td>
        <td><img className='lg:w-20 lg:h-10' src={country.flags.png} alt="" /></td>
        <td>{country.timezones[0]}</td> </tr>
    
    );
};

export default Country;