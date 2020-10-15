import ExpandLayout from "src/components/Layout/ExpandLayout";

const Description = () => {
	return (
		<ExpandLayout title="Description">
			<div className="grid grid-cols-2 px-5 py-3">
				<p className="py-3 font-semibold">Type</p>
				<p className="py-3 font-normal text-sm">Mex Corp (Cebur)</p>
				<p className="py-3 font-semibold">Ticker</p>
				<p className="py-3 font-normal text-sm">
					BANCO DE EXPORTACI...
				</p>
				<p className="py-3 font-semibold">Series</p>
				<p className="py-3 font-normal text-sm">19</p>
				<p className="py-3 font-semibold">ISIN</p>
				<p className="py-3 font-normal text-sm">MX1440025526</p>
				<p className="py-3 font-semibold">Primary Issuance</p>
				<p className="py-3 font-normal text-sm">CNVB-Reg, 144A, RegS</p>
				<p className="py-3 font-semibold text-sm">Issued</p>
				<p className="py-3 font-normal text-sm">MX$ 7,000,000,000</p>
				<p className="py-3 font-semibold text-sm">Issued MXN</p>
				<p className="py-3 font-normal text-sm">MX$ 7,000,000,000</p>
				<p className="py-3 font-semibold text-sm">Outstanding</p>
				<p className="py-3 font-normal text-sm">MX$ 7,000,000,000</p>
				<p className="py-3 font-semibold text-sm">Outstanding MXN</p>
				<p className="py-3 font-normal text-sm">MX$ 7,000,000,000</p>
				<p className="py-3 font-semibold text-sm">Lisiting</p>
				<p className="py-3 font-normal text-sm">BMV, LUX, STG</p>
				<p className="py-3 font-semibold text-sm">Classification</p>
				<p className="py-3 font-normal text-sm">[Tipo de valor]</p>
				<p className="py-3 font-semibold text-sm">Clearing</p>
				<p className="py-3 font-normal text-sm">Indeval, EC, CL</p>
			</div>
		</ExpandLayout>
	);
};

export default Description;
