import { UnderlinedTabs } from "src/components/Tabs";
import { Layout } from "src/components/Layout/Layout";
import TabOne from "src/components/FixedRate/tab-one";
import NewTab from "src/components/FixedRate/NewTab";

const tabs = [
	{ index: 0, title: "Kexim 7.930% 2026", active: true, content: <TabOne /> },
	{ index: 1, title: "ADD +", active: false, content: <NewTab /> },
];

const FixedRatePage = () => {
	return (
		<Layout>
			<div className="flex flex-wrap">
				<div className="w-full">
					<UnderlinedTabs tabs={tabs} />
				</div>
			</div>
		</Layout>
	);
};
export default FixedRatePage;
