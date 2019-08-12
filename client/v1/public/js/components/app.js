webpackJsonp([0],{

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(253);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      email: "",
      password: ""
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'handleSubmit',
    value: function handleSubmit(evt) {
      // do something with form data
      evt.preventDefault();
      var base = 'http://localhost:5000/api/v1/db/user/check';
      var url = base + ('?email=' + this.state.email + '&password=' + this.state.password);
      _axios2.default.get(url).then(function (response) {
        // handle success
        var status = response.data['Status'];
        if (status == '200') {
          console.log("Success");
          // Redirect user to login page (Implement this functionality)
        } else {
          console.log("Failure");
          // Display error under the password field, stating Email and/or password is incorrect
        }
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
      this.setState({ email: "", password: "" });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(evt) {
      // runs on every keystroke event
      this.setState(_defineProperty({}, evt.target.name, evt.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'background' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row justify-content-center align-items-center' },
            _react2.default.createElement(
              'div',
              { className: 'col-4' },
              _react2.default.createElement(
                'div',
                { className: 'card' },
                _react2.default.createElement(
                  'div',
                  { className: 'card-body' },
                  _react2.default.createElement(
                    'h3',
                    { id: 'login-header' },
                    ' Login '
                  ),
                  _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group' },
                      _react2.default.createElement('input', { type: 'text',
                        className: 'form-control',
                        name: 'email',
                        placeholder: 'Email',
                        value: this.state.email,
                        onChange: this.handleChange
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group' },
                      _react2.default.createElement('input', { type: 'password',
                        className: 'form-control',
                        name: 'password',
                        placeholder: 'Password',
                        value: this.state.password,
                        onChange: this.handleChange
                      })
                    ),
                    _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
      confirm_password: ""
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: "handleSubmit",
    value: function handleSubmit(evt) {
      // do something with form data
      evt.preventDefault();
      alert("You typed: " + this.state.email);
      this.setState({ email: "" });
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      // runs on every keystroke event
      this.setState(_defineProperty({}, evt.target.name, evt.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "background" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "row justify-content-center align-items-center" },
            _react2.default.createElement(
              "div",
              { className: "col-4" },
              _react2.default.createElement(
                "div",
                { className: "card" },
                _react2.default.createElement(
                  "div",
                  { className: "card-body" },
                  _react2.default.createElement(
                    "h3",
                    { id: "login-header" },
                    " Register "
                  ),
                  _react2.default.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
                    _react2.default.createElement(
                      "div",
                      { className: "form-group" },
                      _react2.default.createElement("input", { type: "text",
                        className: "form-control",
                        name: "first_name",
                        placeholder: "First Name",
                        value: this.state.first_name,
                        onChange: this.handleChange
                      })
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "form-group" },
                      _react2.default.createElement("input", { type: "text",
                        className: "form-control",
                        name: "last_name",
                        placeholder: "Last Name",
                        value: this.state.last_name,
                        onChange: this.handleChange })
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "form-group" },
                      _react2.default.createElement("input", { type: "text",
                        className: "form-control",
                        name: "phone_number",
                        placeholder: "Phone Number",
                        value: this.state.phone_number,
                        onChange: this.handleChange })
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "form-group" },
                      _react2.default.createElement("input", { type: "text",
                        className: "form-control",
                        name: "email",
                        placeholder: "Email",
                        value: this.state.email,
                        onChange: this.handleChange })
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "form-group" },
                      _react2.default.createElement("input", { type: "password",
                        className: "form-control",
                        name: "password",
                        placeholder: "Password",
                        value: this.state.password,
                        onChange: this.handleChange })
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "form-group" },
                      _react2.default.createElement("input", { type: "password",
                        className: "form-control",
                        name: "confirm_password",
                        placeholder: "Confirm Password",
                        value: this.state.confirm_password,
                        onChange: this.handleChange })
                    ),
                    _react2.default.createElement(
                      "p",
                      { id: "login-button" },
                      _react2.default.createElement(
                        "button",
                        { type: "button",
                          id: "sendlogin",
                          className: "btn btn-primary btn-color" },
                        "Submit"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Register;
}(_react.Component);

exports.default = Register;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(83);

var _Logout = __webpack_require__(272);

var _Logout2 = _interopRequireDefault(_Logout);

var _Pantry = __webpack_require__(273);

var _Pantry2 = _interopRequireDefault(_Pantry);

var _Profile = __webpack_require__(274);

var _Profile2 = _interopRequireDefault(_Profile);

var _Settings = __webpack_require__(275);

var _Settings2 = _interopRequireDefault(_Settings);

var _Suggestions = __webpack_require__(276);

var _Suggestions2 = _interopRequireDefault(_Suggestions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));

    _this.state = {
      loginCheck: ''
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'section',
            { id: 'sideMenu' },
            _react2.default.createElement(
              'h2',
              { className: 'title' },
              ' Chexpiry '
            ),
            _react2.default.createElement(
              'nav',
              null,
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/', className: 'active' },
                  ' ',
                  _react2.default.createElement('i', { className: 'fa fa-home', 'aria-hidden': 'true' }),
                  ' Profile '
                ),
                ' '
              ),
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/settings' },
                  ' ',
                  _react2.default.createElement('i', { className: 'fa fa-cog', 'aria-hidden': 'true' }),
                  ' Settings '
                ),
                ' '
              ),
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/pantry' },
                  ' ',
                  _react2.default.createElement('i', { className: 'fa fa-bookmark-o', 'aria-hidden': 'true' }),
                  ' Pantry '
                ),
                ' '
              ),
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/suggestions' },
                  ' ',
                  _react2.default.createElement('i', { className: 'fa fa-calendar-check-o', 'aria-hidden': 'true' }),
                  ' Suggestions '
                ),
                ' '
              ),
              _react2.default.createElement(
                'li',
                null,
                ' ',
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/logout' },
                  ' ',
                  _react2.default.createElement('i', { className: 'fa fa-user-circle', 'aria-hidden': 'true' }),
                  ' Logout '
                ),
                ' '
              )
            ),
            _react2.default.createElement(
              'footer',
              null,
              _react2.default.createElement(
                'p',
                { className: 'copyright' },
                ' Copyright \xA9 2019 '
              )
            )
          ),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Profile2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/settings', component: _Settings2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/pantry', component: _Pantry2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/suggestions', component: _Suggestions2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/logout', component: _Logout2.default })
        )
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = Dashboard;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(83);

