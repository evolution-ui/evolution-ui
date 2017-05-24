/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__("./index.js");


/***/ }),

/***/ "../../components/evolution/versatile-table/index.js":
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  "use strict";

	  var mockUsers = [{
	    "id": 1,
	    "name": "Jane Webb",
	    "img_url": "http://i.imgur.com/7dyjRJe.png",
	    "commission_rate": "21%",
	    "contract_end_day": "5/19/2016",
	    "total_deals": 54,
	    "payment_cycle": "annually",
	    "outstanding_balance": "$5806.24",
	    "paid_amount": "$2146.70"
	  }, {
	    "id": 2,
	    "name": "Anthony Gibson",
	    "img_url": "http://i.imgur.com/7dyjRJe.png",
	    "commission_rate": "9%",
	    "contract_end_day": "2/21/2017",
	    "total_deals": 99,
	    "payment_cycle": "quarterly",
	    "outstanding_balance": "$14609.61",
	    "paid_amount": "$18079.02"
	  }, {
	    "id": 3,
	    "name": "Victor Simmons",
	    "img_url": "http://i.imgur.com/7dyjRJe.png",
	    "commission_rate": "9%",
	    "contract_end_day": "9/2/2016",
	    "total_deals": 97,
	    "payment_cycle": "monthly",
	    "outstanding_balance": "$3344.06",
	    "paid_amount": "$18358.86"
	  }, {
	    "id": 4,
	    "name": "Donna Reyes",
	    "img_url": "http://i.imgur.com/7dyjRJe.png",
	    "commission_rate": "90%",
	    "contract_end_day": "8/3/2016",
	    "total_deals": 51,
	    "payment_cycle": "monthly",
	    "outstanding_balance": "$8599.40",
	    "paid_amount": "$8154.39"
	  }, {
	    "id": 5,
	    "name": "Todd Peters",
	    "img_url": "http://i.imgur.com/7dyjRJe.png",
	    "commission_rate": "21%",
	    "contract_end_day": "2/11/2017",
	    "total_deals": 92,
	    "payment_cycle": "quarterly",
	    "outstanding_balance": "$10940.73",
	    "paid_amount": "$17910.47"
	  }, {
	    "id": 6,
	    "name": "Patricia Carr",
	    "img_url": "http://i.imgur.com/7dyjRJe.png",
	    "commission_rate": "21%",
	    "contract_end_day": "2/11/2017",
	    "total_deals": 72,
	    "payment_cycle": "annually",
	    "outstanding_balance": "$6385.47",
	    "paid_amount": "$17310.78"
	  }, {
	    "id": 7,
	    "name": "Jacqueline Davis",
	    "img_url": "http://i.imgur.com/7dyjRJe.png",
	    "commission_rate": "23%",
	    "contract_end_day": "11/29/2016",
	    "total_deals": 81,
	    "payment_cycle": "annually",
	    "outstanding_balance": "$5433.61",
	    "paid_amount": "$4281.15"
	  }, {
	    "id": 8,
	    "name": "Heather Mcdonald",
	    "img_url": "http://i.imgur.com/7dyjRJe.png",
	    "commission_rate": "3%",
	    "contract_end_day": "7/18/2016",
	    "total_deals": 98,
	    "payment_cycle": "quarterly",
	    "outstanding_balance": "$10515.56",
	    "paid_amount": "$1112.12"
	  }, {
	    "id": 9,
	    "name": "Nicole Willis",
	    "img_url": "http://i.imgur.com/7dyjRJe.png",
	    "commission_rate": "90%",
	    "contract_end_day": "9/21/2016",
	    "total_deals": 63,
	    "payment_cycle": "annually",
	    "outstanding_balance": "$1014.84",
	    "paid_amount": "$12243.56"
	  }, {
	    "id": 10,
	    "name": "Anthony Mills",
	    "img_url": "http://i.imgur.com/7dyjRJe.png",
	    "commission_rate": "21%",
	    "contract_end_day": "9/7/2016",
	    "total_deals": 2,
	    "payment_cycle": "annually",
	    "outstanding_balance": "$10858.51",
	    "paid_amount": "$9096.66"
	  }];

	  var mockUsersCopy = mockUsers.slice();

	  createSearchTypingListener();
	  createResizeListener();
	  refreshTableDOM(mockUsers);

	  function constructTable(userArray) {

	    var userCount = Object.keys(userArray).length;

	    var column1HTML = "";
	    var column2HTML = "";
	    var column3HTML = "";
	    var column4HTML = "";
	    var column5HTML = "";
	    var column6HTML = "";
	    var column7HTML = "";

	    for (var i = 0; i < userCount; i++) {
	      var tempObject = userArray[i];
	      var tempAbbreviatedName = abbreviateLastName(tempObject.name);
	      var tempColumn1HTML = '<div class="evo_c-divtable-row' + (i + 1) + ' evo_c-divtable-row_evo_c-divtable-header ' + 'evo_c-divtable-row"' + 'id="' + 'evo_c-divtable-column1_evo_c-divtable-row' + (i + 1) + '" draggable="true">' + '<input type="checkbox" id="evo_c-divtable-modal' + tempObject.id + '" class="evo_c-divtable-modal_user_profile">' + '<label for="evo_c-divtable-modal' + tempObject.id + '">' + '<div class="evo_c-divtable-row_order_index">' + '<i class="fa fa-taxi evo_c-divtable-avatar" aria-hidden="true"></i>' + '<span>' + tempAbbreviatedName + '</span>' + '<div class="evo_c-divtable-user_profile">' + '<i class="fa fa-taxi evo_c-divtable-avatar2" aria-hidden="true"></i>' + '<span>' + tempObject.name + '</span>' + '<svg class="evo_c-divtable-icon evo_c-divtable_icon-cross">' + '<use xlink:href="#evo_c-divtable_icon-cross"></use>' + '</svg>' + '<div class="evo_c-divtable-user_profile_details">' + '<p>Lorem ipsum dolor sit amet.</p>' + '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>' + '</div>' + '</div>' + '</div>' + '</label>' + '</div>';

	      column1HTML += tempColumn1HTML;

	      var tempColumn2HTML = '<div class="evo_c-divtable-row evo_c-divtable-row' + (i + 1) + '">' + '<i class="fa fa-taxi evo_c-divtable-avatar2" aria-hidden="true"></i>' + '<span>' + tempAbbreviatedName + '</span>' + tempObject.commission_rate + '</div>';

	      column2HTML += tempColumn2HTML;

	      var tempColumn3HTML = '<div class="evo_c-divtable-row evo_c-divtable-row' + (i + 1) + '">' + '<i class="fa fa-taxi evo_c-divtable-avatar2" aria-hidden="true"></i>' + '<span>' + tempAbbreviatedName + '</span>' + tempObject.contract_end_day + '</div>';

	      column3HTML += tempColumn3HTML;

	      var tempColumn4HTML = '<div class="evo_c-divtable-row evo_c-divtable-row' + (i + 1) + '">' + '<i class="fa fa-taxi evo_c-divtable-avatar2" aria-hidden="true"></i>' + '<span>' + tempAbbreviatedName + '</span>' + tempObject.total_deals + '</div>';

	      column4HTML += tempColumn4HTML;

	      var tempColumn5HTML = '<div class="evo_c-divtable-row evo_c-divtable-row' + (i + 1) + '">' + '<i class="fa fa-taxi evo_c-divtable-avatar2" aria-hidden="true"></i>' + '<span>' + tempAbbreviatedName + '</span>' + tempObject.payment_cycle + '</div>';

	      column5HTML += tempColumn5HTML;

	      var tempColumn6HTML = '<div class="evo_c-divtable-row evo_c-divtable-row' + (i + 1) + '">' + '<i class="fa fa-taxi evo_c-divtable-avatar2" aria-hidden="true"></i>' + '<span>' + tempAbbreviatedName + '</span>' + tempObject.outstanding_balance + '</div>';

	      column6HTML += tempColumn6HTML;

	      var tempColumn7HTML = '<div class="evo_c-divtable-row evo_c-divtable-row' + (i + 1) + '">' + '<i class="fa fa-taxi evo_c-divtable-avatar2" aria-hidden="true"></i>' + '<span>' + tempAbbreviatedName + '</span>' + tempObject.paid_amount + '</div>';

	      column7HTML += tempColumn7HTML;
	    }

	    var tableContainer = document.getElementById('evo_c-divtable-tableContainer');
	    if (tableContainer != null) {
	      var tableHTML = '<div id="evo_c-divtable_column1" class="evo_c-divtable-header">' + '<div class="evo_c-divtable-column_header" style="order: 0">' + 'Name' + '<p class="sort sort_asc" id="sort_name_alpha_asc">' + '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort_by_alpha" id="js-evolution-divtable-trigger_sort_by_alpha_nam">' + '<use xlink:href="#evo_c-divtable_icon-sort_by_alpha"></use></svg></p>' + '</div>' + column1HTML + '</div>' + '<div id="evo_c-divtable_column2" class="evo_c-divtable-column" draggable="true">' + '<div class="evo_c-divtable-column_header">' + 'Comm. Rate' + '<p id="" class="evo_c-divtable-numeric_sort_icon">' + '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort-numeric-asc" id="js-evolution-divtable-trigger_sort_by_rate">' + '<use xlink:href="#evo_c-divtable_icon-sort-numeric-asc"></use></svg>' + '</p>' + '</div>' + column2HTML + '</div>' + '<div id="evo_c-divtable_column3" class="evo_c-divtable-column" draggable="true">' + '<div class="evo_c-divtable-column_header">' + 'Next Payday' + '<p id="" class="evo_c-divtable-numeric_sort_icon">' + '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort-numeric-asc" id="js-evolution-divtable-trigger_sort_by_date">' + '<use xlink:href="#evo_c-divtable_icon-sort-numeric-asc"></use></svg>' + '</p>' + '</div>' + column3HTML + '</div>' + '<div id="evo_c-divtable_column4" class="evo_c-divtable-column" draggable="true">' + '<div class="evo_c-divtable-column_header">' + 'Total Deals' + '<p id="" class="evo_c-divtable-numeric_sort_icon">' + '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort-numeric-asc" id="js-evolution-divtable-trigger_sort_by_deals">' + '<use xlink:href="#evo_c-divtable_icon-sort-numeric-asc"></use></svg>' + '</p>' + '</div>' + column4HTML + '</div>' + '<div id="evo_c-divtable_column5" class="evo_c-divtable-column" draggable="true">' + '<div class="evo_c-divtable-column_header">' + 'Pay Period' + '<p class="sort sort_asc" id="sort_name_alpha_asc">' + '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort_by_alpha" id="js-evolution-divtable-trigger_sort_by_cycle">' + '<use xlink:href="#evo_c-divtable_icon-sort_by_alpha"></use></svg></p>' + '</div>' + column5HTML + '</div>' + '<div id="evo_c-divtable_column6" class="evo_c-divtable-column" draggable="true">' + '<div class="evo_c-divtable-column_header">' + 'Balance' + '<p id="" class="evo_c-divtable-numeric_sort_icon">' + '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort-numeric-asc" id="js-evolution-divtable-trigger_sort_by_out_balance">' + '<use xlink:href="#evo_c-divtable_icon-sort-numeric-asc"></use></svg>' + '</p>' + '</div>' + column6HTML + '</div>' + '<div id="evo_c-divtable_column7" class="evo_c-divtable-column" draggable="true">' + '<div class="evo_c-divtable-column_header">' + 'Paid Amt.' + '<p id="" class="evo_c-divtable-numeric_sort_icon">' + '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort-numeric-asc" id="js-evolution-divtable-trigger_sort_by_paid_amount">' + '<use xlink:href="#evo_c-divtable_icon-sort-numeric-asc"></use></svg>' + '</p>' + '</div>' + column7HTML + '</div>';

	      tableContainer.innerHTML += tableHTML;
	    }
	  }

	  //Utility functions
	  function abbreviateLastName(username) {
	    var splitString = username.split(' ');
	    var abbreviatedName = splitString.slice(0, splitString.length - 1) + " " + splitString.pop().charAt(0) + ".";
	    return abbreviatedName;
	  }

	  function destroyTableDOM() {
	    var tableContainer = document.getElementById('evo_c-divtable-tableContainer');
	    if (tableContainer != null) {
	      tableContainer.innerHTML = "";
	    }
	  }

	  function refreshTableDOM(userArray) {
	    destroyTableDOM();
	    constructTable(userArray);
	    createSortingListeners();
	    createDragAndDropListener();
	    setInitialRowOrderTag();
	  }

	  /**
	   * Sorting Feature
	   */

	  //Create Listeners for Sorting Clicks

	  function createSortingListeners() {
	    var SortByAlphaTempItem = document.getElementById("js-evolution-divtable-trigger_sort_by_alpha_nam");
	    if (SortByAlphaTempItem != null) {
	      SortByAlphaTempItem.addEventListener("click", function () {
	        clickEventHandlerForAlphaSort();
	      }, false);
	    }

	    var SortByRateTempItem = document.getElementById("js-evolution-divtable-trigger_sort_by_rate");
	    if (SortByRateTempItem != null) {
	      SortByRateTempItem.addEventListener("click", function () {
	        clickEventHandlerForRateSort();
	      }, false);
	    }

	    var SortByDateTempItem = document.getElementById("js-evolution-divtable-trigger_sort_by_date");
	    if (SortByDateTempItem != null) {
	      SortByDateTempItem.addEventListener("click", function () {
	        clickEventHandlerForDateSort();
	      }, false);
	    }

	    var SortByDealTempItem = document.getElementById("js-evolution-divtable-trigger_sort_by_deals");
	    if (SortByDealTempItem != null) {
	      SortByDealTempItem.addEventListener("click", function () {
	        clickEventHandlerForDealSort();
	      }, false);
	    }

	    var SortByCycleTempItem = document.getElementById("js-evolution-divtable-trigger_sort_by_cycle");
	    if (SortByCycleTempItem != null) {
	      SortByCycleTempItem.addEventListener("click", function () {
	        clickEventHandlerForCycleSort();
	      }, false);
	    }

	    var SortByOutBlaTempItem = document.getElementById("js-evolution-divtable-trigger_sort_by_out_balance");
	    if (SortByOutBlaTempItem != null) {
	      SortByOutBlaTempItem.addEventListener("click", function () {
	        clickEventHandlerForBlanceSort();
	      }, false);
	    }

	    var SortByPaidTempItem = document.getElementById("js-evolution-divtable-trigger_sort_by_paid_amount");
	    if (SortByPaidTempItem != null) {
	      SortByPaidTempItem.addEventListener("click", function () {
	        clickEventHandlerForAmountSort();
	      }, false);
	    }
	  }

	  //Sort Name
	  function sortNameAsc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (a['name'] > b['name']) return 1;
	      if (a['name'] < b['name']) return -1;
	      return 0;
	    });
	  }

	  function sortNameDesc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (a['name'] < b['name']) return 1;
	      if (a['name'] > b['name']) return -1;
	      return 0;
	    });
	  }

	  var clickAlphaSortIconTimes = 0;

	  function clickEventHandlerForAlphaSort() {
	    clickAlphaSortIconTimes++;
	    if (clickAlphaSortIconTimes % 3 == 1) {
	      sortNameAsc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_alpha_nam").style.color = "#51d0ef";
	    } else if (clickAlphaSortIconTimes % 3 == 2) {
	      sortNameDesc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_alpha_nam").style.color = "#ff9191";
	    } else if (clickAlphaSortIconTimes % 3 == 0) {
	      refreshTableDOM(mockUsersCopy);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_alpha_nam").style.color = "#545454";
	    }
	  }

	  //Sort Rate
	  function sortRateAsc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (parseInt(a['commission_rate'].replace('%', '')) > parseInt(b['commission_rate'].replace('%', ''))) return 1;
	      if (parseInt(a['commission_rate'].replace('%', '')) < parseInt(b['commission_rate'].replace('%', ''))) return -1;
	      return 0;
	    });
	  }

	  function sortRateDesc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (parseInt(a['commission_rate'].replace('%', '')) < parseInt(b['commission_rate'].replace('%', ''))) return 1;
	      if (parseInt(a['commission_rate'].replace('%', '')) > parseInt(b['commission_rate'].replace('%', ''))) return -1;
	      return 0;
	    });
	  }

	  var clickRateSortTimes = 0;

	  function clickEventHandlerForRateSort() {
	    clickRateSortTimes++;
	    if (clickRateSortTimes % 3 == 1) {
	      sortRateAsc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_rate").style.color = "#51d0ef";
	    } else if (clickRateSortTimes % 3 == 2) {
	      sortRateDesc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_rate").style.color = "#ff9191";
	    } else if (clickRateSortTimes % 3 == 0) {
	      refreshTableDOM(mockUsersCopy);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_rate").style.color = "#545454";
	    }
	  }

	  //Sort Date
	  function sortDateAsc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (Date.parse(a['contract_end_day']) > Date.parse(b['contract_end_day'])) return 1;
	      if (Date.parse(a['contract_end_day']) < Date.parse(b['contract_end_day'])) return -1;
	      return 0;
	    });
	  }

	  function sortDateDesc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (Date.parse(a['contract_end_day']) < Date.parse(b['contract_end_day'])) return 1;
	      if (Date.parse(a['contract_end_day']) > Date.parse(b['contract_end_day'])) return -1;
	      return 0;
	    });
	  }

	  var clickDateSortTimes = 0;

	  function clickEventHandlerForDateSort() {
	    clickDateSortTimes++;
	    if (clickDateSortTimes % 3 == 1) {
	      sortDateAsc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_date").style.color = "#51d0ef";
	    } else if (clickDateSortTimes % 3 == 2) {
	      sortDateDesc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_date").style.color = "#ff9191";
	    } else if (clickDateSortTimes % 3 == 0) {
	      refreshTableDOM(mockUsersCopy);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_date").style.color = "#545454";
	    }
	  }

	  //Sort Deals
	  function sortDealAsc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (parseInt(a['total_deals']) > parseInt(b['total_deals'])) return 1;
	      if (parseInt(a['total_deals']) < parseInt(b['total_deals'])) return -1;
	      return 0;
	    });
	  }

	  function sortDealDesc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (parseInt(a['total_deals']) < parseInt(b['total_deals'])) return 1;
	      if (parseInt(a['total_deals']) > parseInt(b['total_deals'])) return -1;
	      return 0;
	    });
	  }

	  var clickDealSortTimes = 0;

	  function clickEventHandlerForDealSort() {
	    clickDealSortTimes++;
	    if (clickDealSortTimes % 3 == 1) {
	      sortDealAsc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_deals").style.color = "#51d0ef";
	    } else if (clickDealSortTimes % 3 == 2) {
	      sortDealDesc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_deals").style.color = "#ff9191";
	    } else if (clickDealSortTimes % 3 == 0) {
	      refreshTableDOM(mockUsersCopy);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_deals").style.color = "#545454";
	    }
	  }

	  //Sort Cycle
	  function sortCycleAsc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (a['payment_cycle'] > b['payment_cycle']) return 1;
	      if (a['payment_cycle'] < b['payment_cycle']) return -1;
	      return 0;
	    });
	  }

	  function sortCycleDesc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (a['payment_cycle'] < b['payment_cycle']) return 1;
	      if (a['payment_cycle'] > b['payment_cycle']) return -1;
	      return 0;
	    });
	  }

	  var clickCycleSortIconTimes = 0;

	  function clickEventHandlerForCycleSort() {
	    clickCycleSortIconTimes++;
	    if (clickCycleSortIconTimes % 3 == 1) {
	      sortCycleAsc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_cycle").style.color = "#51d0ef";
	    } else if (clickCycleSortIconTimes % 3 == 2) {
	      sortCycleDesc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_cycle").style.color = "#ff9191";
	    } else if (clickCycleSortIconTimes % 3 == 0) {
	      refreshTableDOM(mockUsersCopy);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_cycle").style.color = "#545454";
	    }
	  }

	  //Sort Balance
	  function sortBalanceAsc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (parseFloat(a['outstanding_balance'].replace('$', '')) > parseFloat(b['outstanding_balance'].replace('$', ''))) return 1;
	      if (parseFloat(a['outstanding_balance'].replace('$', '')) < parseFloat(b['outstanding_balance'].replace('$', ''))) return -1;
	      return 0;
	    });
	  }

	  function sortBalanceDesc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (parseFloat(a['outstanding_balance'].replace('$', '')) < parseFloat(b['outstanding_balance'].replace('$', ''))) return 1;
	      if (parseFloat(a['outstanding_balance'].replace('$', '')) > parseFloat(b['outstanding_balance'].replace('$', ''))) return -1;
	      return 0;
	    });
	  }

	  var clickBalanceSortTimes = 0;

	  function clickEventHandlerForBlanceSort() {
	    clickBalanceSortTimes++;
	    if (clickBalanceSortTimes % 3 == 1) {
	      sortBalanceAsc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_out_balance").style.color = "#51d0ef";
	    } else if (clickBalanceSortTimes % 3 == 2) {
	      sortBalanceDesc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_out_balance").style.color = "#ff9191";
	    } else if (clickBalanceSortTimes % 3 == 0) {
	      refreshTableDOM(mockUsersCopy);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_out_balance").style.color = "#545454";
	    }
	  }

	  //Sort Paid Amount
	  function sortPaidAmntAsc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (parseFloat(a['paid_amount'].replace('$', '')) > parseFloat(b['paid_amount'].replace('$', ''))) return 1;
	      if (parseFloat(a['paid_amount'].replace('$', '')) < parseFloat(b['paid_amount'].replace('$', ''))) return -1;
	      return 0;
	    });
	  }

	  function sortPaidAmntDesc(mockUsers) {
	    mockUsers.sort(function (a, b) {
	      if (parseFloat(a['paid_amount'].replace('$', '')) < parseFloat(b['paid_amount'].replace('$', ''))) return 1;
	      if (parseFloat(a['paid_amount'].replace('$', '')) > parseFloat(b['paid_amount'].replace('$', ''))) return -1;
	      return 0;
	    });
	  }

	  var clickAmountSortTimes = 0;

	  function clickEventHandlerForAmountSort() {
	    clickAmountSortTimes++;
	    if (clickAmountSortTimes % 3 == 1) {
	      sortPaidAmntAsc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_paid_amount").style.color = "#51d0ef";
	    } else if (clickAmountSortTimes % 3 == 2) {
	      sortPaidAmntDesc(mockUsers);
	      refreshTableDOM(mockUsers);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_paid_amount").style.color = "#ff9191";
	    } else if (clickAmountSortTimes % 3 == 0) {
	      refreshTableDOM(mockUsersCopy);
	      document.getElementById("js-evolution-divtable-trigger_sort_by_paid_amount").style.color = "#545454";
	    }
	  }

	  /**
	   * Searching Feature
	   */

	  //Create a Listener for Typing
	  function createSearchTypingListener() {
	    var searchInputDOM = document.getElementById("evo_c-divtable-search_input");
	    if (searchInputDOM != null) {
	      searchInputDOM.addEventListener("keyup", function () {
	        searchUserArray(mockUsers);
	      }, false);
	    }
	  }

	  function getSearchInput() {
	    return document.getElementById('evo_c-divtable-search_input').value;
	  }

	  function searchUserArray(mockUsers) {
	    var tempString = getSearchInput().toUpperCase();
	    var templeArray = [];

	    for (var i = 0; i < mockUsers.length; i++) {
	      if (mockUsers[i]['name'].substring(0, tempString.length).toUpperCase() == tempString) {
	        templeArray.push(mockUsers[i]);
	      }
	    }
	    refreshTableDOM(templeArray);
	  }

	  /**
	   * Dragging Feature
	   */

	  //Crete a Listener for Resize. Disable Dragging Feature if innerWidth is less than 720px

	  function createResizeListener() {
	    window.addEventListener('resize', function () {
	      if (window.innerWidth < 720) {

	        //Disable Listeners for Columns
	        var tempColumns = document.getElementsByClassName('evo_c-divtable-column');
	        if (tempColumns != null) {
	          for (var i = 0; i < tempColumns.length; i++) {
	            tempColumns[i].removeEventListener('dragstart', handleColumnDragStart, false);
	            tempColumns[i].removeEventListener('dragenter', handleColumnDragEnter, false);
	            tempColumns[i].removeEventListener('dragover', handleColumnDragOver, false);
	            tempColumns[i].removeEventListener('dragleave', handleColumnDragLeave, false);
	            tempColumns[i].removeEventListener('drop', handleColumnDrop, false);
	            tempColumns[i].removeEventListener('dragend', handleColumnDragEnd, false);
	          }
	        }
	      } else {

	        //Refresh the DOM to avoid duplicated listeners. Not the best solution for this issue.
	        refreshTableDOM(mockUsers);
	      }
	    });
	  }

	  //Create Listeners for drag & drop
	  function createDragAndDropListener() {

	    //Create Listeners for Columns
	    var tempColumns = document.getElementsByClassName('evo_c-divtable-column');
	    if (tempColumns != null) {
	      for (var i = 0; i < tempColumns.length; i++) {
	        tempColumns[i].addEventListener('dragstart', handleColumnDragStart, false);
	        tempColumns[i].addEventListener('dragenter', handleColumnDragEnter, false);
	        tempColumns[i].addEventListener('dragover', handleColumnDragOver, false);
	        tempColumns[i].addEventListener('dragleave', handleColumnDragLeave, false);
	        tempColumns[i].addEventListener('drop', handleColumnDrop, false);
	        tempColumns[i].addEventListener('dragend', handleColumnDragEnd, false);
	      }
	    }
	    //Create Listeners for Rows
	    var tempRows = document.getElementsByClassName('evo_c-divtable-row_evo_c-divtable-header');
	    if (tempRows != null) {
	      for (var i = 0; i < tempRows.length; i++) {
	        tempRows[i].addEventListener('dragstart', handleRowDragStart, false);
	        tempRows[i].addEventListener('dragenter', handleRowDragEnter, false);
	        tempRows[i].addEventListener('dragover', handleRowDragOver, false);
	        tempRows[i].addEventListener('dragleave', handleRowDragLeave, false);
	        tempRows[i].addEventListener('drop', handleRowDrop, false);
	        tempRows[i].addEventListener('dragend', handleRowDragEnd, false);
	      }
	    }
	  }

	  //Handle Column Drag Events
	  //Get Current Drag Item Id to avoid it be invoked by other events
	  var dragColumnId = "";
	  var dragColumnDOM = "";

	  function handleColumnDragStart(e) {
	    this.style.opacity = 0;
	    this.style.width = "0px";
	    this.style.padding = "0px";
	    this.style.borderWidth = "0px";
	    this.style.borderWidth = "0px";
	    this.style.transition = "all 0.4s ease";

	    dragColumnId = document.getElementById(this.id).id;
	    dragColumnDOM = this;
	    e.dataTransfer.effectAllowed = 'all';
	    e.dataTransfer.setData('text/html', this.innerHTML);
	  }

	  function handleColumnDragEnter() {
	    if (document.getElementById(this.id).id != dragColumnId) {
	      this.style.opacity = 0.2;
	      this.style.transition = "all 0.4s ease";
	    }
	  }

	  function handleColumnDragOver() {
	    event.preventDefault();
	    if (document.getElementById(this.id).id != dragColumnId) {
	      this.style.opacity = 0.2;
	      this.style.transition = "all 0.4s ease";
	    }
	    return false;
	  }

	  function handleColumnDragLeave() {
	    if (document.getElementById(this.id).id != dragColumnId) {
	      this.style.opacity = 1;
	      this.style.transition = "all 0.4s ease";
	    }
	  }

	  function handleColumnDrop(e) {
	    event.preventDefault();
	    this.style.opacity = 1;
	    this.style.transition = "all 0.4s ease";

	    if (dragColumnDOM != this && dragRowId === "") {
	      dragColumnDOM.innerHTML = this.innerHTML;
	      this.innerHTML = e.dataTransfer.getData('text/html');
	    }
	  }

	  function handleColumnDragEnd() {

	    this.style.opacity = 1;
	    this.style.transition = "all 0.6s ease";
	    dragColumnId = "";
	    dragColumnDOM = "";
	    dragRowId = "";
	    dragRowDOM = "";
	    createSortingListeners();

	    if (window.innerWidth > 720) {
	      this.style.width = "14%";
	    } else {
	      this.style.width = "auto";
	    }
	  }

	  //Handle Row Drag Events
	  //Create Row Order Index inside each row header dom.
	  function setInitialRowOrderTag() {
	    var allRowHeader = document.getElementsByClassName('evo_c-divtable-row_evo_c-divtable-header');
	    var rowOrderIndex = 1;

	    for (var i = 0; i < allRowHeader.length; i++) {
	      allRowHeader[i].style.order = rowOrderIndex;
	      rowOrderIndex++;
	    }
	  }

	  function getUpdatedRowOrderTag() {
	    var UpdatedRowOrderTag = new Array();
	    var allRowHeader = document.getElementsByClassName('evo_c-divtable-row_evo_c-divtable-header');

	    for (var i = 0; i < allRowHeader.length; i++) {
	      var tempRowHeader = window.getComputedStyle(allRowHeader[i]);
	      UpdatedRowOrderTag.push(parseInt(tempRowHeader.getPropertyValue('order')));
	    }
	    return UpdatedRowOrderTag;
	  }

	  var dragRowId = "";
	  var dragRowOrder = 0;
	  var dragRowDOM = "";

	  function handleRowDragStart(e) {
	    dragRowDOM = this;

	    //Get row id
	    dragRowId = document.getElementById(this.id).id;

	    //Select and Hide the row header
	    this.style.opacity = 0;
	    this.style.height = "0px";
	    this.style.paddingTop = "0px";
	    this.style.paddingBottom = "0px";
	    this.style.borderWidth = "0px";
	    this.style.transition = "all 0.4s ease";

	    //Select and Hide other cells in the same row
	    var draggedRow = document.getElementsByClassName('evo_c-divtable-row' + dragRowId.split("evo_c-divtable-row")[1]);

	    for (var i = 1; i < draggedRow.length; i++) {
	      draggedRow[i].style.opacity = 0;
	      draggedRow[i].style.height = "0px";
	      draggedRow[i].style.padding = "0px";
	      draggedRow[i].style.borderWidth = "0px";
	      draggedRow[i].style.transition = "all 0.4s ease";
	    }

	    e.dataTransfer.effectAllowed = 'all';
	    dragRowOrder = parseInt(window.getComputedStyle(this).getPropertyValue('order'));
	  }

	  function handleRowDragEnter() {
	    if (document.getElementById(this.id).id != dragRowId) {
	      this.style.opacity = 0.2;
	      this.style.transition = "all 0.4s ease";

	      var draggedRow = document.getElementsByClassName('evo_c-divtable-row' + document.getElementById(this.id).id.split("evo_c-divtable-row")[1]);
	      for (var i = 1; i < draggedRow.length; i++) {
	        draggedRow[i].style.opacity = 0.2;
	        draggedRow[i].style.transition = "all 0.4s ease";
	      }
	    }
	  }

	  function handleRowDragOver(e) {
	    event.preventDefault();
	    if (document.getElementById(this.id).id != dragRowId) {
	      this.style.opacity = 0.2;
	      this.style.transition = "all 0.4s ease";

	      var draggedRow = document.getElementsByClassName('evo_c-divtable-row' + document.getElementById(this.id).id.split("evo_c-divtable-row")[1]);
	      for (var i = 1; i < draggedRow.length; i++) {
	        draggedRow[i].style.opacity = 0.2;
	        draggedRow[i].style.transition = "all 0.4s ease";
	      }
	    }
	    return false;
	  }

	  function handleRowDragLeave() {
	    if (document.getElementById(this.id).id != dragRowId) {
	      this.style.opacity = 1;
	      this.style.transition = "all 0.4s ease";

	      var draggedRow = document.getElementsByClassName('evo_c-divtable-row' + document.getElementById(this.id).id.split("evo_c-divtable-row")[1]);
	      for (var i = 1; i < draggedRow.length; i++) {
	        draggedRow[i].style.opacity = 1;
	        draggedRow[i].style.transition = "all 0.4s ease";
	      }
	    }
	  }

	  function handleRowDrop(e) {
	    event.preventDefault();
	    this.style.opacity = 1;
	    this.style.transition = "all 0.4s ease";

	    //get drop location
	    var dropRowId = document.getElementById(this.id).id;

	    var droppedRow = document.getElementsByClassName('evo_c-divtable-row' + dropRowId.split("evo_c-divtable-row")[1]);
	    for (var i = 1; i < droppedRow.length; i++) {
	      droppedRow[i].style.opacity = 1;
	      droppedRow[i].style.height = "19px";
	      droppedRow[i].style.padding = "11px 10px 10px 10px";
	      droppedRow[i].style.borderWidth = "1px";
	      droppedRow[i].style.transition = "all 0.4s ease";
	    }

	    //get drop location order
	    var dropRowOrder = parseInt(window.getComputedStyle(this).getPropertyValue('order'));
	    //swap the order between drag row and drop row
	    this.style.order = dragRowOrder;
	    dragRowDOM.style.order = dropRowOrder;

	    //Update orders for all cells in other columns
	    var updatedRowOrder = getUpdatedRowOrderTag();

	    var allColumns = new Array();
	    for (var i = 2; i < 8; i++) {
	      allColumns.push("evo_c-divtable-column" + i);
	    }

	    for (var i = 0; i < updatedRowOrder.length; i++) {
	      var otherRows = document.getElementsByClassName('evo_c-divtable-row' + (i + 1));
	      for (var j = 0; j < otherRows.length; j++) {
	        var tmpItem = otherRows[j];
	        tmpItem.style.order = updatedRowOrder[i];
	      }
	    }
	  }

	  function handleRowDragEnd() {
	    this.style.opacity = 1;
	    this.style.height = "19px";
	    this.style.padding = "11px 10px 10px 10px";
	    this.style.borderWidth = "1px";
	    this.style.transition = "all 0.4s ease";

	    var draggedRow = document.getElementsByClassName('evo_c-divtable-row' + dragRowId.split("evo_c-divtable-row")[1]);
	    for (var i = 1; i < draggedRow.length; i++) {
	      draggedRow[i].style.opacity = 1;
	      draggedRow[i].style.height = "19px";
	      draggedRow[i].style.padding = "11px 10px 10px 10px";
	      draggedRow[i].style.borderWidth = "1px";
	      draggedRow[i].style.transition = "all 0.4s ease";
	    }

	    dragColumnId = "";
	    dragColumnDOM = "";
	    dragRowId = "";
	    dragRowDOM = "";
	  }
	};

