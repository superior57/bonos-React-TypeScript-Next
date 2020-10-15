import React from 'react'
import ScreenerFilters from './filters/ScreenerFilters'
import ScreenerResults from './results/ScreenerResults'
import MagicGrid from 'react-magic-grid'

const Card = ({ item }) => (
  <div class="w-full">{item}</div>
)

function ScreenerWorkspace(props) {
  console.log(props)
  console.log(props.data.title)

  return (
    <>
     
        {props.data.content.map((component) => {
          {
            component.type
          }
          if (component.type == 'screener-filters') {
            console.log(component.type)
            return (
              <ScreenerFilters data={component}></ScreenerFilters>
            )
          } else if (component.type == 'screener-results') {
            return (
              <ScreenerResults data={component}></ScreenerResults>
            )
          } 
        })}
  
    </>
  )
}

export default ScreenerWorkspace
