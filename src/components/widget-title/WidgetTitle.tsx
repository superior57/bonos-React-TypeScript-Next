const WidgetTitle = ({title, description}) => (
  <div className="flex flex-col mb-4 widget-title w-full">
    <div className="title text-base font-base font-bold font-poppins">{title}</div>
    <div className="description text-sm">{description}</div>
  </div>
)

export default WidgetTitle
