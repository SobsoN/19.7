import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbDown} from './actions'

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDown: (id) => dispatch(thumbDown(id))
});

export default connect(null, mapDispatchToProps)(Comment);