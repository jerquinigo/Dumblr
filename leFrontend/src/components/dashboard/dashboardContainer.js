import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import { fetchUsers, newUser } from "../../actions/DashboardActions";


const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    users: state.dashboard.users,
    user:state.dashboard.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    newUser: userData => dispatch(newUser(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
