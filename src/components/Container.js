import './Container.css'

export default function Container(props) {
  return (
    <div className={props.classes}>
        {props.children}
    </div>
  )
}
