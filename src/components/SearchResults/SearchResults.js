import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
  }

  render() {
    const { cards } = this.props;
    console.log('Cards', cards);
    console.log('props', this.props);
    return (
      <section className={styles.component}>
        {cards.map(columnData => (
          <Card key={columnData.id} {...columnData} />
        ))}
      </section>
    );
  }
}

export default SearchResults;