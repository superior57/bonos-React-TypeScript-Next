import WidgetTitle from '../widget-title/WidgetTitle'

const Widget = ({title, description, right = null, children}) => {
  if (right) {
    return (
      <div className="w-full p-4 shadow mb-4 widget">
        <div className="flex flex-row items-center justify-between mb-4">
          <WidgetTitle title={title} description={description} />
          {right}
        </div>
        {children}
      </div>
    )
  }
  return (
    <div className="w-full p-4 shadow mb-4 widget">
      <WidgetTitle title={title} description={description} />
      {children}
    </div>
  )
}

export default Widget
