import { Layout } from "src/components/Layout/Layout";

import RfqsLiveFeeds from "src/components/RfqMgmnt/RfqsLiveFeeds";
import RfqSearchEngine from "src/components/RfqMgmnt/RfqSearchEngine";
import BuysideInterest from "src/components/RfqMgmnt/BuysideInterest";

import { RootState } from "src/store";
import { useSelector } from "react-redux";

import CircleIcon from "src/icons/circle";
import SearchBoxLayout from "src/components/Layout/SearchBoxLayout";
import FilterIcon from "src/icons/filter";

import Card from "src/components/inbox/Card";
import Card2 from "src/components/inbox/Card2";
import Card3 from "src/components/inbox/Card3";
import { useState } from "react";

import DoughnutChat from "src/components/inbox/DoughnutChat";


const CardType = {
	RFQ_REQ: {
		Background: "#38B2AC",
		SubBackground: "#48BB78"
	},
	RFQ_REC: {
		Background: "#48BB78",
		SubBackground: "#48BB78"
	},
	COB_MKT: {
		Background: 'linear-gradient(to right, #F56565 55%, #48BB78 70%)',
		SubBackground: ""
	},
	COB_BUY: {
		Background: "#48BB78",
		SubBackground: ""
	},
	COB_B: {
		Background: "#48BB78",
		SubBackground: ""
	},
	COB_R: {
		Background: "#F56565",
		SubBackground: ""
	},
	RFQ: {
		Background: "#ED8936",
		SubBackground: ""
	},
	REPORT: {
		Background: "#ECC94B",
		SubBackground: ""
	},
	BLANK: {
		Background: "#5E5E5E",
		SubBackground: ""
	},
};

