/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/story_card/story_card.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/story_card/story_card.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@-webkit-keyframes story_card_hover__1nK1j {\\n  from {\\n    -webkit-filter: grayscale(100%);\\n            filter: grayscale(100%);\\n  }\\n  to {\\n    -webkit-filter: grayscale(0);\\n            filter: grayscale(0);\\n  }\\n}\\n@keyframes story_card_hover__1nK1j {\\n  from {\\n    -webkit-filter: grayscale(100%);\\n            filter: grayscale(100%);\\n  }\\n  to {\\n    -webkit-filter: grayscale(0);\\n            filter: grayscale(0);\\n  }\\n}\\n.story_card_container__17McO {\\n  --border-rad: 10px;\\n  background: var(--sandy-brown);\\n  color: var(--charcoal);\\n  width: clamp(300px, 100%, 500px);\\n  display: grid;\\n  border: 1px solid var(--persian-green);\\n  border-radius: var(--border-rad);\\n  margin: 20px 0;\\n  grid-template: \\\"image title title\\\" 1fr \\\"image author author\\\" 1fr/1fr 1fr 1fr;\\n}\\n.story_card_container__17McO:hover {\\n  -webkit-box-shadow: 5px 5px 15px var(--persian-green);\\n          box-shadow: 5px 5px 15px var(--persian-green);\\n  color: var(--persian-green);\\n}\\n@media (max-width: 500px) {\\n  .story_card_container__17McO {\\n    grid-template: \\\"image\\\" 2fr \\\"title\\\" 1fr \\\"author\\\" 1fr;\\n  }\\n}\\n.story_card_container__17McO .story_card_img__1Mapm {\\n  grid-area: image;\\n  max-width: 200px;\\n  height: 100%;\\n  -webkit-filter: grayscale(100%);\\n          filter: grayscale(100%);\\n  border-radius: var(--border-rad) 0 0 var(--border-rad);\\n  object-fit: cover;\\n}\\n.story_card_container__17McO .story_card_img__1Mapm:hover {\\n  -webkit-animation: story_card_hover__1nK1j 100ms ease forwards;\\n          animation: story_card_hover__1nK1j 100ms ease forwards;\\n}\\n@media (max-width: 500px) {\\n  .story_card_container__17McO .story_card_img__1Mapm {\\n    max-width: 100%;\\n    border-radius: var(--border-rad) var(--border-rad) 0 0;\\n  }\\n}\\n.story_card_container__17McO .story_card_title__1Vvp5,\\n.story_card_container__17McO .story_card_author__fBnJW {\\n  padding: 10px;\\n}\\n.story_card_container__17McO .story_card_title__1Vvp5 {\\n  margin: 0;\\n  position: relative;\\n  grid-area: title;\\n  font-size: 16px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n.story_card_container__17McO .story_card_title__1Vvp5 .story_card_date__10Y8X {\\n  text-align: right;\\n  font-size: 12px;\\n}\\n.story_card_container__17McO .story_card_title__1Vvp5 .story_card_header__3_C4s {\\n  max-width: 27ch;\\n}\\n.story_card_container__17McO .story_card_title__1Vvp5 .story_card_header__3_C4s:focus {\\n  border: 1px dashed var(--persian-green);\\n}\\n.story_card_container__17McO .story_card_title__1Vvp5 .story_card_score__1abnF {\\n  position: absolute;\\n  right: 10px;\\n  top: 10px;\\n  background: var(--charcoal);\\n  color: var(--sandy-brown);\\n  padding: 3px;\\n}\\n.story_card_container__17McO .story_card_author__fBnJW {\\n  grid-area: author;\\n  font-size: 14px;\\n  height: 100%;\\n  display: flex;\\n  justify-content: end;\\n  align-items: end;\\n  height: 100%;\\n}\\n.story_card_container__17McO .story_card_author__fBnJW > div {\\n  border: dotted 1px var(--persian-green);\\n  padding: 2px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://story_card.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE;IACE,+BAAA;YAAA,uBAAA;EACF;EACA;IACE,4BAAA;YAAA,oBAAA;EACF;AACF;AAPA;EACE;IACE,+BAAA;YAAA,uBAAA;EACF;EACA;IACE,4BAAA;YAAA,oBAAA;EACF;AACF;AACA;EAEE,kBAAA;EACA,8BAAA;EACA,sBAAA;EACA,gCAAA;EACA,aAAA;EACA,sCAAA;EACA,gCAAA;EACA,cAAA;EACA,4EACE;AADJ;AAKE;EACE,qDAAA;UAAA,6CAAA;EACA,2BAAA;AAHJ;AAME;EApBF;IAqBI,mDACE;EAJJ;AACF;AAQE;EACE,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,+BAAA;UAAA,uBAAA;EACA,sDAAA;EACA,iBAAA;AANJ;AAOI;EACE,8DAAA;UAAA,sDAAA;AALN;AAQI;EAXF;IAYI,eAAA;IACA,sDAAA;EALJ;AACF;AAOE;;EAEE,aAAA;AALJ;AAOE;EACE,SAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AALJ;AAMI;EACE,iBAAA;EACA,eAAA;AAJN;AAMI;EACE,eAAA;AAJN;AAKM;EACE,uCAAA;AAHR;AAMI;EACE,kBAAA;EACA,WAAA;EACA,SAAA;EACA,2BAAA;EACA,yBAAA;EACA,YAAA;AAJN;AAOE;EACE,iBAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;EACA,gBAAA;EACA,YAAA;AALJ;AAMI;EACE,uCAAA;EACA,YAAA;AAJN\",\"sourcesContent\":[\"@keyframes hover {\\n  from {\\n    filter: grayscale(100%);\\n  }\\n  to {\\n    filter: grayscale(0);\\n  }\\n}\\n.container {\\n  $break-point: 500px;\\n  --border-rad: 10px;\\n  background: var(--sandy-brown);\\n  color: var(--charcoal);\\n  width: clamp(300px, 100%, 500px);\\n  display: grid;\\n  border: 1px solid var(--persian-green);\\n  border-radius: var(--border-rad);\\n  margin: 20px 0;\\n  grid-template:\\n    'image title title' 1fr\\n    'image author author' 1fr\\n    / 1fr 1fr 1fr;\\n\\n  &:hover {\\n    box-shadow: 5px 5px 15px var(--persian-green);\\n    color: var(--persian-green);\\n  }\\n\\n  @media (max-width: $break-point) {\\n    grid-template:\\n      'image' 2fr\\n      'title' 1fr\\n      'author' 1fr;\\n  }\\n\\n  .img {\\n    grid-area: image;\\n    max-width: 200px;\\n    height: 100%;\\n    filter: grayscale(100%);\\n    border-radius: var(--border-rad) 0 0 var(--border-rad);\\n    object-fit: cover;\\n    &:hover {\\n      animation: hover 100ms ease forwards;\\n    }\\n\\n    @media (max-width: $break-point) {\\n      max-width: 100%;\\n      border-radius: var(--border-rad) var(--border-rad) 0 0;\\n    }\\n  }\\n  .title,\\n  .author {\\n    padding: 10px;\\n  }\\n  .title {\\n    margin: 0;\\n    position: relative;\\n    grid-area: title;\\n    font-size: 16px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    .date {\\n      text-align: right;\\n      font-size: 12px;\\n    }\\n    .header {\\n      max-width: 27ch;\\n      &:focus {\\n        border: 1px dashed var(--persian-green);\\n      }\\n    }\\n    .score {\\n      position: absolute;\\n      right: 10px;\\n      top: 10px;\\n      background: var(--charcoal);\\n      color: var(--sandy-brown);\\n      padding: 3px;\\n    }\\n  }\\n  .author {\\n    grid-area: author;\\n    font-size: 14px;\\n    height: 100%;\\n    display: flex;\\n    justify-content: end;\\n    align-items: end;\\n    height: 100%;\\n    & > div {\\n      border: dotted 1px var(--persian-green);\\n      padding: 2px;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"story_card_container__17McO\",\n\t\"img\": \"story_card_img__1Mapm\",\n\t\"hover\": \"story_card_hover__1nK1j\",\n\t\"title\": \"story_card_title__1Vvp5\",\n\t\"author\": \"story_card_author__fBnJW\",\n\t\"date\": \"story_card_date__10Y8X\",\n\t\"header\": \"story_card_header__3_C4s\",\n\t\"score\": \"story_card_score__1abnF\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yeV9jYXJkL3N0b3J5X2NhcmQubW9kdWxlLnNjc3M/M2U1OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0Esc0ZBQXNGLFVBQVUsc0NBQXNDLHNDQUFzQyxLQUFLLFFBQVEsbUNBQW1DLG1DQUFtQyxLQUFLLEdBQUcsc0NBQXNDLFVBQVUsc0NBQXNDLHNDQUFzQyxLQUFLLFFBQVEsbUNBQW1DLG1DQUFtQyxLQUFLLEdBQUcsZ0NBQWdDLHVCQUF1QixtQ0FBbUMsMkJBQTJCLHFDQUFxQyxrQkFBa0IsMkNBQTJDLHFDQUFxQyxtQkFBbUIscUZBQXFGLEdBQUcsc0NBQXNDLDBEQUEwRCwwREFBMEQsZ0NBQWdDLEdBQUcsNkJBQTZCLGtDQUFrQyxnRUFBZ0UsS0FBSyxHQUFHLHVEQUF1RCxxQkFBcUIscUJBQXFCLGlCQUFpQixvQ0FBb0Msb0NBQW9DLDJEQUEyRCxzQkFBc0IsR0FBRyw2REFBNkQsbUVBQW1FLG1FQUFtRSxHQUFHLDZCQUE2Qix5REFBeUQsc0JBQXNCLDZEQUE2RCxLQUFLLEdBQUcsa0hBQWtILGtCQUFrQixHQUFHLHlEQUF5RCxjQUFjLHVCQUF1QixxQkFBcUIsb0JBQW9CLGtCQUFrQiwyQkFBMkIsbUNBQW1DLEdBQUcsaUZBQWlGLHNCQUFzQixvQkFBb0IsR0FBRyxtRkFBbUYsb0JBQW9CLEdBQUcseUZBQXlGLDRDQUE0QyxHQUFHLGtGQUFrRix1QkFBdUIsZ0JBQWdCLGNBQWMsZ0NBQWdDLDhCQUE4QixpQkFBaUIsR0FBRywwREFBMEQsc0JBQXNCLG9CQUFvQixpQkFBaUIsa0JBQWtCLHlCQUF5QixxQkFBcUIsaUJBQWlCLEdBQUcsZ0VBQWdFLDRDQUE0QyxpQkFBaUIsR0FBRyxPQUFPLHVGQUF1RixLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFlBQVksS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsMkNBQTJDLFVBQVUsOEJBQThCLEtBQUssUUFBUSwyQkFBMkIsS0FBSyxHQUFHLGNBQWMsd0JBQXdCLHVCQUF1QixtQ0FBbUMsMkJBQTJCLHFDQUFxQyxrQkFBa0IsMkNBQTJDLHFDQUFxQyxtQkFBbUIsa0dBQWtHLGVBQWUsb0RBQW9ELGtDQUFrQyxLQUFLLHdDQUF3QywrRUFBK0UsS0FBSyxZQUFZLHVCQUF1Qix1QkFBdUIsbUJBQW1CLDhCQUE4Qiw2REFBNkQsd0JBQXdCLGVBQWUsNkNBQTZDLE9BQU8sMENBQTBDLHdCQUF3QiwrREFBK0QsT0FBTyxLQUFLLHdCQUF3QixvQkFBb0IsS0FBSyxZQUFZLGdCQUFnQix5QkFBeUIsdUJBQXVCLHNCQUFzQixvQkFBb0IsNkJBQTZCLHFDQUFxQyxhQUFhLDBCQUEwQix3QkFBd0IsT0FBTyxlQUFlLHdCQUF3QixpQkFBaUIsa0RBQWtELFNBQVMsT0FBTyxjQUFjLDJCQUEyQixvQkFBb0Isa0JBQWtCLG9DQUFvQyxrQ0FBa0MscUJBQXFCLE9BQU8sS0FBSyxhQUFhLHdCQUF3QixzQkFBc0IsbUJBQW1CLG9CQUFvQiwyQkFBMkIsdUJBQXVCLG1CQUFtQixlQUFlLGdEQUFnRCxxQkFBcUIsT0FBTyxLQUFLLEdBQUcscUJBQXFCO0FBQ3o1TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL2NvbXBvbmVudHMvc3RvcnlfY2FyZC9zdG9yeV9jYXJkLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQC13ZWJraXQta2V5ZnJhbWVzIHN0b3J5X2NhcmRfaG92ZXJfXzFuSzFqIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHN0b3J5X2NhcmRfaG92ZXJfXzFuSzFqIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xcbiAgfVxcbn1cXG4uc3RvcnlfY2FyZF9jb250YWluZXJfXzE3TWNPIHtcXG4gIC0tYm9yZGVyLXJhZDogMTBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNhbmR5LWJyb3duKTtcXG4gIGNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDEwMCUsIDUwMHB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wZXJzaWFuLWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBncmlkLXRlbXBsYXRlOiBcXFwiaW1hZ2UgdGl0bGUgdGl0bGVcXFwiIDFmciBcXFwiaW1hZ2UgYXV0aG9yIGF1dGhvclxcXCIgMWZyLzFmciAxZnIgMWZyO1xcbn1cXG4uc3RvcnlfY2FyZF9jb250YWluZXJfXzE3TWNPOmhvdmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHZhcigtLXBlcnNpYW4tZ3JlZW4pO1xcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxuICBjb2xvcjogdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLnN0b3J5X2NhcmRfY29udGFpbmVyX18xN01jTyB7XFxuICAgIGdyaWQtdGVtcGxhdGU6IFxcXCJpbWFnZVxcXCIgMmZyIFxcXCJ0aXRsZVxcXCIgMWZyIFxcXCJhdXRob3JcXFwiIDFmcjtcXG4gIH1cXG59XFxuLnN0b3J5X2NhcmRfY29udGFpbmVyX18xN01jTyAuc3RvcnlfY2FyZF9pbWdfXzFNYXBtIHtcXG4gIGdyaWQtYXJlYTogaW1hZ2U7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKSAwIDAgdmFyKC0tYm9yZGVyLXJhZCk7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLnN0b3J5X2NhcmRfY29udGFpbmVyX18xN01jTyAuc3RvcnlfY2FyZF9pbWdfXzFNYXBtOmhvdmVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzdG9yeV9jYXJkX2hvdmVyX18xbksxaiAxMDBtcyBlYXNlIGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb246IHN0b3J5X2NhcmRfaG92ZXJfXzFuSzFqIDEwMG1zIGVhc2UgZm9yd2FyZHM7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLnN0b3J5X2NhcmRfY29udGFpbmVyX18xN01jTyAuc3RvcnlfY2FyZF9pbWdfXzFNYXBtIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKSB2YXIoLS1ib3JkZXItcmFkKSAwIDA7XFxuICB9XFxufVxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08gLnN0b3J5X2NhcmRfdGl0bGVfXzFWdnA1LFxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08gLnN0b3J5X2NhcmRfYXV0aG9yX19mQm5KVyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uc3RvcnlfY2FyZF9jb250YWluZXJfXzE3TWNPIC5zdG9yeV9jYXJkX3RpdGxlX18xVnZwNSB7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08gLnN0b3J5X2NhcmRfdGl0bGVfXzFWdnA1IC5zdG9yeV9jYXJkX2RhdGVfXzEwWThYIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uc3RvcnlfY2FyZF9jb250YWluZXJfXzE3TWNPIC5zdG9yeV9jYXJkX3RpdGxlX18xVnZwNSAuc3RvcnlfY2FyZF9oZWFkZXJfXzNfQzRzIHtcXG4gIG1heC13aWR0aDogMjdjaDtcXG59XFxuLnN0b3J5X2NhcmRfY29udGFpbmVyX18xN01jTyAuc3RvcnlfY2FyZF90aXRsZV9fMVZ2cDUgLnN0b3J5X2NhcmRfaGVhZGVyX18zX0M0czpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxufVxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08gLnN0b3J5X2NhcmRfdGl0bGVfXzFWdnA1IC5zdG9yeV9jYXJkX3Njb3JlX18xYWJuRiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogMTBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNoYXJjb2FsKTtcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08gLnN0b3J5X2NhcmRfYXV0aG9yX19mQm5KVyB7XFxuICBncmlkLWFyZWE6IGF1dGhvcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08gLnN0b3J5X2NhcmRfYXV0aG9yX19mQm5KVyA+IGRpdiB7XFxuICBib3JkZXI6IGRvdHRlZCAxcHggdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxuICBwYWRkaW5nOiAycHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdG9yeV9jYXJkLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSwrQkFBQTtZQUFBLHVCQUFBO0VBQ0Y7RUFDQTtJQUNFLDRCQUFBO1lBQUEsb0JBQUE7RUFDRjtBQUNGO0FBUEE7RUFDRTtJQUNFLCtCQUFBO1lBQUEsdUJBQUE7RUFDRjtFQUNBO0lBQ0UsNEJBQUE7WUFBQSxvQkFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUVFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsNEVBQ0U7QUFESjtBQUtFO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtFQUNBLDJCQUFBO0FBSEo7QUFNRTtFQXBCRjtJQXFCSSxtREFDRTtFQUpKO0FBQ0Y7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLHNEQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQU9JO0VBQ0UsOERBQUE7VUFBQSxzREFBQTtBQUxOO0FBUUk7RUFYRjtJQVlJLGVBQUE7SUFDQSxzREFBQTtFQUxKO0FBQ0Y7QUFPRTs7RUFFRSxhQUFBO0FBTEo7QUFPRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBTEo7QUFNSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUpOO0FBTUk7RUFDRSxlQUFBO0FBSk47QUFLTTtFQUNFLHVDQUFBO0FBSFI7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUpOO0FBT0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEo7QUFNSTtFQUNFLHVDQUFBO0VBQ0EsWUFBQTtBQUpOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgaG92ZXIge1xcbiAgZnJvbSB7XFxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lciB7XFxuICAkYnJlYWstcG9pbnQ6IDUwMHB4O1xcbiAgLS1ib3JkZXItcmFkOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2FuZHktYnJvd24pO1xcbiAgY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgMTAwJSwgNTAwcHgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBlcnNpYW4tZ3JlZW4pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICdpbWFnZSB0aXRsZSB0aXRsZScgMWZyXFxuICAgICdpbWFnZSBhdXRob3IgYXV0aG9yJyAxZnJcXG4gICAgLyAxZnIgMWZyIDFmcjtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS1wZXJzaWFuLWdyZWVuKTtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWstcG9pbnQpIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgICAnaW1hZ2UnIDJmclxcbiAgICAgICd0aXRsZScgMWZyXFxuICAgICAgJ2F1dGhvcicgMWZyO1xcbiAgfVxcblxcbiAgLmltZyB7XFxuICAgIGdyaWQtYXJlYTogaW1hZ2U7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpIDAgMCB2YXIoLS1ib3JkZXItcmFkKTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGFuaW1hdGlvbjogaG92ZXIgMTAwbXMgZWFzZSBmb3J3YXJkcztcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrLXBvaW50KSB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpIHZhcigtLWJvcmRlci1yYWQpIDAgMDtcXG4gICAgfVxcbiAgfVxcbiAgLnRpdGxlLFxcbiAgLmF1dGhvciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAudGl0bGUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC5kYXRlIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgIH1cXG4gICAgLmhlYWRlciB7XFxuICAgICAgbWF4LXdpZHRoOiAyN2NoO1xcbiAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLXBlcnNpYW4tZ3JlZW4pO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuc2NvcmUge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMTBweDtcXG4gICAgICB0b3A6IDEwcHg7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2hhcmNvYWwpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxuICAgICAgcGFkZGluZzogM3B4O1xcbiAgICB9XFxuICB9XFxuICAuYXV0aG9yIHtcXG4gICAgZ3JpZC1hcmVhOiBhdXRob3I7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAmID4gZGl2IHtcXG4gICAgICBib3JkZXI6IGRvdHRlZCAxcHggdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxuICAgICAgcGFkZGluZzogMnB4O1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0b3J5X2NhcmRfY29udGFpbmVyX18xN01jT1wiLFxuXHRcImltZ1wiOiBcInN0b3J5X2NhcmRfaW1nX18xTWFwbVwiLFxuXHRcImhvdmVyXCI6IFwic3RvcnlfY2FyZF9ob3Zlcl9fMW5LMWpcIixcblx0XCJ0aXRsZVwiOiBcInN0b3J5X2NhcmRfdGl0bGVfXzFWdnA1XCIsXG5cdFwiYXV0aG9yXCI6IFwic3RvcnlfY2FyZF9hdXRob3JfX2ZCbkpXXCIsXG5cdFwiZGF0ZVwiOiBcInN0b3J5X2NhcmRfZGF0ZV9fMTBZOFhcIixcblx0XCJoZWFkZXJcIjogXCJzdG9yeV9jYXJkX2hlYWRlcl9fM19DNHNcIixcblx0XCJzY29yZVwiOiBcInN0b3J5X2NhcmRfc2NvcmVfXzFhYm5GXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/story_card/story_card.module.scss\n");

/***/ })

});