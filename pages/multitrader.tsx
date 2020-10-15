import { useState, useEffect, useRef } from "react";
import { Layout } from "src/components/Layout/Layout";
import SearchBoxLayout from "src/components/Layout/SearchBoxLayout";
import SmartTable from "src/components/SmartTable/SmartTable";
import CircleIcon from "src/icons/circle";

const RadioButton = ({label="", name=""}) => <>
  <div className="radio">
      <input type="radio" id={name} name={"selector"} />
      {/* <label className="text-lg font-normal ml-8" for={name}>{label}</label>                 */}
      <label className="text-lg font-normal ml-8">{label}</label>                
      <div className="check">
        <div className="inside"></div> 
      </div>
    </div>
</>;


const DropdownButton = ({backgroundColor="#F56565", color="#FFF"}) => {
  const [isShowMenu, setIsShowDropmenu] = useState(false);
  const dropdown = useRef(null);

  useEffect(() => {
		const handleClickOutside = (event) => {
			console.log(dropdown);
			if(dropdown.current) {
				if (dropdown.current.contains(event.target)) {
					return false;
				} else {
					setIsShowDropmenu(false);
				}
			}		
			
		};
		
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdown]);

  return <>
    <div className="btn-dropdown">
      <button
        className={`dropbtn px-2 sm:px-4 py-3 sm:py-2 font-semibold rounded-lg mr-2 ${ !isShowMenu ? "" : "rounded-b-none" }`}
        style={{
          backgroundColor: `${backgroundColor}`,
          color: `${color}`,
        }}
        onClick={() => setIsShowDropmenu(!isShowMenu)}
        >
        ORDER BY
      </button>
      
      {
        isShowMenu && <>
          <div className="w-full pr-2 absolute h-4 -bottom-4">
              <div className="w-full h-full" style={{
                  backgroundColor: `${backgroundColor}`
                }}>
              </div>
          </div>
          
          <div ref={dropdown} className="btn-dropdown-content rounded-lg rounded-tl-none mt-4 px-3 py-3 w-48" style={{
            backgroundColor: `${backgroundColor}`
          }}>
            <div className="w-full">
              <RadioButton label="Biggers Gainers" name="option_1" />
              <RadioButton label="Biggest Losers" name="option_2" />
              <RadioButton label="Biggers Notional" name="option_3" />
            </div>
          </div>
        </>        
      }
    </div>
  </>
}


