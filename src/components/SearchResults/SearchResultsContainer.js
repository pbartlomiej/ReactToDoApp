import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsBySearch } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsBySearch(state, props.match.params.id),
});

export default connect(mapStateToProps)(SearchResults);