/***/ }),

/***/ "./libs/document-ready.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var documentReady = function documentReady() {
	  for (var _len = arguments.length, callbacks = Array(_len), _key = 0; _key < _len; _key++) {
	    callbacks[_key] = arguments[_key];
	  }

	  if (document.readyState === 'interactive' || document.readyState === 'complete') {
	    callbacks.forEach(function (cb) {
	      return cb();
	    });
	  } else {
	    callbacks.forEach(function (cb) {
	      return document.addEventListener('DOMContentLoaded', cb);
	    });
	  }
	};

	exports.default = documentReady;

/***/ }),

/***/ "./libs/prevent-default.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Created by Aashish on 5/14/2017.
	 */
	exports.default = function () {
	  [].forEach.call(document.querySelectorAll('a[href="#"]'), function (anchor) {
	    anchor.addEventListener('click', function (event) {
	      return event.preventDefault();
	    });
	  });
	};

/***/ }),

/***/ "../../components/standard/audio-player/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  'use strict';

	  var audioPlayer = {
	    player: '#audioplayer',
	    track: 'audio',
	    playback: '.evo_c-audio-player__track',
	    playerIcons: {
	      play: 'play_arrow',
	      pause: 'pause',
	      volumeOn: 'volume_up',
	      volumeOff: 'volume_off'
	    },

	    getPlayer: function getPlayer(playerElement) {
	      var player = playerElement || this.player;
	      return document.querySelector(player);
	    },

	    getAudioTrack: function getAudioTrack() {
	      return this.getPlayer().querySelector(this.track);
	    },

	    changeIcon: function changeIcon(el, icon) {
	      el.textContent = icon;
	    },

	    play: function play() {

	      var track = this.getAudioTrack(),
	          playButtonIcon = this.getPlayer().querySelector(this.playback + ' button i');

	      if (track && playButtonIcon) {

	        if (track.paused) {

	          this.changeIcon(playButtonIcon, this.playerIcons.pause);
	          track.play();
	        } else {

	          this.changeIcon(playButtonIcon, this.playerIcons.play);
	          track.pause();
	        }
	      }
	    },

	    isPlaying: function isPlaying() {
	      var trackProgress = this.getPlayer().querySelector(this.playback + ' input[type="range"]'),
	          track = this.getAudioTrack();

	      if (track && trackProgress) {
	        trackProgress.max = track.duration;
	      }
	    },

	    updateTrack: function updateTrack() {

	      var player = this.getPlayer(),
	          trackProgress = player.querySelector(this.playback + ' input[type="range"]'),
	          track = this.getAudioTrack(),
	          trackTime = player.querySelector('.evo_c-audio-player__track-time'),
	          secs = parseInt(track.currentTime % 60),
	          mins = parseInt(track.currentTime / 60 % 60);

	      if (player && trackProgress && track && trackTime) {

	        trackProgress.value = track.currentTime;
	        secs = secs >= 10 ? secs : '0' + secs;
	        mins = mins >= 10 ? mins : '0' + mins;
	        trackTime.textContent = mins + ':' + secs;
	      }
	    },

	    seekTrack: function seekTrack() {
	      var trackProgress = this.getPlayer().querySelector(this.playback + ' input[type="range"]'),
	          track = this.getAudioTrack();

	      if (track && trackProgress) {
	        track.currentTime = trackProgress.value;
	      }
	    },

	    finishPlay: function finishPlay() {

	      var track = this.getAudioTrack(),
	          playButtonIcon = this.getPlayer().querySelector(this.playback + ' button i');

	      if (track && playButtonIcon) {
	        track.currentTime = 0;
	        this.changeIcon(playButtonIcon, audioPlayer.playerIcons.play);
	      }
	    },

	    isMute: function isMute() {
	      return this.getAudioTrack() && this.getAudioTrack().volume === 0;
	    },

	    mute: function mute() {

	      var muteButtonIcon = this.getPlayer().querySelector('.evo_c-audio-player__track-volume button i');
	      if (muteButtonIcon) {
	        if (this.isMute()) {

	          this.getAudioTrack().volume = 1;
	          this.changeIcon(muteButtonIcon, this.playerIcons.volumeOn);
	        } else {

	          this.getAudioTrack().volume = 0;
	          this.changeIcon(muteButtonIcon, this.playerIcons.volumeOff);
	        }
	      }
	    }

	  };

	  var player = audioPlayer.getPlayer();

	  if (player) {

	    var audioTrack = player.querySelector(audioPlayer.track),
	        trackProgress = player.querySelector(audioPlayer.playback + ' input[type="range"]'),
	        playButton = player.querySelector(audioPlayer.playback + ' button'),
	        muteButton = player.querySelector('.evo_c-audio-player__track-volume button');

	    // Remove any default controls in favor of our own.
	    audioTrack.removeAttribute('controls');

	    // Add event listeners to make the player work
	    playButton.addEventListener('click', audioPlayer.play.bind(audioPlayer), false);
	    muteButton.addEventListener('click', audioPlayer.mute.bind(audioPlayer), false);
	    audioTrack.addEventListener('playing', audioPlayer.isPlaying.bind(audioPlayer), false);
	    audioTrack.addEventListener('timeupdate', audioPlayer.updateTrack.bind(audioPlayer), false);
	    audioTrack.addEventListener('ended', audioPlayer.finishPlay.bind(audioPlayer), false);
	    trackProgress.addEventListener('change', audioPlayer.seekTrack.bind(audioPlayer), false);
	  }
	};

/***/ }),

/***/ "../../components/standard/accordion/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var allBellows = document.getElementsByClassName('js-c-accordion-target');

	  if (allBellows) {
	    for (var i = 0; i < allBellows.length; i++) {
	      allBellows[i].addEventListener('click', function (event) {
	        var allCurrentBellowTitles = event.target.parentNode.parentNode.childNodes;

	        if (event.target.classList.contains('is-active')) {
	          event.target.classList.remove('is-active');
	          event.target.nextSibling.nextSibling.classList.remove('is-expanded');
	        } else {
	          removeActiveClasses(allCurrentBellowTitles, 'is-active');
	          event.target.classList.add('is-active');
	          removeActiveClasses(allCurrentBellowTitles, 'is-expanded');
	          event.target.nextSibling.nextSibling.classList.add('is-expanded');
	        }

	        event.preventDefault();
	      });
	    }
	  }

	  function removeActiveClasses(nodeList, className) {
	    for (var k = 0; k < nodeList.length; k++) {
	      for (var l = 0; l < nodeList[k].childNodes.length; l++) {
	        if (nodeList[k].childNodes[l].classList && nodeList[k].childNodes[l].classList.contains(className)) {
	          nodeList[k].childNodes[l].classList.remove(className);
	        }
	      }
	    }
	  }
	};

/***/ }),