function ScreenerWorkspace() {
    /*const [data, setScreenerData] = useState();*/
    const [ orderDropDown, setOrderDropDown ] = useState(false);
    const data = [
      {
        title: {
          name: 'Kexim 7.930% 2026',
          color: '#48BB78'
        },
        col_1: {
          price: {
            name: 'Close Price',
            value: '108.345'
          },
          rate: {
            name: 'Close Yield',
            value: '6.239%'
          }
        },
        col_2: {
          title: {            
            name: 'Last',
            color: '#48BB78',
            value: '2 D'
          },
          values: [
            {
              name: 'Price',
              number_1: '108.554',
              number_2: '+0.193%',
              color: '#48BB78'
            },
            {
              name: 'Yield',
              number_1: '6.200%',
              number_2: '-4bps',
              color: '#48BB78'
            },
            {
              name: 'Spread',
              number_1: '-',
              number_2: '-',
              color: '#48BB78'
            },
          ]
        },
        col_3: {
          title: {
            name: 'Best  Market'
          },
          values: [
            {
              name: 'Price (B/A)',
              number_1: '108.554',
              number_2: '108.554',
              number_3: '0.455'
            },
            {
              name: 'Yield',
              number_1: '6.200%',
              number_2: '6.300%',
              number_3: '-4bps',
              color: '#48BB78'
            },
            {
              name: 'Spread',
              number_1: '-',
              number_2: '-',
              number_3: '-',
              color: '#48BB78'
            },
          ]
        }
      },
      {

        title: {
          name: 'CETE 09-24-2020',
          color: '#F56565'
        },
        col_1: {
          price: {
            name: 'Close Price',
            value: '9.965277'
          },
          rate: {
            name: 'Close Disc. Rate',
            value: '4.464%'
          }
        },
        col_2: {
          title: {
            name: 'Last',
            color: '#F56565',
            value:'2 D'
          },
          values: [
            {
              name: 'Price',
              number_1: '9.964844',
              number_2: '-0.0043%',
              color: '#48BB78'
            },
            {
              name: 'Disc. Rate',
              number_1: '4.520%',
              number_2: '+5.56 bps',
              color: '#48BB78'
            },
            {
              name: 'Rate (Yield)',
              number_1: '4.5349%',
              number_2: '+ 5.34 bps',
              color: '#48BB78'
            },
          ]
        },
        col_3: {
          title: {
            name: 'Best  Market'
          },
          values: [
            {
              name: 'Price (B/A)',
              number_1: '9.964744',
              number_2: '9.964644',
              number_3: '0.455',
              color: ''
            },
            {
              name: 'Yield',
              number_1: '6.200%',
              number_2: '6.300%',
              number_3: '-4bps',
              color: '#48BB78'
            },
          ]
        }
      },
      {

        title: {
          name: 'CETE 09-24-2020',
          color: '#F56565'
        },
        col_1: {
          price: {
            name: 'Close Price',
            value: '9.965277'
          },
          rate: {
            name: 'Close Disc. Rate',
            value: '4.464%'
          }
        },
        col_2: {
          title: {
            name: 'Last',
            color: '#F56565',
            value:'2 D'
          },
          values: [
            {
              name: 'Price',
              number_1: '9.964844',
              number_2: '-0.0043%',
              color: '#48BB78'
            },
            {
              name: 'Disc. Rate',
              number_1: '4.520%',
              number_2: '+5.56 bps',
              color: '#48BB78'
            },
            {
              name: 'Rate (Yield)',
              number_1: '4.5349%',
              number_2: '+ 5.34 bps',
              color: '#48BB78'
            },
          ]
        },
        col_3: {
          title: {
            name: 'Best  Market'
          },
          values: [
            {
              name: 'Price (B/A)',
              number_1: '9.964744',
              number_2: '9.964644',
              number_3: '0.455',
              color: ''
            },
            {
              name: 'Yield',
              number_1: '6.200%',
              number_2: '6.300%',
              number_3: '-4bps',
              color: '#48BB78'
            },
          ]
        }
      }
    ]


    function filterState(){
      /*Aquí llamaremos al endpoint ver el estado de los filtros */
    }
    function handleFilterChange(newFilters){
      /*Aquí llamaremos al endpoint para filtrar el screener */
      console.log("change in filters");
    }

    const handleClickBtnOrderBy = (e) => {
      setOrderDropDown(!orderDropDown);
    };

    const headerButtonGroup = <>
      <div className="btn-group py-3 w-full justify-center md:justify-end flex">					
          

          <DropdownButton />

          <button
            className="px-2 sm:px-4 py-3 sm:py-2 font-semibold rounded-lg mr-2"
            style={{
              backgroundColor: "#F56565",
              color: "#FFFFFF",
            }}
            >
            SAVE WORKSPACE
          </button>
        </div>
    </>;


  return <Layout>
          <div
            className="inline-block pb-3 mb-3"
            style={{ borderBottom: "3px solid #48BB78" }}>
            <div className="flex font-bold text-xl items-center">
              <CircleIcon color="#48BB78" />
              <p className="ml-3 text-black" style={{ color: "#48BB78" }}>
                Multitrader
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6">
            <SearchBoxLayout 
              className="flex justify-between items-center font-semibold py-2 px-5 md:flex-no-wrap flex-wrap"
              headerButtonGroup={headerButtonGroup}
              style={{
                borderTopLeftRadius: 0,
				        borderTopRightRadius: 0
              }}
            >
              <SmartTable data={data} />
            </SearchBoxLayout>
          </div>
          
        </Layout>
}

export default ScreenerWorkspace
