"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (str) {
  var p = 33;
  var hash = 5381;

  for (var i = str.length; i; i--) {
    hash = hash * p ^ str.charCodeAt(i);
  }

  return hash;
};

module.exports = exports["default"];