
const TableRowHeader = ({data}) => {
    return <div className="table-row-header pl-6 pr-4 py-6 md:pb-0 md:mb-0">
                <div className="my-3 md:my-0">
                    <p className="text-xs">{data.price.name}</p>
                    <p className="text-lg mb-5">{data.price.value}</p>
                </div>
                <div className="my-3 md:my-0">
                    <p className="text-xs">{data.rate.name}</p>
                    <p className="text-lg">{data.rate.value}</p>
                </div>
            </div>	
};

export default TableRowHeader;