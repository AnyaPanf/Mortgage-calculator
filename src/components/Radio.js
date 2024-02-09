const Radio = ({
    descr,
    radioArr,
    setValue,
    groupId,
    value
}) => {

    const handleRadio = (e) => {
        setValue(e.target.id)
    }

    return (
        <div className="radio">
            <p className="radio__title">{descr}</p>
            {
                radioArr.map((radio) => (
                    <div>
                        <input
                            className="radio__btn"
                            id={radio.id}
                            type="radio"
                            name={groupId}
                            onChange={handleRadio}
                            checked={radio.id === value}
                        />
                        <label
                            className="radio__option"
                            for={radio.id}
                        >
                            {radio.name}
                        </label>
                    </div>
                ))
            }
        </div>
    )
}

export default Radio