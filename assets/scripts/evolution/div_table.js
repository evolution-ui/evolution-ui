export default function () {
  "use strict";

  var mockUsers = [
    {
      "id": 1,
      "name": "Jane Webb",
      "img_url": "http://i.imgur.com/7dyjRJe.png",
      "commission_rate": "21%",
      "contract_end_day": "5/19/2016",
      "total_deals": 54,
      "payment_cycle": "annually",
      "outstanding_balance": "$5806.24",
      "paid_amount": "$2146.70"
    },
    {
      "id": 2,
      "name": "Anthony Gibson",
      "img_url": "http://i.imgur.com/7dyjRJe.png",
      "commission_rate": "9%",
      "contract_end_day": "2/21/2017",
      "total_deals": 99,
      "payment_cycle": "quarterly",
      "outstanding_balance": "$14609.61",
      "paid_amount": "$18079.02"
    },
    {
      "id": 3,
      "name": "Victor Simmons",
      "img_url": "http://i.imgur.com/7dyjRJe.png",
      "commission_rate": "9%",
      "contract_end_day": "9/2/2016",
      "total_deals": 97,
      "payment_cycle": "monthly",
      "outstanding_balance": "$3344.06",
      "paid_amount": "$18358.86"
    },
    {
      "id": 4,
      "name": "Donna Reyes",
      "img_url": "http://i.imgur.com/7dyjRJe.png",
      "commission_rate": "90%",
      "contract_end_day": "8/3/2016",
      "total_deals": 51,
      "payment_cycle": "monthly",
      "outstanding_balance": "$8599.40",
      "paid_amount": "$8154.39"
    },
    {
      "id": 5,
      "name": "Todd Peters",
      "img_url": "http://i.imgur.com/7dyjRJe.png",
      "commission_rate": "21%",
      "contract_end_day": "2/11/2017",
      "total_deals": 92,
      "payment_cycle": "quarterly",
      "outstanding_balance": "$10940.73",
      "paid_amount": "$17910.47"
    },
    {
      "id": 6,
      "name": "Patricia Carr",
      "img_url": "http://i.imgur.com/7dyjRJe.png",
      "commission_rate": "21%",
      "contract_end_day": "2/11/2017",
      "total_deals": 72,
      "payment_cycle": "annually",
      "outstanding_balance": "$6385.47",
      "paid_amount": "$17310.78"
    },
    {
      "id": 7,
      "name": "Jacqueline Davis",
      "img_url": "http://i.imgur.com/7dyjRJe.png",
      "commission_rate": "23%",
      "contract_end_day": "11/29/2016",
      "total_deals": 81,
      "payment_cycle": "annually",
      "outstanding_balance": "$5433.61",
      "paid_amount": "$4281.15"
    },
    {
      "id": 8,
      "name": "Heather Mcdonald",
      "img_url": "http://i.imgur.com/7dyjRJe.png",
      "commission_rate": "3%",
      "contract_end_day": "7/18/2016",
      "total_deals": 98,
      "payment_cycle": "quarterly",
      "outstanding_balance": "$10515.56",
      "paid_amount": "$1112.12"
    },
    {
      "id": 9,
      "name": "Nicole Willis",
      "img_url": "http://i.imgur.com/7dyjRJe.png",
      "commission_rate": "90%",
      "contract_end_day": "9/21/2016",
      "total_deals": 63,
      "payment_cycle": "annually",
      "outstanding_balance": "$1014.84",
      "paid_amount": "$12243.56"
    },
    {
      "id": 10,
      "name": "Anthony Mills",
      "img_url": "http://i.imgur.com/7dyjRJe.png",
      "commission_rate": "21%",
      "contract_end_day": "9/7/2016",
      "total_deals": 2,
      "payment_cycle": "annually",
      "outstanding_balance": "$10858.51",
      "paid_amount": "$9096.66"
    },
    // {
    //   "id": 11,
    //   "name": "Johnny Ross",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "32%",
    //   "contract_end_day": "3/1/2017",
    //   "total_deals": 43,
    //   "payment_cycle": "monthly",
    //   "outstanding_balance": "$1533.94",
    //   "paid_amount": "$2176.81"
    // },
    // {
    //   "id": 12,
    //   "name": "Virginia Carroll",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "90%",
    //   "contract_end_day": "10/15/2016",
    //   "total_deals": 49,
    //   "payment_cycle": "monthly",
    //   "outstanding_balance": "$18957.34",
    //   "paid_amount": "$14707.33"
    // },
    // {
    //   "id": 13,
    //   "name": "Judy Collins",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "3%",
    //   "contract_end_day": "11/3/2016",
    //   "total_deals": 20,
    //   "payment_cycle": "monthly",
    //   "outstanding_balance": "$17183.42",
    //   "paid_amount": "$11928.61"
    // },
    // {
    //   "id": 14,
    //   "name": "Cheryl Richardson",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "90%",
    //   "contract_end_day": "11/10/2016",
    //   "total_deals": 54,
    //   "payment_cycle": "monthly",
    //   "outstanding_balance": "$18930.63",
    //   "paid_amount": "$9575.03"
    // },
    // {
    //   "id": 15,
    //   "name": "Jesse Carpenter",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "23%",
    //   "contract_end_day": "9/23/2016",
    //   "total_deals": 71,
    //   "payment_cycle": "monthly",
    //   "outstanding_balance": "$6261.63",
    //   "paid_amount": "$4522.22"
    // },
    // {
    //   "id": 16,
    //   "name": "Steve Roberts",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "32%",
    //   "contract_end_day": "1/4/2017",
    //   "total_deals": 47,
    //   "payment_cycle": "annually",
    //   "outstanding_balance": "$14347.20",
    //   "paid_amount": "$17468.38"
    // },
    // {
    //   "id": 17,
    //   "name": "Roger Hill",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "32%",
    //   "contract_end_day": "7/26/2016",
    //   "total_deals": 83,
    //   "payment_cycle": "quarterly",
    //   "outstanding_balance": "$19955.70",
    //   "paid_amount": "$3315.55"
    // },
    // {
    //   "id": 18,
    //   "name": "Donald Hawkins",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "21%",
    //   "contract_end_day": "7/31/2016",
    //   "total_deals": 15,
    //   "payment_cycle": "monthly",
    //   "outstanding_balance": "$12698.59",
    //   "paid_amount": "$95.00"
    // },
    // {
    //   "id": 19,
    //   "name": "Dennis Howell",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "23%",
    //   "contract_end_day": "3/11/2017",
    //   "total_deals": 39,
    //   "payment_cycle": "monthly",
    //   "outstanding_balance": "$2966.06",
    //   "paid_amount": "$5628.36"
    // },
    // {
    //   "id": 20,
    //   "name": "Shawn Ortiz",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "21%",
    //   "contract_end_day": "12/16/2016",
    //   "total_deals": 13,
    //   "payment_cycle": "quarterly",
    //   "outstanding_balance": "$78.04",
    //   "paid_amount": "$11618.05"
    // },
    // {
    //   "id": 21,
    //   "name": "Stephanie Mills",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "21%",
    //   "contract_end_day": "6/18/2016",
    //   "total_deals": 22,
    //   "payment_cycle": "annually",
    //   "outstanding_balance": "$149.18",
    //   "paid_amount": "$1314.47"
    // },
    // {
    //   "id": 22,
    //   "name": "Arthur Clark",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "9%",
    //   "contract_end_day": "7/21/2016",
    //   "total_deals": 97,
    //   "payment_cycle": "annually",
    //   "outstanding_balance": "$6276.92",
    //   "paid_amount": "$17259.31"
    // },
    // {
    //   "id": 23,
    //   "name": "Eric Hall",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "21%",
    //   "contract_end_day": "8/7/2016",
    //   "total_deals": 66,
    //   "payment_cycle": "monthly",
    //   "outstanding_balance": "$8422.54",
    //   "paid_amount": "$9560.38"
    // },
    // {
    //   "id": 24,
    //   "name": "Alice Flores",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "21%",
    //   "contract_end_day": "8/26/2016",
    //   "total_deals": 14,
    //   "payment_cycle": "monthly",
    //   "outstanding_balance": "$19300.52",
    //   "paid_amount": "$13396.05"
    // },
    // {
    //   "id": 25,
    //   "name": "Melissa Wright",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "90%",
    //   "contract_end_day": "11/23/2016",
    //   "total_deals": 68,
    //   "payment_cycle": "quarterly",
    //   "outstanding_balance": "$18805.32",
    //   "paid_amount": "$2426.06"
    // },
    // {
    //   "id": 26,
    //   "name": "Henry Reid",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "21%",
    //   "contract_end_day": "7/10/2016",
    //   "total_deals": 80,
    //   "payment_cycle": "annually",
    //   "outstanding_balance": "$2951.83",
    //   "paid_amount": "$3518.74"
    // },
    // {
    //   "id": 27,
    //   "name": "Betty Fuller",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "21%",
    //   "contract_end_day": "8/3/2016",
    //   "total_deals": 32,
    //   "payment_cycle": "quarterly",
    //   "outstanding_balance": "$11282.37",
    //   "paid_amount": "$13261.10"
    // },
    // {
    //   "id": 28,
    //   "name": "George Cook",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "9%",
    //   "contract_end_day": "11/2/2016",
    //   "total_deals": 40,
    //   "payment_cycle": "annually",
    //   "outstanding_balance": "$11515.29",
    //   "paid_amount": "$8161.42"
    // },
    // {
    //   "id": 29,
    //   "name": "Ralph Warren",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "23%",
    //   "contract_end_day": "8/30/2016",
    //   "total_deals": 84,
    //   "payment_cycle": "quarterly",
    //   "outstanding_balance": "$10552.35",
    //   "paid_amount": "$18892.61"
    // },
    // {
    //   "id": 30,
    //   "name": "Roger Moore",
    //   "img_url": "http://i.imgur.com/7dyjRJe.png",
    //   "commission_rate": "23%",
    //   "contract_end_day": "3/1/2017",
    //   "total_deals": 23,
    //   "payment_cycle": "annually",
    //   "outstanding_balance": "$3327.15",
    //   "paid_amount": "$4345.77"
    // }
  ];

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
      var tempColumn1HTML = '<div class="evo_c-divtable-row' + (i + 1) + ' evo_c-divtable-row_evo_c-divtable-header ' + 'evo_c-divtable-row"' + 'id="' + 'evo_c-divtable-column1_evo_c-divtable-row' + (i + 1) + '" draggable="true">' +
        '<input type="checkbox" id="evo_c-divtable-modal' + tempObject.id + '" class="evo_c-divtable-modal_user_profile">' +
        '<label for="evo_c-divtable-modal' + tempObject.id + '">' +
        '<div class="evo_c-divtable-row_order_index">' +
        '<img class="evo_c-divtable-avatar" src="' + tempObject.img_url + '">' +
        '<span>' + tempAbbreviatedName + '</span>' +
        '<div class="evo_c-divtable-user_profile">' +
        '<img class="evo_c-divtable-avatar" src="' + tempObject.img_url + '">' +
        '<span>' + tempObject.name + '</span>' +
        '<svg class="evo_c-divtable-icon evo_c-divtable_icon-cross">' +
        '<use xlink:href="#evo_c-divtable_icon-cross"></use>' +
        '</svg>' +
        '<div class="evo_c-divtable-user_profile_details">' +
        '<p>Lorem ipsum dolor sit amet.</p>' +
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt.</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</label>' +
        '</div>';

      column1HTML += tempColumn1HTML;

      var tempColumn2HTML = '<div class="evo_c-divtable-row evo_c-divtable-row' + (i + 1) + '">' +
        '<img class="evo_c-divtable-avatar" src="' + tempObject.img_url + '">' +
        '<span>' + tempAbbreviatedName + '</span>' + tempObject.commission_rate +
        '</div>'

      column2HTML += tempColumn2HTML;

      var tempColumn3HTML = '<div class="evo_c-divtable-row evo_c-divtable-row' + (i + 1) + '">' +
        '<img class="evo_c-divtable-avatar" src="' + tempObject.img_url + '">' +
        '<span>' + tempAbbreviatedName + '</span>' + tempObject.contract_end_day +
        '</div>'

      column3HTML += tempColumn3HTML;

      var tempColumn4HTML = '<div class="evo_c-divtable-row evo_c-divtable-row' + (i + 1) + '">' +
        '<img class="evo_c-divtable-avatar" src="' + tempObject.img_url + '">' +
        '<span>' + tempAbbreviatedName + '</span>' + tempObject.total_deals +
        '</div>'

      column4HTML += tempColumn4HTML;

      var tempColumn5HTML = '<div class="evo_c-divtable-row evo_c-divtable-row' + (i + 1) + '">' +
        '<img class="evo_c-divtable-avatar" src="' + tempObject.img_url + '">' +
        '<span>' + tempAbbreviatedName + '</span>' + tempObject.payment_cycle +
        '</div>'

      column5HTML += tempColumn5HTML;

      var tempColumn6HTML = '<div class="evo_c-divtable-row evo_c-divtable-row' + (i + 1) + '">' +
        '<img class="evo_c-divtable-avatar" src="' + tempObject.img_url + '">' +
        '<span>' + tempAbbreviatedName + '</span>' + tempObject.outstanding_balance +
        '</div>'

      column6HTML += tempColumn6HTML;

      var tempColumn7HTML = '<div class="evo_c-divtable-row evo_c-divtable-row' + (i + 1) + '">' +
        '<img class="evo_c-divtable-avatar" src="' + tempObject.img_url + '">' +
        '<span>' + tempAbbreviatedName + '</span>' + tempObject.paid_amount +
        '</div>'

      column7HTML += tempColumn7HTML;
    }

    var tableContainer = document.getElementById('evo_c-divtable-tableContainer');
    if (tableContainer != null) {
      var tableHTML = '<div id="evo_c-divtable_column1" class="evo_c-divtable-header">' +
        '<div class="evo_c-divtable-column_header" style="order: 0">' +
        'Name' +
        '<p class="sort sort_asc" id="sort_name_alpha_asc">' +
        '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort_by_alpha" id="js-evolution-divtable-trigger_sort_by_alpha_nam">' +
        '<use xlink:href="#evo_c-divtable_icon-sort_by_alpha"></use></svg></p>' +
        '</div>' +
        column1HTML +
        '</div>' +
        '<div id="evo_c-divtable_column2" class="evo_c-divtable-column" draggable="true">' +
        '<div class="evo_c-divtable-column_header">' +
        'Comm. Rate' +
        '<p id="" class="evo_c-divtable-numeric_sort_icon">' +
        '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort-numeric-asc" id="js-evolution-divtable-trigger_sort_by_rate">' +
        '<use xlink:href="#evo_c-divtable_icon-sort-numeric-asc"></use></svg>' +
        '</p>' +
        '</div>' +
        column2HTML +
        '</div>' +
        '<div id="evo_c-divtable_column3" class="evo_c-divtable-column" draggable="true">' +
        '<div class="evo_c-divtable-column_header">' +
        'Payday' +
        '<p id="" class="evo_c-divtable-numeric_sort_icon">' +
        '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort-numeric-asc" id="js-evolution-divtable-trigger_sort_by_date">' +
        '<use xlink:href="#evo_c-divtable_icon-sort-numeric-asc"></use></svg>' +
        '</p>' +
        '</div>' +
        column3HTML +
        '</div>' +
        '<div id="evo_c-divtable_column4" class="evo_c-divtable-column" draggable="true">' +
        '<div class="evo_c-divtable-column_header">' +
        'Total Deals' +
        '<p id="" class="evo_c-divtable-numeric_sort_icon">' +
        '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort-numeric-asc" id="js-evolution-divtable-trigger_sort_by_deals">' +
        '<use xlink:href="#evo_c-divtable_icon-sort-numeric-asc"></use></svg>' +
        '</p>' +
        '</div>' +
        column4HTML +
        '</div>' +
        '<div id="evo_c-divtable_column5" class="evo_c-divtable-column" draggable="true">' +
        '<div class="evo_c-divtable-column_header">' +
        'Pay Period' +
        '<p class="sort sort_asc" id="sort_name_alpha_asc">' +
        '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort_by_alpha" id="js-evolution-divtable-trigger_sort_by_cycle">' +
        '<use xlink:href="#evo_c-divtable_icon-sort_by_alpha"></use></svg></p>' +
        '</div>' +
        column5HTML +
        '</div>' +
        '<div id="evo_c-divtable_column6" class="evo_c-divtable-column" draggable="true">' +
        '<div class="evo_c-divtable-column_header">' +
        'Balance' +
        '<p id="" class="evo_c-divtable-numeric_sort_icon">' +
        '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort-numeric-asc" id="js-evolution-divtable-trigger_sort_by_out_balance">' +
        '<use xlink:href="#evo_c-divtable_icon-sort-numeric-asc"></use></svg>' +
        '</p>' +
        '</div>' +
        column6HTML +
        '</div>' +
        '<div id="evo_c-divtable_column7" class="evo_c-divtable-column" draggable="true">' +
        '<div class="evo_c-divtable-column_header">' +
        'Paid Amt.' +
        '<p id="" class="evo_c-divtable-numeric_sort_icon">' +
        '<svg class="evo_c-divtable-icon evo_c-divtable_icon-sort-numeric-asc" id="js-evolution-divtable-trigger_sort_by_paid_amount">' +
        '<use xlink:href="#evo_c-divtable_icon-sort-numeric-asc"></use></svg>' +
        '</p>' +
        '</div>' +
        column7HTML +
        '</div>'

      tableContainer.innerHTML += tableHTML;
    }


  };

  //Utility functions
  function abbreviateLastName(username) {
    var splitString = username.split(' ');
    var abbreviatedName = splitString.slice(0, splitString.length - 1) + " " + splitString.pop().charAt(0) + ".";
    return abbreviatedName;
  }

  function destroyTableDOM() {
    var tableContainer = document.getElementById('evo_c-divtable-tableContainer');
    if (tableContainer != null) {
      tableContainer.innerHTML = ""
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
      if ((parseInt((a[('commission_rate')].replace('%', '')))) > (parseInt((b[('commission_rate')].replace('%', ''))))) return 1;
      if ((parseInt((a[('commission_rate')].replace('%', '')))) < (parseInt((b[('commission_rate')].replace('%', ''))))) return -1;
      return 0;
    });

  }

  function sortRateDesc(mockUsers) {
    mockUsers.sort(function (a, b) {
      if ((parseInt((a[('commission_rate')].replace('%', '')))) < (parseInt((b[('commission_rate')].replace('%', ''))))) return 1;
      if ((parseInt((a[('commission_rate')].replace('%', '')))) > (parseInt((b[('commission_rate')].replace('%', ''))))) return -1;
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
      if ((Date.parse((a[('contract_end_day')]))) > (Date.parse((b[('contract_end_day')])))) return 1;
      if ((Date.parse((a[('contract_end_day')]))) < (Date.parse((b[('contract_end_day')])))) return -1;
      return 0;
    });

  }

  function sortDateDesc(mockUsers) {
    mockUsers.sort(function (a, b) {
      if ((Date.parse((a[('contract_end_day')]))) < (Date.parse((b[('contract_end_day')])))) return 1;
      if ((Date.parse((a[('contract_end_day')]))) > (Date.parse((b[('contract_end_day')])))) return -1;
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
      if ((parseInt((a[('total_deals')]))) > (parseInt((b[('total_deals')])))) return 1;
      if ((parseInt((a[('total_deals')]))) < (parseInt((b[('total_deals')])))) return -1;
      return 0;
    });

  }

  function sortDealDesc(mockUsers) {
    mockUsers.sort(function (a, b) {
      if ((parseInt((a[('total_deals')]))) < (parseInt((b[('total_deals')])))) return 1;
      if ((parseInt((a[('total_deals')]))) > (parseInt((b[('total_deals')])))) return -1;
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
      if ((parseFloat((a[('outstanding_balance')].replace('$', '')))) > (parseFloat((b[('outstanding_balance')].replace('$', ''))))) return 1;
      if ((parseFloat((a[('outstanding_balance')].replace('$', '')))) < (parseFloat((b[('outstanding_balance')].replace('$', ''))))) return -1;
      return 0;
    });

  }

  function sortBalanceDesc(mockUsers) {
    mockUsers.sort(function (a, b) {
      if ((parseFloat((a[('outstanding_balance')].replace('$', '')))) < (parseFloat((b[('outstanding_balance')].replace('$', ''))))) return 1;
      if ((parseFloat((a[('outstanding_balance')].replace('$', '')))) > (parseFloat((b[('outstanding_balance')].replace('$', ''))))) return -1;
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
      if ((parseFloat((a[('paid_amount')].replace('$', '')))) > (parseFloat((b[('paid_amount')].replace('$', ''))))) return 1;
      if ((parseFloat((a[('paid_amount')].replace('$', '')))) < (parseFloat((b[('paid_amount')].replace('$', ''))))) return -1;
      return 0;
    });

  }

  function sortPaidAmntDesc(mockUsers) {
    mockUsers.sort(function (a, b) {
      if ((parseFloat((a[('paid_amount')].replace('$', '')))) < (parseFloat((b[('paid_amount')].replace('$', ''))))) return 1;
      if ((parseFloat((a[('paid_amount')].replace('$', '')))) > (parseFloat((b[('paid_amount')].replace('$', ''))))) return -1;
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
            tempColumns[i].removeEventListener('dragenter', handleColumnDragEnter, false)
            tempColumns[i].removeEventListener('dragover', handleColumnDragOver, false);
            tempColumns[i].removeEventListener('dragleave', handleColumnDragLeave, false);
            tempColumns[i].removeEventListener('drop', handleColumnDrop, false);
            tempColumns[i].removeEventListener('dragend', handleColumnDragEnd, false);
          }
        }
      } else {

        //Refresh the DOM to avoid duplicated listners. Not the best solution for this issue.
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
        tempColumns[i].addEventListener('dragenter', handleColumnDragEnter, false)
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
        tempRows[i].addEventListener('dragenter', handleRowDragEnter, false)
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
    // this.style.width = "160px";
    this.style.transition = "all 0.6s ease";
    dragColumnId = "";
    dragColumnDOM = "";
    dragRowId = "";
    dragRowDOM = "";
    createSortingListeners();

    if (window.innerWidth > 720) {
      this.style.width = "14%";
    }
    else {
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

    //Get row idea
    dragRowId = document.getElementById(this.id).id;

    //Select and Hide the row header
    this.style.opacity = 0;
    this.style.height = "0px";
    this.style.paddingTop = "0px";
    this.style.paddingBottom = "0px";
    this.style.borderWidth = "0px";
    this.style.transition = "all 0.4s ease";

    //Select and Hide other cells in the same row
    var draggedRow = document.getElementsByClassName('evo_c-divtable-row' + (dragRowId).split("evo_c-divtable-row")[1]);

    for (var i = 1; i < draggedRow.length; i++) {
      draggedRow[i].style.opacity = 0;
      draggedRow[i].style.height = "0px";
      draggedRow[i].style.padding = "0px";
      draggedRow[i].style.borderWidth = "0px";
      draggedRow[i].style.transition = "all 0.4s ease";
    }

    e.dataTransfer.effectAllowed = 'all';
    dragRowOrder = parseInt((window.getComputedStyle(this)).getPropertyValue('order'));
  }

  function handleRowDragEnter() {
    if (document.getElementById(this.id).id != dragRowId) {
      this.style.opacity = 0.2;
      this.style.transition = "all 0.4s ease";

      var draggedRow = document.getElementsByClassName('evo_c-divtable-row' + (document.getElementById(this.id).id).split("evo_c-divtable-row")[1]);
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

      var draggedRow = document.getElementsByClassName('evo_c-divtable-row' + (document.getElementById(this.id).id).split("evo_c-divtable-row")[1]);
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

      var draggedRow = document.getElementsByClassName('evo_c-divtable-row' + (document.getElementById(this.id).id).split("evo_c-divtable-row")[1]);
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

    var droppedRow = document.getElementsByClassName('evo_c-divtable-row' + (dropRowId).split("evo_c-divtable-row")[1]);
    for (var i = 1; i < droppedRow.length; i++) {
      droppedRow[i].style.opacity = 1;
      droppedRow[i].style.height = "19px";
      droppedRow[i].style.padding = "11px 10px 10px 10px";
      droppedRow[i].style.borderWidth = "1px";
      droppedRow[i].style.transition = "all 0.4s ease";
    }

    //get drop location order
    var dropRowOrder = parseInt((window.getComputedStyle(this)).getPropertyValue('order'));
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

    var draggedRow = document.getElementsByClassName('evo_c-divtable-row' + (dragRowId).split("evo_c-divtable-row")[1]);
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
}
