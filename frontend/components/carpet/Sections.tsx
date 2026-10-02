import React from 'react';
import Section1 from './Section1';
import Section2 from "./Section2";
import TryOnCarpet from './TryOnCarpet';
const Sections = ({ sort }) => { // Prop receive kiya
  return (
    <div className='grid grid-cols-[25%_75%]'>
        <div>
          <h4>Filter Carpets by </h4>
        </div>
        <div className=''>
            <div className='text-center py-[20px] '>
                <h1 className='text-[25px] font-bold text-gray-600'>Carpets</h1>
                <p className='text-[20px] text-gray-600 my-[20px]'>At Tapi, carpets are our thing. Whether you love woven or twisted, Saxony or striped, you name it, we do it! Read more </p>
            </div>
            <div>
                <Section1 />
                {/* Section2 ko pass kar diya */}
                <Section2 sort={sort} /> 
                
            </div>
        </div>
    </div>
  )
}

export default Sections;