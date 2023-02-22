import './ImgWrapper.css'

export default function ImgWrapper(props) {
  return (
    <div className='wrapper'>
        <img src={props.src} alt={props.alt}/>
    </div>
  )
}
