import { useSelector } from "react-redux";
import { RootState } from "src/store";

import TableBody from "src/components/SmartTable/ExpandTableRowBody";
import TableCol from "src/components/SmartTable/TableCol";
import ClockIcon from "src/icons/clock";
import TriangularIcon from "src/icons/triangular";
import VerticalDivider from "src/components/SmartTable/VerticalDivider";
import TableRowHeader from "src/components/SmartTable/TableRowHeader";
import HorizontalDivider from "src/components/SmartTable/HorizontalDivider";

import BellIcon from "src/icons/bell";


const WatchListSmartTableRow = ({data, handleDragStart, handleDragEnd, id}) => {
	const theme = useSelector((state: RootState) => state.theme.name);

	const title = data.title;
	const col_1 = data.col_1;
	const col_2 = data.col_2;
	const col_3 = data.col_3;
	const total = data.total;



	return (

			<div
				className={"justify-between border-0 md:border md:border-none rounded-lg px-0 py-0 md:py-5 items-center py-6 mb-5 "}
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
						<TableCol className="" colSpan={5}>
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
													<p className="text-xl" style={{color: `${value.color}`}}>{value.number_1}</p>
													{
														index == col_2.values.length - 1 || 
														<div className="flex items-center justify-end">
															<TriangularIcon color={theme === "dark" ? "#fff" : "#2D3748"} />
															<p className="text-lg ml-1" style={{color: `${value.color}`}}>{value.number_2}</p>
														</div>
													}
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
						<TableCol colSpan={2}>
							<div className="w-full flex flex-wrap xl:flex-no-wrap">
								<div className="w-full mb-5 lg:mr-2">
									<select
										className={`py-2 px-2 text-sm w-full rounded mb-1 ${theme == "dark" ? "bg-gray-800" : "bg-gray-300"}`} >
										<option value="0">Yield</option>
										<option value="1">Price</option>
										<option value="2">Spread</option>
										<option value="3">National</option>
									</select>
									<div className="flex mb-2 cursor-pointer">
										<span className={`text-lg rounded mr-1 mb-1 ${theme == "dark" ? "bg-gray-800" : "bg-gray-300"}`} style={{
											color: "#ECC94B",
											lineHeight: "15px",
											padding: "5px"
										}}> {`>`} </span>

										<span className={`text-lg rounded mr-1 mb-1 ${theme == "dark" ? "bg-gray-800" : "bg-gray-300"}`} style={{
											color: "#707070",
											lineHeight: "15px",
											padding: "5px"
										}}> {`<`} </span>
									</div>		
									<span className={`w-full text-sm lg:text-lg p-2 rounded ${theme == "dark" ? "bg-gray-800" : "bg-gray-300"}`} style={{
										color: "#ECC94B"
									}}>{total.yield}</span>	
								</div>
								<div className="col-span-1 p-2 inline-block rounded cursor-pointer" style={{
									backgroundColor: "#ECC94B",
									width: "35px",
									height: "35px"
								}}>										
									<BellIcon color="#fff"/>
								</div>
							</div>
							<VerticalDivider direction="right" />								
						</TableCol>
					</TableBody>
			</div>
	);
};

export default WatchListSmartTableRow;
