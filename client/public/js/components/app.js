webpackJsonp([0],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.state = {
      email: "",
      password: "",
      lookup: "localhost:5000/api/lookup" // Location to backend server
    };
    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "background" },
        _react2.default.createElement(
          "h2",
          null,
          " Login "
        ),
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
                    "form",
                    { action: "", autocomplete: "off" },
                    _react2.default.createElement(
                      "div",
                      { className: "form-group" },
                      _react2.default.createElement("input", { type: "text", className: "form-control", name: "username", placeholder: "Email" })
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "form-group" },
                      _react2.default.createElement("input", { type: "password", className: "form-control", name: "password", placeholder: "Password" })
                    ),
                    _react2.default.createElement(
                      "button",
                      { type: "button", id: "sendlogin", className: "btn btn-primary" },
                      "Login"
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

  return Login;
}(_react.Component);

exports.default = Login;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(151);

var _index = __webpack_require__(251);

var _index2 = _interopRequireDefault(_index);

var _Demo = __webpack_require__(243);

var _Demo2 = _interopRequireDefault(_Demo);

var _Login = __webpack_require__(155);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(244);

var _Register2 = _interopRequireDefault(_Register);

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
            'h1',
            null,
            ' Chexpiry '
          ),
          _react2.default.createElement(
            'h2',
            null,
            ' AN INTELLIGENT WAY TO REDUCE WASTE '
          ),
          _react2.default.createElement(
            'header',
            null,
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
          _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default })
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

exports.default = Navigation;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(151);

var _Logout = __webpack_require__(246);

var _Logout2 = _interopRequireDefault(_Logout);

var _Pantry = __webpack_require__(247);

var _Pantry2 = _interopRequireDefault(_Pantry);

var _Profile = __webpack_require__(248);

var _Profile2 = _interopRequireDefault(_Profile);

var _Settings = __webpack_require__(249);

var _Settings2 = _interopRequireDefault(_Settings);

var _Suggestions = __webpack_require__(250);

var _Suggestions2 = _interopRequireDefault(_Suggestions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
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
              null,
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
              'p',
              { className: 'copyright' },
              ' Copyright \xA9 2019 '
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

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(151);

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
        'footer',
        { id: 'footer' },
        _react2.default.createElement(
          'div',
          { className: 'footer-top' },
          _react2.default.createElement(
            'div',
            { className: 'logo' },
            ' Logo '
          ),
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
                'a',
                { href: '#' },
                ' Who we are '
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
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
                'a',
                { href: '#' },
                ' Terms of use '
              ),
              _react2.default.createElement(
                'a',
                { href: '#' },
                ' Privacy Policy '
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
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

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
        "div",
        { id: "background" },
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
        )
      );
    }
  }]);

  return Demo;
}(_react.Component);

exports.default = Demo;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
    _inherits(Register, _Component);

    function Register() {
        _classCallCheck(this, Register);

        return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
    }

    _createClass(Register, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "background" },
                _react2.default.createElement(
                    "h2",
                    null,
                    " Register "
                ),
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
                                        "form",
                                        { action: "", autocomplete: "off" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "form-group" },
                                            _react2.default.createElement("input", { type: "text", className: "form-control", name: "first_name", placeholder: "First Name" })
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "form-group" },
                                            _react2.default.createElement("input", { type: "text", className: "form-control", name: "last_name", placeholder: "Last Name" })
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "form-group" },
                                            _react2.default.createElement("input", { type: "text", className: "form-control", name: "phone-number", placeholder: "Phone Number" })
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "form-group" },
                                            _react2.default.createElement("input", { type: "text", className: "form-control", name: "email", placeholder: "Email" })
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "form-group" },
                                            _react2.default.createElement("input", { type: "password", className: "form-control", name: "password", placeholder: "Password" })
                                        ),
                                        _react2.default.createElement(
                                            "div",
                                            { className: "form-group" },
                                            _react2.default.createElement("input", { type: "password", className: "form-control", name: "confirm_password", placeholder: "Confirm Password" })
                                        ),
                                        _react2.default.createElement(
                                            "button",
                                            { type: "button", id: "sendlogin", className: "btn btn-primary" },
                                            "Register"
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

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(105);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Navigation = __webpack_require__(237);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Login = __webpack_require__(155);

var _Login2 = _interopRequireDefault(_Login);

var _Footer = __webpack_require__(239);

var _Footer2 = _interopRequireDefault(_Footer);

var _Dashboard = __webpack_require__(238);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Login2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h2',
        null,
        ' Logout Page '
      );
    }
  }]);

  return Logout;
}(_react.Component);

