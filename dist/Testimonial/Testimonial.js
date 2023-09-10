"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Testimonial(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Testimonial"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Image"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: props.image,
    alt: ""
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "DetailSection"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Name"
  }, props.name), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Designation"
  }, props.designation), /*#__PURE__*/_react["default"].createElement("div", {
    className: "Review"
  }, props.review)));
}
;
var _default = Testimonial;
exports["default"] = _default;