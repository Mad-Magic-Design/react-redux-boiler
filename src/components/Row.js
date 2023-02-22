import './Row.css'

export default function Row(props) {
  return (
    <div className={props.classes}>
        {props.children}
    </div>
  )
}