exports.default = Logout;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pantry = function (_Component) {
  _inherits(Pantry, _Component);

  function Pantry() {
    _classCallCheck(this, Pantry);

    return _possibleConstructorReturn(this, (Pantry.__proto__ || Object.getPrototypeOf(Pantry)).apply(this, arguments));
  }

  _createClass(Pantry, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "pantry" },
        _react2.default.createElement(
          "h2",
          null,
          " Pantry Page "
        ),
        _react2.default.createElement(
          "table",
          { className: "table" },
          _react2.default.createElement(
            "thead",
            null,
            _react2.default.createElement(
              "th",
              null,
              " Produce Item "
            ),
            _react2.default.createElement(
              "th",
              null,
              " Date Entered "
            ),
            _react2.default.createElement(
              "th",
              null,
              " Expiry Date "
            ),
            _react2.default.createElement(
              "th",
              null,
              " Delete Item "
            )
          ),
          _react2.default.createElement(
            "tbody",
            null,
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                null,
                " Item 1 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " 06/08/2019 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " 06/10/2019 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " ",
                _react2.default.createElement("input", { type: "submit" }),
                " "
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                null,
                " Item 2 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " 06/08/2019 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " 06/12/2019 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " ",
                _react2.default.createElement("input", { type: "submit" }),
                " "
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                null,
                " Item 3 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " 06/09/2019 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " 06/15/2019 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " ",
                _react2.default.createElement("input", { type: "submit" }),
                " "
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                null,
                " Item 4 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " 06/07/2019 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " 06/10/2019 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " ",
                _react2.default.createElement("input", { type: "submit" }),
                " "
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                null,
                " Item 5 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " 06/08/2019 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " 06/10/2019 "
              ),
              _react2.default.createElement(
                "td",
                null,
                " ",
                _react2.default.createElement("input", { type: "submit" }),
                " "
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

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h2',
        null,
        ' Profile Page '
      );
    }
  }]);

  return Profile;
}(_react.Component);

exports.default = Profile;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h2',
        null,
        ' Settings Page '
      );
    }
  }]);

  return Settings;
}(_react.Component);

exports.default = Settings;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Suggestions = function (_Component) {
  _inherits(Suggestions, _Component);

  function Suggestions() {
    _classCallCheck(this, Suggestions);

    return _possibleConstructorReturn(this, (Suggestions.__proto__ || Object.getPrototypeOf(Suggestions)).apply(this, arguments));
  }

  _createClass(Suggestions, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h2',
        null,
        ' Suggestions Page '
      );
    }
  }]);

  return Suggestions;
}(_react.Component);

exports.default = Suggestions;

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

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
        "div",
        { id: "background" },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { id: "box" },
            _react2.default.createElement(
              "p",
              { className: "center" },
              " ",
              _react2.default.createElement(
                "strong",
                null,
                " A MORSEL OF IMPACT "
              ),
              " "
            ),
            _react2.default.createElement(
              "p",
              { className: "section-heading" },
              " GET STARTED ON REDUCING FOOD WASTE "
            ),
            _react2.default.createElement(
              "p",
              null,
              "Upload photos from your grocery shopping for information and reminders about expiration. In time, you can expect suggestions about how you can improve your shopping habits to reduce waste. Let's make sustainable choices, one bite at a time."
            )
          ),
          _react2.default.createElement("img", { src: "img/intro.jpg" })
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

/***/ })

},[245]);