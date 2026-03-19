import React from 'react'
import Image from '../Images/Image'
import { DashBoardTitleIcon } from '../../../assets/IconTitle'

//import css
import "./TransactionTable.css";

const TransactionTable = ({ currentTrans }) => {
    return (
        <>
            <section className='talbeSection'>
                <table className='table'>
                    <thead >
                        <tr className='tableRow'>
                            <th>Recipient</th>
                            <th className='tableRowMidle'>Category</th>
                            <th className='tableRowMidle'>Transaction Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTrans.map((transition) => (
                            <tr key={transition.id}>
                                <td>
                                    <div className='tableDataContent'>
                                        <Image src={DashBoardTitleIcon} variant="xSmallImg" />
                                        <span>{transition.recipient}</span>
                                    </div>
                                </td>

                                <td className='tableRowMidle'>
                                    <div className='tableDataContent'>
                                        <Image src={DashBoardTitleIcon} variant="xSmallImg" />
                                        <span>{transition.category}</span>
                                    </div>
                                </td>
                                <td className='tableRowMidle'>
                                    <div className='tableDataContent'>{transition.date}</div>
                                </td>

                                <td>
                                    <div className='tableDataContent'>{transition.amount}</div>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default TransactionTable
