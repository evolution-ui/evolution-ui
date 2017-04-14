# Evolution UI Framework Component - Div Table with draggable column and row

### What is Div Table?

It is an table with some awesome features:

- Using JSON, object, and array to populate table
- Search by username
- Sort by any column
- Drag & Drop any column or row
- Click user name to expand a popup
- Responsive for mobile

### Bugs
Drag Row feature is not working in Firefox.

### How to use


Pass your
```js
//Provide User Info in JSON format
var mockUsers = [
        {
            "id": 1,
            "name": "Jane Webb",
            "img_url": "asset/img/pa3G9iy.png",
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
            "img_url": "asset/img/pa3G9iy.png",
            "commission_rate": "9%",
            "contract_end_day": "2/21/2017",
            "total_deals": 99,
            "payment_cycle": "quarterly",
            "outstanding_balance": "$14609.61",
            "paid_amount": "$18079.02"
        }]
```

```html
//Implement the search box
<div class="evo_c-divtable-small_placeholder">
    <input type="text" name="Name" id="evo_c-divtable-search_input" placeholder="Search User">
</div>

//Implement the table
<div class="evo_c-divtable-container" id="evo_c-divtable-tableContainer">
</div>

```


### Upcoming Features

- When the table is very long vertically (many records), part of the table will shrink
- Sticky headers; when the user scrolls, fix the header row at the top of the window so that the user can see the label for each column.
- Please request more features or report any issues.