/***/ "../../components/standard/carousel/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  /*=== STANDARD CAROUSEL COMPONENT ===*/

	  var carousels = document.querySelectorAll('.evo_c-carousel');
	  var numOfCarousels = carousels.length;
	  var i;

	  // add event listeners to carousels
	  for (i = 0; i < numOfCarousels; i++) {
	    carousels[i].addEventListener('click', _navAction(i));
	  }

	  function _navAction(i) {
	    return function (e) {
	      e.preventDefault();
	      // the current carousel
	      var activeCarousel = carousels[i];
	      // check to see if is a slider type
	      var isSlider = activeCarousel.classList.contains('evo_c-carousel--slider-type');
	      // set boolean based off of data-thumbnail-nav attr
	      var isThumbNav = activeCarousel.dataset.thumbnailNav !== undefined ? true : false;
	      // set boolean based off of data-bullet-nav attribute
	      var isBulletNav = activeCarousel.dataset.bulletNav !== undefined ? true : false;
	      // array of slides in current carousel
	      var slideArray = Array.prototype.slice.call(activeCarousel.querySelectorAll('.evo_c-carousel__slide'));
	      // length of slide array
	      var slideArrayLength = slideArray.length;
	      // index number of the currently displayed slide
	      var currentSlide = slideArray.indexOf(activeCarousel.querySelector('.evo_c-carousel__slide--is-selected'));
	      // array of bullet nav list items
	      var bulletNavArray = Array.prototype.slice.call(activeCarousel.querySelectorAll('.evo_c-carousel__bullet-nav-item'));
	      // array of thumbnail nav items
	      var thumbNavArray = Array.prototype.slice.call(activeCarousel.querySelectorAll('.evo_c-carousel__thumb-nav-item'));
	      // target element of click event
	      var target = e.target;

	      if (target.nodeName === 'I') {
	        // set target to parent of icon element when prev/next nav clicked
	        target = target.parentNode;
	      }

	      if (target.classList.contains('evo_c-carousel__thumb-image')) {
	        // set target to parent node of thumbnail image when thumbnail is clicked
	        target = target.parentNode;
	      }

	      // if bullet nav is clicked
	      if (target.dataset.slideIndex !== undefined) {
	        // get the slide index from the data-slide-index attribute
	        var targetedSlide = +target.dataset.slideIndex;
	        // remove selected class from all slides
	        slideArray.forEach(function (slide) {
	          if (slide.classList.contains('evo_c-carousel__slide--is-selected')) {
	            slide.classList.remove('evo_c-carousel__slide--is-selected');
	          }
	          if (isSlider) {
	            // reset slide class name
	            slide.className = 'evo_c-carousel__slide';
	          }
	        });
	        if (isBulletNav) {
	          // remove active class from all bullet nav items
	          bulletNavArray.forEach(function (bullet) {
	            bullet.classList.remove('evo_c-carousel__bullet-nav-item--is-active');
	          });
	          // add active class to correct bullet nav item
	          bulletNavArray[targetedSlide].classList.add('evo_c-carousel__bullet-nav-item--is-active');
	        }
	        if (isThumbNav) {
	          // remove active class from all bullet nav items
	          thumbNavArray.forEach(function (thumb) {
	            thumb.classList.remove('evo_c-carousel__thumb-nav-item--is-active');
	          });
	          // add active class to correct bullet nav item
	          thumbNavArray[targetedSlide].classList.add('evo_c-carousel__thumb-nav-item--is-active');
	        }
	        // add selected class to selected slide
	        slideArray[targetedSlide].classList.add('evo_c-carousel__slide--is-selected');
	        if (isSlider) {
	          if (targetedSlide > currentSlide || currentSlide === slideArray.length - 1) {
	            slideArray[targetedSlide].classList.add('slide--slide-next');
	            slideArray[currentSlide].classList.add('slide--slide-out-left');
	            slideArray[currentSlide].classList.remove('slide--slide-out-*');
	          } else if (targetedSlide < currentSlide) {
	            slideArray[targetedSlide].classList.add('slide--slide-prev');
	            slideArray[currentSlide].classList.add('slide--slide-out-right');
	            slideArray[currentSlide].classList.remove('slide--slide-out-*');
	          }
	        }

	        // if arrow nav is clicked
	      } else if (target.dataset.slideNav !== undefined) {

	        // get the navigation direction from data-slide-nav attribute
	        var navDirection = target.dataset.slideNav;
	        // set the next slide index
	        var nextIndex = currentSlide < slideArrayLength - 1 ? currentSlide + 1 : 0;
	        // set the previous slide index
	        var prevIndex = currentSlide > 0 ? currentSlide - 1 : slideArrayLength - 1;
	        // remove selected class from all slides
	        slideArray.forEach(function (slide) {
	          slide.classList.remove('evo_c-carousel__slide--is-selected');
	          if (isSlider) {
	            // reset slide class name
	            slide.className = 'evo_c-carousel__slide';
	          }
	        });
	        if (isBulletNav) {
	          // remove active class from all bullet nav items
	          bulletNavArray.forEach(function (bullet) {
	            bullet.classList.remove('evo_c-carousel__bullet-nav-item--is-active');
	          });
	        }
	        if (isThumbNav) {
	          // remove active class from all bullet nav items
	          thumbNavArray.forEach(function (thumb) {
	            thumb.classList.remove('evo_c-carousel__thumb-nav-item--is-active');
	          });
	        }

	        // add selected class to slide and active class to bullet nav depending on navDirection
	        if (navDirection === 'next') {
	          slideArray[nextIndex].classList.add('evo_c-carousel__slide--is-selected');
	          if (isSlider) {
	            slideArray[nextIndex].classList.add('slide--slide-next');
	            slideArray[currentSlide].classList.add('slide--slide-out-left');
	          }
	          if (isBulletNav) {
	            bulletNavArray[nextIndex].classList.add('evo_c-carousel__bullet-nav-item--is-active');
	          }
	          if (isThumbNav) {
	            thumbNavArray[nextIndex].classList.add('evo_c-carousel__thumb-nav-item--is-active');
	          }
	        } else {
	          slideArray[prevIndex].classList.add('evo_c-carousel__slide--is-selected');
	          if (isSlider) {
	            slideArray[prevIndex].classList.add('slide--slide-prev');
	            slideArray[currentSlide].classList.add('slide--slide-out-right');
	          }
	          if (isBulletNav) {
	            bulletNavArray[prevIndex].classList.add('evo_c-carousel__bullet-nav-item--is-active');
	          }
	          if (isThumbNav) {
	            thumbNavArray[prevIndex].classList.add('evo_c-carousel__thumb-nav-item--is-active');
	          }
	        }
	      }
	    };
	  }
	};

/***/ }),

/***/ "../../components/standard/code-markup/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var markupTabs = document.getElementsByClassName('js-c-markup-toggle');

	  if (markupTabs) {
	    for (var i = 0; i < markupTabs.length; i++) {
	      //FIXME: Should be a better way than adding a listener to each element??
	      markupTabs[i].addEventListener('click', function (event) {
	        var clickedTabClassList = event.target.classList;
	        var markupContainerClassList = this.parentNode.children[1].classList;
	        var markupContentDivs = this.parentNode.children[1].children;

	        if (clickedTabClassList.contains("is-active")) {
	          clickedTabClassList.remove("is-active");
	          markupContainerClassList.remove("is-expanded");
	        } else {
	          for (var i = 0; i < this.children.length; i++) {
	            if (this.children[i].classList.contains("is-active")) {
	              this.children[i].classList.remove("is-active");
	            }
	          }
	          clickedTabClassList.add("is-active");
	          this.parentNode.children[1].scrollTop = 0;
	          markupContainerClassList.add("is-expanded");
	          for (var j = 0; j < markupContentDivs.length; j++) {
	            if (markupContentDivs[j].classList.contains("is-active")) {
	              markupContentDivs[j].classList.remove("is-active");
	            }
	            if (this.children[j].classList.contains("is-active")) {
	              markupContentDivs[j].classList.add("is-active");
	            }
	          }
	        }
	      }, false);
	    }
	  }
	};

/***/ }),

/***/ "../../components/standard/css-animations/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  var animT = document.querySelector('#evo_showcase_animations');

	  var pfx = ['webkit', 'moz', 'MS', 'o', ''];

	  var $prefixedOn = function $prefixedOn(target, type, callback, useCapture) {

	    for (var p = 0, length = pfx.length; p < length; p++) {
	      if (!pfx[p]) {
	        type = type.toLowerCase();
	      }
	      target.addEventListener(pfx[p] + type, callback, !!useCapture);
	    }
	  };

	  var getClosest = function getClosest(elem, selector) {

	    // When elem is a Text node, get its parent node
	    if (elem.nodeType === 3) {
	      elem = elem.parentNode;
	    }

	    // Element.matches() polyfill
	    if (!Element.prototype.matches) {
	      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
	        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	            i = matches.length;
	        while (i >= 0 && matches.item(i) !== this) {
	          --i;
	        }
	        return i > -1;
	      };
	    }

	    // Get closest match
	    for (; elem && elem !== document; elem = elem.parentNode) {
	      if (elem.matches(selector)) return elem;
	    }

	    return null;
	  };

	  function getCompStyle(el) {
	    return window.getComputedStyle(el);
	  }

	  animT && animT.addEventListener('click', function (event) {

	    var target = event.target;
	    var type = target && target.getAttribute('type') || null;
	    var form;
	    var previewElem;
	    var animation;
	    var animationClass;

	    if (target.nodeName !== 'INPUT' && type !== 'submit') {
	      return;
	    }

	    form = getClosest(target, '.evo_c-form');

	    if (!form) {
	      return;
	    }

	    previewElem = form.querySelector('.animation__box');
	    animation = form.querySelector('.evo_c-form__select').value;

	    animationClass = animation.replace('.', '');
	    previewElem.classList.add(animationClass);

	    $prefixedOn(previewElem, 'animationend', function () {
	      window.setTimeout(function () {
	        previewElem.classList.remove(animationClass);
	      }, 2000);
	    });
	  });

	  function $$(selector, parent) {
	    return (parent || document).querySelectorAll(selector);
	  }

	  function isPropertySupported(property) {
	    return property in document.body.style;
	  }

	  function isAnimation(attribute) {
	    return (/^data-animation/.test(attribute.nodeName)
	    );
	  }

	  function applyAttributes(element) {

	    [].slice.call(element.attributes).filter(isAnimation).forEach(function (attribute) {

	      var style;
	      var propertyName = attribute.nodeName.replace(/^data-/, '');
	      var value = attribute.nodeValue;
	      var currentStyle = element.getAttribute('style') || '';

	      if (!isPropertySupported(propertyName)) {
	        return;
	      }

	      style = propertyName + ':' + value;

	      if (isPropertySupported('-webkit-' + propertyName)) {
	        style += ';-webkit-' + propertyName + ':' + value;
	      }

	      element.setAttribute('style', style + ';' + currentStyle);
	    });
	  }

	  var animations = $$('[class*=evo_h-anim]');

	  [].slice.call(animations).forEach(applyAttributes);
	};

/***/ }),

/***/ "../../components/standard/modals/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var closeBtns = document.querySelectorAll('.js-modal-close-btn');
	  var closeBtnsLen = closeBtns && closeBtns.length || 0;
	  var overlay = document.querySelector('.js-modal-overlay');
	  var activeModal;
	  var transitionClass;
	  var overlayClass;
	  var i;

	  function closeModal() {
	    activeModal.classList.remove(transitionClass);
	    overlay.classList.remove(overlayClass);
	    overlay.style.visibility = 'hidden';
	  }

	  function openModal() {
	    activeModal.classList.add(transitionClass);
	    overlay.classList.add(overlayClass);
	    overlay.style.visibility = 'visible';
	  }

	  function addOverlayHandler() {
	    overlay && overlay.addEventListener('click', closeModal);
	  }

	  function addCloseHandler(closeBtn) {
	    closeBtn.addEventListener('click', function () {
	      closeModal();
	    });
	  }

	  function addTriggerHandler(trigger) {
	    var triggerHref = trigger.getAttribute('href');
	    activeModal = document.getElementById(triggerHref.slice(1));

	    if (activeModal.classList.contains('evo_c-modal--full')) {
	      overlayClass = 'evo_c-modal-overlay--full';
	      transitionClass = 'c-modal-transition--full';
	    } else {
	      overlayClass = 'evo_c-modal-overlay--default';
	      if (activeModal.classList.contains('evo_c-modal--basic')) transitionClass = 'c-modal-transition--spin';
	      if (activeModal.classList.contains('evo_c-modal--fixed')) transitionClass = 'c-modal-transition--scale-down';
	      if (activeModal.classList.contains('evo_c-modal--dialog')) transitionClass = 'c-modal-transition--stick-top';
	    }

	    openModal();
	  }

	  for (i = 0; i < closeBtnsLen; i++) {
	    addCloseHandler(closeBtns[i]);
	  }

	  addOverlayHandler();

	  document.addEventListener('click', function (e) {
	    if (!e) e = window.event; // for firefox

	    var triggerEle = e.target || e.srcElement;

	    if (triggerEle.classList.contains('evo_c-modal-trigger') && triggerEle.tagName === 'A') addTriggerHandler(triggerEle);
	  });
	};

/***/ }),

/***/ "../../components/standard/standard-forms/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  var selectors = {
	    form: '.evo_c-form',
	    field: '.evo_c-form__field',
	    input: '.evo_c-form__input',
	    inputDisabled: '.evo_c-form__input[disabled]'
	  };

	  var disabledClass = 'is-disabled';
	  var focusedClass = 'is-focused';

	  Array.prototype.where = function (inclusionTest) {
	    var results = [];
	    for (var i = 0; i < this.length; i++) {
	      if (inclusionTest(this[i])) {
	        results.push(this[i]);
	      }
	    }
	    return results;
	  };

	  /**
	   * Get the closest matching element up the DOM tree.
	   * @param  {Element} elem     Starting element
	   * @param  {String}  selector Selector to match notwithstanding
	   * @return {Boolean|Element}  Returns null if not match found
	   */
	  var getClosest = function getClosest(elem, selector) {

	    // When elem is a Text node, get its parent node
	    if (elem.nodeType === 3) {
	      elem = elem.parentNode;
	    }

	    // Element.matches() polyfill
	    if (!Element.prototype.matches) {
	      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
	        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	            i = matches.length;
	        while (i >= 0 && matches.item(i) !== this) {
	          --i;
	        }
	        return i > -1;
	      };
	    }

	    // Get closest match
	    for (; elem && elem !== document; elem = elem.parentNode) {
	      if (elem.matches(selector)) return elem;
	    }

	    return null;
	  };

	  function $(selector, parent) {
	    return (parent || document).querySelector(selector);
	  }

	  function $$(selector, parent) {
	    return (parent || document).querySelectorAll(selector);
	  }

	  function hasClass(target, className) {
	    return target.classList.contains(className);
	  }

	  function getClassName(node, subString) {
	    return [].slice.call(node.classList).where(function (className) {
	      return className.indexOf(subString) !== -1;
	    });
	  }

	  function handleChanges(event) {

	    var closestField = getClosest(event.target, selectors['field']);

	    var hasValueClass = 'has-value';
	    var hasErrorsClass = 'has-error';

	    var containsErrorClass = !!getClassName(event.target, hasErrorsClass).length;

	    if (!event.target.checkValidity() && !containsErrorClass) {
	      closestField.classList.add(hasErrorsClass);
	    } else {
	      closestField.classList.remove(hasErrorsClass);
	    }

	    if (event.target.value.length == 0) {
	      closestField.classList.remove(hasValueClass);
	    } else {
	      closestField.classList.add(hasValueClass);
	    }
	  }

	  function handleDisabledInputs(form) {
	    var disabledInputs = $$(selectors['inputDisabled'], form);

	    [].slice.call(disabledInputs).forEach(function (input) {
	      var closestField = getClosest(input, selectors['field']);
	      closestField.classList.add(disabledClass);
	    });
	  }

	  function handleLabelsAnimation(event) {

	    var closestField = getClosest(event.target, selectors['field']);
	    var input = $(selectors['input'], closestField);
	    var isDisabled = input && !!input.disabled || false;
	    var focusedField = $('.' + focusedClass);

	    if (isDisabled) {
	      return;
	    }

	    if (focusedField) {
	      focusedField.classList.remove(focusedClass);
	    }

	    if (closestField) {
	      closestField.classList.add(focusedClass);
	    }
	  }

	  var formsList = $$(selectors.form);

	  [].slice.call(formsList).forEach(function (form) {

	    handleDisabledInputs(form);

	    form.addEventListener('click', function (event) {
	      handleLabelsAnimation(event);
	    });
	    form.addEventListener('change', function (event) {
	      handleChanges(event);
	    });
	  });
	};

/***/ }),

/***/ "../../components/standard/sticky/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  /** STICKY COMPONENT **/

	  setTimeout(function () {
	    var stickyElement = document.querySelector('.evo_c-sticky');
	    var stickyElementLeftPosition = stickyElement && elementAbsolutePosition(stickyElement).docLeftDistance;
	    var stickyElementTopPosition = stickyElement && elementAbsolutePosition(stickyElement).docTopDistance;
	    var stickyElementEnd = document.querySelector('.evo_c-sticky__end');
	    var stickyElementEndTopPosition = stickyElement && elementAbsolutePosition(stickyElementEnd).docTopDistance;

	    if (stickyElement && stickyElementEnd) {
	      window.onscroll = function (event) {
	        var elementRelativePosition = stickyElement.getBoundingClientRect();
	        if ((window.pageYOffset || document.documentElement.scrollTop) >= stickyElementTopPosition - 16) {
	          stickyElement.style.position = "fixed";
	          stickyElement.style.top = '16px';
	          stickyElement.style.left = stickyElementLeftPosition + "px";
	        } else if ((window.pageYOffset || document.documentElement.scrollTop) < stickyElementTopPosition) {
	          stickyElement.style.position = "initial";
	        }
	        if ((window.pageYOffset || document.documentElement.scrollTop) >= stickyElementEndTopPosition - elementRelativePosition.height) {
	          stickyElement.style.position = "absolute";
	          stickyElement.style.top = elementAbsolutePosition(stickyElementEnd).docTopDistance + "px";
	          stickyElement.style.left = elementAbsolutePosition(stickyElement).docLeftDistance + "px";
	        }
	      };
	    }
	  }, 7000);

	  function elementAbsolutePosition(element) {
	    var elementBoundingBox = element.getBoundingClientRect();
	    var scrolledLeftPosition = window.pageXOffset || document.documentElement.scrollLeft;
	    var scrolledTopPosition = window.pageYOffset || document.documentElement.scrollTop;
	    return {
	      docLeftDistance: elementBoundingBox.left + scrolledLeftPosition,
	      docTopDistance: elementBoundingBox.top + scrolledTopPosition,
	      docBottomDistance: elementBoundingBox.bottom + scrolledTopPosition
	    };
	  }
	  /** END STICKY COMPONENT **/
	};

/***/ }),

