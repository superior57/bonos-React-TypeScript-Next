import SecurityFieldRow from './SecurityFieldRow'
import LastFieldRow from './LastFieldRow'
import BidFieldRow from './BidFieldRow'
import AskFieldRow from './AskFieldRow'

const SeeMoreWatchlistRow = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      <SecurityFieldRow data={data} />
      <LastFieldRow data={data} />
      <BidFieldRow data={data} />
      <AskFieldRow data={data} />
    </div>
  )
}

export default SeeMoreWatchlistRow
