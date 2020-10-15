import { Layout } from "src/components/Layout/Layout";

import RfqsLiveFeeds from "src/components/RfqMgmnt/RfqsLiveFeeds";
import RfqSearchEngine from "src/components/RfqMgmnt/RfqSearchEngine";
import BuysideInterest from "src/components/RfqMgmnt/BuysideInterest";

const RfqMgmntPage = () => {
	return (
		<Layout>
			<h1
				className="mb-12 font-bold text-2xl"
				style={{ color: "#48BB78" }}>
				RFQ Mgmnt.
			</h1>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-6">
					<RfqsLiveFeeds />
					<RfqSearchEngine />
				</div>
				{/* <BuysideInterest /> */}
			</div>
		</Layout>
	);
};

export default RfqMgmntPage;