/***/ "../../components/standard/tabs/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  function Tab(element) {

	    var activeStatus = 'is-active';

	    this.component = element;
	    this._activeStatus = activeStatus;
	    this.isScrollable = this._hasClassName(element, 'tab--scroll');
	    this.isLateral = this._hasClassName(element, 'tab--lateral');
	    this.flexDirection = this._getCompStyle(element)['flex-direction'];

	    this.selectors = {
	      component: '.evo_c-tab',
	      tab: '[role="tab"]',
	      panel: '[class*="tab__panel"]',
	      list: '[class*="tab__list"]',
	      item: '[class*="tab__item"]',
	      scrollTabs: '[class*="tab--scroll"]',
	      navigation: '[class*="tab__navigation"]',
	      sticky: '[class*="tab__sticky"]',
	      activeTab: '[class$="tab__item ' + activeStatus + '"]',
	      activePanel: '[class$="tab__panel ' + activeStatus + '"]'
	    };

	    this.init();
	  }

	  Tab.prototype.init = function () {
	    var self = this;

	    this.cacheDOM = {
	      tabs: self._$$(self.selectors.tab, self.component),
	      panels: self._$$(self.selectors.panel, self.component),
	      navigation: self._$(self.selectors.navigation, self.component),
	      list: self._$(self.selectors.list, self.component),
	      sticky: self._$(self.selectors.sticky, self.component),
	      scrollTabs: self._$$(self.selectors.scrollTabs, self.component),
	      activeTab: self._$(self.selectors.activeTab, self.component),
	      activePanel: self._$(self.selectors.activePanel, self.component)
	    };

	    this.calculateInitSizes();
	    this.initARIA();
	    this.addClickListener();
	    this.addKeyDownListener();

	    // When a tab is scrollable we need to handle the sizes
	    if (this.isScrollable) {
	      this.handlePanelsHeight();
	      this.addResizeListener();
	    }
	  };

	  Tab.prototype.calculateInitSizes = function () {

	    var stickyH;
	    var navigationH;

	    stickyH = this.cacheDOM['sticky'] && this._getAbsoluteHeight(this.cacheDOM['sticky']) || 0;

	    navigationH = this.cacheDOM['navigation'] && this._getAbsoluteHeight(this.cacheDOM['navigation']) || 0;

	    this.sizes = {
	      viewportW: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
	      viewportH: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
	      navigation: navigationH,
	      sticky: stickyH,
	      tallestPanel: 0
	    };
	  };

	  Tab.prototype.initARIA = function () {

	    var self = this;
	    var tabs = self._toArr(self.cacheDOM['tabs']);

	    self.setAriaStatus(self.cacheDOM['activeTab'], true);

	    tabs.filter(function (tab) {
	      return !self._hasClassName(tab, self._activeStatus);
	    }).forEach(function (tab) {
	      self.setAriaStatus(tab, false);
	    });
	  };

	  Tab.prototype.addClickListener = function () {

	    this.component.addEventListener('click', this.handleClick.bind(this));
	  };

	  Tab.prototype.addResizeListener = function () {

	    var self = this;

	    window.addEventListener('resize', self._throttle(function () {
	      self.handleResize();
	    }, 50));
	  };

	  Tab.prototype.handlePanelsHeight = function () {
	    var self = this;
	    window.addEventListener('DOMContentLoaded', function (event) {
	      self._calculateTallestPanel(self.handleResize.bind(self));
	    });
	    window.addEventListener('load', function (event) {
	      self._calculateTallestPanel(self.handleResize.bind(self));
	    });
	  };

	  Tab.prototype.handleResize = function () {

	    var viewportW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	    var flexD = this._getCompStyle(this.component)['flex-direction'];

	    var activePanel = this.cacheDOM['activePanel'];
	    var panels = this.cacheDOM['panels'];
	    var tallestPanel = this.cacheDOM['tallestPanel'];
	    var sticky = this.cacheDOM['sticky'];

	    var tallestPanelH;
	    var navigationH;
	    var stickyH = this.sizes['sticky'];
	    var minHeightComponent = 0;
	    var panelTop = 0;

	    if (!this.cacheDOM['activePanel']) {
	      return;
	    }

	    navigationH = this._getAbsoluteHeight(this.cacheDOM['navigation']) || 0;
	    tallestPanelH = this._getAbsoluteHeight(this.cacheDOM['tallestPanel']) || 0;

	    // When the tab's type is lateral and the viewport width is less than or
	    // equal to the media tablet, add to each panel a top position equal
	    // to the navigation's heigth
	    if (viewportW < 750 || !this.isLateral) {

	      minHeightComponent = navigationH + stickyH + tallestPanelH;
	      panelTop = navigationH + stickyH;
	    } else {

	      minHeightComponent = tallestPanelH + stickyH;
	      panelTop = stickyH;
	    }

	    if (this.isLateral) {
	      this._toArr(panels).forEach(function (panel) {
	        panel.style.top = panelTop + 'px';
	      });
	    }

	    this.component.style.minHeight = minHeightComponent + 'px';

	    this.sizes.viewportW = viewportW;
	  };

	  Tab.prototype.handleClick = function (event) {

	    var target = event.target;
	    var targetSelector;
	    var targetTab;
	    var targetPanel;

	    var isLink = this._hasClassName(target, 'tab__link');
	    var isItem = this._hasClassName(target, 'tab__item');
	    var isIcon = target.nodeName === 'I' || false;
	    var tabComponent = this._getClosest(target, this.selectors['tab']);

	    if (!isLink && !isItem && !isIcon) {
	      return;
	    }

	    event.stopPropagation();
	    event.preventDefault();

	    if (isItem) {
	      targetTab = target;
	    } else {
	      targetTab = this._getClosest(target, this.selectors['item']);
	    }

	    this.setActiveTab(targetTab);
	  };

	  Tab.prototype.addKeyDownListener = function () {
	    this.component.addEventListener('keyup', this.handleKeyDown.bind(this));
	  };

	  Tab.prototype.handleKeyDown = function (event) {
	    var key;
	    var tabComponent;
	    var targetLink;
	    var tabList;
	    var targetTab;
	    var activeTab;

	    event = event || window.event;
	    targetLink = event.target;
	    activeTab = targetLink.parentElement;
	    tabComponent = this._getClosest(targetLink, this.selectors['tab']);
	    tabList = this._getClosest(targetLink, this.selectors['list']);
	    key = event.keyCode;

	    if (key === 34 || key === 35) {
	      // end / page down
	      targetTab = tabList.lastElementChild;
	    } else if (key === 33 || key === 36) {
	      // home / page up
	      targetTab = tabList.firstElementChild;
	    } else if (key === 37 || key === 38) {
	      // left/up arrow
	      if (activeTab.previousElementSibling) {
	        targetTab = activeTab.previousElementSibling;
	      } else {
	        targetTab = tabList.lastElementChild;
	      }
	    } else if (key === 39 || key === 40) {
	      // right/down arrow
	      if (activeTab.nextElementSibling) {
	        targetTab = activeTab.nextElementSibling;
	      } else {
	        targetTab = tabList.firstElementChild;
	      }
	    }

	    if (!targetTab) {
	      return;
	    }

	    if (key === 33 || key === 34 || key === 35 || key === 36 || key === 37 || key === 38 || key === 39 || key === 40) {
	      this.setActiveTab(targetTab);
	    }
	  };

	  Tab.prototype.setAriaStatus = function (tab, status) {
	    var panelId = tab.firstElementChild.getAttribute('href');
	    var panel = this._$(panelId, panel);

	    tab.setAttribute('aria-selected', status);
	    panel && panel.setAttribute('aria-hidden', !status);
	  };

	  Tab.prototype.setActiveTab = function (targetTab) {

	    var oldTab = this.cacheDOM['activeTab'];
	    var oldPanel = this.cacheDOM['activePanel'];

	    var link = targetTab && targetTab.firstElementChild;
	    var targetPanelSel = link && link.getAttribute('href') || 'null';
	    var targetPanel = this._$(targetPanelSel, this.component);

	    if (!oldTab) {
	      console.log('Your Tab component does not contain an active tab item');
	    }

	    if (!oldPanel) {
	      console.log('Your Tab component does not contain a [default] active panel');
	    }

	    if (!targetPanel) {
	      console.log('Your Tab component does not contain a panel with ID ' + targetPanelSel);
	    }

	    // When the active tab is the same as the target one, focus it and return
	    if (oldTab && targetPanel && oldPanel && targetPanel.id === oldPanel.id) {
	      link.focus();
	      return;
	    }

	    if (oldTab && oldPanel) {
	      oldTab.classList.remove(this._activeStatus);
	      oldPanel.classList.remove(this._activeStatus);
	      this.setAriaStatus(oldTab, false);
	    }

	    if (targetTab && targetPanel) {
	      targetTab.classList.add(this._activeStatus);
	      targetPanel.classList.add(this._activeStatus);
	      this.setAriaStatus(targetTab, true);
	      targetTab.firstElementChild.focus();
	    }

	    //Update the cache
	    this.cacheDOM['activeTab'] = targetTab;
	    this.cacheDOM['activePanel'] = targetPanel;
	  };

	  Tab.prototype._calculateTallestPanel = function (callback) {

	    var orderedTabs;
	    var tallestPanel;

	    orderedTabs = this._toArr(this.cacheDOM['panels']).sort(function (tabA, tabB) {
	      return tabA.offsetHeight - tabB.offsetHeight;
	    });

	    tallestPanel = orderedTabs[orderedTabs.length - 1];

	    // Store the information
	    this.sizes.tallestPanel = this._getAbsoluteHeight(tallestPanel) || 0;
	    this.cacheDOM.tallestPanel = tallestPanel;

	    if (typeof callback === 'function') {
	      callback();
	    }
	  };

	  Tab.prototype._$ = function (selector, parent) {
	    return (parent || document).querySelector(selector);
	  };

	  Tab.prototype._$$ = function (selector, parent) {
	    return (parent || document).querySelectorAll(selector);
	  };

	  /**
	   * Convert a List into an Array
	   *
	   * @param  {List}  A list
	   * @return {Array}
	   */

	  Tab.prototype._toArr = function (list) {
	    return [].slice.call(list);
	  };

	  Tab.prototype._getCompStyle = function (el) {
	    return window.getComputedStyle(el);
	  };

	  Tab.prototype._hasClassName = function (node, subString) {
	    return this._isNotEmptyA(this._getClassName(node, subString));
	  };

	  Tab.prototype._getAbsoluteHeight = function (el) {

	    el = typeof el === 'string' ? document.querySelector(el) : el;

	    var styles = this._getCompStyle(el);
	    var margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
	    var padding = parseFloat(styles['paddingTop']) + parseFloat(styles['paddingBottom']);

	    return Math.ceil(el.offsetHeight + margin + padding);
	  };

	  Tab.prototype._isNotEmptyA = function (array) {
	    return array.length > 0;
	  };

	  Tab.prototype._where = function (Arr) {

	    return function (inclusionTest) {
	      var results = [];
	      var len = Arr.length;
	      for (var i = 0; i < len; i++) {
	        if (inclusionTest(Arr[i])) {
	          results.push(Arr[i]);
	        }
	      }
	      return results;
	    };
	  };

	  Tab.prototype._getClassName = function (node, subString) {
	    var list = this._toArr(node.classList);
	    var where = this._where(list);

	    return where(function (className) {
	      return className.indexOf(subString) !== -1;
	    });
	  };

	  /**
	   * Get the closest matching element up the DOM tree.
	   * @param  {Element} elem     Starting element
	   * @param  {String}  selector Selector to match notwithstanding
	   * @return {Boolean|Element}  Returns null if not match found
	   */
	  Tab.prototype._getClosest = function (elem, selector) {

	    // When elem is a Text node, get its parent node
	    if (elem.nodeType === 3) {
	      elem = elem.parentNode;
	    }

	    // Element.matches() polyfill
	    if (!Element.prototype.matches) {
	      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
	        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	            i = matches.length;
	        while (i >= 0 && matches.item(i) !== this) {
	          --i;
	        }
	        return i > -1;
	      };
	    }

	    // Get closest match
	    for (; elem && elem !== document; elem = elem.parentNode) {
	      if (elem.matches(selector)) return elem;
	    }

	    return null;
	  };

	  Tab.prototype._throttle = function (fn, delay) {
	    var timeout = null;
	    var self = this;

	    return function throttledFn() {
	      window.clearTimeout(timeout);
	      var ctx = this;
	      var args = self._toArr(arguments);

	      timeout = window.setTimeout(function callThrottledFn() {
	        fn.apply(ctx, args);
	      }, delay);
	    };
	  };

	  // ------------------------------------------------------------------------------


	  // Get all tabs in the page
	  var tabs = document.querySelectorAll('.evo_c-tab');

	  [].slice.call(tabs).forEach(function (tab) {
	    new Tab(tab);
	  });
	};

/***/ }),

/***/ "../../components/evolution/2d-layers/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  var maxHeight = 720;
	  var minHeight = 50;
	  var links = document.querySelectorAll('.evo_c-layer header');
	  var close_links = document.querySelectorAll('.evo_c-layer .evo_c-layer__content--close');
	  var i = 0,
	      len = links && links.length || 0;
	  for (i; i < len; i++) {
	    links[i].addEventListener('click', openSlide, false);
	    close_links[i].addEventListener('click', closeBtn, false);
	  }

	  // restore height of element and remove class 'active'
	  function closeSlide(el) {
	    el.style.maxHeight = minHeight + 'px';
	    el.style.transitionDuration = '1.5s';
	    var close = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer__content--close');
	    var done = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer__content--done');
	    setTimeout(function () {
	      removeClass(el, 'active');
	      addClass(el.parentNode, 'visited');
	      show(done, 500);
	    }, 750);

	    hide(close, 500);
	  }

	  function closeBtn(el) {
	    if (this.tagName.toLowerCase() === 'span') {
	      var el = this.parentNode;
	      el.style.maxHeight = minHeight + 'px';
	      el.style.transitionDuration = '1.5s';
	      setTimeout(function () {
	        removeClass(el, 'active');
	        addClass(el.parentNode, 'visited');
	      }, 750);
	      var close = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer__content--close');
	      var done = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer__content--done');
	      show(done, 500);
	      hide(close, 500);
	    }
	  }

	  var temp = null;
	  var inProgress = false;
	  function openSlide(e) {
	    if (inProgress === true) {
	      return;
	    }
	    inProgress = true;
	    var currentEl = this.parentNode.parentNode;
	    var parent = this.parentNode.parentNode.parentNode;
	    var lastChild = parent.lastElementChild;
	    if (temp === null || temp === undefined) {
	      temp = lastChild;
	    } else {
	      lastChild = temp;
	    }
	    if (currentEl.className.indexOf('on-top') === -1) {
	      addClass(currentEl, 'on-top');
	    }
	    var lastActive = document.querySelector('#' + lastChild.id + ' div');
	    var content = document.querySelector('#' + currentEl.id + ' div');
	    var close = document.querySelector('#' + currentEl.id + ' .evo_c-layer__content--close');
	    var done = document.querySelector('#' + currentEl.id + ' .evo_c-layer__content--done');
	    removeClass(close, 'hide');
	    if (lastActive.className.indexOf('active') !== -1) {
	      closeSlide(lastActive);
	      setTimeout(function () {
	        currentEl.style.top = lastChild.offsetTop + 'px';
	        lastChild.style.top = currentEl.offsetTop + 'px';
	        addClass(lastChild, 'top-layer');
	      }, 950);
	      if (lastChild.offsetTop !== currentEl.offsetTop) {
	        addClass(content, 'active');
	        removeClass(content.parentNode, 'visited');
	        hide(done, 0);
	        setTimeout(function () {
	          var aDiv = document.getElementsByClassName('active')[0];
	          aDiv.style.transitionDuration = '2.5s';
	          content.style.maxHeight = maxHeight + 'px';
	          inProgress = false;
	        }, 1500);
	      }
	    } else {
	      currentEl.style.top = lastChild.offsetTop + 'px';
	      lastChild.style.top = currentEl.offsetTop + 'px';

	      addClass(lastChild, 'top-layer');
	      addClass(content, 'active');
	      removeClass(content.parentNode, 'visited');
	      hide(done, 0);
	      var aDiv = document.getElementsByClassName('active')[0];
	      aDiv.style.transitionDuration = '2.5s';
	      setTimeout(function () {
	        content.style.maxHeight = maxHeight + 'px';
	        inProgress = false;
	      }, 750);
	    }
	    setTimeout(function () {
	      removeClass(currentEl, 'on-top');
	    }, 2000);
	    temp = currentEl;
	  }

	  /********* helper ***********/
	  function hide(el, time) {
	    setTimeout(function () {
	      addClass(el, 'hide');
	    }, time);
	  }

	  function show(el, time) {
	    setTimeout(function () {
	      removeClass(el, 'hide');
	    }, time);
	  }

	  function hasClass(el, className) {
	    if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	  }

	  function addClass(el, className) {
	    if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += " " + className;
	  }

	  function removeClass(el, className) {
	    if (el.classList) el.classList.remove(className);else if (hasClass(el, className)) {
	      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	      el.className = el.className.replace(reg, ' ');
	    }
	  }

	  /*-------------------------------*/
	};

/***/ }),

/***/ "../../components/evolution/3d-layers/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.layerDragAndDrop = exports.layerAnimations = undefined;

	var _layerAnimations = __webpack_require__("../../components/evolution/3d-layers/layer-animations.js");

	var _layerAnimations2 = _interopRequireDefault(_layerAnimations);

	var _layerDragAndDrop = __webpack_require__("../../components/evolution/3d-layers/layer-drag-and-drop.js");

	var _layerDragAndDrop2 = _interopRequireDefault(_layerDragAndDrop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.layerAnimations = _layerAnimations2.default;
	exports.layerDragAndDrop = _layerDragAndDrop2.default;

/***/ }),

/***/ "../../components/evolution/3d-layers/layer-animations.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _layerUtils = __webpack_require__("../../components/evolution/3d-layers/layer-utils.js");

	var layers = Array.from(document.querySelectorAll('.evo_c-3dlayer'));
	var layerContainers = Array.from(document.querySelectorAll('.evo_c-3dlayers'));

	var staggeredBackwards = function staggeredBackwards(backwardsLayers, previousLayer) {

	  previousLayer = previousLayer || backwardsLayers[backwardsLayers.length - 1].previousElementSibling;
	  return previousLayer !== null ? new Promise(function (resolve) {
	    backwardsLayers.forEach(function (bLayer, index) {
	      index === 0 ? bLayer.parentNode.insertBefore(bLayer, previousLayer) : bLayer.parentNode.insertBefore(bLayer, backwardsLayers[index - 1]);
	    });
	    setTimeout(function () {
	      resolve(staggeredBackwards(backwardsLayers, backwardsLayers[backwardsLayers.length - 1].previousElementSibling));
	    }, 200);
	  }) : Promise.resolve(backwardsLayers);
	};

	var animateFrontLayers = function animateFrontLayers(layer) {
	  return (0, _layerUtils.slide)(layer.parentNode.lastElementChild, 480, 300).then(function (oldFrontLayer) {
	    return new Promise(function (resolve) {
	      oldFrontLayer.classList.add('evo_c-3dlayer--visited');
	      oldFrontLayer.classList.remove('evo_c-3dlayer--selected');
	      var backwardsLayers = [oldFrontLayer];
	      var previousLayer = oldFrontLayer.previousElementSibling;
	      while (previousLayer !== layer) {
	        backwardsLayers.push(previousLayer);
	        previousLayer = previousLayer.previousElementSibling;
	      }
	      setTimeout(function () {
	        resolve(backwardsLayers);
	      }, 150);
	    });
	  }).then(function (backwardsLayers) {
	    return Promise.all(backwardsLayers.map(function (blayer, index) {
	      return new Promise(function (resolve) {
	        setTimeout(function () {
	          blayer.classList.add('evo_c-3dlayer--hide');
	          resolve(blayer);
	        }, 150 * index);
	      });
	    }));
	  }).then(function (data) {
	    return new Promise(function (resolve) {
	      setTimeout(function () {
	        resolve(data);
	      }, 150);
	    });
	  }).then(function (backwardsLayers) {
	    return new Promise(function (resolve) {
	      staggeredBackwards(backwardsLayers, layer).then(function (backwardsLayers) {
	        resolve(layer);
	        return backwardsLayers;
	      }).then(function (backwardsLayers) {
	        return backwardsLayers.forEach(function (blayer, index) {
	          setTimeout(function () {
	            blayer.classList.remove('evo_c-3dlayer--hide');
	          }, 200 * (index + 1));
	        });
	      });
	    });
	  });
	};

	var animateNewFrontLayer = function animateNewFrontLayer(layer) {
	  var frontHeight = (0, _layerUtils.calculateLayerHeight)(layer);
	  var containerHeight = (0, _layerUtils.calculateContainerHeight)(layer);
	  layer.classList.add('evo_c-3dlayer--selected');
	  return Promise.all([(0, _layerUtils.slide)(layer, frontHeight, 500, true), (0, _layerUtils.slide)(layer.parentNode, containerHeight, 500, true)]);
	};

	var resizeFrontLayer = function resizeFrontLayer(event) {
	  var target = event.target;
	  if (target.classList.contains('evo_c-3dlayer--selected')) {
	    var frontHeight = (0, _layerUtils.calculateLayerHeight)(target);
	    var containerHeight = (0, _layerUtils.calculateContainerHeight)(target);
	    return Promise.all([(0, _layerUtils.slide)(target, frontHeight, 500, true), (0, _layerUtils.slide)(target.parentNode, containerHeight, 500, true)]);
	  }
	};

	var moveForward = function moveForward(layer) {
	  layers.forEach(function (label) {
	    return label.removeEventListener('click', moveForwardListener);
	  });

	  animateFrontLayers(layer).then(animateNewFrontLayer).then(function () {
	    layers.forEach(function (label) {
	      return label.addEventListener('click', moveForwardListener);
	    });
	  });
	};

	var moveForwardListener = function moveForwardListener(event) {
	  var layer = event.currentTarget;
	  if (!layer.classList.contains('evo_c-3dlayer--selected')) {
	    moveForward(layer);
	  }
	};

	exports.default = function () {
	  layers.forEach(function (layer) {
	    layer.addEventListener('click', moveForwardListener);
	    layer.addEventListener('resizelayer', resizeFrontLayer);
	  });
	  layerContainers.forEach(function (layerContainer) {
	    var selected = layerContainer.querySelector('.evo_c-3dlayer--selected');
	    selected.style.height = (0, _layerUtils.calculateLayerHeight)(selected) + 'px';
	    layerContainer.style.height = (0, _layerUtils.calculateContainerHeight)(selected) + 'px';
	  });
	};

/***/ }),

/***/ "../../components/evolution/3d-layers/layer-utils.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isOutOfLayers = exports.isOutOfLayers = function isOutOfLayers(element) {
	  return element.classList.contains('evo_c-3dlayers') || !Array.from(element.classList).some(function (elementClass) {
	    return elementClass.match(/^evo_c-3dlayer/);
	  });
	};

	var isNextSibling = exports.isNextSibling = function isNextSibling(element, sibling) {
	  var nextElement = element.nextElementSibling;
	  while (nextElement !== null && nextElement !== sibling) {
	    nextElement = nextElement.nextElementSibling;
	  }
	  return nextElement !== null;
	};

	var isPreviousSibling = exports.isPreviousSibling = function isPreviousSibling(element, sibling) {
	  var previousElement = element.previousElementSibling;
	  while (previousElement !== null && previousElement !== sibling) {
	    previousElement = previousElement.previousElementSibling;
	  }
	  return previousElement !== null;
	};

	var calculateLayerHeight = exports.calculateLayerHeight = function calculateLayerHeight(layer) {
	  var contentHeight = Array.from(layer.children).reduce(function (total, curr) {
	    return curr.offsetHeight + total;
	  }, 2);
	  return contentHeight < 480 ? 480 : contentHeight;
	};

	var calculateContainerHeight = exports.calculateContainerHeight = function calculateContainerHeight(layer) {
	  return Array.from(layer.parentNode.querySelectorAll('.evo_c-3dlayer')).reduce(function (total, curr) {
	    return curr === layer ? calculateLayerHeight(curr) + total : curr.querySelector('.evo_c-3dlayer__header').offsetHeight + total;
	  }, 2);
	};

	var slide = exports.slide = function slide(layer, endHeight, duration) {
	  var down = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  return new Promise(function (resolve, reject) {
	    var start = null;
	    var initHeight = layer.offsetHeight;

	    function step(timestamp) {
	      if (!start) start = timestamp;
	      var progress = timestamp - start;
	      layer.style.height = down ? easingDown(progress, initHeight, endHeight - initHeight, duration) + 'px' : easing(progress, initHeight, endHeight - initHeight, duration) + 'px';
	      if (progress < duration) {
	        window.requestAnimationFrame(step);
	      } else {
	        endAnimation();
	      }
	    }

	    // easeOutCubic - George McGinley Smith - https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
	    function easing(t, b, c, d) {
	      return c * ((t = t / d - 1) * t * t + 1) + b;
	    }

	    function easingDown(t, b, c, d) {
	      return c * (t /= d) * t * t + b;
	    }

	    function endAnimation() {
	      layer.style.height = endHeight + 'px';
	      resolve(layer);
	    }

	    window.requestAnimationFrame(step);
	  });
	};

/***/ }),

