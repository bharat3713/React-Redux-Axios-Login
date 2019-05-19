import React from "react";
import InputElement from "../CommonUI/InputElement";
import validateInput from "../CommonUI/ValidateInput";
import { connect } from "react-redux";
import { login } from "../../Application/Actions/authAction";
import PropTypes from "prop-types";
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });

      this.props
        .login(this.state)
        .then(res => this.context.router.push("/dashboard"))
        .catch(err => {
          this.setState({
            errors: { message: err.response.data.error },
            isLoading: false
          });
        });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, userId, password, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        {errors.message && (
          <div className="alert alert-danger">{errors.message}</div>
        )}

        <InputElement
          inputName="userId"
          label="Username / Email"
          value={userId}
          onChange={this.onChange}
        />

        <InputElement
          inputName="password"
          label="Password"
          value={password}
          onChange={this.onChange}
          type="password"
        />

        <div className="form-group">
          <button className="btn btn-primary btn-lg m-top-30" disabled={isLoading}>
            Login
          </button>
        </div>
      </form>
    );
  }
}

LoginComponent.propTypes = {
  login: PropTypes.func.isRequired
};

LoginComponent.contextTypes = {
  router: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => {
  return {
    login: state => dispatch(login(state))
  };
};

export default connect(
  null,
  { login }
)(LoginComponent);