var _index = __webpack_require__(283);

var _index2 = _interopRequireDefault(_index);

var _Demo = __webpack_require__(270);

var _Demo2 = _interopRequireDefault(_Demo);

var _Login = __webpack_require__(156);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(157);

var _Register2 = _interopRequireDefault(_Register);

var _Dashboard = __webpack_require__(158);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          { id: 'main-content' },
          _react2.default.createElement(
            'header',
            { id: 'intro-header' },
            _react2.default.createElement(
              'div',
              { id: 'title' },
              _react2.default.createElement(
                'h1',
                null,
                ' Chexpiry '
              ),
              _react2.default.createElement(
                'h2',
                null,
                ' AN INTELLIGENT WAY TO REDUCE WASTE '
              )
            ),
            _react2.default.createElement(
              'nav',
              { id: 'demo-nav' },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  ' ',
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/', className: 'links' },
                    'Home'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  ' ',
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/demo', className: 'links' },
                    'Get Started'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  ' ',
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/login', className: 'links' },
                    ' Login'
                  ),
                  ' '
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  ' ',
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/register', className: 'links' },
                    ' Register'
                  ),
                  ' '
                )
              )
            )
          ),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _index2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/demo/', component: _Demo2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/admin', component: _Dashboard2.default })
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

exports.default = Navigation;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(83);

var _About = __webpack_require__(279);

var _About2 = _interopRequireDefault(_About);

var _FAQ = __webpack_require__(280);