/***/ "../../components/evolution/3d-layers/layer-drag-and-drop.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _layerUtils = __webpack_require__("../../components/evolution/3d-layers/layer-utils.js");

	var utils = _interopRequireWildcard(_layerUtils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var layers = Array.from(document.querySelectorAll('.evo_c-3dlayer'));
	var layerDragIcons = Array.from(document.querySelectorAll('.evo_c-3dlayer__icon-drag'));

	var draggedLayer = undefined;

	var safeTransition = function safeTransition(layer) {
	  layer.removeEventListener('mouseleave', mouseLeave);
	  layer.removeEventListener('mouseenter', mouseEnter);
	  setTimeout(function () {
	    layer.addEventListener('mouseleave', mouseLeave);
	    layer.addEventListener('mouseenter', mouseEnter);
	  }, 100);
	};

	var mouseLeave = function mouseLeave(event) {
	  if (draggedLayer && event.buttons === 1) {
	    var leavingLayer = event.target;
	    var enteringElement = event.relatedTarget;

	    if (utils.isOutOfLayers(enteringElement)) {
	      leavingLayer.parentNode.insertBefore(draggedLayer, draggedLayer.parentNode.firstElementChild);
	      draggedLayer.classList.add('evo_c-3dlayer--drop');
	    }
	  }
	};

	var mouseEnter = function mouseEnter(event) {
	  if (draggedLayer && event.buttons === 1) {
	    var target = event.target;
	    if (target !== draggedLayer && utils.isNextSibling(draggedLayer, target)) {
	      safeTransition(target);
	      target.parentNode.insertBefore(draggedLayer, target.nextElementSibling);
	      draggedLayer.classList.add('evo_c-3dlayer--drop');
	    }
	    if (target !== draggedLayer && utils.isPreviousSibling(draggedLayer.previousElementSibling, target)) {
	      safeTransition(target);
	      target.parentNode.insertBefore(draggedLayer, target.nextElementSibling);
	      draggedLayer.classList.add('evo_c-3dlayer--drop');
	    }
	  }
	};

	var dropLayer = function dropLayer() {
	  if (draggedLayer) {
	    var container = draggedLayer.parentNode;
	    var newFrontLayer = container.lastElementChild;
	    var frontHeight = utils.calculateLayerHeight(newFrontLayer);
	    var containerHeight = utils.calculateContainerHeight(newFrontLayer);

	    document.body.classList.remove('evo_h-3dlayer--body-grabbing');
	    draggedLayer.classList.remove('evo_c-3dlayer--dragging');
	    newFrontLayer.classList.add('evo_c-3dlayer--selected');
	    utils.slide(newFrontLayer, frontHeight, 500, true);
	    utils.slide(container, containerHeight, 500, true);

	    draggedLayer.draggable = false;
	    draggedLayer.classList.remove('evo_c-3dlayer--drop');
	    draggedLayer = undefined;
	  }
	};

	var pickLabel = function pickLabel(event) {
	  event.preventDefault();
	  draggedLayer = event.target.parentNode.parentNode;
	  draggedLayer.draggable = true;
	  draggedLayer.classList.add('evo_c-3dlayer--dragging');
	};

	var pickLayer = function pickLayer(event) {
	  if (event.target.nodeType === 1 && event.target.classList.contains('evo_c-3dlayer__icon-drag')) {
	    document.body.classList.add('evo_h-3dlayer--body-grabbing');
	    event.preventDefault();
	    event.stopPropagation();
	    utils.slide(event.currentTarget.parentNode.lastElementChild, 480, 300).then(function (layer) {
	      layer.classList.remove('evo_c-3dlayer--selected');
	      layer.classList.add('evo_c-3dlayer--visited');
	    });
	  }
	};

	exports.default = function () {
	  layerDragIcons.forEach(function (icon) {
	    return icon.addEventListener('dragstart', pickLabel);
	  });
	  layers.forEach(function (layer) {
	    layer.addEventListener('dragstart', pickLayer);
	    layer.addEventListener('mouseleave', mouseLeave);
	    layer.addEventListener('mouseenter', mouseEnter);
	  });

	  window.addEventListener('mouseup', dropLayer);
	};

/***/ }),

/***/ "../../components/evolution/bookmarklet/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  var bookmarkListComponent = document.querySelector('.evo_c-bookmarklet');
	  // JS safegaurd
	  if (bookmarkListComponent === null) {
	    return;
	  }
	  var bookmarkList = bookmarkListComponent.querySelector('.evo_c-bookmaklet__bookmark-list');
	  var highlightColor = bookmarkListComponent.dataset.highlightColor;
	  var clearAllBtn = bookmarkListComponent.querySelector('.evo_c-bookmarklet__clear-all');
	  var selectionPopUp = document.querySelector('.evo_c-bookmarklet__pop-up');
	  var selectionPopUpPip = selectionPopUp.querySelector('.evo_c-bookmarklet__pop-up-pip');
	  var popUpYesBtn = selectionPopUp.querySelector('.evo_c-bookmarklet__pop-up-button--yes');
	  var popUpNoBtn = selectionPopUp.querySelector('.evo_c-bookmarklet__pop-up-button--no');
	  var limitBookmarklet = document.querySelector('[data-limit-bookmarklet]');
	  var keysPressed = [];
	  var bookmarkId = 0;
	  var alertActive = false;

	  window.addEventListener('keydown', _keysDown, false);
	  window.addEventListener('keyup', _keysUp, false);

	  if (limitBookmarklet !== null) {
	    limitBookmarklet.addEventListener('mouseup', _checkForSelection, false);
	  } else {
	    document.addEventListener('mouseup', _checkForSelection, false);
	  }

	  function _keysDown(e) {

	    keysPressed[e.keyCode] = true;
	    // keyboard shortcut Shift(16) + Control(17) + L(76) + M(77)
	    if (keysPressed[16] && keysPressed[17] && keysPressed[76] && keysPressed[77]) {

	      e.preventDefault();

	      var selectedRange;
	      var rangeContainer;

	      selectedRange = window.getSelection().getRangeAt(0);
	      rangeContainer = selectedRange.startContainer;
	      // check for bookmarklet limiter attribute
	      if (limitBookmarklet !== null) {
	        // if selected range is a decendant of the limited element
	        if (limitBookmarklet.contains(rangeContainer)) {
	          _bookmarkSelection(selectedRange);
	        }
	      } else if (limitBookmarklet === null) {
	        _bookmarkSelection(selectedRange);
	      }
	    }
	  }

	  function _keysUp(e) {
	    keysPressed[e.keyCode] = false;
	  }

	  function _checkForSelection(e) {
	    if (e.target !== popUpYesBtn) {
	      var selectedRange;
	      var selection;
	      selection = window.getSelection();
	      if (selection && selection.rangeCount > 0) {
	        selectedRange = selection.getRangeAt(0);
	      }

	      if (selectedRange) {
	        if (selectedRange.startOffset !== selectedRange.endOffset && selectedRange.startContainer === selectedRange.endContainer) {
	          _setPopUp(selectedRange);
	        }
	      }
	    }
	  }

	  function _setPopUp(selectedRange) {
	    if (selectedRange.startOffset !== selectedRange.endOffset) {
	      selectionPopUpPip.style.left = "";
	      selectionPopUpPip.style.right = "";
	      selectionPopUp.style.left = "";
	      selectionPopUp.style.right = "";

	      var range = selectedRange;
	      var rangeDims = range.getClientRects();
	      var pageWidth = window.innerWidth;
	      var popUpTop = rangeDims[0].top + rangeDims[0].height + 10;
	      var popUpLeft = rangeDims[0].left;
	      var popUpRight = rangeDims[0].width;
	      var pipPosition = rangeDims[0].width / 3.25;
	      selectionPopUp.style.top = popUpTop + 'px';

	      if (pageWidth - 200 < popUpLeft) {
	        selectionPopUp.style.right = popUpRight + 'px';
	        selectionPopUpPip.style.left = 35 + '%';
	      } else {
	        selectionPopUp.style.left = popUpLeft + 'px';
	        selectionPopUpPip.style.left = pipPosition < 169 ? pipPosition + 'px' : 50 + '%';
	      }

	      selectionPopUp.classList.add('evo_c-bookmarklet__pop-up--is-visible');

	      popUpYesBtn.addEventListener('mousedown', _pressedYes(range), false);
	      popUpNoBtn.addEventListener('click', function () {
	        selectionPopUp.classList.remove('evo_c-bookmarklet__pop-up--is-visible');
	        range.collapse();
	      }, false);
	    }
	  }

	  function _pressedYes(range) {
	    return function (e) {
	      selectionPopUp.classList.remove('evo_c-bookmarklet__pop-up--is-visible');
	      _bookmarkSelection(range, true);
	    };
	  }

	  function _bookmarkSelection(selectedRange, fromButton) {

	    var calledFromButton = fromButton || false;
	    var alertNode;
	    var selectionString;
	    var highlightNode;
	    var highlightNodeQueryString;
	    var bookmarkAnchorLink;
	    var listNode;
	    var closeIcon;
	    var googleSearchBtn;
	    var alertBackground;

	    alertNode = bookmarkListComponent.parentNode;

	    // create span node for text hightlighting
	    highlightNode = document.createElement('span');
	    highlightNode.className = 'evo_c-bookmarklet__highlight-text';

	    // sets text highlight color if specified in data-highlight-color attribute - defaults to yellow;
	    if (highlightColor) {
	      highlightNode.style = 'background-color: ' + highlightColor;
	    }

	    if (selectedRange) {

	      // get the range of selected text and surround it with the hightlighting span

	      if (selectedRange.startContainer === selectedRange.endContainer && selectedRange.startOffset !== selectedRange.endOffset) {

	        // surround selected text with hightlighting span
	        selectedRange.surroundContents(highlightNode);

	        // add unique id to highlighted span
	        highlightNode.setAttribute('id', 'bookmarklet_' + bookmarkId);

	        // create li node for widget ol
	        listNode = document.createElement('li');
	        listNode.className = 'evo_c-bookmarklet__bookmark-list-item';

	        // create close icon
	        closeIcon = document.createElement('i');
	        closeIcon.className = 'material-icons evo_c-bookmarklet__close-icon';
	        closeIcon.innerHTML = 'close';

	        highlightNodeQueryString = encodeURIComponent(highlightNode.innerHTML);
	        highlightNodeQueryString = highlightNodeQueryString.replace(/%20/g, '+');

	        // create google search button
	        googleSearchBtn = document.createElement('a');
	        googleSearchBtn.classList.add('evo_c-bookmarklet__google-button');
	        googleSearchBtn.setAttribute('target', '_blank');
	        googleSearchBtn.setAttribute('href', 'http://www.google.com/search?q=' + highlightNodeQueryString);
	        googleSearchBtn.innerHTML = 'Google this bookmark <i class="material-icons">open_in_new</i>';

	        // create anchor tag for widget li
	        bookmarkAnchorLink = document.createElement('a');

	        // set anchor link to bookmarklet ID
	        bookmarkAnchorLink.setAttribute('href', '#' + 'bookmarklet_' + bookmarkId);

	        // copy over the highlighted text
	        bookmarkAnchorLink.innerHTML = highlightNode.innerHTML;

	        // append anchor element and text to widget li
	        listNode.appendChild(bookmarkAnchorLink);

	        // append close icon to listNode
	        listNode.appendChild(closeIcon);

	        // append google search link
	        listNode.appendChild(googleSearchBtn);

	        // append li to widget ol
	        bookmarkList.appendChild(listNode);

	        // increment bookmarkId var
	        bookmarkId += 1;

	        // show the bookmarklet component
	        bookmarkListComponent.classList.add('evo_c-bookmarklet--is-visible');

	        if (!calledFromButton) {
	          selectionPopUp.classList.remove('evo_c-bookmarklet__pop-up--is-visible');
	        }

	        selectedRange.collapse();
	      } else {
	        if (!calledFromButton && selectedRange.startContainer !== selectedRange.endContainer && !alertActive) {

	          alertActive = true;
	          // create background div and add class
	          alertBackground = document.createElement('div');
	          alertBackground.classList.add('evo_c-bookmarklet__alert-background--warning');
	          // create warning div and add class
	          var warning = document.createElement('div');
	          warning.classList.add('evo_c-bookmarklet__alert--warning');
	          // add in html and message
	          warning.innerHTML = '<i class="material-icons">warning</i><p><strong>D\'oh!</strong> Your selection can\'t be a bookmarked.</p><p><small><em>(Keep your selection within a single HTML tag)</em></small></p>' + '<span class="evo_c-bookmarklet__alert-close-icon">' + '<i class="fa fa-times"></i>' + '</span>';
	          // add event listener for dismissing of alert
	          alertNode.addEventListener('click', _dismissAlert(warning, alertBackground), false);
	          // append alert div and background to document
	          alertNode.appendChild(warning);
	          alertNode.appendChild(alertBackground);
	        }
	        if (!calledFromButton && selectedRange.startOffset === selectedRange.endOffset && !alertActive) {

	          alertActive = true;
	          // create background div and add class
	          alertBackground = document.createElement('div');
	          alertBackground.classList.add('evo_c-bookmarklet__alert-background--caution');
	          // create alert div and add class
	          var caution = document.createElement('div');
	          caution.classList.add('evo_c-bookmarklet__alert--caution');
	          // add in html and message
	          caution.innerHTML = '<i class="material-icons">sentiment_dissatisfied</i><p><strong>Oops!</strong> You didn\'t select anything to bookmark. Nothing to see here...</p>' + '<span class="evo_c-bookmarklet__alert-close-icon">' + '<i class="fa fa-times"></i>' + '</span>';
	          // add event listener for dismissing of alert
	          alertNode.addEventListener('click', _dismissAlert(caution, alertBackground), false);
	          // append alert div and background to document
	          alertNode.appendChild(caution);
	          alertNode.appendChild(alertBackground);
	        }
	      }
	    }

	    // create remove list item listeners
	    _buildClearBookmarkListItemListeners();
	  } // end of _bookmarkSelection

	  function _buildClearBookmarkListItemListeners() {
	    var closeIcons = document.querySelectorAll('.evo_c-bookmarklet__close-icon');
	    var numOfListItems = closeIcons.length;
	    var i;

	    // add event listeners to close icons
	    for (i = 0; i < numOfListItems; i++) {
	      closeIcons[i].addEventListener('click', _removeListItem);
	    }

	    // add event listener to clear all button
	    clearAllBtn.addEventListener('click', _clearAllBookmarks);
	  } // end of _buildClearBookmarkListItemListeners

	  function _removeListItem(e) {

	    e.preventDefault();

	    var listItem = e.target;

	    _clearListItemAndNormalizeNode(listItem);
	  } // end of _removeListItem function

	  function _clearListItemAndNormalizeNode(listItem) {

	    var listItemId = listItem.previousSibling.getAttribute('href').slice(1);
	    var bookmarkedSpan = document.getElementById(listItemId);
	    var spanContent = document.createTextNode(bookmarkedSpan.innerHTML);
	    var spanParent = bookmarkedSpan.parentNode;

	    // spanParent.removeAttribute('data-bookmark');
	    spanParent.replaceChild(spanContent, bookmarkedSpan);
	    spanParent.normalize();

	    // closing animation on list item
	    listItem.parentNode.classList.add('evo_c-bookmarklet--remove');

	    // after animation runs remove alert from DOM
	    listItem.parentNode.addEventListener('animationend', function () {

	      listItem.parentNode.remove();
	      bookmarkList.normalize();

	      // hide bookmark list if no list items are present
	      if (bookmarkList.children.length === 0) {
	        bookmarkListComponent.classList.remove('evo_c-bookmarklet--is-visible');
	      }
	    });
	  } // end of _clearListItemAndNormalizeNode

	  function _clearAllBookmarks() {
	    var closeIcons = Array.prototype.slice.call(document.querySelectorAll('.evo_c-bookmarklet__close-icon'));

	    closeIcons.forEach(function (listItem) {
	      _clearListItemAndNormalizeNode(listItem);
	    });
	  } // end of _clearAllBookmarks

	  function _dismissAlert(alertMessageNode, bg) {
	    return function (e) {
	      alertMessageNode.classList.add('evo_c-bookmarklet__alert--is-dismissed');
	      bg.classList.add('evo_c-bookmarklet__alert-background--is-dismissed');

	      alertActive = false;

	      alertMessageNode.addEventListener('animationend', function () {
	        alertMessageNode.remove();
	        bg.remove();
	      });
	    };
	  }
	};

/***/ }),

/***/ "./index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _documentReady = __webpack_require__("./libs/document-ready.js");

	var _documentReady2 = _interopRequireDefault(_documentReady);

	var _preventDefault = __webpack_require__("./libs/prevent-default.js");

	var _preventDefault2 = _interopRequireDefault(_preventDefault);

	var _audioPlayer = __webpack_require__("../../components/standard/audio-player/index.js");

	var _audioPlayer2 = _interopRequireDefault(_audioPlayer);

	var _accordion = __webpack_require__("../../components/standard/accordion/index.js");

	var _accordion2 = _interopRequireDefault(_accordion);

	var _carousel = __webpack_require__("../../components/standard/carousel/index.js");

	var _carousel2 = _interopRequireDefault(_carousel);

	var _codeMarkup = __webpack_require__("../../components/standard/code-markup/index.js");

	var _codeMarkup2 = _interopRequireDefault(_codeMarkup);

	var _cssAnimations = __webpack_require__("../../components/standard/css-animations/index.js");

	var _cssAnimations2 = _interopRequireDefault(_cssAnimations);

	var _modals = __webpack_require__("../../components/standard/modals/index.js");

	var _modals2 = _interopRequireDefault(_modals);

	var _standardForms = __webpack_require__("../../components/standard/standard-forms/index.js");

	var _standardForms2 = _interopRequireDefault(_standardForms);

	var _sticky = __webpack_require__("../../components/standard/sticky/index.js");

	var _sticky2 = _interopRequireDefault(_sticky);

	var _tabs = __webpack_require__("../../components/standard/tabs/index.js");

	var _tabs2 = _interopRequireDefault(_tabs);

	var _dLayers = __webpack_require__("../../components/evolution/2d-layers/index.js");

	var _dLayers2 = _interopRequireDefault(_dLayers);

	var _dLayers3 = __webpack_require__("../../components/evolution/3d-layers/index.js");

	var _bookmarklet = __webpack_require__("../../components/evolution/bookmarklet/index.js");

	var _bookmarklet2 = _interopRequireDefault(_bookmarklet);

	var _crumble = __webpack_require__("../../components/evolution/crumble/index.js");

	var _crumble2 = _interopRequireDefault(_crumble);

	var _dotValidator = __webpack_require__("../../components/evolution/dot-validator/index.js");

	var _dotValidator2 = _interopRequireDefault(_dotValidator);

	var _dropNavigationCarousel = __webpack_require__("../../components/evolution/drop-navigation-carousel/index.js");

	var _dropNavigationCarousel2 = _interopRequireDefault(_dropNavigationCarousel);

	var _fadeLinesOnScroll = __webpack_require__("../../components/evolution/fade-lines-on-scroll/index.js");

	var _fadeLinesOnScroll2 = _interopRequireDefault(_fadeLinesOnScroll);

	var _foldoutPopup = __webpack_require__("../../components/evolution/foldout-popup/index.js");

	var _foldoutPopup2 = _interopRequireDefault(_foldoutPopup);

	var _fullscreenGallery = __webpack_require__("../../components/evolution/fullscreen-gallery/index.js");

	var _fullscreenGallery2 = _interopRequireDefault(_fullscreenGallery);

	var _herald = __webpack_require__("../../components/evolution/herald/index.js");

	var _herald2 = _interopRequireDefault(_herald);

	var _ikon = __webpack_require__("../../components/evolution/ikon/index.js");

	var _ikon2 = _interopRequireDefault(_ikon);

	var _inputScanner = __webpack_require__("../../components/evolution/input-scanner/index.js");

	var _inputScanner2 = _interopRequireDefault(_inputScanner);

	var _minimalistCarouselTwo = __webpack_require__("../../components/evolution/minimalist-carousel-two/index.js");

	var _minimalistCarouselTwo2 = _interopRequireDefault(_minimalistCarouselTwo);

	var _popOver = __webpack_require__("../../components/evolution/pop-over/index.js");

	var _popOver2 = _interopRequireDefault(_popOver);

	var _psychotropicCurtain = __webpack_require__("../../components/evolution/psychotropic-curtain/index.js");

	var _psychotropicCurtain2 = _interopRequireDefault(_psychotropicCurtain);

	var _readabilityImprovementPanel = __webpack_require__("../../components/evolution/readability-improvement-panel/index.js");

	var _readabilityImprovementPanel2 = _interopRequireDefault(_readabilityImprovementPanel);

	var _safety = __webpack_require__("../../components/evolution/safety/index.js");

	var _safety2 = _interopRequireDefault(_safety);

	var _searchWithLongEdit = __webpack_require__("../../components/evolution/search-with-long-edit/index.js");

	var _searchWithLongEdit2 = _interopRequireDefault(_searchWithLongEdit);

	var _sift = __webpack_require__("../../components/evolution/sift/index.js");

	var _sift2 = _interopRequireDefault(_sift);

	var _singleInputForms = __webpack_require__("../../components/evolution/single-input-forms/index.js");

	var _svgPagination = __webpack_require__("../../components/evolution/svg-pagination/index.js");

	var _svgPagination2 = _interopRequireDefault(_svgPagination);

	var _versatileTable = __webpack_require__("../../components/evolution/versatile-table/index.js");

	var _versatileTable2 = _interopRequireDefault(_versatileTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* Evolution Components */
	(0, _documentReady2.default)(
	/* Standard Components */
	_audioPlayer2.default, _accordion2.default, _carousel2.default, _codeMarkup2.default, _cssAnimations2.default, _modals2.default, _standardForms2.default, _sticky2.default, _tabs2.default,
	/* Evolution Components */
	_dLayers2.default, _bookmarklet2.default, _crumble2.default, _dotValidator2.default, _dropNavigationCarousel2.default, _fadeLinesOnScroll2.default, _foldoutPopup2.default, _fullscreenGallery2.default, _herald2.default, _ikon2.default, _inputScanner2.default, _dLayers3.layerAnimations, _dLayers3.layerDragAndDrop, _minimalistCarouselTwo2.default, _popOver2.default, _psychotropicCurtain2.default, _readabilityImprovementPanel2.default, _safety2.default, _searchWithLongEdit2.default, _sift2.default, _singleInputForms.singleInputForm, _singleInputForms.minimalistForm, _svgPagination2.default,
	// text2Speech,
	_versatileTable2.default,

	// always keep as last call
	_preventDefault2.default);
	// import text2Speech from '../../components/evolution/text-2-speech';


	/* Standard Components */

/***/ }),

