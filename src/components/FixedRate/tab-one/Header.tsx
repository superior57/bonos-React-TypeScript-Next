import { useSelector } from "react-redux";
import { RootState } from "src/store";

const Header = () => {
	const theme = useSelector((state: RootState) => state.theme.name);

	return (
		<div
			className={`grid grid-cols-none md:grid-cols-12 font-semibold items-center ${
				theme === "dark" ? "text-white" : "text-black"
			}
  		`}>
			<p className="text-lg col-span-2 mb-6 md:mb-0">Fixed Rate Note</p>

			<div
				className="md:flex col-span-10 justify-between border-0 md:border md:border-none md:rounded-full px-0 md:px-6 py-0 md:py-5 items-center px-6 py-6"
				style={{
					backgroundColor: `${
						theme === "dark" ? "#111621" : "#edf2f7"
					}`,
				}}>
				<p
					className="text-lg mb-6 md:mb-0"
					style={{ color: "#48BB78" }}>
					Kexim 7.930% 2026
				</p>

				<div className="my-3 md:my-0">
					<p className="text-xs">Last Close Price</p>
					<p className="text-lg">108.345</p>
				</div>
				<div className="my-3 md:my-0">
					<p className="text-xs">Last Close Yield</p>
					<p className="text-lg">6.239%</p>
				</div>
				<div className="my-3 md:my-0">
					<p className="text-xs">Last Price</p>
					<p className="text-lg" style={{ color: "#48BB78" }}>
						108.554
					</p>
				</div>
				<div className="my-3 md:my-0">
					<p className="text-xs">Price Chg</p>
					<p className="text-lg" style={{ color: "#48BB78" }}>
						+0.193%
					</p>
				</div>
				<div className="my-3 md:my-0">
					<p className="text-xs">Last Yield</p>
					<p className="text-lg" style={{ color: "#48BB78" }}>
						6.200%
					</p>
				</div>
				<div className="my-3 md:my-0">
					<p className="text-xs">Last Spread</p>
					<p className="text-lg" style={{ color: "#48BB78" }}>
						58bps
					</p>
				</div>
				<div className="my-3 md:my-0">
					<p className="text-xs">Spread Change</p>
					<p className="text-lg" style={{ color: "#48BB78" }}>
						-5bps
					</p>
				</div>
				<div className="my-3 md:my-0">
					<p className="text-xs">Last Volume</p>
					<p className="text-lg">8,000</p>
				</div>
				<div className="my-3 md:my-0">
					<p className="text-xs">Last Notional MXN</p>
					<p className="text-lg">800,000</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