var _FAQ2 = _interopRequireDefault(_FAQ);

var _Privacy = __webpack_require__(281);

var _Privacy2 = _interopRequireDefault(_Privacy);

var _Terms = __webpack_require__(282);

var _Terms2 = _interopRequireDefault(_Terms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'footer',
          { id: 'footer' },
          _react2.default.createElement(
            'div',
            { className: 'footer-top' },
            _react2.default.createElement(
              'div',
              { className: 'logo' },
              ' ',
              _react2.default.createElement(
                'h2',
                null,
                ' Chexpiry '
              ),
              ' '
            ),
            _react2.default.createElement(
              'div',
              { className: 'footer_box' },
              _react2.default.createElement(
                'div',
                { className: 'aboutUs' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex-container' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    ' About Us '
                  ),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/about', className: 'link' },
                    ' Who we are '
                  ),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/facts', className: 'link' },
                    ' FAQ '
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'legal' },
                _react2.default.createElement(
                  'div',
                  { className: 'flex-container' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    ' Legal '
                  ),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/terms', className: 'link' },
                    ' Terms of Use '
                  ),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/privacy', className: 'link' },
                    ' Privacy Policy '
                  )
                )
              )
            )
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'div',
            { className: 'footer-bottom' },
            _react2.default.createElement(
              'p',
              { className: 'socials' },
              ' Follow me on the socials '
            ),
            _react2.default.createElement(
              'div',
              { className: 'icons-container' },
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://www.github.com/brandon-hiles/' },
                ' ',
                _react2.default.createElement('img', { src: 'img/icons/footer-icon-github.svg' }),
                ' '
              ),
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://twitter.com/BrandonJHiles' },
                ' ',
                _react2.default.createElement('img', { src: 'img/icons/footer-icon-twitter.svg' }),
                ' '
              ),
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://www.linkedin.com/in/brandon-hiles/' },
                ' ',
                _react2.default.createElement('img', { src: 'img/icons/footer-icon-linkedin.svg' }),
                ' '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'copyright-section' },
              _react2.default.createElement(
                'p',
                { className: 'copyright' },
                ' \xA9 Copyright 2019 Chexpiry. All rights are reversed'
              )
            )
          ),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _About2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/facts', component: _FAQ2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/terms', component: _Terms2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/privacy', component: _Privacy2.default })
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = function (_Component) {
  _inherits(Demo, _Component);

  function Demo() {
    _classCallCheck(this, Demo);

    return _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "demo" },
        _react2.default.createElement(
          "div",
          { id: "background" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { id: "box" },
              _react2.default.createElement(
                "p",
                null,
                " ",
                _react2.default.createElement(
                  "strong",
                  null,
                  " Demo our Application "
                ),
                " "
              ),
              _react2.default.createElement(
                "p",
                { className: "section-heading" },
                " SCAN YOUR GROCERIES "
              ),
              _react2.default.createElement(
                "p",
                null,
                " Attach a photo of your groceries for identification "
              ),
              _react2.default.createElement("input", { type: "file", id: "file-chooser" }),
              _react2.default.createElement(
                "button",
                { id: "upload-btn" },
                " Upload "
              ),
              _react2.default.createElement(
                "div",
                { id: "results" },
                " "
              )
            ),
            _react2.default.createElement("img", { src: "img/about.jpg", className: "intro-img" })
          )
        )
      );
    }
  }]);

  return Demo;
}(_react.Component);

exports.default = Demo;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(107);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(83);

var _Navigation = __webpack_require__(248);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Footer = __webpack_require__(249);

var _Footer2 = _interopRequireDefault(_Footer);

var _Dashboard = __webpack_require__(158);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Register = __webpack_require__(157);

var _Register2 = _interopRequireDefault(_Register);