/***/ "../../components/evolution/dot-validator/index.js":
/***/ (function(module, exports) {

	"use strict";

	/*dotValidator
	Written by: Nathan J Plummer
	Contributions by: Melissa Miller*/

	/*jslint plusplus: true*/
	var i; //used in loop

	/*****Define dot colors******/
	//no input
	var dotNoInput = "#EDBE69";
	var dotInvalid = "#F2617A";
	var dotValid = "#31E96B";

	/*****START INTERNAL VALIDATION LIBRARY*****/
	//backend libraries used for validation

	var validator = {};

	//EMAIL
	validator.isEmail = function (input) {
	    //Test for valid Email address
	    return (/\w+([\.-]?\w+)+@[a-z0-9][a-z0-9-]+[a-z0-9]*?(\.[a-z0-9]{2,})+/gi.test(input)
	    );
	};

	//Phone Numbers
	validator.isPhoneNumber = function (input) {
	    //remove hyphens
	    input = input.split("-");
	    input = input.join("");

	    //Remove USA Country Code
	    if (input.substring(0, 1) === "1") {
	        input = input.substring(1);
	    }

	    //Check input is 10 digits and a number.  Report Errors if need be.
	    try {
	        if (input.length !== 10) {
	            throw "Not a valid USA Phone Number with 10 digits";
	        } else if (isNaN(input) === true) {
	            throw "Not a number";
	        }
	    } catch (err) {
	        console.log("ERROR: " + err);
	        return false;
	    }
	    return true;
	};

	//check if input is a valid date
	validator.isDate = function (input) {
	    //convert input to string
	    input = input.toString();

	    var isItDate = new Date(input);
	    console.log(isItDate);

	    try {
	        if (Number.isNaN(isItDate.getTime()) === true) {
	            throw input + " is not a valid date";
	        }
	    } catch (err) {
	        console.log("ERROR: " + err);
	        return false;
	    }

	    return true;
	};

	//removes symbols from a string.  Used in the Password validator and alphanumeric validator
	validator.withoutSymbols = function (input) {
	    return input.replace(/[^a-z0-9]/gi, "");
	};

	//check for strong password
	validator.password = function (input) {
	    //convert input to string
	    input = input.toString();

	    //check for minimum length of 12 characters
	    if (input.length < 12) {
	        return false;
	    }

	    //check for at least one symbol
	    if (input === validator.withoutSymbols(input)) {
	        return false;
	    }

	    return true;
	};

	//test inout is alphanumeric, used in username validator
	validator.isAlphanumeric = function (input) {
	    //checks if input is alphanumeric only
	    return (/^[a-z0-9]+$/gi.test(input)
	    );
	};

	//checks username is valid
	validator.username = function (input) {
	    return input.length >= 5 && validator.isAlphanumeric(input);
	};

	//validate zipcode
	validator.zipcode = function (input) {

	    //check input length is not six
	    //fixes edge case of five digits plus hyphen
	    //with no additional digits
	    if (input.length === 6) {
	        return false;
	    }

	    //convert to string
	    input = input.toString();

	    //remove hyphen if present
	    input = input.replace("-", "");

	    //check length is 5 or 9 digits
	    if (input.length !== 5 && input.length !== 9) {
	        return false;
	    }

	    //check string is only digits
	    if (Number.isNaN(input) === true) {
	        return false;
	    }

	    return true;
	};

	/*****END INTERNAL VALIDATION LIBRARAY*****/

	/*****validateMe sub functions- validation procedure via content type*****/

	var inputCode = {};

	//Email
	inputCode.email = function (targ) {
	    if (targ.value === "") {
	        targ.nextElementSibling.style.backgroundColor = dotNoInput;
	    } else if (validator.isEmail(targ.value)) {
	        targ.nextElementSibling.style.backgroundColor = dotValid;
	    } else {
	        targ.nextElementSibling.style.backgroundColor = dotInvalid;
	    }
	};

	//search
	inputCode.search = function (targ) {
	    if (targ.value === "") {
	        targ.nextElementSibling.style.backgroundColor = dotNoInput;
	    } else if (targ.value.length > 2) {
	        targ.nextElementSibling.style.backgroundColor = dotValid;
	    } else {
	        targ.nextElementSibling.style.backgroundColor = dotInvalid;
	    }
	};

	//telephone number
	inputCode.tel = function (targ) {
	    if (targ.value === "") {
	        targ.nextElementSibling.style.backgroundColor = dotNoInput;
	    } else if (validator.isPhoneNumber(targ.value)) {
	        targ.nextElementSibling.style.backgroundColor = dotValid;
	    } else {
	        targ.nextElementSibling.style.backgroundColor = dotInvalid;
	    }
	};

	//check input in number input is actually a number
	inputCode.number = function (targ) {
	    if (targ.value === "") {
	        targ.nextElementSibling.style.backgroundColor = dotNoInput;
	    } else if (!Number.isNaN(targ.value)) {
	        targ.nextElementSibling.style.backgroundColor = dotValid;
	    } else {
	        targ.nextElementSibling.style.backgroundColor = dotInvalid;
	    }
	};

	//NOTE: Once date is validated value is sent to the Age Box
	//The Age Box is then validated
	inputCode.date = function (targ) {

	    //calculate age based on DOB and then send results to the age box
	    function sendAge(DOB) {
	        var today = new Date();
	        var birthDate = new Date(DOB);
	        var age = today.getFullYear() - birthDate.getFullYear();
	        var m = today.getMonth() - birthDate.getMonth();
	        if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
	            age--;
	        }
	        var ageDisplay = document.getElementById("evo-c-dotValidator-age-id");
	        console.log(age);
	        ageDisplay.innerHTML = age;
	        if (age < 18) {
	            ageDisplay.nextElementSibling.style.backgroundColor = dotInvalid;
	        } else {
	            ageDisplay.nextElementSibling.style.backgroundColor = dotValid;
	        }
	        ageDisplay.classList.remove("evo-c-dotValidator-age-inactive");
	    }
	    //check if DOB if a valid date
	    if (targ.value === "") {
	        targ.nextElementSibling.style.backgroundColor = dotInvalid;
	    } else if (validator.isDate(targ.value)) {
	        targ.nextElementSibling.style.backgroundColor = dotValid;
	        sendAge(targ.value);
	    } else {
	        targ.nextElementSibling.style.backgroundColor = dotInvalid;
	    }
	};

	inputCode.password = function (targ) {
	    if (targ.value === "") {
	        targ.nextElementSibling.style.backgroundColor = dotNoInput;
	    } else if (validator.password(targ.value)) {
	        targ.nextElementSibling.style.backgroundColor = dotValid;
	    } else {
	        targ.nextElementSibling.style.backgroundColor = dotInvalid;
	    }
	};

	inputCode.username = function (targ) {
	    if (targ.value === "") {
	        targ.nextElementSibling.style.backgroundColor = dotNoInput;
	    } else if (validator.username(targ.value)) {
	        targ.nextElementSibling.style.backgroundColor = dotValid;
	    } else {
	        targ.nextElementSibling.style.backgroundColor = dotInvalid;
	    }
	};

	inputCode.zipcode = function (targ) {
	    if (targ.value === "") {
	        targ.nextElementSibling.style.backgroundColor = dotNoInput;
	    } else if (validator.zipcode(targ.value)) {
	        targ.nextElementSibling.style.backgroundColor = dotValid;
	    } else {
	        targ.nextElementSibling.style.backgroundColor = dotInvalid;
	    }
	};

	//select all inputs with dotValidator enabled
	var validotMe = document.querySelectorAll("[data-dotValidator='true']");
	//provides check validotMe is present.  If not, skip script.
	var len = validotMe && validotMe.length || false;

	//based on input type load appropriate function
	function validateMe(targ) {
	    if (targ.type === "search") {
	        inputCode.search(targ);
	    } else if (targ.type === "email") {
	        inputCode.email(targ);
	    } else if (targ.type === "tel") {
	        inputCode.tel(targ);
	    } else if (targ.type === "number") {
	        inputCode.number(targ);
	    } else if (targ.type === "date") {
	        inputCode.date(targ);
	    } else if (targ.type === "password") {
	        inputCode.password(targ);
	    } else if (targ.type === "text" && targ.previousElementSibling.innerHTML === "Username") {
	        inputCode.username(targ);
	    } else if (targ.type === "text" && targ.previousElementSibling.innerHTML === "Zipcode") {
	        inputCode.zipcode(targ);
	    }
	}

	//for loop will add event listener to inputs
	//will automatically detect the appropriate event listener
	//len checks that validotMe is present
	//if not skip rest of script
	if (len) {
	    for (i = 0; i < validotMe.length; i++) {
	        if (validotMe[i].type === "date") {
	            validotMe[i].addEventListener("blur", function (event) {
	                validateMe(this);
	            });
	        } else {
	            validotMe[i].addEventListener("input", function (event) {
	                validateMe(this);
	            });
	        }
	    }
	}

/***/ }),

/***/ "../../components/evolution/drop-navigation-carousel/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  'use strict';

	  var dropCircles = document.querySelectorAll('.evo_c-nav-drop-carousel__label-container');
	  var innerCircles = document.querySelectorAll('.evo_c-nav-drop-carousel__drop-label');
	  var slides = document.querySelectorAll('.evo_c-nav-drop-carousel__slide');

	  if (dropCircles.length > 0) {
	    dropCircles.forEach(function (element, index) {
	      element.addEventListener('click', drop);
	    });
	  }

	  /* controls the drop for circle buttons except last one */

	  function drop(e) {
	    var outerCircle = e.target.parentNode;
	    var circle = e.target;
	    var id = circle.getAttribute('id');

	    /* if statement for when we click the first circle */
	    if (id === 'drop-1') {
	      var slideCurrent = slides[0];
	      /* use for loop to run through nav circles in add .js-drop class and remove .js-selected from circles that have this class */
	      for (var i = 1; i < dropCircles.length; i++) {
	        dropCircles[i].classList.add('js-drop');
	        innerCircles[i].classList.remove('js-selected');
	        slides[i].classList.remove('js-slide__show');
	      }
	      /* these statements add these classes to the circle that was clicked on in this case circle 1 */
	      outerCircle.classList.add('js-drop');
	      circle.classList.add('js-selected');
	      slideCurrent.classList.add('js-slide__show');
	    }

	    if (id === 'drop-2') {
	      var slideCurrent = slides[1];

	      for (var i = 2; i < dropCircles.length; i++) {
	        dropCircles[i].classList.add('js-drop');
	        innerCircles[i].classList.remove('js-selected');
	        slides[i].classList.remove('js-slide__show');
	      }

	      /* these statements will remove the circles that are  above classes */
	      dropCircles[0].classList.remove('js-drop');
	      innerCircles[0].classList.remove('js-selected');
	      slides[0].classList.remove('js-slide__show');
	      /* these statements add to the circle that was clicked on in this case circle 2 */
	      outerCircle.classList.add('js-drop');
	      circle.classList.add('js-selected');
	      slideCurrent.classList.add('js-slide__show');
	    }

	    if (id === 'drop-3') {
	      var slideCurrent = slides[2];

	      for (var i = 2; i < dropCircles.length; i++) {
	        dropCircles[i].classList.add('js-drop');
	        innerCircles[i].classList.remove('js-selected');
	        slides[i].classList.remove('js-slide__show');
	      }

	      /* these statements will remove the circles that are  above classes */

	      for (var i = 0; i < 2; i++) {
	        dropCircles[i].classList.remove('js-drop');
	        innerCircles[i].classList.remove('js-selected');
	        slides[i].classList.remove('js-slide__show');
	      }

	      /* these statements add to the circle that was clicked on in this case circle 2 */
	      outerCircle.classList.add('js-drop');
	      circle.classList.add('js-selected');
	      slideCurrent.classList.add('js-slide__show');
	    }

	    if (id === 'drop-4') {
	      var slideCurrent = slides[3];

	      for (var i = 2; i < dropCircles.length; i++) {
	        dropCircles[i].classList.add('js-drop');
	        innerCircles[i].classList.remove('js-selected');
	        slides[i].classList.remove('js-slide__show');
	      }

	      /* these statements will remove the circles that are  above classes */

	      for (var i = 0; i < 3; i++) {
	        dropCircles[i].classList.remove('js-drop');
	        innerCircles[i].classList.remove('js-selected');
	        slides[i].classList.remove('js-slide__show');
	      }

	      /* these statements add to the circle that was clicked on in this case circle 2 */
	      outerCircle.classList.add('js-drop');
	      circle.classList.add('js-selected');
	      slideCurrent.classList.add('js-slide__show');
	    }

	    if (id === 'drop-5') {
	      var slideCurrent = slides[4];

	      for (var i = 2; i < dropCircles.length; i++) {
	        dropCircles[i].classList.add('js-drop');
	        innerCircles[i].classList.remove('js-selected');
	        slides[i].classList.remove('js-slide__show');
	      }

	      /* these statements will remove the circles that are  above classes */

	      for (var i = 0; i < 4; i++) {
	        dropCircles[i].classList.remove('js-drop');
	        innerCircles[i].classList.remove('js-selected');
	        slides[i].classList.remove('js-slide__show');
	      }

	      /* these statements add to the circle that was clicked on in this case circle 2 */
	      outerCircle.classList.add('js-drop');
	      circle.classList.add('js-selected');
	      slideCurrent.classList.add('js-slide__show');
	    }
	  }

	  /* function that pushes last circle to bottom immediately */
	  if (dropCircles.length > 0) {
	    (function defaultDrop() {
	      slides = document.querySelectorAll('.evo_c-nav-drop-carousel__slide');
	      var circle = document.getElementById('drop-5');
	      var slide = slides[4];
	      var outerCircle = circle.parentNode;

	      slide.classList.add('js-slide__show');
	      outerCircle.classList.add('js-drop');
	      circle.classList.add('js-selected');
	    })();
	  }
	};

/***/ }),

/***/ "../../components/evolution/fade-lines-on-scroll/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  /*FADE LINES ON SCROLL COMPONENT*/
	  var fadedTextBlocks = document.querySelectorAll('.js-c-fade-lines-target');
	  var wordMatch = /(\S+\s*)/g;

	  for (var i = 0; i < fadedTextBlocks.length; i++) {
	    var wrappedWordsInSpanTags = fadedTextBlocks[i].innerHTML.replace(wordMatch, '<span>$1</span>');
	    fadedTextBlocks[i].innerHTML = wrappedWordsInSpanTags;

	    for (var j = 0; j < fadedTextBlocks[i].childNodes.length; j++) {
	      var randomTopDistValue = Math.random() * 300 + 80;
	      // var randomRotationValue = Math.random() * 360;
	      if (fadedTextBlocks[i].childNodes[j].tagName === "SPAN") {
	        fadedTextBlocks[i].childNodes[j].style.position = "relative";
	        fadedTextBlocks[i].childNodes[j].style.top = randomTopDistValue + "px";
	        fadedTextBlocks[i].childNodes[j].style.opacity = 0;
	        // fadedTextBlocks[i].childNodes[j].style.transform = "rotate(" + randomRotationValue + "deg)";
	        fadedTextBlocks[i].childNodes[j].style.transition = 'top 1s, opacity 1s, transform 1s';
	      }
	    }
	  }

	  window.onscroll = function () {
	    var fadedBlockParagraphPositions = [];
	    for (var k = 0; k < fadedTextBlocks.length; k++) {
	      fadedBlockParagraphPositions.push(fadedTextBlocks[k].getBoundingClientRect());
	      if ((window.pageYOffset || document.documentElement.scrollTop) + 300 >= fadedBlockParagraphPositions[k].top + (window.pageYOffset || document.documentElement.scrollTop)) {
	        for (var l = 0; l < fadedTextBlocks[k].childNodes.length; l++) {
	          if (fadedTextBlocks[k].childNodes[l].tagName === "SPAN") {
	            fadedTextBlocks[k].childNodes[l].style.top = 0;
	            // fadedTextBlocks[k].childNodes[l].style.transform = "rotate(0deg)";
	            fadedTextBlocks[k].childNodes[l].style.opacity = 1;
	          }
	        }
	      }
	    }
	  };
	};

/***/ }),

/***/ "../../components/evolution/foldout-popup/index.js":
/***/ (function(module, exports) {

	"use strict";

/***/ }),

