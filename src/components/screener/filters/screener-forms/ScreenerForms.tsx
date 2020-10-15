import {useEffect, useState} from 'react'
import {Cross, Check} from 'src/components/svg'
import {random} from 'src/functions/numbers'
import Slider from 'rc-slider'
import Widget from 'src/components/widget/Widget'
import DatePicker from "react-datepicker";
const Range = Slider.Range


export const CheckBoxSelect = (props) => {
  const [enabled, setEnabled] = useState(props.data.filterContent.map(
    ()=>false
  )); 
return (
  <div className="flex flex-row items-center justify-start">
   
    <label className="inline-flex items-center children-x-2">
      <input
        type="checkbox"
        value="0"
        name="r4"
        className="form-checkbox text-blue-500 h-4 w-4"
        
      />
      <span>{props.data.filterName}</span>
      <select className="form-select block w-full text-sm">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
      </select>
    </label>
    

  </div>

)
}

export const StructureFilters = (props) => {

  const className="slider-blue"
  /*This maps the array based on the length*/
  const [values, setValues] = useState(props.data.filterContent.map(
    (filter)=>{
      if(filter.filterType == 'date-range')
      return filter.filterValue.map((datestring)=>new Date(datestring))
      else if (filter.filterType == 'select')
      return "empty"
      else if (filter.filterType == 'int-range')
      return [filter.filterValue[0],filter.filterValue[1]]
      else return null
    }  
  )); 
  const [fields, setFields] = useState(props.data.filterContent.map(
    (filter)=>{
      return filter.filterCategory
    }  
  )); 

  const [enabled, setEnabled] = useState(props.data.filterContent.map(
    (filter)=>{
      if(filter.filterActive == undefined ){
        return true
      } else {
        return filter.filterActive
      }
    }
  )); 
  
  /* Set values */
  
  const [value, onChange] = useState([random(10,30), random(60,90)])  
  //const [startDate, setStartDate] = useState(new Date());
  //const [endDate, setEndDate] = useState(new Date());
  
  useEffect(()=>
  {
    props.onFilterChange(values, fields, props.data.filterName)
  }, [values]);
  
  console.log(values)
  console.log(fields)
  console.log(enabled)

  function renderCheckBoxes(subfilter, filterindex) {
    if (subfilter.filterHasParent != true) {
      return     <input
      type="checkbox"
      value = {enabled[filterindex]}
      defaultChecked = {enabled[filterindex]}
      name="r5"
      className="form-checkbox text-red-500 h-4 w-4"
      onChange={event => {
        setEnabled(values.map((value, enableindex)=>
          { if (enableindex == filterindex) 
            return event.target.checked
            else return value
          }
        ));
      }}
    />
    }
  }

  return (
<>
      {props.data.filterContent.map((subfilter, filterindex)=>(
        <>

      <div>
        {console.log(subfilter)}
        {
          renderCheckBoxes(subfilter, filterindex)
        }
    
        <span> {subfilter.filterName}</span>
        <br></br>

        
      
        {(() => {
          switch (subfilter.filterType) {
            case "int-range":   return (
            <><Range
                    className={className}
                    allowCross={false}
                    disabled = {!enabled[filterindex]}
                    defaultValue={[new Date("2013-06-13").getTime(), new Date("2013-06-13").getTime()]}
                    onChange={newValue => {
                      setValues(values.map((value, valueindex)=>
                        { if (valueindex == filterindex) 
                          return newValue
                          else return value
                        }
                      ));
                    }}
                    min={0}
                    max={1000}
                    value={values[filterindex]}
                  />
                
              <label className="block">
                <div class= "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-5 mt-3">
                
                {console.log(values)}
                <input
                  name="name"
                  type="text"
                  className="text-sm form-input mt-1 block w-full border "
                  value={values[filterindex][0]}
                  disabled = {!enabled[filterindex]}
                  onChange={event => {
                    const [start, end] = values[filterindex];
                    /*if (event.target.value > end) {
                      event.preventDefault();
                      return;
                    }*/
                    //setValues([Number(event.target.value), end]);
                    setValues(values.map((value, valueindex)=>
                        { if (valueindex == filterindex) 
                          return [Number(event.target.value), value[1]]
                          else return value
                        }
                      ));
                  }}
                /> 
                
                <input
                 name="name"
                 type="text"
                 className="text-sm form-input mt-1 block w-full border "
                 value={values[filterindex][1]}
                 disabled = {!enabled[filterindex]}
                  onChange={event => {
                    const [start, end] = values[filterindex];
                    /*if (start > event.target.value) {
                      event.preventDefault();
                      return; 
                    }*/
                    console.log(event.target.value)
                    setValues(values.map((value, valueindex)=>
                        { if (valueindex == filterindex) 
                          return [value[0], Number(event.target.value)]
                          else return value
                        }
                      ));
                  }}
                />
              </div>
              </label>
              
  
            </>
            );
            case "date-range":   return (
                    <>
    
              <label className="block">
              <span className="text-sm text-default">Label</span>
              <div class= "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-5 mt-3">
                <div>
                  <DatePicker
                    selected={values[filterindex][0]}
                    disabled = {!enabled[filterindex]}
                    //onChange={(date) => setStartDate(date)}
                    onChange={(date) => {
                      setValues(values.map((value, valueindex)=>
                          { if (valueindex == filterindex) 
                            return [date, value[1]]
                            else return value
                          }
                        ));
                    }}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    className={'p-2 w-56 rounded-lg text-white bg-black-80'}
                  />
                </div>
                <div className="pt-5 lg:pt-0">
                  <DatePicker
                    selected={values[filterindex][1]}
                    disabled = {!enabled[filterindex]}
                    //onChange={(date) => setEndDate(date)}
                    onChange={(date) => {
                      setValues(values.map((value, valueindex)=>
                          { if (valueindex == filterindex) 
                            return [value[0], date]
                            else return value
                          }
                        ));
                    }}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    className={'p-2 w-56 rounded-lg text-white bg-black-80'}
                  />
                </div>
    
                
                
         
                </div>
              </label>

            </>)
            case "select": return (
              

                <select 
                value = {values[filterindex]}
                disabled = {!enabled[filterindex]}
                onChange={event => {
                  setValues(values.map((value, valueindex)=>
                    { if (valueindex == filterindex) 
                      return event.target.value
                      else return value
                    }
                  ));
                }}
                className="form-select block w-full text-sm mb-5 mt-5">
                  {subfilter.filterOptions?.map((option)=>(
                    <option value={option.value}>{option.value}</option>
                  ))}
                  
             
                </select>
         
            );
            default:      return "Hello";
          }
          })()}

         
      
       
      
      </div>
      </>
      ))}

    </>
  )
}

