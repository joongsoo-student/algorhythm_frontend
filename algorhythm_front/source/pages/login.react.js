import { Link } from 'react-router';
import { CommentHeader } from '../../component/header-comment.react';
var React = require('react');



var Login = React.createClass({
	getInitialState: function() {
		return {
			inputEmail: '',
			inputPw: ''
		}
	},

	handleChangeEmail: function(event) {
		this.setState({
			inputEmail: event.target.value
		});
	},
	handleChangePw: function(event) {
		this.setState({
			inputPw: event.target.value
		});
	},

	render: function() {
		return (
		<section id="login">
        <div className="container sr-contact">
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title"> 로그인</h3>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <fieldset>
                                <div className="form-group">
                                	<div className="input-group">
									  <span className="input-group-addon" id="basic-addon1">
									  	<i className="fa fa-user" aria-hidden="true"></i>
									  </span>
									  <input type="email" className="form-control" 
									  placeholder="E-mail" autofocus 
									  onChange={this.handleChangeEmail} value={this.state.inputEmail} />
									</div>
								</div>
                                <div className="form-group">
                                	<div className="input-group">
									  <span className="input-group-addon" id="basic-addon1">
									  	<i className="fa fa-lock" aria-hidden="true"></i>
									  </span>
									  <input type="password" className="form-control" placeholder="Password" 
									   onChange={this.handleChangePw} value={this.state.inputPw} />
									</div>
                                </div>
                                <a href="index.html" className="btn btn-lg btn-success btn-block">로그인</a>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>);
	}
});

module.exports = Login;