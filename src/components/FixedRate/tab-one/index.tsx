import MagicGrid from "react-magic-grid";

import Header from "./Header";
import Description from "./Description";
import Structure from "./Structure";
import CashFlows from "./CashFlows";
import HistoricPrices from "./HistoricPrices";
import YieldSpreadCalculator from "./YieldSpreadCalculator";
import CentralizedOrderbook from "./CentralizedOrderbook";

const cards = [1, 2, 3];

const TabOne = () => (
	<>
		<Header />

		<div className="mt-4">
			<MagicGrid items={cards.length} gutter={0} animate={true}>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
						<div>
							<Description />
							<div className="mt-5">
								<Structure />
							</div>
						</div>
						<div>
							<CashFlows />
							<div className="mt-5">
								<HistoricPrices />
							</div>
						</div>
					</div>
					<div>
						<YieldSpreadCalculator />
						<div className="mt-5">
							<CentralizedOrderbook />
						</div>
					</div>
				</div>
			</MagicGrid>
		</div>
	</>
);

export default TabOne;

// <MagicGrid items={cards.length} gutter={0} animate={true}>
// </MagicGrid>
