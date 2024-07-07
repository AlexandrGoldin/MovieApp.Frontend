import React from 'react'

export default class MovieItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className='card'>
        <img
          className='card-img-top card-img-height'
          src={item.pictureUri}
          alt=""
        />
        <div className='card-body'>
          <h6 className='card-title'>{item.title}</h6>
          <div className='card-text'>
            {item.audience}
            / {item.genreName}
            / {item.countryName}
            </div>
          <div className='card-text'> {item.releaseDate} / Рейтинг: {item.rating}</div>
        </div>
      </div>
    );
  }
}
