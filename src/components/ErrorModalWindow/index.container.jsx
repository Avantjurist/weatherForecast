import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorModalWindow from './index.component';
import { cleanError } from '../../redux/actions/index';

const mapStateToProps = ({errors}) => ({errors});

const mapDispatchToProps = dispatch => ({
    cleanErrors: () => dispatch(cleanError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ErrorModalWindow));
