import React from 'react'
import PropTypes from 'prop-types';

export default class Pagination extends React.Component {
    handlePageChange = (event) => {
        this.props.onChangePage(Number(event.target.value));
    };
    static propTypes = {
        page: PropTypes.number.isRequired,
        onChangePage: PropTypes.func.isRequired
    };
    render() {
        const { page, onChangePage, totalPages } = this.props;
        //console.log("Pagination", page, totalPages);
        return (
            <section className='paging'>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        className="btn btn-light"
                        disabled={page === 1}
                        onClick={onChangePage.bind(null, page - 1)}
                    >
                        Назад
                    </button>
                    <div className='text-center' style={{ marginTop: '10px', marginRight: '20px', marginLeft: '20px' }}>
                        {page} из {totalPages}
                    </div>
                    <button
                        type="button"
                        className="btn btn-light"
                         disabled = {page ===totalPages}
                        onClick={onChangePage.bind(null, page + 1)}
                    >
                        Вперёд
                    </button>
                </div>
            </section>
        )
    }
}
