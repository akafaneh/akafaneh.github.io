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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@-webkit-keyframes story_card_hover__1nK1j {\\n  from {\\n    -webkit-filter: grayscale(100%);\\n            filter: grayscale(100%);\\n  }\\n  to {\\n    -webkit-filter: grayscale(0);\\n            filter: grayscale(0);\\n  }\\n}\\n@keyframes story_card_hover__1nK1j {\\n  from {\\n    -webkit-filter: grayscale(100%);\\n            filter: grayscale(100%);\\n  }\\n  to {\\n    -webkit-filter: grayscale(0);\\n            filter: grayscale(0);\\n  }\\n}\\n.story_card_container__17McO {\\n  --border-rad: 10px;\\n  background: var(--sandy-brown);\\n  color: var(--charcoal);\\n  width: clamp(300px, 100%, 500px);\\n  min-height: 200px;\\n  max-height: 300px;\\n  display: grid;\\n  border: 1px solid var(--persian-green);\\n  border-radius: var(--border-rad);\\n  margin: 20px 0;\\n  grid-template: \\\"image title title\\\" 1fr \\\"image author author\\\" 1fr/1fr 1fr 1fr;\\n}\\n.story_card_container__17McO:hover {\\n  -webkit-box-shadow: 5px 5px 15px var(--persian-green);\\n          box-shadow: 5px 5px 15px var(--persian-green);\\n  color: var(--persian-green);\\n}\\n@media (max-width: 500px) {\\n  .story_card_container__17McO {\\n    grid-template: \\\"image\\\" 2fr \\\"title\\\" 1fr \\\"author\\\" 1fr;\\n  }\\n}\\n.story_card_container__17McO .story_card_img__1Mapm {\\n  grid-area: image;\\n  max-width: 170px;\\n  height: 100%;\\n  -webkit-filter: grayscale(100%);\\n          filter: grayscale(100%);\\n  border-radius: var(--border-rad) 0 0 var(--border-rad);\\n  object-fit: cover;\\n}\\n.story_card_container__17McO .story_card_img__1Mapm:hover {\\n  -webkit-animation: story_card_hover__1nK1j 100ms ease forwards;\\n          animation: story_card_hover__1nK1j 100ms ease forwards;\\n}\\n@media (max-width: 500px) {\\n  .story_card_container__17McO .story_card_img__1Mapm {\\n    min-width: 100%;\\n    border-radius: var(--border-rad) var(--border-rad) 0 0;\\n  }\\n}\\n.story_card_container__17McO .story_card_title__1Vvp5,\\n.story_card_container__17McO .story_card_author__fBnJW {\\n  padding: 10px;\\n}\\n.story_card_container__17McO .story_card_title__1Vvp5 {\\n  margin: 0;\\n  position: relative;\\n  grid-area: title;\\n  font-size: 16px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n.story_card_container__17McO .story_card_title__1Vvp5 .story_card_date__10Y8X {\\n  text-align: right;\\n  font-size: 12px;\\n}\\n.story_card_container__17McO .story_card_title__1Vvp5 .story_card_header__3_C4s {\\n  max-width: 27ch;\\n}\\n.story_card_container__17McO .story_card_title__1Vvp5 .story_card_header__3_C4s:focus {\\n  border: 1px dashed var(--persian-green);\\n}\\n.story_card_container__17McO .story_card_title__1Vvp5 .story_card_score__1abnF {\\n  position: absolute;\\n  right: 10px;\\n  top: 10px;\\n  background: var(--charcoal);\\n  color: var(--sandy-brown);\\n  padding: 3px;\\n}\\n.story_card_container__17McO .story_card_author__fBnJW {\\n  grid-area: author;\\n  font-size: 14px;\\n  height: 100%;\\n  display: flex;\\n  justify-content: end;\\n  align-items: end;\\n  height: 100%;\\n}\\n.story_card_container__17McO .story_card_author__fBnJW > div {\\n  border: dotted 1px var(--persian-green);\\n  padding: 2px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://story_card.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE;IACE,+BAAA;YAAA,uBAAA;EACF;EACA;IACE,4BAAA;YAAA,oBAAA;EACF;AACF;AAPA;EACE;IACE,+BAAA;YAAA,uBAAA;EACF;EACA;IACE,4BAAA;YAAA,oBAAA;EACF;AACF;AACA;EAEE,kBAAA;EACA,8BAAA;EACA,sBAAA;EACA,gCAAA;EACA,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,sCAAA;EACA,gCAAA;EACA,cAAA;EACA,4EACE;AADJ;AAKE;EACE,qDAAA;UAAA,6CAAA;EACA,2BAAA;AAHJ;AAME;EAtBF;IAuBI,mDACE;EAJJ;AACF;AAQE;EACE,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,+BAAA;UAAA,uBAAA;EACA,sDAAA;EACA,iBAAA;AANJ;AAOI;EACE,8DAAA;UAAA,sDAAA;AALN;AAQI;EAXF;IAYI,eAAA;IACA,sDAAA;EALJ;AACF;AAOE;;EAEE,aAAA;AALJ;AAOE;EACE,SAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AALJ;AAMI;EACE,iBAAA;EACA,eAAA;AAJN;AAMI;EACE,eAAA;AAJN;AAKM;EACE,uCAAA;AAHR;AAMI;EACE,kBAAA;EACA,WAAA;EACA,SAAA;EACA,2BAAA;EACA,yBAAA;EACA,YAAA;AAJN;AAOE;EACE,iBAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;EACA,gBAAA;EACA,YAAA;AALJ;AAMI;EACE,uCAAA;EACA,YAAA;AAJN\",\"sourcesContent\":[\"@keyframes hover {\\n  from {\\n    filter: grayscale(100%);\\n  }\\n  to {\\n    filter: grayscale(0);\\n  }\\n}\\n.container {\\n  $break-point: 500px;\\n  --border-rad: 10px;\\n  background: var(--sandy-brown);\\n  color: var(--charcoal);\\n  width: clamp(300px, 100%, 500px);\\n  min-height: 200px;\\n  max-height: 300px;\\n  display: grid;\\n  border: 1px solid var(--persian-green);\\n  border-radius: var(--border-rad);\\n  margin: 20px 0;\\n  grid-template:\\n    'image title title' 1fr\\n    'image author author' 1fr\\n    / 1fr 1fr 1fr;\\n\\n  &:hover {\\n    box-shadow: 5px 5px 15px var(--persian-green);\\n    color: var(--persian-green);\\n  }\\n\\n  @media (max-width: $break-point) {\\n    grid-template:\\n      'image' 2fr\\n      'title' 1fr\\n      'author' 1fr;\\n  }\\n\\n  .img {\\n    grid-area: image;\\n    max-width: 170px;\\n    height: 100%;\\n    filter: grayscale(100%);\\n    border-radius: var(--border-rad) 0 0 var(--border-rad);\\n    object-fit: cover;\\n    &:hover {\\n      animation: hover 100ms ease forwards;\\n    }\\n\\n    @media (max-width: $break-point) {\\n      min-width: 100%;\\n      border-radius: var(--border-rad) var(--border-rad) 0 0;\\n    }\\n  }\\n  .title,\\n  .author {\\n    padding: 10px;\\n  }\\n  .title {\\n    margin: 0;\\n    position: relative;\\n    grid-area: title;\\n    font-size: 16px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    .date {\\n      text-align: right;\\n      font-size: 12px;\\n    }\\n    .header {\\n      max-width: 27ch;\\n      &:focus {\\n        border: 1px dashed var(--persian-green);\\n      }\\n    }\\n    .score {\\n      position: absolute;\\n      right: 10px;\\n      top: 10px;\\n      background: var(--charcoal);\\n      color: var(--sandy-brown);\\n      padding: 3px;\\n    }\\n  }\\n  .author {\\n    grid-area: author;\\n    font-size: 14px;\\n    height: 100%;\\n    display: flex;\\n    justify-content: end;\\n    align-items: end;\\n    height: 100%;\\n    & > div {\\n      border: dotted 1px var(--persian-green);\\n      padding: 2px;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"story_card_container__17McO\",\n\t\"img\": \"story_card_img__1Mapm\",\n\t\"hover\": \"story_card_hover__1nK1j\",\n\t\"title\": \"story_card_title__1Vvp5\",\n\t\"author\": \"story_card_author__fBnJW\",\n\t\"date\": \"story_card_date__10Y8X\",\n\t\"header\": \"story_card_header__3_C4s\",\n\t\"score\": \"story_card_score__1abnF\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yeV9jYXJkL3N0b3J5X2NhcmQubW9kdWxlLnNjc3M/M2U1OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0Esc0ZBQXNGLFVBQVUsc0NBQXNDLHNDQUFzQyxLQUFLLFFBQVEsbUNBQW1DLG1DQUFtQyxLQUFLLEdBQUcsc0NBQXNDLFVBQVUsc0NBQXNDLHNDQUFzQyxLQUFLLFFBQVEsbUNBQW1DLG1DQUFtQyxLQUFLLEdBQUcsZ0NBQWdDLHVCQUF1QixtQ0FBbUMsMkJBQTJCLHFDQUFxQyxzQkFBc0Isc0JBQXNCLGtCQUFrQiwyQ0FBMkMscUNBQXFDLG1CQUFtQixxRkFBcUYsR0FBRyxzQ0FBc0MsMERBQTBELDBEQUEwRCxnQ0FBZ0MsR0FBRyw2QkFBNkIsa0NBQWtDLGdFQUFnRSxLQUFLLEdBQUcsdURBQXVELHFCQUFxQixxQkFBcUIsaUJBQWlCLG9DQUFvQyxvQ0FBb0MsMkRBQTJELHNCQUFzQixHQUFHLDZEQUE2RCxtRUFBbUUsbUVBQW1FLEdBQUcsNkJBQTZCLHlEQUF5RCxzQkFBc0IsNkRBQTZELEtBQUssR0FBRyxrSEFBa0gsa0JBQWtCLEdBQUcseURBQXlELGNBQWMsdUJBQXVCLHFCQUFxQixvQkFBb0Isa0JBQWtCLDJCQUEyQixtQ0FBbUMsR0FBRyxpRkFBaUYsc0JBQXNCLG9CQUFvQixHQUFHLG1GQUFtRixvQkFBb0IsR0FBRyx5RkFBeUYsNENBQTRDLEdBQUcsa0ZBQWtGLHVCQUF1QixnQkFBZ0IsY0FBYyxnQ0FBZ0MsOEJBQThCLGlCQUFpQixHQUFHLDBEQUEwRCxzQkFBc0Isb0JBQW9CLGlCQUFpQixrQkFBa0IseUJBQXlCLHFCQUFxQixpQkFBaUIsR0FBRyxnRUFBZ0UsNENBQTRDLGlCQUFpQixHQUFHLE9BQU8sdUZBQXVGLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFlBQVksS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsMkNBQTJDLFVBQVUsOEJBQThCLEtBQUssUUFBUSwyQkFBMkIsS0FBSyxHQUFHLGNBQWMsd0JBQXdCLHVCQUF1QixtQ0FBbUMsMkJBQTJCLHFDQUFxQyxzQkFBc0Isc0JBQXNCLGtCQUFrQiwyQ0FBMkMscUNBQXFDLG1CQUFtQixrR0FBa0csZUFBZSxvREFBb0Qsa0NBQWtDLEtBQUssd0NBQXdDLCtFQUErRSxLQUFLLFlBQVksdUJBQXVCLHVCQUF1QixtQkFBbUIsOEJBQThCLDZEQUE2RCx3QkFBd0IsZUFBZSw2Q0FBNkMsT0FBTywwQ0FBMEMsd0JBQXdCLCtEQUErRCxPQUFPLEtBQUssd0JBQXdCLG9CQUFvQixLQUFLLFlBQVksZ0JBQWdCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLG9CQUFvQiw2QkFBNkIscUNBQXFDLGFBQWEsMEJBQTBCLHdCQUF3QixPQUFPLGVBQWUsd0JBQXdCLGlCQUFpQixrREFBa0QsU0FBUyxPQUFPLGNBQWMsMkJBQTJCLG9CQUFvQixrQkFBa0Isb0NBQW9DLGtDQUFrQyxxQkFBcUIsT0FBTyxLQUFLLGFBQWEsd0JBQXdCLHNCQUFzQixtQkFBbUIsb0JBQW9CLDJCQUEyQix1QkFBdUIsbUJBQW1CLGVBQWUsZ0RBQWdELHFCQUFxQixPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDdmdNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vY29tcG9uZW50cy9zdG9yeV9jYXJkL3N0b3J5X2NhcmQubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJALXdlYmtpdC1rZXlmcmFtZXMgc3RvcnlfY2FyZF9ob3Zlcl9fMW5LMWoge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc3RvcnlfY2FyZF9ob3Zlcl9fMW5LMWoge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxuICB9XFxufVxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08ge1xcbiAgLS1ib3JkZXItcmFkOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2FuZHktYnJvd24pO1xcbiAgY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgMTAwJSwgNTAwcHgpO1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wZXJzaWFuLWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBncmlkLXRlbXBsYXRlOiBcXFwiaW1hZ2UgdGl0bGUgdGl0bGVcXFwiIDFmciBcXFwiaW1hZ2UgYXV0aG9yIGF1dGhvclxcXCIgMWZyLzFmciAxZnIgMWZyO1xcbn1cXG4uc3RvcnlfY2FyZF9jb250YWluZXJfXzE3TWNPOmhvdmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHZhcigtLXBlcnNpYW4tZ3JlZW4pO1xcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxuICBjb2xvcjogdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLnN0b3J5X2NhcmRfY29udGFpbmVyX18xN01jTyB7XFxuICAgIGdyaWQtdGVtcGxhdGU6IFxcXCJpbWFnZVxcXCIgMmZyIFxcXCJ0aXRsZVxcXCIgMWZyIFxcXCJhdXRob3JcXFwiIDFmcjtcXG4gIH1cXG59XFxuLnN0b3J5X2NhcmRfY29udGFpbmVyX18xN01jTyAuc3RvcnlfY2FyZF9pbWdfXzFNYXBtIHtcXG4gIGdyaWQtYXJlYTogaW1hZ2U7XFxuICBtYXgtd2lkdGg6IDE3MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKSAwIDAgdmFyKC0tYm9yZGVyLXJhZCk7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLnN0b3J5X2NhcmRfY29udGFpbmVyX18xN01jTyAuc3RvcnlfY2FyZF9pbWdfXzFNYXBtOmhvdmVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzdG9yeV9jYXJkX2hvdmVyX18xbksxaiAxMDBtcyBlYXNlIGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb246IHN0b3J5X2NhcmRfaG92ZXJfXzFuSzFqIDEwMG1zIGVhc2UgZm9yd2FyZHM7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLnN0b3J5X2NhcmRfY29udGFpbmVyX18xN01jTyAuc3RvcnlfY2FyZF9pbWdfXzFNYXBtIHtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKSB2YXIoLS1ib3JkZXItcmFkKSAwIDA7XFxuICB9XFxufVxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08gLnN0b3J5X2NhcmRfdGl0bGVfXzFWdnA1LFxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08gLnN0b3J5X2NhcmRfYXV0aG9yX19mQm5KVyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uc3RvcnlfY2FyZF9jb250YWluZXJfXzE3TWNPIC5zdG9yeV9jYXJkX3RpdGxlX18xVnZwNSB7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08gLnN0b3J5X2NhcmRfdGl0bGVfXzFWdnA1IC5zdG9yeV9jYXJkX2RhdGVfXzEwWThYIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uc3RvcnlfY2FyZF9jb250YWluZXJfXzE3TWNPIC5zdG9yeV9jYXJkX3RpdGxlX18xVnZwNSAuc3RvcnlfY2FyZF9oZWFkZXJfXzNfQzRzIHtcXG4gIG1heC13aWR0aDogMjdjaDtcXG59XFxuLnN0b3J5X2NhcmRfY29udGFpbmVyX18xN01jTyAuc3RvcnlfY2FyZF90aXRsZV9fMVZ2cDUgLnN0b3J5X2NhcmRfaGVhZGVyX18zX0M0czpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxufVxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08gLnN0b3J5X2NhcmRfdGl0bGVfXzFWdnA1IC5zdG9yeV9jYXJkX3Njb3JlX18xYWJuRiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogMTBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNoYXJjb2FsKTtcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08gLnN0b3J5X2NhcmRfYXV0aG9yX19mQm5KVyB7XFxuICBncmlkLWFyZWE6IGF1dGhvcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5zdG9yeV9jYXJkX2NvbnRhaW5lcl9fMTdNY08gLnN0b3J5X2NhcmRfYXV0aG9yX19mQm5KVyA+IGRpdiB7XFxuICBib3JkZXI6IGRvdHRlZCAxcHggdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxuICBwYWRkaW5nOiAycHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdG9yeV9jYXJkLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSwrQkFBQTtZQUFBLHVCQUFBO0VBQ0Y7RUFDQTtJQUNFLDRCQUFBO1lBQUEsb0JBQUE7RUFDRjtBQUNGO0FBUEE7RUFDRTtJQUNFLCtCQUFBO1lBQUEsdUJBQUE7RUFDRjtFQUNBO0lBQ0UsNEJBQUE7WUFBQSxvQkFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUVFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLDRFQUNFO0FBREo7QUFLRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7RUFDQSwyQkFBQTtBQUhKO0FBTUU7RUF0QkY7SUF1QkksbURBQ0U7RUFKSjtBQUNGO0FBUUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxzREFBQTtFQUNBLGlCQUFBO0FBTko7QUFPSTtFQUNFLDhEQUFBO1VBQUEsc0RBQUE7QUFMTjtBQVFJO0VBWEY7SUFZSSxlQUFBO0lBQ0Esc0RBQUE7RUFMSjtBQUNGO0FBT0U7O0VBRUUsYUFBQTtBQUxKO0FBT0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUxKO0FBTUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFKTjtBQU1JO0VBQ0UsZUFBQTtBQUpOO0FBS007RUFDRSx1Q0FBQTtBQUhSO0FBTUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFKTjtBQU9FO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUxKO0FBTUk7RUFDRSx1Q0FBQTtFQUNBLFlBQUE7QUFKTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIGhvdmVyIHtcXG4gIGZyb20ge1xcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxuICB9XFxufVxcbi5jb250YWluZXIge1xcbiAgJGJyZWFrLXBvaW50OiA1MDBweDtcXG4gIC0tYm9yZGVyLXJhZDogMTBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNhbmR5LWJyb3duKTtcXG4gIGNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDEwMCUsIDUwMHB4KTtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgJ2ltYWdlIHRpdGxlIHRpdGxlJyAxZnJcXG4gICAgJ2ltYWdlIGF1dGhvciBhdXRob3InIDFmclxcbiAgICAvIDFmciAxZnIgMWZyO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCB2YXIoLS1wZXJzaWFuLWdyZWVuKTtcXG4gICAgY29sb3I6IHZhcigtLXBlcnNpYW4tZ3JlZW4pO1xcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicmVhay1wb2ludCkge1xcbiAgICBncmlkLXRlbXBsYXRlOlxcbiAgICAgICdpbWFnZScgMmZyXFxuICAgICAgJ3RpdGxlJyAxZnJcXG4gICAgICAnYXV0aG9yJyAxZnI7XFxuICB9XFxuXFxuICAuaW1nIHtcXG4gICAgZ3JpZC1hcmVhOiBpbWFnZTtcXG4gICAgbWF4LXdpZHRoOiAxNzBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCkgMCAwIHZhcigtLWJvcmRlci1yYWQpO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYW5pbWF0aW9uOiBob3ZlciAxMDBtcyBlYXNlIGZvcndhcmRzO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWstcG9pbnQpIHtcXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCkgdmFyKC0tYm9yZGVyLXJhZCkgMCAwO1xcbiAgICB9XFxuICB9XFxuICAudGl0bGUsXFxuICAuYXV0aG9yIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG4gIC50aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgLmRhdGUge1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcbiAgICAuaGVhZGVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDI3Y2g7XFxuICAgICAgJjpmb2N1cyB7XFxuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5zY29yZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAxMHB4O1xcbiAgICAgIHRvcDogMTBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGFyY29hbCk7XFxuICAgICAgY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG4gICAgICBwYWRkaW5nOiAzcHg7XFxuICAgIH1cXG4gIH1cXG4gIC5hdXRob3Ige1xcbiAgICBncmlkLWFyZWE6IGF1dGhvcjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICYgPiBkaXYge1xcbiAgICAgIGJvcmRlcjogZG90dGVkIDFweCB2YXIoLS1wZXJzaWFuLWdyZWVuKTtcXG4gICAgICBwYWRkaW5nOiAycHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3RvcnlfY2FyZF9jb250YWluZXJfXzE3TWNPXCIsXG5cdFwiaW1nXCI6IFwic3RvcnlfY2FyZF9pbWdfXzFNYXBtXCIsXG5cdFwiaG92ZXJcIjogXCJzdG9yeV9jYXJkX2hvdmVyX18xbksxalwiLFxuXHRcInRpdGxlXCI6IFwic3RvcnlfY2FyZF90aXRsZV9fMVZ2cDVcIixcblx0XCJhdXRob3JcIjogXCJzdG9yeV9jYXJkX2F1dGhvcl9fZkJuSldcIixcblx0XCJkYXRlXCI6IFwic3RvcnlfY2FyZF9kYXRlX18xMFk4WFwiLFxuXHRcImhlYWRlclwiOiBcInN0b3J5X2NhcmRfaGVhZGVyX18zX0M0c1wiLFxuXHRcInNjb3JlXCI6IFwic3RvcnlfY2FyZF9zY29yZV9fMWFibkZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/story_card/story_card.module.scss\n");

/***/ })

});