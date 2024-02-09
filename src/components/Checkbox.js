import React from 'react'
import { getBankName } from "./getBankName.js";
import { banksArr } from "../BanksList.js"

export const Checkbox = ({ setValue, value }) => {

    const handleChange = (e) => {
        console.log(e)
        if (value.includes(e.target.value)) {
            setValue(value.filter((bank) => {
                return bank !== e.target.value
            }))
        } else {
            setValue([...value, e.target.value])
        }
    }

    return (
        <div className='check'>
            <h2 className="bank__subtitle">Банк</h2>
            <div>
                {banksArr.map((bank) => (
                    <label className='input__checkbox'
                        style={{ backgroundColor: value.includes(bank.bankId) ? "#eeeeee" : "transparent" }}>
                        <img src={bank.img} className='bank__img' />
                        <input type="checkbox" ckecked={value.includes(bank.id)}
                            onChange={handleChange}
                            value={bank.bankId} />
                        {getBankName(bank.bankId)}
                    </label>
                ))
                }
            </div>
        </div>
    )

}