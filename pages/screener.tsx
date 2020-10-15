import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import Modal from "react-modal";
import { Layout } from "src/components/Layout/Layout";


import SearchIcon from "src/icons/search";
import FilterIcon from "src/icons/filter";

import ScreenerFilters from 'src/components/screener/filters/ScreenerFilters';
import ScreenerResults from 'src/components/screener/results/ScreenerResults';
import ExpandLayout from "src/components/Layout/ExpandLayout";
import MagicGrid from 'react-magic-grid';

const Card = ({ item }) => (
  <div className="w-full">{item}</div>
)

function ScreenerWorkspace() {
    /*const [data, setScreenerData] = useState();*/
    const data =  
    {
        title: 'Screener',
        type: 'screener',
        content: [ 
          { type: 'screener-filters', content: [
            {filterName:'structure', filterType:'structure-filters', filterContent: [
              {filterCategory: 'structure', filterName:'issuer', filterActive: true, filterValue:'PEMEX', filterType:'select', filterOrder:'01', filterOptions:[{value:'Pemex'},{value:'Pemex2'},{value:'Pemex3'}]},
              {filterCategory: 'structure',filterName:'type', filterActive: true, filterValue:'PEMEX', filterType:'select', filterOrder:'02' },
              {filterCategory: 'structure',filterName:'issued', filterActive: true, filterValue: ['1993-11-05T08:15:30-05:00', '1994-11-05T08:15:30-05:00'], filterType:'date-range', filterOrder:'03' },
              {filterCategory: 'structure',filterName:'outstanding', filterActive: true, filterValue: [0, 1000], filterType:'int-range', filterOrder:'04' },
              {filterCategory: 'structure',filterName:'outstandingMXN', filterActive: true, filterValue: [0, 1000],filterType:'int-range', filterOrder:'05' }]},
            {filterName:'amortization', filterContent: [
              {name:'bullet', filterActive: true}, 
              {name: 'softBullet', filterActive: true}, 
              {name:'amortizer', filterActive: true}, 
              {name:'vaiableAmortizer',filterActive: 'yes'}], filterType:'select-box', filterOrder:'05' },
            {filterName:'interest-rate-structure', filterActive: true, filterType:'structure-filters', filterOrder:'06', filterContent:[
                
                {filterCategory:'fixed-rate', filterName:'coupon', filterValue: [250, 1000], filterType:'int-range', filterHasParent: true},
                {filterCategory:'fixed-rate', filterName:'yield', filterValue: [0, 1000], filterType:'int-range', filterHasParent: true},
                {filterCategory:'floating-rate', filterName:'initial-margin', filterValue: [0, 1000], filterType:'int-range', filterHasParent: true},
                {filterCategory:'floating-rate', filterName:'discount-margin', filterValue: [0, 1000], filterType:'int-range', filterHasParent: true},
                {filterCategory:'floating-rate', filterName:'benchmark', filterActive: true, filterValue:'type1', filterType:'select', filterHasParent: true  },
                {filterCategory:'zero-coupon',filterName:'discount-rate', filterValue: [0, 1000], filterType:'int-range', filterHasParent: true},
                { filterCategory:'other', filterName:'other', filterValue:[0, 1000], filterType:'int-range', filterHasParent: true},
              ]
            },
            {filterName:'remaining-tenor', filterActive: true, filterType: 'select-box', filterContent:[
              {name:'<1month', filterActive: 'yes'},
              {name:'1-3month', filterActive: 'yes'},
              {name:'3-6month', filterActive: 'yes'},
              {name:'6-12month', filterActive: 'yes'},
              {name:'1-3years', filterActive: 'yes'},
              {name:'3-5years', filterActive: 'yes'},
              {name:'5-8years', filterActive: 'yes'},
              {name:'10-12years', filterActive: 'yes'},
              {name:'12-20years', filterActive: 'yes'},
              {name:'20-30years', filterActive: 'yes'},
              {name:'>30years', filterActive: 'yes'},
            ] }, 
            {filterName:'currency-risk', filterActive: true, filterContent: [
              {name:'MXN', filterActive: 'yes'},
              {name:'UDI', filterActive: 'yes'},
              {name: 'USD', filterActive: 'yes'}], filterType: 'select-box', },
            {filterName:'additional-filters', filterType:'structure-filters', filterContent: [
                {filterName:'coupon-period', filterActive: true, filterValue:'type1', filterType:'select'  },
                {filterName:'primary-issuance', filterActive: true, filterValue:'type1', filterType:'select'  },
                {filterName:'clearing', filterActive: true, filterValue:'type1', filterType:'select' },
                {filterName:'listing', filterActive: true, filterValue:'type1', filterType:'select'  }]},
          ]
         },
         {type: 'screener-results', columns:[
             {name:'ISIN', size:'20px'},
             {name:'issuer', size:'20px'},
             {name:'issuance-date', size:'20px'},
         ]}
        ],
      };
    function filterState(){
      /*Aquí llamaremos al endpoint ver el estado de los filtros */
    }
    function handleFilterChange(newFilters){
      /*Aquí llamaremos al endpoint para filtrar el screener */
      console.log("change in filters");
    }
  console.log(data);
  console.log(data.title);

  return (
    <>
     		<Layout>
			<h1
				className="mb-12 font-bold text-2xl"
				style={{ color: "#48BB78" }}>
				{data.title}
			</h1>
     

   
			<div className="grid grid-cols-1 gap-x-6">
      {data.content.map((component) => {
        {
          component.type
        }
        if (component.type == 'screener-filters') {
          console.log(component.type)
          return (
            <ExpandLayout title="Activity Dashboard">
            <ScreenerFilters data={component} onFilterChange={handleFilterChange}></ScreenerFilters>
            </ExpandLayout>
          )
        } else if (component.type == 'screener-results') {
          return (
            <ExpandLayout title="Results">
            <ScreenerResults 
              // data={component}            
            ></ScreenerResults>
            </ExpandLayout>
          )
        } 
      })}
			</div>
      
    </Layout>
  
    </>
  )
}

export default ScreenerWorkspace
