"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Testimonials.css");
var _Testimonial = _interopRequireDefault(require("./Testimonial/Testimonial"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Testimonials(props) {
  document.documentElement.style.setProperty("--items", props.items.length);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Testimonials"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Track"
  }, props.items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_Testimonial["default"], {
      key: index,
      image: item[0],
      alt: "img".concat(index + 1),
      name: item[1],
      designation: item[2],
      review: item[3]
    });
  })));
}
;
var _default = Testimonials;
exports["default"] = _default;