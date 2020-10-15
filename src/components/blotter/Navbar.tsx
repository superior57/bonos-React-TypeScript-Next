import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

const Navbar = ({ nbb }) => {
	const router = useRouter();
	const theme = useSelector((state: RootState) => state.theme.name);

	return (
		<>
			{/*
			 * =======================================================
			 * Menu for md - xl devices Start
			 * =======================================================
			 */}
			<div
				className="hidden md:block"
				style={{
					backgroundColor: `${
						theme === "dark" ? "#1A202C" : "#edf2f7"
					}`,
				}}>
				<div
					className="font-semibold text-sm px-8 w-64 relative flex"
					style={{
						width: "710px",
					}}>
					<p
						className="px-6 py-5 z-10 cursor-pointer"
						style={
							nbb === "history"
								? { borderBottom: "3px solid #ECC94B" }
								: {}
						}
						onClick={() => router.push("/blotter/orders")}>
						ORDER HISTORY
					</p>
					<p
						className="px-6 py-5 z-10 cursor-pointer"
						style={
							nbb === "cob"
								? { borderBottom: "3px solid #ECC94B" }
								: {}
						}
						onClick={() => router.push("/blotter/activecob")}>
						ACTIVE ORDERS (COB)
					</p>
					<p
						className="px-6 py-5 z-10 cursor-pointer"
						style={
							nbb === "rfqs"
								? { borderBottom: "3px solid #ECC94B" }
								: {}
						}
						onClick={() => router.push("/blotter/activerfqs")}>
						ACTIVE RFQS
					</p>
					<p
						className="px-6 py-5 z-10 cursor-pointer"
						style={
							nbb === "trades"
								? { borderBottom: "3px solid #ECC94B" }
								: {}
						}
						onClick={() => router.push("/blotter/closedtrades")}>
						CLOSED TRADES
					</p>
					<div
						className="absolute"
						style={{
							backgroundColor: "#585858",
							width: "650px",
							bottom: "0",
							height: "3px",
						}}></div>
				</div>
			</div>
			{/*
			 * =======================================================
			 * Menu for md - xl devices End
			 * =======================================================
			 */}

			{/*
			 * =======================================================
			 * Menu for sm device Start
			 * =======================================================
			 */}
			<div
				className="block md:hidden"
				style={{
					backgroundColor: `${
						theme === "dark" ? "#1A202C" : "#edf2f7"
					}`,
				}}>
				<div className="font-semibold text-sm w-full">
					<p
						className="py-3 mx-6 cursor-pointer"
						onClick={() => router.push("/blotter/orders")}
						style={
							nbb === "history"
								? { borderBottom: "3px solid #ECC94B" }
								: {}
						}>
						ORDER HISTORY
					</p>
					<p
						className="px-6 py-3 cursor-pointer"
						style={
							nbb === "cob"
								? { borderBottom: "3px solid #ECC94B" }
								: {}
						}
						onClick={() => router.push("/blotter/activecob")}>
						ACTIVE ORDERS (COB)
					</p>
					<p
						className="px-6 py-3 cursor-pointer"
						style={
							nbb === "rfqs"
								? { borderBottom: "3px solid #ECC94B" }
								: {}
						}
						onClick={() => router.push("/blotter/activerfqs")}>
						ACTIVE RFQS
					</p>
					<p
						className="px-6 py-3 cursor-pointer"
						style={
							nbb === "trades"
								? { borderBottom: "3px solid #ECC94B" }
								: {}
						}
						onClick={() => router.push("/blotter/closedtrades")}>
						CLOSED TRADES
					</p>
				</div>
			</div>
			{/*
			 * =======================================================
			 * Menu for sm device End
			 * =======================================================
			 */}
		</>
	);
};

export default Navbar;
