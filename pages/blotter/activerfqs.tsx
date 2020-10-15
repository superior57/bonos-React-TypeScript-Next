import { Layout } from "src/components/Layout/Layout";
import ExpandLayout from "../../src/components/Layout/ExpandLayout";
import CircleIcon from "src/icons/circle";
import Navbar from "src/components/blotter/Navbar";

const ActiveRfqsPage = () => (
	<Layout>
		<div
			className="inline-block pb-3 mb-3"
			style={{ borderBottom: "3px solid #ECC94B" }}>
			<div className="flex font-bold text-xl items-center">
				<CircleIcon color="#ECC94B" />
				<p className="ml-3 text-black" style={{ color: "#ECC94B" }}>
					{" "}
					Trade Blotter
				</p>
			</div>
		</div>
		<div className="mt-3">
			<ExpandLayout title="Activity Dashboard">
				<div className="mt-4">
					<Navbar nbb="rfqs" />
				</div>
			</ExpandLayout>
		</div>
	</Layout>
);

export default ActiveRfqsPage;
