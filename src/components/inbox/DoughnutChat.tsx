import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { Doughnut } from 'react-chartjs-2';


export default function DoughnutChat({ value=0, labels=["Value", "No Value"], height=`90px`}) {
    const theme = useSelector((state: RootState) => state.theme.name);

    const data = {
        labels,
        datasets: [
			{
				data: value < 100 ? [value, 100-value ] : [value],
				backgroundColor: ['#48BB78', '#E9C64A'],
                borderColor: ['#48BB78', '#E9C64A']
			}
        ],
        style: {
            width: "50px"
        }
    }


    const options = {
		animation: {
			duration: 0,
        },
        maintainAspectRatio: false,
		layout: {
			padding: {
				left: 5,
				right: 10,
				top: 5,
				bottom: 5,
			},
        },
        cutoutPercentage: 30,
        rotation: 0.5 * Math.PI
	};

    return <>
        <div className="px-1 py-2 rounded-lg relative" style={{
            backgroundColor: `${theme === "dark" ? "#202837" : "#e2e8f0"}`
        }}>            
            <div className="w-full">
                <div style={{
                    width: '90px',
                    marginLeft: 'auto'
                }}>
                    <Doughnut 
                        data={data}
                        legend={{
                            display: false
                        }}
                        options={options}
                        height={height}
                    />
                </div>
            </div>
            <div className="absolute w-full h-full top-0 items-end flex">
                <p className="text-lg font-semibold " style={{
                    fontSize: '38px',
                    paddingBottom: 5,
                    paddingLeft: 5
                }}>
                    {value}%
                </p>    
            </div> 
        </div>
    </>;
};