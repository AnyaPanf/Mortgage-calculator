import pagination_arrow from "../assets/pagination_arrow.png"

const Pagination = ({ offers, offersPerPage, currentPage, setCurrentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(offers / offersPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleMinus = () => {
        setCurrentPage(prev => prev - 1)
    }

    const handlePlus = () => {
        setCurrentPage(prev => prev + 1)
    }

    const handleClick = (e) => {
        setCurrentPage(Number(e.target.innerText))
    }

    return (
        <div className='pagination'>
            <button className='pagination__arrow' disabled={currentPage === 1}>
                <img src={pagination_arrow} onClick={handleMinus} />
            </button>
            <div className='pagination__numbers'>
                {pageNumbers.map((number) => (
                    <button className={currentPage === number
                        ? "pagination__number-clicked"
                        : "pagination__number"}
                        onClick={handleClick}>{number}</button>
                ))}
            </div>
            <button className='pagination__arrow pagination__arrow-right'
                disabled={currentPage === Math.ceil(offers / offersPerPage)}>
                <img src={pagination_arrow} onClick={handlePlus} />
            </button>
        </div>
    )
}

export default Pagination