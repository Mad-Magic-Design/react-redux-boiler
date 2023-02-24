import './Row.css'

export default function Row(props) {
  const className = props.classes?'row ' + props.classes:'row'
  return (
    <div className={className}>
        {props.children}
    </div>
  )
}
