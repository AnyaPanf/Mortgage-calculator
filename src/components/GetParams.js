export const GetParams = (terms, unit) => {
    let param
    let count = terms % 100
    if (unit === "Срок кредита") {
        if (unit >= 5 && count <= 20) {
            param = 'лет'
        } else if (count % 10 === 1) {
            param = 'год'
        } else if (count % 10 >= 2 && count % 10 <= 4) {
            param = 'года'
        } else {
            param = 'лет'
        }
    }
    return (
        param
    )
}