export const DateRange = (props, {className="slider-blue"}) => {
  const [value, onChange] = useState([random(10,30), random(60,90)])
  return (
    <div className="flex flex-row items-center justify-start">
      <label className="inline-flex items-center children-x-2">
        <input
          type="checkbox"
          value="0"
          name="r4"
          className="form-checkbox text-blue-500 h-4 w-4"
          
        />
      <span>{props.data.filterName}</span>
      <Range
        className={className}
        allowCross={false}
        defaultValue={value}
        onChange={onChange}
        min={0}
        max={100}
      />
      </label>
    </div>
  )
}

export const IntRange = (props, {className="slider-blue"}) => {
  const [value, onChange] = useState([random(10,30), random(60,90)])
  return (
    <div className="flex flex-row items-center justify-start">
      <label className="inline-flex items-center children-x-2">
        <input
          type="checkbox"
          value="0"
          name="r4"
          className="form-checkbox text-blue-500 h-4 w-4"
          
        />
      <span>{props.data.filterName}</span>
      <Range
        className={className}
        allowCross={false}
        defaultValue={value}
        onChange={onChange}
        min={0}
        max={100}
      />
      </label>
    </div>
  )
}

export const SelectBox = (props) => {
  const [enabled, setEnabled] = useState(props.data.filterContent.map(
    ()=>false
  )); 

  useEffect(()=>
  {
    props.onFilterChange(enabled)
  }, [enabled]);
return(
<>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-1 mr-5 mt-6 mb-5">
  {console.log(enabled)}
  {props.data.filterContent.map((subfilter, filterindex)=>(
        
      <label className="w-full inline-flex items-center children-x-2">
        <input
          type="checkbox"
          value="0"
          name="r5"

          className="form-checkbox text-red-500 h-4 w-4"
          onChange={event => {
            setEnabled(enabled.map((value, enableindex)=>
              { if (enableindex == filterindex) 
                return event.target.checked
                else return value
              }
            ));
          }}
        />

    <span>{subfilter.name}</span>
  </label>
    ))}
  </div>

  </>
)}



