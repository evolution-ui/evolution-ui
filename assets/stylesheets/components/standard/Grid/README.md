##Evolution UI Grid

The Evolution UI grid is built using the power of Flexbox 
to achieve fluid layouts. The grid can thought of as an collection
of Flexbox rows with varying numbers of columns. 

To create a grid row use the following code: 

    <div class="evo_l-grid__row l-gridrow__gutters">
    
    </div>
    
The `l-gridrow__gutters` class is used to add some spacing between each grid column.
Remove it if no spacing between the columns are needed. 

To add columns to the grid, add any number of column divs as shown below:

    <div class="evo_l-grid__row l-gridrow__gutters">
      <div class="evo_l-grid__col">
        
      </div>
      <div class="evo_l-grid__col">
        
      </div>
    </div>
    
Flexbox allows for some awesome functionality here in that we can add any number of columns
to the grid and they will automatically adjust to evenly distribute themselves based on the amount of space they require.
The code above gives a two-column grid row but we could easily add three more columns and create a five-column
grid row. 

In cases where we need the columns to have differing widths, we can use the class `.colXof16` where X is a number between 1 
and 16. 


    <div class="evo_l-grid__row l-gridrow__gutters">
      <div class="evo_l-grid__col col4of16">
            
      </div>
      <div class="evo_l-grid__col col8of16">
            
      </div>
      <div class="evo_l-grid__col col4of16">
                  
      </div>
    </div>
    
This allows us to set the specific width of the columns we need. 

That's it for the grid system for now. Lookout for more updates to come. 