/***/ "../../components/evolution/fullscreen-gallery/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  (function () {
	    'use strict';

	    var fsCarousel = {
	      elements: {
	        carouselEl: '.evo_c-fs-gallery',
	        slide: '.evo_c-fs-gallery__slide',
	        buttons: {
	          closeBtn: '.evo_c-fs-gallery__icon-close',
	          nextBtn: '.evo_c-fs-gallery__icon-next',
	          prevBtn: '.evo_c-fs-gallery__icon-prev'
	        }
	      },
	      slideIndicatorPositions: {},

	      /**
	       * Get the fullscreen carousel element
	       * @return {DOM Node} a DOM node of the fs carousel.
	       */
	      getCarouselEl: function getCarouselEl() {
	        return document.querySelector(this.elements.carouselEl);
	      },

	      getSlides: function getSlides() {
	        return this.getCarouselEl().querySelectorAll(this.elements.slide);
	      },

	      getElement: function getElement(selector) {
	        return this.getCarouselEl().querySelector(selector);
	      },

	      getElements: function getElements(selector) {
	        return this.getCarouselEl().querySelectorAll(selector);
	      },

	      removeElements: function removeElements(selector) {

	        var elements = this.getElements(selector);

	        elements && elements.forEach(function (el, index) {
	          el.remove();
	        });
	      },

	      closeCarousel: function closeCarousel() {
	        var nextButton = this.getElement(this.elements.buttons.nextBtn),
	            prevButton = this.getElement(this.elements.buttons.prevBtn),
	            carousel = this.getCarouselEl();

	        nextButton.classList.remove('evo_s-is-hidden');
	        prevButton.classList.remove('evo_s-is-hidden');
	        carousel.classList.remove('evo_s-is-open');
	        //carousel.classList.add('evo_c-fs-gallery__carousel--close');
	        //setTimeout(function() {
	        fsCarousel.getCarouselEl().classList.remove('evo_s-is-active');
	        //}, 300);


	        this.removeElements('.evo_c-fs-gallery__slides span');
	      },

	      loadSlideIndicators: function loadSlideIndicators() {

	        var slideWrapper = this.getElement('.evo_c-fs-gallery__slides'),
	            num = this.getSlides().length,
	            slideHeight = document.querySelector('.evo_c-fs-gallery.evo_s-is-active .evo_c-fs-gallery__slide').offsetHeight,
	            fragment = document.createDocumentFragment(),
	            span,
	            val,
	            bottom,
	            top,
	            i,
	            position;

	        if (slideWrapper) {

	          for (i = 0; i < num; i++) {

	            position = {}; // reset object
	            span = document.createElement('span');
	            span.setAttribute('class', 'evo_c-fs-gallery__bars');
	            val = i * 3;
	            top = 'top: ' + val + 'px';
	            val = slideHeight - 39 + i * 3;
	            bottom = 'top: ' + val + 'px';
	            position.top = top;
	            position.bottom = bottom;

	            this.slideIndicatorPositions[i] = position;
	            span.style.cssText = top;

	            fragment.appendChild(span);
	          }

	          slideWrapper.appendChild(fragment);
	        }
	      },

	      positionActiveSlideIndicator: function positionActiveSlideIndicator(index) {

	        var rulers = this.getElements('.evo_c-fs-gallery__slides > span');

	        if (rulers) {
	          rulers[index].style.cssText = this.slideIndicatorPositions[index].bottom;
	        }
	      },

	      nextSlide: function nextSlide() {
	        var slides = this.getSlides(),
	            slideWrapper = this.getElement('.evo_c-fs-gallery__slides'),
	            rulers = this.getElements('.evo_c-fs-gallery__slides > span'),

	        //captions = this.getElements('.evo_c-fs-gallery__slide figcaption'),
	        nextButton = this.getElement(this.elements.buttons.nextBtn),
	            prevButton = this.getElement(this.elements.buttons.prevBtn);

	        if (curPos < slides.length && slides) {

	          var slideHeight = slides[curPos].offsetHeight;

	          if (slides[curPos]) {
	            slideWrapper.style.height = slideHeight + 'px;';
	            slides[curPos].classList.remove('evo_h-mask-up');
	            slides[curPos].classList.add('evo_h-mask-down');
	            curPos++;
	            rulers[curPos].style.cssText = 'transition: all .3s cubic-bezier(0.190, 1.000, 0.220, 1.000)';
	            rulers[curPos].style.cssText += this.slideIndicatorPositions[curPos].bottom;
	            if (prevButton.classList.contains('evo_s-is-hidden')) {
	              prevButton.classList.remove('evo_s-is-hidden');
	            }
	            if (curPos === slides.length - 1) {
	              nextButton.classList.add('evo_s-is-hidden');
	            }
	            if (curPos < slides.length) {
	              slides[curPos].classList.add('evo_c-fs-gallery__slide--active');
	            }
	          }
	        }
	      },

	      prevSlide: function prevSlide() {
	        var slides = this.getSlides(),
	            rulers = this.getElements('.evo_c-fs-gallery__slides > span'),
	            nextButton = this.getElement(this.elements.buttons.nextBtn),
	            prevButton = this.getElement(this.elements.buttons.prevBtn);

	        if (curPos > 0) {

	          if (rulers[curPos]) {
	            curPos--;
	            slides[curPos].classList.remove('evo_h-mask-down');
	            slides[curPos].classList.add('evo_h-mask-up');
	            rulers[curPos].style.cssText = 'transition: all .3s cubic-bezier(0.190, 1.000, 0.220, 1.000)';
	            rulers[curPos].style.cssText += this.slideIndicatorPositions[curPos].top;

	            if (nextButton.classList.contains('evo_s-is-hidden')) {
	              nextButton.classList.remove('evo_s-is-hidden');
	            }

	            if (curPos === 0) {
	              prevButton.classList.add('evo_s-is-hidden');
	            }
	          }
	        }
	      }

	    },
	        curPos = 0,
	        slides;

	    // When the full galler element does not exists in the current context
	    // do nothing
	    if (!document.querySelector(fsCarousel.elements.carouselEl)) {
	      return;
	    }

	    slides = fsCarousel.getElements(fsCarousel.elements.slide);

	    slides && slides.forEach(function (element, index) {
	      element.addEventListener('click', function () {
	        var pos = index,
	            slides = fsCarousel.getSlides(),
	            nextButton = fsCarousel.getElement(fsCarousel.elements.buttons.nextBtn),
	            prevButton = fsCarousel.getElement(fsCarousel.elements.buttons.prevBtn);

	        fsCarousel.getCarouselEl().classList.add('evo_s-is-active', 'evo_s-is-open');
	        this.classList.add('evo_c-fs-gallery__slide--active');
	        fsCarousel.loadSlideIndicators('span');

	        fsCarousel.positionActiveSlideIndicator(index);
	        curPos = index;
	        if (index === slides.length - 1) {
	          nextButton.classList.add('evo_s-is-hidden');
	        } else if (index === 0) {
	          prevButton.classList.add('evo_s-is-hidden');
	        }
	      }, false);
	    });

	    fsCarousel.getElement(fsCarousel.elements.buttons.nextBtn).addEventListener('click', function (event) {
	      fsCarousel.nextSlide();
	    });

	    fsCarousel.getElement(fsCarousel.elements.buttons.prevBtn).addEventListener('click', function (event) {
	      fsCarousel.prevSlide();
	    });

	    fsCarousel.getElement(fsCarousel.elements.buttons.closeBtn).addEventListener('click', function (event) {

	      fsCarousel.closeCarousel();
	      var activeSlide = fsCarousel.getElement('.evo_c-fs-gallery__slide--active'),
	          slideWrapper = fsCarousel.getElement('.evo_c-fs-gallery__slides');

	      if (slideWrapper) {
	        slideWrapper.style.height = 'unset';
	      }

	      activeSlide && activeSlide.classList.remove('evo_c-fs-gallery__slide--active');

	      slides && slides.forEach(function (element, index) {
	        element.classList.remove('evo_h-mask-up', 'evo_h-mask-down');
	      });
	    }, false);

	    document.body.addEventListener('keyup', function (event) {

	      if (event.keyCode === 27) {

	        var activeSlide = fsCarousel.getElement('.evo_c-fs-gallery__slide--active');

	        fsCarousel.closeCarousel();
	        activeSlide && activeSlide.classList.remove('evo_c-fs-gallery__slide--active');
	      }

	      if (event.keyCode === 39 && curPos < slides.length - 1) {
	        fsCarousel.nextSlide();
	      } else if (event.keyCode === 37 && curPos > 0) {
	        fsCarousel.prevSlide();
	      }
	    }, false);
	  })();
	};

/***/ }),

/***/ "../../components/evolution/herald/index.js":
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  var herald = {
	    init: function init() {
	      this.cacheDOM();
	      this.bindEvent();
	      this.loadStyles();
	    },
	    cacheDOM: function cacheDOM() {
	      this.component = document.getElementById("evo_c-herald");
	      this.content = document.getElementById("evo_c-herald__content");
	      this.trigger = document.getElementById("evo_c-herald__trigger");
	      this.rbn = document.getElementById("evo_c-herald__ribbon");
	      this.messageHeight = this.content.offsetHeight;
	      this.pLength = document.querySelectorAll(".evo_c-herald__message p").length;
	      this.trigger.children[0].innerHTML = this.pLength;
	      this.triggerValue = this.trigger.innerHTML;
	    },
	    bindEvent: function bindEvent() {
	      this.trigger.addEventListener("click", this.announce.bind(this));
	    },
	    announce: function announce() {
	      this.component.classList.toggle("announce");
	      this.rbn.classList.toggle("lengthen");

	      if (!this.component.classList.contains("announce")) {
	        this.trigger.innerHTML = this.triggerValue;
	      } else {
	        this.trigger.innerHTML = "X";
	      }
	    },
	    loadStyles: function loadStyles() {
	      this.component.classList.remove('no-js');
	      this.trigger.classList.add("clickable");
	      this.content.style.webkitTransform = "translateY(-" + this.messageHeight + "px)";
	    }
	  };

	  var listItems = document.querySelectorAll('.evo_c-herald__content');

	  if (listItems.length > 0) {
	    herald.init();
	  }
	};

/***/ }),

/***/ "../../components/evolution/ikon/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  'use strict';

	  var init = function init() {
	    var ikon = document.querySelector('.js-evo-c-ikon');
	    if (ikon) {
	      var ikonMembers = ikon.querySelectorAll('.js-evo-c-ikon-member');

	      var rightmost = ikonMembers.length - 1;
	      for (var i = rightmost; i >= 0; --i) {
	        if (ikonMembers[i].getBoundingClientRect().right > ikonMembers[rightmost].getBoundingClientRect().right) {
	          rightmost = i;
	          break;
	        }
	      }

	      [].forEach.call(ikonMembers, function (member) {
	        member.addEventListener('click', function () {
	          this.classList.add('evo_c-ikon__member--is-hovered');
	        });

	        var info = member.querySelector('.js-evo-c-ikon-member-info');
	        info.querySelector('.js-evo-c-ikon-close-btn').addEventListener('click', function (event) {
	          event.stopPropagation();
	          member.classList.remove('evo_c-ikon__member--is-hovered');
	        });

	        if (ikonMembers.length > 2) {
	          if (info.classList.contains('evo_c-ikon__member-info--leftmost')) {
	            info.classList.remove('evo_c-ikon__member-info--leftmost');
	          }

	          if (info.classList.contains('evo_c-ikon__member-info--rightmost')) {
	            info.classList.remove('evo_c-ikon__member-info--rightmost');
	          }

	          var leftmostBCR = ikonMembers[0].getBoundingClientRect();
	          var rightmostBCR = ikonMembers[rightmost].getBoundingClientRect();
	          var memberBCR = member.getBoundingClientRect();

	          if (memberBCR.left !== rightmostBCR.left && memberBCR.left === leftmostBCR.left) {
	            info.classList.add('evo_c-ikon__member-info--leftmost');
	          } else if (memberBCR.right !== leftmostBCR.right && memberBCR.right === rightmostBCR.right) {
	            info.classList.add('evo_c-ikon__member-info--rightmost');
	          }
	        }
	      });
	    }
	  };

	  init(); // window load call

	  window.addEventListener('resize', function () {
	    // window resize call
	    init();
	  });
	};

/***/ }),

/***/ "../../components/evolution/input-scanner/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var inputScannerInputConts = document.querySelectorAll('.evo_c-input-scanner__inputContainer');
	  var inputScanner = document.querySelector('.evo_c-input-scanner');

	  //----------------------------------------------------------------
	  //                 INPUT ELEMENT LOGIC
	  //----------------------------------------------------------------

	  for (var i = 0; i < inputScannerInputConts.length; i++) {

	    var inputScannerInput = inputScannerInputConts[i].querySelector('.evo_c-input-scanner__input');
	    var inputScannerMask = inputScannerInputConts[i].cloneNode(true);
	    inputScannerMask.firstElementChild.setAttribute('placeholder', '');
	    inputScannerMask.className = 'evo_c-input-scanner__inputMask';

	    inputScannerMask.querySelector('input').removeAttribute('required');
	    inputScannerMask.querySelector('input').removeAttribute("tabindex");
	    inputScannerMask.querySelector('input').addEventListener("focus", function () {
	      this.parentNode.parentNode.querySelector('input').focus();
	    });
	    // inputScannerMask.querySelector('input').setAttribute("disabled", true);
	    inputScannerInputConts[i].appendChild(inputScannerMask);

	    inputScannerInput.addEventListener('focus', function () {
	      var inputScannerMask = this.parentNode.querySelector('.evo_c-input-scanner__inputMask');
	      inputScannerMask.classList.remove('evo_c-input-scanner__inputMaskCover');
	      inputScannerMask.classList.add('evo_c-input-scanner__cursor');
	    });

	    inputScannerInput.addEventListener('blur', function () {
	      var inputScannerMask = this.parentNode.querySelector('.evo_c-input-scanner__inputMask');
	      inputScannerMask.classList.remove('evo_c-input-scanner__cursor');
	      inputScannerMask.classList.remove('evo_c-input-scanner__invalidInput');
	      if (this.checkValidity()) {
	        inputScannerMask.querySelector('.evo_c-input-scanner__input').value = " " + this.value;
	        inputScannerMask.classList.add('evo_c-input-scanner__inputMaskCover');
	      }
	    });

	    inputScannerInput.addEventListener('invalid', function (e) {
	      e.preventDefault();
	    });

	    inputScannerInputConts[i].addEventListener('click', inputScannerMaskClick);
	  }

	  function inputScannerMaskClick() {
	    var inputScannerInput = this.querySelector('.evo_c-input-scanner__input');
	    var inputScannerMask = this.querySelector('.evo_c-input-scanner__inputMask');
	    inputScannerMask.classList.remove('evo_c-input-scanner__maskCover');
	    inputScannerMask.classList.add('evo_c-input-scanner__cursor');
	    inputScannerInput.focus();
	  }

	  //----------------------------------------------------------------
	  //                 SUBMIT ELEMENT LOGIC
	  //----------------------------------------------------------------

	  var inputScannerSubmitConts = document.querySelectorAll('.evo_c-input-scanner__submitContainer');
	  //console.log(inputScannerSubmitConts.length)
	  for (var i = 0; i < inputScannerSubmitConts.length; i++) {
	    var inputScannerSubmit = inputScannerSubmitConts[i].querySelector('.evo_c-input-scanner__submit');
	    var inputScannerSubmitMask = inputScannerSubmitConts[i].cloneNode(true);

	    inputScannerSubmitMask.className = 'evo_c-input-scanner__submitMask';
	    inputScannerSubmitConts[i].appendChild(inputScannerSubmitMask);

	    inputScannerSubmit.addEventListener('click', function () {
	      if (inputScanner.checkValidity()) {
	        var inputScannerSubmitMask = this.parentNode.querySelector('.evo_c-input-scanner__submitMask');
	        inputScannerSubmitMask.querySelector('.evo_c-input-scanner__submit').setAttribute('value', 'Thanks! Check your email.');
	        inputScannerSubmitMask.classList.add('evo_c-input-scanner__submitMaskCover');

	        for (var j = 0; j < inputScannerInputConts.length; j++) {
	          inputScannerInputConts[j].querySelector('.evo_c-input-scanner__input').disabled = true;
	          inputScannerInputConts[j].querySelector('.evo_c-input-scanner__inputMask input').classList.add('evo_c-input-scanner__clearInput');
	          inputScannerInputConts[j].removeEventListener('click', inputScannerMaskClick);
	        }
	      } else {
	        inputScanner.querySelector(':invalid').focus();
	        inputScanner.querySelector(':invalid ~ .evo_c-input-scanner__inputMask').classList.add('evo_c-input-scanner__invalidInput');
	      }
	    });
	  }
	};

/***/ }),

/***/ "../../components/evolution/minimalist-carousel-two/index.js":
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    var carousel = document.getElementById("evo_c-carousel-border-nav") || undefined;

	    if (carousel !== undefined) {
	        var innerDefault = "evo_c-carousel-border-nav__inner--default";
	        var innerActive = "evo_c-carousel-border-nav__inner--active";
	        var borderActive = "evo_c-carousel-border-nav__border--active";
	        var borderDefault = "evo_c-carousel-border-nav__border--default";

	        carousel.addEventListener("click", function (e) {
	            if (e.target.nodeName === "IMG") {
	                var clickedLayer = e.target.parentNode.parentNode;
	            } else {
	                clickedLayer = e.target.parentNode;
	            }

	            var targetBorder = clickedLayer.children[0];
	            var topLayerIndex = 0;
	            var carouselLayers = document.querySelectorAll(".evo_c-carousel-border-nav__layer");

	            for (var i = 0; i < carouselLayers.length; i++) {
	                if (clickedLayer === carouselLayers[i]) {
	                    //target the clicked
	                    // layer
	                    var currentLayerIndex = i;
	                }
	            }
	            if (/default/.test(targetBorder.className)) {
	                // if the clicked
	                // element has default class toggle the active
	                // classes
	                for (var j = currentLayerIndex; j >= topLayerIndex; j--) {
	                    //apply to
	                    // current and all layers on top of current
	                    (function hideLayers() {
	                        var layer = document.querySelectorAll(".evo_c-carousel-border-nav__layer")[j];
	                        var inner = layer.children[1];
	                        var border = layer.children[0];
	                        var styles = window.getComputedStyle(layer);
	                        var zIndex = styles.getPropertyValue('z-index');

	                        inner.classList.remove(innerDefault);
	                        inner.classList.add(innerActive);
	                        border.classList.remove(borderDefault);
	                        border.classList.add(borderActive);
	                        if (zIndex > 0) {
	                            //Image is
	                            setTimeout(function () {
	                                layer.style.zIndex = zIndex * -1;
	                            }, 500);
	                        }
	                    })();
	                }
	            } else if (/active/.test(targetBorder.className)) {
	                //toggle the default
	                // classes
	                for (var k = currentLayerIndex; k < 3; k++) {
	                    //apply to
	                    // current and all layers below current
	                    var layer = document.querySelectorAll(".evo_c-carousel-border-nav__layer")[k];
	                    var inner = layer.children[1];
	                    var border = layer.children[0];
	                    var styles = window.getComputedStyle(layer);
	                    var zIndex = styles.getPropertyValue('z-index');

	                    inner.classList.remove(innerActive);
	                    inner.classList.add(innerDefault);
	                    border.classList.remove(borderActive);
	                    border.classList.add(borderDefault);
	                    if (zIndex < 0) {
	                        layer.style.zIndex = zIndex * -1;
	                    }
	                }
	            }
	        });
	    }
	};

/***/ }),

/***/ "../../components/evolution/pop-over/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  var links = document.querySelectorAll('.evo_c-popover__text');
	  var closes = document.querySelectorAll('.evo_c-popover__content--close');
	  var i = 0,
	      len = links && links.length || 0;
	  for (i; i < len; i++) {
	    links[i].addEventListener('click', openSlideOver, false);
	    closes[i].addEventListener('click', closeSlideOver, false);
	  }

	  function clearPopup(e) {
	    var popups = document.querySelectorAll('.evo_c-pop_over');
	    var i = 0,
	        len = popups && popups.length || 0;
	    for (i; i < len; i++) {
	      if (popups[i].className.indexOf('h-hide') === -1) {
	        hide(popups[i], 0);
	        removeClass(popups[i].children[0], 'h-animated-height');
	        removeClass(popups[i].children[0].children[0], 'evo_c-popover__content--visible');
	        addClass(popups[i].children[0].children[0], 'evo_c-popover__content--invisible');
	      }
	    }
	  }

	  function closeSlideOver(e) {
	    var el = e.target;
	    var contentWrapper = el.parentNode;
	    var content = contentWrapper.children[0];

	    removeClass(contentWrapper.parentNode, 'h-popout');
	    removeClass(contentWrapper, 'h-animated-height');
	    removeClass(content, 'evo_c-popover__content--visible');
	    addClass(content, 'evo_c-popover__content--invisible');
	    hide(contentWrapper.parentNode, 500);
	  }

	  function openSlideOver(e) {
	    clearPopup();
	    var el = document.getElementById(this.htmlFor);

	    var animatedHeight = document.querySelector('#' + this.htmlFor + ' .evo_c-popover__content');
	    var content = document.querySelector('#' + this.htmlFor + ' .evo_c-popover__content>div');

	    placeEl(el, this.offsetLeft, this.offsetTop - 10);
	    show(el, 0);
	    addClass(el, 'h-popout');
	    addClass(animatedHeight, 'h-animated-height');
	    removeClass(content, 'evo_c-popover__content--invisible');
	    addClass(content, 'evo_c-popover__content--visible');
	  }

	  //place element in specific cords
	  function placeEl(el, x_pos, y_pos) {
	    el.style.left = x_pos - el.offsetWidth / 3 + 'px';
	    el.style.top = y_pos + 'px';
	  }

	  function hide(el, time) {
	    setTimeout(function () {
	      addClass(el, 'h-hide');
	    }, time);
	  }

	  function show(el, time) {
	    setTimeout(function () {
	      removeClass(el, 'h-hide');
	    }, time);
	  }

	  function hasClass(el, className) {
	    if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	  }

	  function addClass(el, className) {
	    if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += " " + className;
	  }

	  function removeClass(el, className) {
	    if (el.classList) el.classList.remove(className);else if (hasClass(el, className)) {
	      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	      el.className = el.className.replace(reg, ' ');
	    }
	  }

	  /*-------------------------------*/
	};

/***/ }),

/***/ "../../components/evolution/psychotropic-curtain/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var showCurtain = function showCurtain(event) {
	  var curtain = event.currentTarget.nextElementSibling;
	  if (curtain) {
	    var timeout = Number(curtain.getAttribute('data-timeout'));

	    curtain.classList.add('evo_c-curtain--js-animate', 'evo_c-curtain--show');
	    setTimeout(function () {
	      curtain.classList.remove('evo_c-curtain--show');
	      setTimeout(function () {
	        curtain.classList.add('evo_c-curtain--js-animate');
	      }, 1000);
	    }, timeout);
	  }
	};

	var showGifCurtain = function showGifCurtain(event) {
	  var curtain = event.currentTarget.nextElementSibling;
	  if (curtain) {
	    var timeout = Number(curtain.getAttribute('data-timeout'));

	    curtain.classList.add('evo_c-curtain--show');

	    var xhr = new XMLHttpRequest();

	    xhr.onload = function () {
	      if (xhr.status === 200) {
	        //console.log(xhr)
	        curtain.querySelector('.evo_c-curtain__error').style.display = 'none';
	        var img = curtain.querySelector('img') || document.createElement('IMG');
	        img.setAttribute('src', xhr.data.url);
	        img.style.display = 'inline-block';
	      }
	    };

	    xhr.onerror = function () {
	      console.log(xhr);
	      console.log(xhr.error);
	      curtain.querySelector('img').style.display = 'none';
	      curtain.querySelector('.evo_c-curtain__error').style.display = 'block';
	    };

	    xhr.open('GET', 'https://freemusicarchive.org/api/get/albums.json?api_key=TBHJ7JH66M2F468E');
	    xhr.send();

	    setTimeout(function () {
	      curtain.classList.remove('evo_c-curtain--show');
	    }, timeout);
	  }
	};

	exports.default = function () {
	  var brainstormButton = document.getElementById('evo_c-curtain-brainstorm-button');
	  brainstormButton && brainstormButton.addEventListener('click', showCurtain);
	  var gifButton = document.getElementById('evo_c-curtain-gif-button');
	  gifButton && gifButton.addEventListener('click', showGifCurtain);
	};

/***/ }),

