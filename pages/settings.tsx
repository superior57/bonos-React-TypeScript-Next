import { useSelector } from "react-redux";
import { RootState } from "src/store";
import SearchIcon from "src/icons/search";
import { Layout } from "src/components/Layout/Layout";

import { UsersContent, SettingTabs, RolesContent, SettlementsContent, ProfileContent, InstitutionContent, RoleEditContent } from "src/components/settings";




const SettingsPage = () => {
	
	const tabs = [
		{
			index: 0,
			title: "PROFILE",
			active: false,
			content: <ProfileContent />,
		},
		{
			index: 1,
			title: "INSTITUTION",
			active: false,
			content: <InstitutionContent />,
		},
		{
			index: 2,
			title: "USERS",
			active: false,
			content: <UsersContent />,
		},
		{
			index: 3,
			title: "ROLES",
			active: false,
			content: <RolesContent />,
		},
		{
			index: 4,
			title: "SETTLEMENTS",
			active: false,
			content: <SettlementsContent />,
		},
	];
	
	return (
		<Layout>
			<div className="flex flex-wrap">
				<div className="w-full">
					<SettingTabs tabs={tabs} lineColor="#ED8936" />
				</div>
			</div>
		</Layout>
	);
};

export default SettingsPage;
