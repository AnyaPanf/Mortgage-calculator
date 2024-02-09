import React from 'react'
import { response } from "../data"
import { getBankName } from "./getBankName"
import { useState } from 'react'
import Pagination from './Pagination'

export const Cards = ({ value, minTerm, bankArr, productType }) => {
    const offerArr = response.offers.list
    const [currentPage, setCurrentPage] = useState(1)
    const [offersPerPage, setOffersPerPage] = useState(10)
    const indexOfLastOffer = currentPage * offersPerPage
    const indexOfFirstOffer = indexOfLastOffer - offersPerPage


    let newOfferArr = offerArr.filter((offer) => {
        return offer.minInitialPayment <= value / 100 && offer.minTerm <= minTerm * 12 && bankArr.includes(offer.bankId)
    })

    const currentOffers = newOfferArr.slice(indexOfFirstOffer, indexOfLastOffer)

    return (
        <div className='cards'>
            <div className='cards__all'>
                {currentOffers.map((offer) => (
                    <div className='bank__card'>
                        <p className='bank__card-title'>{getBankName(offer.bankId)}</p>
                        <p>Взнос от: {offer.minInitialPayment} %</p>
                        <p>Тип: {offer.product === "NEW" ? "Новостройка" : "Вторичка"}</p>
                    </div>
                ))}
            </div>
            <div className='cards__pagination'>
                <Pagination offers={newOfferArr.length}
                    offersPerPage={offersPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}
