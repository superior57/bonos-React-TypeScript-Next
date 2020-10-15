import { useEffect } from 'react';
import {findSecurityBy} from 'src/api.js';
import en from 'src/intl/en.json';
import Widget from '../../widget/Widget';

import MagicGrid from 'react-magic-grid';


const Card = ({ title, item }) => (
  <>
 <div class="w-full mb-8 lg:mb-4 lg:w-1/4 sm:w-full md:w-1/2 lg:p-2 ">
   <div
   className="h-16 px-5 flex justify-between items-center rounded-tl-lg rounded-tr-lg"
   style={{
     backgroundColor: "#1a202c"
   }}>
   <div className="flex items-center">
  <h3 className="pr-4 text-lg font-semibold">{title}</h3>
     
   </div>
 </div>
 
 <div className="rounded-bl-lg rounded-br-lg"
   style={{
     backgroundColor: "#202837"
   }}>

   <p className="px-5 text-lg font-normal py-2">
   {item}
   </p>
   <div className="flex justify-end pb-6 px-6 cursor-pointer">
 
   </div>
 </div>
 </div>
 </>
 );
import {CheckBoxSelect, 
  DateRange,
  IntRange,
  SelectBox,
  StructureFilters,
  AdditionalFilters,
  InlineSelect,
  InlineInvalidSelect,
  InlineValidSelect, InlineCheckbox, ValidInlineCheckbox, RangeSlider} from './screener-forms/ScreenerForms';



const fields = [
    {
      name: 'Name',
      key: 'fieldname',
    },
    {
      name: 'Value',
      key: 'value',
    }
  ]

function ScreenerFilters(props) {
  

  function renderFilters(filter) {
   
    if (filter?.filterType == 'select') {
      return <CheckBoxSelect data={filter} onFilterChange={props.onFilterChange}/>
    } else if (filter?.filterType == 'structure-filters') {
      return <StructureFilters data={filter} onFilterChange={props.onFilterChange}/>
    } else if (filter?.filterType == 'additional-filters') {
      return <StructureFilters data={filter} onFilterChange={props.onFilterChange}/>
    } else if (filter?.filterType == 'date-range') {
      return <DateRange data={filter} onFilterChange={props.onFilterChange}/>
    } else if (filter?.filterType == 'int-range') {
      return <IntRange data={filter} onFilterChange={props.onFilterChange}/>
    } else if (filter?.filterType == 'select-box') {
      return <SelectBox data={filter} onFilterChange={props.onFilterChange}/>
    } else if (filter?.filterType == 'simple-select-box') {

    }
  }
    const [response, setresponse] = React.useState(undefined)
    useEffect(()=>{
    findSecurityBy({"isin":props.isin}).then((apiresponse)=>
      {
        setresponse(apiresponse)
      }).catch(console.log)
    },[])
    
    return (
      <MagicGrid items={props.data.content.length} gutter={0} animate={true}>
       
            {props.data.content.map((filter, index)=>(
              
                  <Card title={filter.filterName} item={renderFilters(filter)} />       
            ))}    
      
      </MagicGrid>
    )
  }

export default ScreenerFilters