const Inboxpage = () => {
	const theme = useSelector((state: RootState) => state.theme.name);
	const [ isCard2Show, setIsCard2Show ] = useState(false);
	const [ isCard3Show, setIsCard3Show ] = useState(true);

	const data_RFQRquestor = [
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Submitted",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "2 D"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Response Recieved",
			sub_name: "from: Actinver",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: "100%"
			},
			trans_id: "",
			footer_value: "P: 98.733",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Has Been Fulfilled",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: "100%"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Expired",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "0"
			},
			trans_id: "",
			footer_value: "Responses: 6",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Has Been Allocated",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: "100%"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Cancelled",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: "100%"
			},
			trans_id: "TBC08202625A05",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "Response Cancelled",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: "100%"
			},
			trans_id: "TBC08202625A05",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
	];

	const data_RFQReciever = [
		{
			time: "15:34 - 10/06/21",
			name: "Request for Quote",
			sub_name: "from: Actinver",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "120 min"
			},
			trans_id: "",
			footer_value: "Pending Response",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "Response Allocated",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: ""
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},		
		{
			time: "15:34 - 10/06/21",
			name: "Response Cancelled",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: ""
			},
			trans_id: "TBC08202625A05",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},	
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Cancelled",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: ""
			},
			trans_id: "TBC08202625A05",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
	];

	const data_other = [
		{
			time: "15:34 - 10/06/21",
			name: "COB Stream Order Submitted",
			sub_name: "",
			type: {
				...CardType.COB_MKT,
				name: "COB MKT"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "2 D"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "COB Order Submitted",
			sub_name: "",
			type: {
				...CardType.COB_BUY,
				name: "COB BUY"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "2 D"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "Centralized Order",
			sub_name: "Transaction Confirmation",
			type: {
				...CardType.COB_BUY,
				name: "COB"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: ""
			},
			trans_id: "TBC08202625A05",
			footer_value: "",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "Centralized Order",
			sub_name: "Full Allocation",
			type: {
				...CardType.COB_R,
				name: "COB"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: "100%"
			},
			trans_id: "",
			footer_value: "WAP: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "COB Order Expired",
			sub_name: "",
			type: {
				...CardType.COB_BUY,
				name: "COB"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "0 D"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "COB Order Outstanding MC",
			sub_name: "",
			type: {
				...CardType.COB_BUY,
				name: "COB"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "0 D"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "ON",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "COB Order Refreshed",
			sub_name: "",
			type: {
				...CardType.COB_BUY,
				name: "COB"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "-"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "ON",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "COB Order Cancelled",
			sub_name: "",
			type: {
				...CardType.COB_BUY,
				name: "COB"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "-"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "ON",
				value: "10,000,000"
			}
		}		
	];

	const Alerms = [
		{
			time: "15:34 - 10/06/21",
			name: "Alarm",
			sub_name: "",
			type: {
				...CardType.RFQ,
				name: "COB"
			},
			id: "",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: ""
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "",
				value: ""
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "Alarm",
			sub_name: "",
			type: {
				...CardType.REPORT,
				name: "REPORT"
			},
			id: "",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: ""
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "",
				value: ""
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "Transaction Settlement Confirmed",
			sub_name: "",
			type: {
				...CardType.BLANK,
				name: ""
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: ""
			},
			trans_id: "TBC08202625A05",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "P: 109.549"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "Transaction Settlement Failed",
			sub_name: "",
			type: {
				...CardType.BLANK,
				name: ""
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: ""
			},
			trans_id: "TBC08202625A05",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "P: 109.549"
			}
		},
	];

	const data_alamrs = [
		{
			time: "15:34 - 10/06/21",
			name: "Alarm",
			sub_name: "",
			type: {
				...CardType.RFQ,
				name: "Over Price Threshold"
			},
			title: "Bono M 6.500% 10/06/21",
			value: "P: 109.549"
		},
	];

	const data_informations = [
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Submitted",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: "30%"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			},
			innerinfors: [
				{
					time: "15:34 - 10/06/21",
					name: "RFQ Submitted",
					sub_name: "",
					type: {
						Background: "#38B2AC",
						SubBackground: "#F56565",
						name: "RFQ"
					},
					id: "BR08202625A05",
					title: "Bono M 6.500% 10/06/21",
					subtitle: {
						type: "normal",
						value: "100%"
					},
					trans_id: "",
					footer_value: "P: 109.549",
					footer_value_2: {
						name: "RN",
						value: "10,000,000"
					}
				},
				{
					time: "15:34 - 10/06/21",
					name: "RFQ Submitted",
					sub_name: "",
					type: {
						Background: "#38B2AC",
						SubBackground: "#F56565",
						name: "RFQ"
					},
					id: "BR08202625A05",
					title: "Bono M 6.500% 10/06/21",
					subtitle: {
						type: "normal",
						value: "100%"
					},
					trans_id: "",
					footer_value: "P: 109.549",
					footer_value_2: {
						name: "RN",
						value: "10,000,000"
					}
				},
			]
		},
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Submitted",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "normal",
				value: "80%"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Submitted",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "2 D"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Submitted",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "2 D"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Submitted",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "2 D"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
		{
			time: "15:34 - 10/06/21",
			name: "RFQ Submitted",
			sub_name: "",
			type: {
				...CardType.RFQ_REQ,
				name: "RFQ"
			},
			id: "BR08202625A05",
			title: "Bono M 6.500% 10/06/21",
			subtitle: {
				type: "time",
				value: "2 D"
			},
			trans_id: "",
			footer_value: "P: 109.549",
			footer_value_2: {
				name: "RN",
				value: "10,000,000"
			}
		},
	];

	const informations = (data) => {

		return <>
			<div className="mb-5">
				<div className="grid grid-cols-12 mb-3">
					<div className="col-span-9 mr-2">
						<Card3 data={data} />
					</div>
					{
						data.subtitle.type == "time" || <>
							<div className="col-span-3">
								<DoughnutChat value={Number((data.subtitle.value).replace("%", ""))} />									
							</div>
						</>
					}
				</div>
				{
					data.innerinfors && data.innerinfors.map(innerdata => <>
						<div className="mb-3">
							<div className="grid grid-cols-12">
								<div className="col-span-1"></div>
								<div className="col-span-8 mr-2">
									<Card3 data={innerdata} />
								</div>
								{
									innerdata.subtitle.type == "time" || <>
										<div className="col-span-3">
											<DoughnutChat value={Number((innerdata.subtitle.value).replace("%", ""))} />												
										</div>
									</>
								}
							</div>
						</div>
					</>)
				}
			</div>			
		</>;
	};

	return (
		<Layout>
			<div
            className="inline-block pb-3 mb-3"
            style={{ borderBottom: "3px solid #ED8936" }}>
            <div className="flex font-bold text-xl items-center">
              <CircleIcon color="#ED8936" />
              <p className="ml-3 text-black" style={{ color: "#ED8936" }}>
                MY INBOX
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-6">
			<div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3 mb-5">
				<SearchBoxLayout 
					className="flex justify-between items-center font-semibold text-lg xl:text-lg py-1 px-5 md:flex-no-wrap flex-wrap"
					headerButtonGroup={<>
						<div className="btn-group py-3 justify-center md:justify-end flex">					
							<span>
								<FilterIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
							</span>
						</div>					
					</>}
				>
					<div className="w-full px-5 py-5 overflow-y-auto" style={{
						maxHeight: '100vh'
					}}>
						{
							data_RFQRquestor && data_RFQRquestor.map(data => <div className="mb-5">
								<Card data={data} />
							</div>)
						}
						{
							data_RFQReciever && data_RFQReciever.map(data => <div className="mb-5">
								<Card data={data} />
							</div>)
						}
						{
							data_other && data_other.map(data => <div className="mb-5">
								<Card data={data} />
							</div>)
						}
						{
							Alerms && Alerms.map(data => <div className="mb-5">
								<Card data={data} />
							</div>)
						}
					</div>					
				</SearchBoxLayout>
			</div>
			{
				isCard2Show && <>
					<div 
						className={`col-span-12 md:col-span-6 lg:col-span-5 xl-col-span-4 rounded-lg py-5 ${
							theme === "dark" ? "text-white" : "text-black shadow-2xl"}`}
						style={{
							marginTop: '55.39px',	
					}}>
						{
							data_alamrs && data_alamrs.map(data => <div className="mb-5">
								<Card2 data={data} />
							</div>)
						}
					</div>
				</>
			}
			{
				isCard3Show && <>
					<div 
						className={`col-span-12 md:col-span-6 lg:col-span-5 xl-col-span-4 px-5 py-5 border border-none rounded-lg  overflow-y-auto ${
							theme === "dark" ? "text-white" : "text-black shadow-2xl"}`}
						style={{
							backgroundColor: `${theme === "dark" ? "#2D3748" : "rgb(247, 250, 252)"}`,
							marginTop: '55.39px',
							maxHeight: '100vh'		
					}}>
						{
							data_informations && data_informations.map(data => <>{informations(data)}</>)
						}
					</div>
				</>
			}
          </div>
		</Layout>
	);
};

export default Inboxpage;
