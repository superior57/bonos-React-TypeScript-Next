import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import Modal from "react-modal";

import { Layout } from "src/components/Layout/Layout";
import { UnderlinedTabs } from "src/components/Tabs";

import SearchIcon from "src/icons/search";
import FilterIcon from "src/icons/filter";
import SeeMoreWatchlistRow from "src/components/Watchlist/SeeMoreWatchlistRow";
import WatchlistModal from "src/components/Watchlist/WatchlistModal";
import seeMoreWatchlist from "src/data/see-more-watchlist";

import SmartTable from "src/components/Watchlist/WatchListSmartTable/WatchListSmartTable";

import SearchBoxLayout from "src/components/Layout/SearchBoxLayout";
import CircleIcon from "src/icons/circle";

const TabOne = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

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
			  {
				name: 'National',
				number_1: '1,000,000,000',
				number_2: '',
				color: ''
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
		  },
		  total: {
			  yield: "6.400%"
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
				value: '108.345'
			  },
			  rate: {
				name: 'Close Disc. Rate',
				value: '6.239%'
			  }
			},
			col_2: {
			  title: {            
				name: 'Last',
				color: '#F56565',
				value: '2 D'
			  },
			  values: [
				{
				  name: 'Price',
				  number_1: '108.554',
				  number_2: '+0.193%',
				  color: '#F56565'
				},
				{
				  name: 'Yield',
				  number_1: '6.200%',
				  number_2: '-4bps',
				  color: '#F56565'
				},
				{
				  name: 'Rate (Yield)',
				  number_1: '4.5349%',
				  number_2: '+ 5.34 bps',
				  color: '#F56565'
				},
				{
				  name: 'National',
				  number_1: '1,000,000,000',
				  number_2: '',
				  color: ''
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
				  number_3: '0.455'
				},
				{
				  name: 'Yield',
				  number_1: '6.200%',
				  number_2: '6.300%',
				  number_3: '-4bps',
				  color: '#48BB78'
				},
			  ]
			},
			total: {
				yield: "6.500%"
			}
		  },
		  {
			title: {
			  name: 'Kexim 7.930% 2027',
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
				{
				  name: 'National',
				  number_1: '1,000,000,000',
				  number_2: '',
				  color: ''
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
			},
			total: {
				yield: "6.800%"
			}
		  },
	  ];

	const headerButtonGroup = <>
		<div className="btn-group py-3 w-full justify-center md:justify-end flex">					
			<button
			className="px-2 sm:px-4 py-3 sm:py-2 font-semibold rounded-lg mr-2"
			style={{
			backgroundColor: "#F56565",
			color: "#FFFFFF",
			}}>
				EDIT WATCHLIST
			</button>

			<button
			className="px-2 sm:px-4 py-3 sm:py-2 font-semibold rounded-lg mr-2"
			style={{
				backgroundColor: "#F56565",
				color: "#FFFFFF",
			}}
			>
				ORDER BY
			</button>
			<button
			className="px-2 sm:px-4 py-3 sm:py-2 font-semibold rounded-lg mr-2"
			style={{
				backgroundColor: "#F56565",
				color: "#FFFFFF",
			}}
			>
				SAVE WORKSPACE
			</button>
			<button
			className="px-2 sm:px-4 py-3 sm:py-2 font-semibold rounded-lg mr-2"
			style={{
				backgroundColor: "#F56565",
				color: "#FFFFFF",
			}}
			>
				EXPORT CSV
			</button>
		</div>
	</>;

	return <SearchBoxLayout 
	  		headerButtonGroup={headerButtonGroup}
			>
				<SmartTable data={data} />
			</SearchBoxLayout>
};

const NewTab = () => (
	<h3>
		<h2>New Tab...</h2>
	</h3>
);

const tabs = [
	{
		index: 0,
		title: "WT 1",
		active: true,
		content: <TabOne />,
	},
	{
		index: 1,
		title: "WT 2",
		active: false,
		content: <NewTab />,
	},
];

const SeeMoreWatchlistPage = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<Layout>
			<div className="pl-5">
				<div className="flex flex-wrap">
					<div className="w-full">
						<p className="font-semibold text-sm mb-4">
							MY WATCHLISTS
						</p>
						<UnderlinedTabs tabs={tabs} />
					</div>
				</div>
			</div>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={{
					overlay: {
						backgroundColor: `${
							theme === "dark"
								? "rgba(0, 0, 0, 0.75)"
								: "rgba(255, 255, 255, 0.75)"
						}`,
					},
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						padding: "0px",
						border: "0px",
						background: "none",
						transform: "translate(-50%, -50%)",
					},
				}}>
				<WatchlistModal
					data={{
						name: "",
						description: ""
					}}
					title="ADD WATCHLIST"
					closeModal={closeModal}
				/>
			</Modal>
		</Layout>
	);
};

export default SeeMoreWatchlistPage;