export const ValidInlineCheckbox = () => (
  <div className="flex flex-row items-center justify-start">
    <div className="text-default ltr:mr-2 rtl:mr-2">Label</div>
    <label className="inline-flex items-center children-x-2">
      <input
        type="checkbox"
        value="0"
        name="r5"
        className="form-checkbox text-green-500 h-4 w-4"
        
      />
      <span>Option 1</span>
    </label>
    <label className="inline-flex items-center children-x-2">
      <input
        type="checkbox"
        value="1"
        name="r5"
        className="form-checkbox text-green-500 h-4 w-4"
      />
      <span>Option 2</span>
    </label>
    <p className="text-xs text-green-500">Option is valid</p>
  </div>
)

export const InlineSelect = () => (
    <>
      <div className="flex flex-row items-center justify-start">
        <label className="inline-flex items-center children-x-2">
          <span className="text-default whitespace-no-wrap">
            Inline select
          </span>
          <select className="form-select block w-full text-sm">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </label>
        <p className="text-xs text-secondary">This is a hint</p>
      </div>
    </>
  )
  export const InlineInvalidSelect = () => (
    <>
      <div className="flex flex-row items-center justify-start">
        <label className="inline-flex items-center children-x-2">
          <span className="text-default whitespace-no-wrap">
            Inline select
          </span>
          <select className="form-select block w-full text-sm border border-red-500">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </label>
        <p className="text-xs text-red-500">Option is required</p>
      </div>
    </>
  )

  export const InlineValidSelect = () => (
    <>
      <div className="flex flex-row items-center justify-start">
        <label className="inline-flex items-center children-x-2">
          <span className="text-default whitespace-no-wrap">
            Inline select
          </span>
          <select className="form-select block w-full text-sm border border-red-500">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </label>
        <p className="text-xs text-red-500">Option is required</p>
      </div>
    </>
  )
  

export const InlineTextInput = () => (
  <>
    <div className="flex flex-row items-center justify-start">
      <label className="flex flex-row flex-nowrap items-center children-x-2">
        <span className="text-sm text-default whitespace-no-wrap">
          Label
        </span>
        <input
          name="name"
          type="text"
          className="text-sm form-input block w-full border"
          placeholder="Enter something..."
        />
      </label>
      <p className="text-xs text-secondary">This is a hint</p>
    </div>
  </>
)

export const InvalidInlineTextInput = () => (
  <>
    <div className="flex flex-row items-center justify-start">
      <div className="relative">
        <label className="flex flex-row flex-nowrap items-center">
          <span className="text-sm text-default whitespace-no-wrap ltr:mr-2 rtl:ml-2">
            Label
          </span>
          <input
            name="name"
            type="text"
            className="text-sm form-input block w-full border border-red-500"
            placeholder="Enter something..."
          />
        </label>
        <Cross />
      </div>
      <p className="ltr:ml-2 rtl:mr-2 text-xs text-red-500">First name is required</p>
    </div>
  </>
)

export const ValidInlineTextInput = () => (
  <>
    <div className="flex flex-row items-center justify-start">
      <div className="relative">
        <label className="flex flex-row flex-nowrap items-center">
          <span className="text-sm text-default whitespace-no-wrap ltr:mr-2 rtl:ml-2">
            Label
          </span>
          <input
            name="name"
            type="text"
            className="text-sm form-input block w-full border border-green-500"
            placeholder="Enter something..."
          />
        </label>
        <Check />
      </div>
      <p className="ltr:ml-2 rtl:mr-2 text-xs text-green-500">First name is valid</p>
    </div>
  </>
)

export const RangeSlider = ({className="slider-blue"}) => {
    const [value, onChange] = useState([random(10,30), random(60,90)])
    return (
      <Range
        className={className}
        allowCross={false}
        defaultValue={value}
        onChange={onChange}
        min={0}
        max={100}
      />
    )
  }
  