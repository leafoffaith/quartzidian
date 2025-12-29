2024-10-06 

21:50

Status: #Teen

Tags: #DataExport #Grey 

While doing [[Data Export]] Converting ISO 8601 String to Date

# **Microsoft Excel: Convert ISO 8601 string to date type**

*Assuming that the first column contains the combined date time in the ISO 8601 format.* 

*For example:  2014-05-29T02:50:28*  
 
## To convert the date time string into a date column:

1. Enter the following formula into the first cell of an empty column:  
    =DATEVALUE(MID(A1,1,10))+TIMEVALUE(MID(A1,12,8))
2. Select the cell and drag the fill handle to the end of the column
3. Right-click on the column header and select **Format Cells...**
4. Select any of the available Date formats
# References