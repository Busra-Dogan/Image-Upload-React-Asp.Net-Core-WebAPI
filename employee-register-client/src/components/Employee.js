import React, { useState, useEffect } from 'react'

const initialFieldValues = {
    employeeId: 0,
    employeeName: '',
    occupation: '',
    imageName: '',
    imageSrc: '',
    imageFile: null
}

export default function Employee() {
    const [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] :value
        })
    }
    return (
        <>
            <div className='container text-center'>
                <p className='lead'>An Employee</p>
            </div>
            <form autoComplete="off" noValidate>
                <div className='card'>
                    <div className='card-body'>
                        <div className='form-group'>
                            <input className='form-control' placeholder='Employee Name' name='employeeName'
                                value={values.employeeName} onChange={handleInputChange} />
                        </div>
                        <div className='form-group'>
                            <input className='form-control' placeholder='Occupation' name='occupation'
                                value={values.occupation} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
