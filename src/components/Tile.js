import './Tile.css'

export default function Tile(props) {
  const style = {
    ...props.style,
    'box-sizing': 'border-box'
  }

  const classes = props.classes?`${props.classes} tile`:'tile'

  return (
    <div className={classes} style={style}>{props.children}</div>
  )
}
