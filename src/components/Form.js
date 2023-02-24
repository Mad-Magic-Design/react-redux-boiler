import { useState, useEffect } from "react"
import './Form.css'

export default function Form(props) {
    /*formArr = [
        {
            type: 'input',
            name: 'name'
        }
    ]*/
    const formArr = props.formArr
    const formObj = {}
    formArr.forEach(element => {
        formObj[element.name] = ""
    });
    
    const [formInfo, setFormInfo] = useState()

    useEffect(()=>{
        setFormInfo(formObj)
    }, [])

    const handleChange = (e) =>{
        setFormInfo(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    const handleSubmit = (e) =>{
        props.handleSubmit(formInfo)
    }

  return (
    <div className="container-primary form-container">
    {formInfo && <form className="basic-form">
        {formArr.map(element => {
            if (element.type==='textarea'){
                return (<>
                <label key={`label-${element.name}`} htmlFor={element.name}>{element.label}</label>
                <textarea key={`textarea-${element.name}`} id={element.name} name={element.name} onChange={handleChange} value={formInfo[element.name]}/>
                </>)
            }

            else {
                return (<>
                    <label key={`label-${element.name}`} htmlFor={element.name}>{element.label}</label>
                    <input key={`input-${element.name}`} id={element.name} name={element.name} onChange={handleChange} value={formInfo[element.name]}/>
                    </>)
            }
        })}
        <button  onClick={handleSubmit}>{props.buttonText}</button>
    </form>}
    </div>
  )
}
