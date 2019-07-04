import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/chess';
import Board from './Board';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
