import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './index.component';
import { itemsFetchData } from '../../../../redux/actions/index';

const mapDispatchToProps = dispatch => ({
    fetchCitiesData: cityName => dispatch(itemsFetchData(cityName)),
});

export default connect(null, mapDispatchToProps)(withRouter(SearchForm));