/***/ "../../components/evolution/readability-improvement-panel/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var docElementBody = document.querySelector('html'),
	      computedBody = document.getElementsByTagName('body')[0],
	      computedBkgColor = window.getComputedStyle(computedBody, null).backgroundColor,
	      toggleInvertColors = document.getElementById('toggle_InvertColors'),
	      toggleGrayscale = document.getElementById('toggle_Grayscale'),
	      toggleLargerFont = document.getElementById('toggle_LargerFont'),
	      readabilityToggleContainer = document.querySelector('.evo_c-readabilityPlaceholder--relative');

	  docElementBody.classList += " evo_c-readabilityDocument";
	  // computedBody.style.height = "100%";

	  /*************
	    Chrome, FF, and Safari each behave differently with invert(), so must set
	    background-color on `html`. Get the color from the `body` elements computed
	    value. If background-color is not set on `body` the computed values are
	    `rgba(0, 0, 0, 0)` (Chrome) or `transparent` (FF), set the value to `rgb(255, 255, 255)` in
	    that case.
	  *************/

	  if (computedBkgColor.toString() === 'rgba(0, 0, 0, 0)' || computedBkgColor.toString() === 'transparent') {
	    computedBody.style.backgroundColor = 'rgb(255, 255, 255)';
	    docElementBody.style.backgroundColor = 'rgb(255, 255, 255)';
	  } else {
	    // set body `background-color` to the computed value
	    computedBody.style.backgroundColor = computedBkgColor;
	    docElementBody.style.backgroundColor = computedBkgColor;
	  }

	  /*************
	    The browser will cancel the invert and grayscale filters if one is applied
	    to an element that already has the other one. i.e., only the last one
	    applied will have effect. It is possible to chain the filters as
	    `filter: grayscale(1) invert(100%)` but this is not the effect we want. So,
	    if one of these is already toggled on, turn off the other.
	  *************/

	  function invertColors() {
	    if (toggleInvertColors.checked) {
	      toggleGrayscale.checked = false;
	      docElementBody.classList.remove('evo_c-readability_Grayscale');
	      docElementBody.classList += ' evo_c-readability_Invert';
	    } else {
	      // togle the checked property and remove *invert* classes
	      toggleInvertColors.removeAttribute('checked');
	      docElementBody.classList.remove('evo_c-readability_Invert');
	    }
	  }

	  function grayscaleColors() {
	    if (toggleGrayscale.checked) {
	      toggleInvertColors.checked = false;
	      docElementBody.classList.remove('evo_c-readability_Invert');
	      docElementBody.classList += ' evo_c-readability_Grayscale';
	    } else {
	      // togle the checked property and remove *grayscale* classes
	      docElementBody.classList.remove('evo_c-readability_Grayscale');
	    }
	  }

	  function enlargeFont() {
	    if (toggleLargerFont.checked) {
	      docElementBody.classList += ' evo_c-readability_LargerFont';
	    } else {
	      // remove larger font class
	      docElementBody.classList.remove('evo_c-readability_LargerFont');
	    }
	  }

	  /* event listener */

	  // first check if the element exists, and if it does, then assign the listener
	  if (readabilityToggleContainer) {
	    readabilityToggleContainer.addEventListener('click', function (event) {
	      if (event.target.id === 'toggle_InvertColors') {
	        invertColors();
	      } else if (event.target.id === 'toggle_Grayscale') {
	        grayscaleColors();
	      } else if (event.target.id === 'toggle_LargerFont') {
	        enlargeFont();
	      }
	    }, false);
	  }
	};

/***/ }),

/***/ "../../components/evolution/safety/index.js":
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  // Counter variable
	  var i = 0;
	  // Seconds to wait for submit
	  var t = 3;

	  var timInt;

	  var timOut;

	  // Counter element that displays t
	  var counter = document.getElementsByClassName("evo_c-safety__count")[0];

	  // Alert element
	  var alert = document.getElementsByClassName("evo_c-safety__alert")[0];

	  // Security check
	  if (alert) {
	    alert.style.visibility = "hidden";
	  }

	  function hold() {
	    timInt = window.setInterval(showTime, 1000);
	    timOut = window.setTimeout(submitSafety, 4000);
	    alert.style.visibility = "hidden";
	  }

	  function release() {
	    if (timOut) window.clearTimeout(timOut);
	    window.clearInterval(timInt);
	    i = 0;
	    t = 3;
	  }

	  function showTime() {
	    if (t == 0) {
	      window.clearInterval(timInt);
	      counter.innerHTML = "Go";
	      t = 3;
	    } else {
	      counter.innerHTML = t;
	      t--;
	    }
	  }

	  function submitSafety() {
	    alert.style.visibility = "initial";
	  }

	  var safety = document.getElementsByClassName("evo_c-safety")[0];
	  safety && safety.addEventListener("mousedown", hold);
	  document.body.addEventListener("mouseup", release);
	};

/***/ }),

/***/ "../../components/evolution/search-with-long-edit/index.js":
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    var searchInput = document.getElementById("evo_c-searchBar__searchInput");
	    var editorField = document.getElementById("evo_c-searchBar__searchEditor");
	    var checkBoxLabel = document.getElementById("evo_c-searchBar__searchEditorControlLabel");
	    var expandIcon = document.getElementById("evo_c-searchBar__expand");
	    if (searchInput != null) {
	        var searchBoxWidth = searchInput.clientWidth;
	    }

	    var exposeSearch = {
	        placeInEditor: function placeInEditor() {
	            editorField.innerText = searchInput.value;
	        },
	        editorToSearch: function editorToSearch() {
	            searchInput.value = editorField.innerText;
	        },
	        expandIconCheck: function expandIconCheck() {
	            if (exposeSearch.getInputPixelWidth(searchInput) >= searchBoxWidth) {
	                expandIcon.style.visibility = "visible";
	            } else {
	                expandIcon.style.visibility = "hidden";
	            }
	        },
	        getInputPixelWidth: function getInputPixelWidth(elem) {
	            var canvas = document.createElement('canvas');
	            var ctx = canvas.getContext("2d");
	            var style = window.getComputedStyle(elem, null);
	            var fontSize = style.getPropertyValue('font-size');
	            var fontFamily = style.getPropertyValue('font-family');
	            var fontWeight = style.getPropertyValue('font-weight');
	            ctx.font = fontWeight + " " + fontSize + " " + fontFamily;
	            var width = ctx.measureText(searchInput.value).width;
	            return width;
	        },
	        hideEditorWhenInputVisible: function hideEditorWhenInputVisible() {
	            if (editorField.style.display === "block") {
	                if (exposeSearch.getInputPixelWidth(searchInput) < searchBoxWidth) {
	                    editorField.style.display = "none";
	                }
	            }
	        },
	        toggleEditor: function toggleEditor() {
	            if (editorField.style.display === "" || editorField.style.display === "none") {
	                editorField.style.display = "block";
	                editorField.focus();
	            } else if (editorField.style.display === "block") {
	                editorField.style.display = "none";
	            }
	        },
	        /*toggleEditorShortCut: function (event){
	         if (event.keyCode === 17){
	         exposeSearch.toggleEditor();
	         }
	         },*/
	        handleKeyPress: function handleKeyPress() {
	            exposeSearch.expandIconCheck();
	            exposeSearch.hideEditorWhenInputVisible();
	            //exposeSearch.toggleEditorShortCut();
	            if (this === searchInput) {
	                exposeSearch.placeInEditor();
	            } else {
	                exposeSearch.editorToSearch();
	            }
	        }
	    };

	    if (searchInput != null) {
	        //Prevents code from running if component
	        // doesn't exist in html

	        editorField.addEventListener("keyup", function () {
	            var bound = exposeSearch.handleKeyPress.bind(editorField);
	            bound();
	        });

	        searchInput.addEventListener("keyup", function () {
	            var bound = exposeSearch.handleKeyPress.bind(searchInput);
	            bound();
	        });

	        checkBoxLabel.addEventListener("mousedown", function (event) {
	            event.preventDefault();
	            exposeSearch.toggleEditor();
	        });

	        editorField.addEventListener("blur", function () {
	            editorField.style.display = "none";
	            exposeSearch.expandIconCheck();
	            searchInput.focus();
	        });
	    }
	};

/***/ }),

/***/ "../../components/evolution/sift/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  'use strict';

	  var sift = {

	    pick: '.evo_c-sift__basket-pick',
	    drop: '.evo_c-sift__basket-drop',

	    getBasket: function getBasket(selector) {
	      var basket = document.querySelector(selector);

	      return basket;
	    },

	    pickItem: function pickItem() {
	      if (this.getBasket(this.pick)) {
	        return this.getBasket(this.pick).firstElementChild;
	      }
	    },

	    removeItem: function removeItem() {
	      if (this.getBasket(this.pick)) {
	        this.getBasket(this.pick).removeChild(this.pickItem());
	      }
	    },

	    siftItem: function siftItem(event) {

	      var item = this.pickItem(),
	          siftDrop = this.getBasket.bind(this),
	          dropped = siftDrop(this.drop);

	      if (item) {

	        item.classList.add('evo_c-sift__items--animate-sift-out');
	        setTimeout(function () {
	          item.classList.remove('evo_c-sift__items--animate-sift-out');
	          item.classList.add('evo_c-sift__items--animate-sift-in');
	          dropped.appendChild(item);
	        }, 2000);
	      }
	    }
	  };

	  if (sift.getBasket(sift.pick)) {
	    sift.getBasket(sift.pick).addEventListener('click', function (e) {
	      sift.siftItem();
	    });
	  }
	};

/***/ }),

/***/ "../../components/evolution/single-input-forms/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/******************************************************************************
	                        From single_input_form.js
	******************************************************************************/
	var singleInputForm = exports.singleInputForm = function singleInputForm() {

	  var nextBtns = document.querySelectorAll('.evo_c-sif__btn--next');
	  var nextBtnsArr = [].slice.call(nextBtns);
	  var nextBtnsLen = nextBtns && nextBtns.length || 0;
	  var prevBtns = document.querySelectorAll('.evo_c-sif__btn--prev');
	  var prevBtnsArr = [].slice.call(prevBtns);
	  var prevBtnsLen = prevBtns && prevBtns.length || 0;
	  var inputWraps = document.querySelectorAll('.evo_c-sif__input-wrap');
	  var labels = document.querySelectorAll('.evo_c-sif__label');
	  var inputFields = document.querySelectorAll('.evo_c-sif__input');
	  var inputFieldsArr = [].slice.call(inputFields);
	  var i;

	  function checkValidation() {
	    var index = inputFieldsArr.indexOf(this);
	    var inputToCheck = inputFields[index];
	    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	    return inputToCheck.type === 'email' ? validEmail.test(inputToCheck.value) : inputToCheck.checkValidity();
	  }

	  function showPlaceholderOrNot(input) {
	    var index = inputFieldsArr.indexOf(input);

	    input.addEventListener('blur', function (e) {
	      e.preventDefault();
	      if (input.value === '') {
	        labels[index].style.opacity = 1;
	        labels[index].style.visibility = 'visible';
	      }
	    });

	    input.addEventListener('focus', function (e) {
	      e.preventDefault();
	      if (input.value === '') {
	        labels[index].style.opacity = 0;
	        labels[index].style.visibility = 'hidden';
	      }
	    });
	  }

	  function goNext(btn) {
	    var index = nextBtnsArr.indexOf(btn);

	    btn.addEventListener('click', function (e) {
	      e.preventDefault();

	      if (checkValidation.apply(inputFields[index])) {
	        // if input value is VALID
	        this.classList.remove('js-sif-is-invalid'); // remove invalid class from nxt btn
	        // current input card: add fadeout class and remove fadein class
	        inputWraps[index + 1].classList.add('js-sif-anim-fadeout');
	        inputWraps[index + 1].classList.remove('js-sif-anim-fadein');
	      } else {
	        this.classList.add('js-sif-is-invalid'); // add invalid class to nxt btn
	      }
	    });
	  }

	  function goBack(btn) {
	    var index = prevBtnsArr.indexOf(btn);

	    btn.addEventListener('click', function () {
	      //previous input card: add fadein class and remove fadeout class
	      inputWraps[index + 2].classList.add('js-sif-anim-fadein');
	      inputWraps[index + 2].classList.remove('js-sif-anim-fadeout');
	    });
	  }

	  function addListenerToBtns() {
	    for (i = 0; i < nextBtnsLen; i++) {
	      goNext(nextBtns[i]);
	      showPlaceholderOrNot(inputFields[i]);
	    }

	    for (i = 0; i < prevBtnsLen; i++) {
	      goBack(prevBtns[i]);
	    }
	  }

	  addListenerToBtns();
	};

	/******************************************************************************
	                        From From space_saving_minimalist_form.js
	******************************************************************************/
	var minimalistForm = exports.minimalistForm = function minimalistForm() {
	  var inputWraps = document.querySelectorAll('.evo_c-mini-form__input-wrap');
	  var inputWrapsLen = inputWraps && inputWraps.length || 0;
	  var inputFields = document.querySelectorAll('.evo_c-mini-form__input');
	  var inputFieldsArr = [].slice.call(inputFields);
	  var nextBtns = document.querySelectorAll('.evo_c-mini-form__btn--next');
	  var nextBtnsArr = [].slice.call(nextBtns);
	  var nextBtnsLen = nextBtns && nextBtns.length || 0;
	  var prevBtns = document.querySelectorAll('.evo_c-mini-form__btn--prev');
	  var prevBtnsLen = prevBtns && prevBtns.length || 0;
	  var toFirstBtn = document.querySelector('.evo_c-mini-form__btn--back');
	  var submitBtn = document.querySelector('.evo_c-mini-form__submit-btn');
	  var submitCardInner = document.querySelector('.evo_c-mini-form__submit') && document.querySelector('.evo_c-mini-form__submit').querySelector('.evo_c-mini-form__input-inner');
	  var currentCardIndex = 0;
	  var i;

	  function checkValidation() {
	    var index = inputFieldsArr.indexOf(this);
	    var inputToCheck = inputFields[index];
	    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	    if (inputToCheck.type === 'email') {
	      if (validEmail.test(inputToCheck.value)) {
	        inputWraps[index].classList.remove('js-mini-form-is-invalid');
	        return true;
	      } else {
	        inputWraps[index].classList.add('js-mini-form-is-invalid');
	        return false;
	      }
	    } else {
	      if (inputToCheck.checkValidity()) {
	        inputWraps[index].classList.remove('js-mini-form-is-invalid');
	        return true;
	      } else {
	        inputWraps[index].classList.add('js-mini-form-is-invalid');
	        return false;
	      }
	    }
	  }

	  function fadeIn(ele) {
	    // Input wrap: add active and anim-fadein classes
	    ele.classList.add('js-mini-form-is-active', 'js-mini-form-anim-fadein');
	    // Inner input wrap: add anim-bgchange class
	    ele.querySelector('.evo_c-mini-form__input-inner').classList.add('js-mini-form-anim-bgchange');
	    // Input wrap: remove anim-fadeout-back class
	    ele.classList.remove('js-mini-form-anim-fadeout-back');
	  }

	  function fadeOut(ele) {
	    // Input wrap: add anim-fadeout class
	    ele.classList.add('js-mini-form-anim-fadeout');
	    // Input wrap: remove active class
	    ele.classList.remove('js-mini-form-is-active');
	  }

	  function goNext(index) {
	    if (checkValidation.apply(inputFields[index])) {
	      // current card fades out
	      fadeOut(inputWraps[index]);

	      // next card fades in, prevBtn appears
	      prevBtns[index].style.visibility = 'visible';
	      prevBtns[index].style.transitionDelay = '0.65s, 0s';
	      fadeIn(inputWraps[index + 1]);

	      // update currentCardIndex with the next card's index
	      currentCardIndex = index + 1;
	    }
	  }

	  function goBack(index) {
	    if (currentCardIndex > index) {
	      // not the first input card
	      // current card: roll back to left, remove active class
	      inputWraps[currentCardIndex].classList.remove('js-mini-form-is-active', 'js-mini-form-anim-fadein');
	      inputWraps[currentCardIndex].classList.add('js-mini-form-anim-fadeout-back');

	      // current inner wrap: remove animation
	      inputWraps[currentCardIndex].querySelector('.evo_c-mini-form__input-inner').classList.remove('js-mini-form-anim-bgchange');

	      // hide indicator (prev btn)
	      prevBtns[currentCardIndex - 1].style.visibility = 'hidden';
	      prevBtns[currentCardIndex - 1].style.transitionDelay = '0s, 0s';

	      // prev card: add active class, remove fadeout animation class
	      inputWraps[--currentCardIndex].classList.add('js-mini-form-is-active');
	      inputWraps[currentCardIndex].classList.remove('js-mini-form-anim-fadeout');
	      // prev card - inner: add animation
	      inputWraps[currentCardIndex].querySelector('.evo_c-mini-form__input-inner').classList.add('js-mini-form-anim-bgchange');

	      window.setTimeout(function () {
	        goBack(index);
	      }, 200);
	    }
	  }

	  function addListeners(btn) {
	    var index = nextBtnsArr.indexOf(btn);
	    btn.addEventListener('click', function () {
	      goNext(index);
	    });

	    inputFields[index].addEventListener('keyup', function (e) {
	      var keyCode = e.keyCode || e.which;
	      if (keyCode !== 13) {
	        checkValidation.apply(inputFields[index]);
	      }
	    });

	    // prevBtns[index].style.visibility = 'visible';
	    prevBtns[index].addEventListener('click', function () {
	      goBack(index);
	    });
	  }

	  for (i = 0; i < nextBtnsLen; i++) {
	    addListeners(nextBtns[i]);
	  }

	  for (i = 0; i < inputWrapsLen; i++) {
	    inputWraps[i].style.left = 0.5 * (inputWraps.length - 1 - i) + 'em';
	  }

	  for (i = 0; i < prevBtnsLen; i++) {
	    var leftDistance = 0.5 * (prevBtns.length - 1 - i) + 19.5 + 'em';
	    prevBtns[i].style.left = 'calc(' + leftDistance + ' - 4px)';
	  }

	  toFirstBtn && toFirstBtn.addEventListener('click', function () {
	    goBack(0);
	  });

	  submitBtn && submitBtn.addEventListener('click', function (e) {
	    e.preventDefault();
	    submitCardInner.classList.remove('js-mini-form-anim-bgchange');
	    submitCardInner.innerHTML = 'Thank you for subscribing';

	    // hide all indicators
	    for (i = 0; i < prevBtnsLen; i++) {
	      prevBtns[i].style.visibility = 'hidden';
	      prevBtns[i].style.transitionDelay = '0s';
	      inputWraps[i + 1].style.borderRightColor = 'transparent';
	      inputWraps[i + 1].style.transition = 'all 0s 0s';
	    }
	    return false;
	  });

	  // Press ENTER key to trigger goNext function
	  document.addEventListener('keyup', function (e) {
	    var keyCode = e.keyCode || e.which;
	    if (keyCode === 13) {
	      e.stopPropagation();
	      e.preventDefault();
	      if (currentCardIndex < nextBtnsLen) {
	        goNext(currentCardIndex);
	      }
	      return false;
	    }
	  });

	  // Disable form submission on Enter key, submit only on click
	  function stopReloadKey(e) {
	    var evt = e ? e : event ? event : null;
	    var node = evt.target ? evt.target : evt.srcElement ? evt.srcElement : null;
	    if (evt.keyCode == 13) {
	      return false;
	    }
	  }
	  document.onkeypress = stopReloadKey;
	};

/***/ }),

/***/ "../../components/evolution/svg-pagination/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function () {
		(function () {
			var elems = document.querySelectorAll('ul.evo_c-svg-dot--default li'),
			    len = elems && elems.length || 0,
			    makeActive;

			makeActive = function makeActive() {
				for (var i = 0; i < len; i++) {
					elems[i].classList.remove('is-active');
				}this.classList.add('is-active');
			};

			for (var i = 0; i < len; i++) {
				elems[i].addEventListener('mousedown', makeActive);
			}
		})();
	};

/***/ }),

/***/ "../../components/evolution/crumble/index.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {

	  Array.prototype.where = function (inclusionTest) {
	    var results = [];
	    for (var i = 0; i < this.length; i++) {
	      if (inclusionTest(this[i])) {
	        results.push(this[i]);
	      }
	    }
	    return results;
	  };

	  function $(selector, parent) {
	    return (parent || document).querySelector(selector);
	  }

	  function $$(selector, parent) {
	    return (parent || document).querySelectorAll(selector);
	  }

	  function hasClass(target, className) {
	    return target.classList.contains(className);
	  }

	  function getClassName(node, subString) {
	    return [].slice.call(node.classList).where(function (className) {
	      return className.indexOf(subString) !== -1;
	    });
	  }

	  var crumbleList = $$('[class*="crumble__list"]');

	  function CrumbleList(element) {
	    this.element = element;
	    this.handleClick();
	  }

	  CrumbleList.prototype.handleClick = function () {

	    this.element.addEventListener('click', function (event) {

	      event.stopPropagation();

	      var target = event.target;
	      var isOpenButton = getClassName(target, '--expand')[0];
	      var isCloseButton = getClassName(target, 'js-crumble-close-button')[0];

	      if (isOpenButton) {

	        target = target.parentElement.parentElement;

	        $('[class*="crumble__span"]', target).classList.toggle('is-active');
	        $('[class*="c-event"]', target).classList.toggle('is-open');

	        $('[class*="event__header"]', target).classList.toggle('is-rotated-to-zero');
	        $('[class*="event__body"]', target).classList.toggle('is-rotated-to-zero');
	      } else if (isCloseButton) {
	        target.parentElement.classList.remove('is-rotated-to-zero');
	        target.parentElement.nextElementSibling.classList.remove('is-rotated-to-zero');
	        target.parentElement.parentElement.classList.remove('is-open');
	        target.parentElement.parentElement.previousElementSibling.classList.remove('is-active');
	      }
	    });
	  };

	  if (crumbleList.length === 0) {
	    return;
	  }

	  [].slice.call(crumbleList).forEach(function (element) {
	    new CrumbleList(element);
	  });
	};

/***/ })

/******/ });