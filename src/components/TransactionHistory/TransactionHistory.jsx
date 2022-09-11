import PropTypes from 'prop-types'
import css from 'components/TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                <th className={css.tableThead}>TYPE</th>
                <th className={css.tableThead}>AMOUNT</th>
                <th className={css.tableThead}>CURRENCY</th>
                </tr>
            </thead>
            <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return (
                    <tr key = {id} className={css.row}>
                        <td className={css.type}>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                )
            })}
        </tbody>    
        </table>   
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
            id: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
    })).isRequired
}
