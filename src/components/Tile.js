import './Tile.css'

export default function Tile(props) {
  return (
    <div className='tile' style={{width:props.width?'100%':`${props.width}%`}}>{props.children}</div>
  )
}
