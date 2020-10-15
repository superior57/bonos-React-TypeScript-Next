import ExpandLayout from "src/components/Layout/ExpandLayout";

const Structure = () => {
	return (
		<ExpandLayout title="Structure">
			<div className="grid grid-cols-2 px-5 py-3">
				<p className="py-3 font-semibold">Amortization Structure</p>
				<p className="py-3 font-normal text-sm">Bullet</p>
				<p className="py-3 font-semibold">Category</p>
				<p className="py-3 font-normal text-sm">Fixed Rate</p>
				<p className="py-3 font-semibold">Coupon Rate</p>
				<p className="py-3 font-normal text-sm">7.930%</p>
				<p className="py-3 font-semibold">Coupon Period</p>
				<p className="py-3 font-normal text-sm">182 D</p>
				<p className="py-3 font-semibold">Convention</p>
				<p className="py-3 font-normal text-sm">MEX Conv (ACT/360)</p>
				<p className="py-3 font-semibold text-sm">Currency Risk</p>
				<p className="py-3 font-normal text-sm">MXN</p>
				<p className="py-3 font-semibold text-sm">
					Currency Payment MXN
				</p>
				<p className="py-3 font-normal text-sm">MXN</p>
				<p className="py-3 font-semibold text-sm">Issue Date</p>
				<p className="py-3 font-normal text-sm">8/8/2019</p>
				<p className="py-3 font-semibold text-sm">First Coupon Date</p>
				<p className="py-3 font-normal text-sm">6/2/2020</p>
				<p className="py-3 font-semibold text-sm">Next Coupon Date</p>
				<p className="py-3 font-normal text-sm">6/3/2020</p>
				<p className="py-3 font-semibold text-sm">Maturity Date</p>
				<p className="py-3 font-normal text-sm">30/7/2026</p>
				<p className="py-3 font-semibold text-sm">Nominal Value</p>
				<p className="py-3 font-normal text-sm">100.00</p>
				<p className="py-3 font-normal text-sm">Year Daycount</p>
				<p className="py-3 font-normal text-sm">360 D</p>
				<p className="py-3 font-normal text-sm">Notes</p>
				<p className="py-3 font-normal text-sm">Issued Int.</p>
			</div>
		</ExpandLayout>
	);
};

export default Structure;
