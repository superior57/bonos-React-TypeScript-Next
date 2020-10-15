import { useSelector } from "react-redux";
import { RootState } from "src/store";

import TableBody from "./ExpandTableRowBody";
import TableCol from "./TableCol";
import ClockIcon from "src/icons/clock";
import TriangularIcon from "src/icons/triangular";
import TableToolBar from "./TableToolbar";
import VerticalDivider from "./VerticalDivider";
import TableRowHeader from "./TableRowHeader";
import HorizontalDivider from "./HorizontalDivider";


const SmartTableRow = ({data, handleDragStart, handleDragEnd, id}) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const title = data.title;
	const col_1 = data.col_1;
	const col_2 = data.col_2;
	const col_3 = data.col_3;	



	return (

			<div
				className={"justify-between border-0 md:border md:border-none rounded-lg px-0 py-0 md:py-5 items-center py-6 mb-5"}
				draggable={true}
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
				id={id}
				style={{
					backgroundColor: `${
						theme === "dark" ? "#111621" : "#edf2f7"
					}`,
				}}>
					<TableBody
						title={title.name} 
						color={title.color}
						RowHeaderContent={<TableRowHeader data={col_1} />}					
					>
						<TableCol className="" colSpan={3}>
							<VerticalDivider direction="left" />
							<div  style={{width: '100%'}}>
								<div className="my-3 md:my-0">
									<div className="flex items-center mb-2">
										<p className="text-lg mr-2" style={{ color: `${col_2.title.color}` }}>{col_2.title.name}</p>
										<p className="text-lg font-normal mr-2" >{col_2.title.value}</p>
										<ClockIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
									</div>
								</div>
								<div className="my-3 md:my-0 flex justify-start flex-wrap">
									{
										(col_2.values) && (
											col_2.values.map((value, index) => (
												<div className="category-item mb-5 lg:mr-2" key={index}>
													<p className="md:text-left md:text-xs mb-2 text-center text-lg">{value.name}</p>
													<p className="text-xl" style={{color: `${title.color}`}}>{value.number_1}</p>
													<div className="flex items-center justify-end">
														<TriangularIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
														<p className="text-lg ml-1" style={{color: `${title.color}`}}>{value.number_2}</p>
													</div>
												</div>
											))
										)
									}
									<HorizontalDivider />	
									<VerticalDivider direction="right"/>	
								</div>
							</div>
						</TableCol>				
						<TableCol className="" colSpan={5}>
							<div style={{width: '100%'}}>
								<div className="my-3 md:my-0">
									<div className="flex items-center mb-2">
										<p className="text-lg mr-2" color={theme === "dark" ? "#fff" : "#2D3748"}>{col_3.title.name}</p>
									</div>
								</div>
								<div className="my-3 md:my-0 flex justify-start flex-wrap">
									{
										(col_3.values) && (
											col_3.values.map((value, index) => (
												<div className="category-item lg:mr-4 mb-5" key={index}>
													<p className="md:text-left md:text-xs mb-2 text-center text-lg">{value.name}</p>
													<div className="flex items-center flex-wrap">
													{( (value.number_1 == '-' || value.number_1 == '') && (value.number_2 == '-' || value.number_2 == '') ) ? (
														<p className="text-xl" style={{color: '#48BB78'}}>-</p>
													) : (
														<>
														<p className="text-xl" style={{color: '#48BB78'}}>{value.number_1}</p>
														<p className="text-xl mx-2" color={theme === "dark" ? "#fff" : "#2D3748"}> / </p>
														<p className="text-xl" style={{color: '#F56565'}}>{value.number_2}</p>
														</>														
													)}														
													</div>
													
													<div className="flex items-center justify-between">
														<TriangularIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
														<p className="text-lg ml-1" color={theme === "dark" ? "#fff" : "#2D3748"} style={{color: `${value.color}`}}>{value.number_3}</p>
													</div>
												</div>
											))
										)
									}
									<HorizontalDivider />
									<VerticalDivider direction="right" />							
								</div>
							</div>
						</TableCol>						
						<TableCol className="" colSpan={4} >
							<div style={{width: '100%'}}>									
								<div className="price-category xl:grid grid-cols-none xl:grid-cols-12 my-3 md:my-0 justify-between flex-wrap">									
									<div className="col-span-3 category-item mr-2 mb-5">
										<p className="text-lg mb-2" color={theme === "dark" ? "#fff" : "#2D3748"}>My Price</p>
										<p className="md:text-left md:text-xs mb-2 text-center text-lg">Notional </p>
										<input
											type="text"
											className="py-1 px-2 mr-5 rounded mb-1 w-full"
											placeholder="Bid"
											style={{
												background: `${
													theme === "dark" ? "#2D3748" : "#fff"
												}`,
												maxWidth: '100%',
												fontSize: 16
											}}
										/>
										<input
											type="text"
											className="py-1 px-2 mr-5 rounded w-full"
											placeholder="Ask"
											style={{
												background: `${
													theme === "dark" ? "#2D3748" : "#fff"
												}`,
												maxWidth: '100%',
												fontSize: 16
											}}
										/>
									</div>
									<div className="col-span-6 category-item mr-1 mb-5 mr-2 flex-wrap items-end flex justify-center">
										<div className="grid grid-cols-12 full-width">
											<input
												type="text"
												className="py-1 px-2 rounded mb-1 col-span-5"
												placeholder="Bid Yield"
												style={{
													background: `${
														theme === "dark" ? "#2D3748" : "#fff"
													}`,
													fontSize: 16
												}}
											/>
											<p className="text-xl mx-2 col-span-2 text-center" color={theme === "dark" ? "#fff" : "#2D3748"}> / </p>
											<input
												type="text"
												className="py-1 px-2 rounded mb-1 col-span-5"
												placeholder="Ask Yield"
												style={{
													background: `${
														theme === "dark" ? "#2D3748" : "#fff"
													}`,
													fontSize: 16
												}}
											/>
										</div>
										<div className="grid grid-cols-12 full-width">
											<input
												type="text"
												className="py-1 px-2 rounded mb-1 col-span-5"
												placeholder="Bid Spread"
												style={{
													background: `${
														theme === "dark" ? "#2D3748" : "#fff"
													}`,
													fontSize: 16
												}}
											/>
											<p className="text-xl mx-2 col-span-2 text-center" color={theme === "dark" ? "#fff" : "#2D3748"}> / </p>
											<input
												type="text"
												className="py-1 px-2 rounded mb-1 col-span-5"
												placeholder="Ask Spread"
												style={{
													background: `${
														theme === "dark" ? "#2D3748" : "#fff"
													}`,
													fontSize: 16
												}}
											/>
										</div>
										<div className="grid grid-cols-12 full-width">
											<input
												type="text"
												className="py-1 px-2 rounded col-span-5"
												placeholder="Bid Price"
												style={{
													background: `${
														theme === "dark" ? "#2D3748" : "#fff"
													}`,
													fontSize: 16
												}}
											/>
											<p className="text-xl mx-2 col-span-2 text-center" color={theme === "dark" ? "#fff" : "#2D3748"}> / </p>
											<input
												type="text"
												className="py-1 px-2 rounded col-span-5"
												placeholder="Ask Price"
												style={{
													background: `${
														theme === "dark" ? "#2D3748" : "#fff"
													}`,
													fontSize: 16
												}}
											/>
										</div>
									</div>
									<div className="col-span-2 category-item mr-2 mb-5 flex items-end flex-wrap mr-2 justify-between w-full">
										<button
											className="px-2 sm:px-4 py-2 font-semibold rounded-lg mb-1 w-full"
											style={{
												backgroundColor: "#48BB78",
												color: "#FFFFFF",
											}}
											>
											STREAM
										</button>
										<button
											className="px-2 sm:px-4 py-2 font-semibold rounded-lg w-full"
											style={{
												backgroundColor: "#48BB78",
												color: "#FFFFFF",
											}}
											>
											Blotter
										</button>
										<VerticalDivider direction="right" />
									</div>
								</div>
							</div>							
						</TableCol>						
					</TableBody>
					{/* <TableToolBar />			 */}
			</div>
	);
};

export default SmartTableRow;