var _Login = __webpack_require__(156);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      title: 'Chexpiry'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Navigation2.default, null);
    }
  }]);

  return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  _react2.default.createElement(App, null)
), document.getElementById('app'));

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logout = function (_Component) {
  _inherits(Logout, _Component);

  function Logout() {
    _classCallCheck(this, Logout);

    return _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).apply(this, arguments));
  }

  _createClass(Logout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "section",
          { id: "content-area" },
          _react2.default.createElement(
            "h2",
            null,
            " Logout Page "
          )
        )
      );
    }
  }]);

  return Logout;
}(_react.Component);

exports.default = Logout;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _pantryData = __webpack_require__(277);

var _pantryData2 = _interopRequireDefault(_pantryData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pantry = function (_Component) {
  _inherits(Pantry, _Component);

  function Pantry() {
    _classCallCheck(this, Pantry);

    var _this = _possibleConstructorReturn(this, (Pantry.__proto__ || Object.getPrototypeOf(Pantry)).call(this));

    _this.state = {
      name: 'Brandon',
      pantryData: _pantryData2.default
    };
    _this.template = _this.template.bind(_this);
    return _this;
  }

  _createClass(Pantry, [{
    key: 'template',
    value: function template() {
      var pantryData = this.state.pantryData;


      return pantryData.map(function (item) {
        return _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            ' ',
            item.item,
            ' '
          ),
          _react2.default.createElement(
            'td',
            null,
            ' ',
            item.createDate,
            ' '
          ),
          _react2.default.createElement(
            'td',
            null,
            ' ',
            item.expiryDate,
            ' '
          ),
          _react2.default.createElement(
            'td',
            null,
            ' ',
            item.delete,
            ' '
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(
            'h2',
            null,
            ' Pantry Page '
          ),
          _react2.default.createElement(
            'section',
            { id: 'pantry' },
            _react2.default.createElement(
              'table',
              { className: 'table' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  ' Produce Item '
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  ' Date Entered '
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  ' Expiry Date '
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  ' Delete Item '
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                this.template()
              )
            )
          )
        )
      );
    }
  }]);

  return Pantry;
}(_react.Component);

exports.default = Pantry;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "section",
          { id: "content-area" },
          _react2.default.createElement(
            "h2",
            null,
            " Profile Page "
          )
        )
      );
    }
  }]);

  return Profile;
}(_react.Component);

exports.default = Profile;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_Component) {
  _inherits(Settings, _Component);

  function Settings() {
    _classCallCheck(this, Settings);

    return _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).apply(this, arguments));
  }

  _createClass(Settings, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "section",
          { id: "content-area" },
          _react2.default.createElement(
            "h2",
            null,
            " Settings Page "
          )
        )
      );
    }
  }]);

  return Settings;
}(_react.Component);

exports.default = Settings;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _recipeData = __webpack_require__(278);

