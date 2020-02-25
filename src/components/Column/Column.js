import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    state = {
        cards: this.props.cards || {},
    }

    addCard(title) {
        this.setState(state => (
            {
                cards: [
                    ...state.cards,
                    {
                        key: state.cards.lenght ? state.cards[state.cards.length-1].key+1 : 0,
                        title
                    }
                ]
            }
        ));
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}><span><Icon name={this.props.icon} /> </span>{this.props.title}</h3>
                {this.state.cards.map(({key, ...cardsProps}) => (
                    <Card key={key} {...cardsProps} />
                    ))
                }
                <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
            </section>
        )
    }
}

export default Column;