import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
      icon: PropTypes.string,
    }

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render() {
      const {title, icon, cards} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span>
              <Icon name={icon} />
            </span>
            {title}
          </h3>
          {cards.map(columnData => (
            <Card key={columnData.id} {...columnData} />
          ))}
          {/*<Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />*/}
        </section>
      );
    }
}

export default Column;