var _recipeData2 = _interopRequireDefault(_recipeData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Suggestions = function (_Component) {
  _inherits(Suggestions, _Component);

  function Suggestions() {
    _classCallCheck(this, Suggestions);

    var _this = _possibleConstructorReturn(this, (Suggestions.__proto__ || Object.getPrototypeOf(Suggestions)).call(this));

    _this.state = {
      name: 'Brandon',
      recipeData: _recipeData2.default
    };
    _this.template = _this.template.bind(_this);
    return _this;
  }

  _createClass(Suggestions, [{
    key: 'template',
    value: function template() {
      var recipeData = this.state.recipeData;


      return recipeData.map(function (item) {
        return _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            ' ',
            item.recipe,
            ' '
          ),
          _react2.default.createElement(
            'td',
            null,
            ' ',
            item.ingredients,
            ' '
          ),
          _react2.default.createElement(
            'td',
            null,
            ' ',
            item.estimate,
            ' '
          ),
          _react2.default.createElement(
            'td',
            null,
            ' ',
            item.priority,
            ' '
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(
            'h2',
            null,
            ' Suggestions Page '
          ),
          _react2.default.createElement(
            'section',
            { id: 'today-choice' },
            _react2.default.createElement(
              'div',
              { className: 'box' },
              _react2.default.createElement(
                'h3',
                null,
                ' Today\'s Recipe of Choice '
              ),
              _react2.default.createElement(
                'p',
                null,
                ' Recipe 4 '
              )
            )
          ),
          _react2.default.createElement(
            'section',
            { id: 'recipes' },
            _react2.default.createElement(
              'div',
              { className: 'box' },
              _react2.default.createElement(
                'table',
                { className: 'table' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    ' Recipe '
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    ' Number of Ingredients '
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    ' Estimated Time '
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    ' Priority '
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  this.template()
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Suggestions;
}(_react.Component);

exports.default = Suggestions;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pantryData = [{
  item: "Item 1",
  createDate: "06/08/2019",
  expiryDate: "06/10/2019",
  delete: "false"
}, {
  item: "Item 2",
  createDate: "06/08/2019",
  expiryDate: "06/12/2019",
  delete: "false"
}, {
  item: "Item 3",
  createDate: "06/09/2019",
  expiryDate: "06/15/2019",
  delete: "False"
}, {
  item: "Item 4",
  createDate: "06/07/2019",
  expiryDate: "06/10/2019",
  delete: "False"
}, {
  item: "Item 5",
  createDate: "06/08/2019",
  expiryDate: "06/10/2019",
  delete: "False"
}];

exports.default = pantryData;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var recipeData = [{
  recipe: "Recipe 1",
  ingredients: "10",
  estimate: "30",
  priority: "3"
}, {
  recipe: "Recipe 2",
  ingredients: "8",
  estimate: "20",
  priority: "5"
}];

exports.default = recipeData;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          ' About Works '
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fact = function (_Component) {
  _inherits(Fact, _Component);

  function Fact() {
    _classCallCheck(this, Fact);

    return _possibleConstructorReturn(this, (Fact.__proto__ || Object.getPrototypeOf(Fact)).apply(this, arguments));
  }

  _createClass(Fact, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          ' Fact Works '
        )
      );
    }
  }]);

  return Fact;
}(_react.Component);

exports.default = Fact;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Privacy = function (_Component) {
  _inherits(Privacy, _Component);

  function Privacy() {
    _classCallCheck(this, Privacy);

    return _possibleConstructorReturn(this, (Privacy.__proto__ || Object.getPrototypeOf(Privacy)).apply(this, arguments));
  }

  _createClass(Privacy, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          ' Privacy Works '
        )
      );
    }
  }]);

  return Privacy;
}(_react.Component);

exports.default = Privacy;

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Terms = function (_Component) {
  _inherits(Terms, _Component);

  function Terms() {
    _classCallCheck(this, Terms);

    return _possibleConstructorReturn(this, (Terms.__proto__ || Object.getPrototypeOf(Terms)).apply(this, arguments));
  }

  _createClass(Terms, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          ' Terms Works '
        )
      );
    }
  }]);

  return Terms;
}(_react.Component);

exports.default = Terms;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "home" },
        _react2.default.createElement(
          "div",
          { id: "background" },
          _react2.default.createElement(
            "div",
            { className: "container home" },
            _react2.default.createElement(
              "div",
              { id: "box" },
              _react2.default.createElement(
                "h2",
                null,
                _react2.default.createElement(
                  "span",
                  { className: "section-heading-upper" },
                  " A morsel of impact "
                ),
                _react2.default.createElement(
                  "span",
                  { className: "section-heading-lower" },
                  " Get started on reducing food waste "
                )
              ),
              _react2.default.createElement(
                "p",
                null,
                "Upload photos from your grocery shopping for information and reminders about expiration. In time, you can expect suggestions about how you can improve your shopping habits to reduce waste. Let's make sustainable choices, one bite at a time."
              ),
              _react2.default.createElement(
                "p",
                { id: "login-button" },
                _react2.default.createElement(
                  "button",
                  { type: "button", className: "btn btn-primary btn-color" },
                  " Get Started "
                )
              )
            ),
            _react2.default.createElement("img", { src: "img/intro.jpg", className: "intro-img" })
          )
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ })

},[271]);