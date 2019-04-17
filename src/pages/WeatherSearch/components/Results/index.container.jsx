import { connect } from 'react-redux';
import { itemsFetchData } from '../../../../redux/actions/index';
import ResultTable from "./index.component";

const mapStateToProps = ({ forecasts }) => ({ forecasts });// state => {forecasts:state.forecasts}

const mapDispatchToProps = dispatch => ({
    fetchData: cityName => dispatch(itemsFetchData(cityName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultTable);
