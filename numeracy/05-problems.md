---
layout: default
title: Problems in Numeracy
---

# Business & Financial Numeracy

This section applies your arithmetic skills to scenarios. You will encounter Profit & Loss, Cash Flow, Financial Percentages, and Economic Data.

<div class="instructions" markdown="1">

### Part 1: Profit, Loss, and Cash Flow

In business:
*   **Profit** = Revenue (Money coming in) - Expenses (Money going out).
*   If Expenses are higher than Revenue, the result is a **Loss** (a negative number).
*   **Overdrafts:** A bank account with a negative balance is in overdraft.

</div>

{% include question_numerical.html
    id="bus_pl_1"
    title="Question 1: Calculating Profit"
    question_text="A coffee shop generates £4,500 in revenue this month. The cost of coffee beans, milk, and rent totals £3,250. Calculate the profit. (If a loss, write as a negative profit)"
    correct_answer="1250"
    tolerance="0"
    solution_text="Profit = Revenue - Expenses. <br> $4500 - 3250 = 1250$."
%}

{% include question_numerical.html
    id="bus_pl_2"
    title="Question 2: Handling Losses"
    question_text="A startup spends £12,000 on development but only makes £4,500 in sales. What is their profit? (If a loss, write as a negative profit)"
    correct_answer="-7500"
    tolerance="0"
    solution_text="Profit = Revenue - Expenses. <br> $4500 - 12000 = -7500$. <br> This is a loss of £7,500."
%}

<!-- TABLE QUESTION 1: CASH FLOW -->
{% capture cash_flow_table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Month</th>
      <th>Income (£)</th>
      <th>Expenses (£)</th>
      <th>Net Cash Flow (£)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>5,000</td>
      <td>4,200</td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>February</td>
      <td>3,500</td>
      <td>4,000</td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>March</td>
      <td>6,200</td>
      <td>3,100</td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td><strong>TOTAL</strong></td>
      <td>14,700</td>
      <td>11,300</td>
      <td><input type="number" step="any"></td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include table_fill.html 
   id="table_cash_flow" 
   title="Question 3: Cash Flow Statement"
   question_text="Complete the table below. <br> <strong>Net Cash Flow</strong> is calculated as Income minus Expenses. Note that February has higher expenses than income."
   table_content=cash_flow_table
   answers="800 || -500 || 3100 || 3400"
   tolerance="0" 
   solution_text="<strong>Jan:</strong> $5000 - 4200 = 800$. <br> <strong>Feb:</strong> $3500 - 4000 = -500$ (A deficit). <br> <strong>Mar:</strong> $6200 - 3100 = 3100$. <br> <strong>Total:</strong> Add the Net Cash Flows: $800 + (-500) + 3100 = 3400$."
%}

<br><br>

<div class="instructions" markdown="1">

### Part 2: Financial Percentages

In finance, percentages are used for tax (VAT), interest, and profit margins.

*   **VAT (20%):** To find the price including tax, use the multiplier **1.20**.
*   **Discount:** To find a price after a discount, multiply by the remaining percentage.

</div>

{% include question_numerical.html
    id="bus_perc_1"
    title="Question 4: Calculating VAT"
    question_text="A laptop costs £800 excluding VAT. VAT is charged at 20%. Calculate the total price including VAT."
    correct_answer="960"
    tolerance="0.01"
    solution_text="To add 20%, multiply by 1.20. <br> $800 \times 1.20 = 960$."
%}

{% include question_numerical.html
    id="bus_perc_2"
    title="Question 5: Trade Discounts"
    question_text="A supplier offers a 15% trade discount on an order of £2,000. What is the discounted price?"
    correct_answer="1700"
    tolerance="0.01"
    solution_text="A 15% discount means you pay 85% of the original price. <br> Multiplier = 0.85. <br> $2000 \times 0.85 = 1700$."
%}

{% include question_numerical.html
    id="bus_perc_3"
    title="Question 6: Reverse VAT"
    question_text="A service bill is £144, which includes VAT at 20%. Calculate the cost *before* VAT was added."
    correct_answer="120"
    tolerance="0.01"
    solution_text="The price represents 120% of the original cost. <br> Multiplier = 1.20. <br> Reverse the calculation: $144 \div 1.20 = 120$."
%}

<br><br>

<div class="instructions" markdown="1">

### Part 3: Operational Costs

Businesses often use tables to calculate the total cost of inventory or services. This involves multiplying unit costs by quantities and summing the total.

</div>

<!-- TABLE QUESTION 2: INVENTORY -->
{% capture inventory_table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Unit Cost (£)</th>
      <th>Total Cost (£)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hard Drives</td>
      <td>10</td>
      <td>45.50</td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>Monitors</td>
      <td>5</td>
      <td>120.00</td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>Keyboards</td>
      <td>20</td>
      <td>15.25</td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td><strong>GRAND TOTAL</strong></td>
      <td></td>
      <td></td>
      <td><input type="number" step="any"></td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include table_fill.html 
   id="table_inventory" 
   title="Question 7: Inventory Valuation"
   question_text="Calculate the total cost for each item line, and then the Grand Total."
   table_content=inventory_table
   answers="455 || 600 || 305 || 1360"
   tolerance="0.01" 
   solution_text="<strong>HDDs:</strong> $10 \times 45.50 = 455$. <br> <strong>Monitors:</strong> $5 \times 120 = 600$. <br> <strong>Keyboards:</strong> $20 \times 15.25 = 305$. <br> <strong>Total:</strong> $455 + 600 + 305 = 1360$."
%}

<br><br>

<div class="instructions" markdown="1">

### Part 4: Economic Data (Standard Form)

In economics and global business, numbers are often too large to write out fully (e.g., National Debt, GDP). We use **Standard Form**.

*   $3 \text{ million} = 3,000,000 = 3 \times 10^6$
*   $2.5 \text{ billion} = 2,500,000,000 = 2.5 \times 10^9$
*   $1.4 \text{ trillion} = 1,400,000,000,000 = 1.4 \times 10^{12}$

</div>

{% include question_dropdown.html
    id="bus_sf_1"
    title="Question 8: Company Valuation"
    question_text="A tech company is valued at £45,000,000. Write this in Standard Form."
    options="wrong1::4.5 \times 10^6||correct::4.5 \times 10^7||wrong2::45 \times 10^6||wrong3::4.5 \times 10^8"
    correct_answer="correct"
    solution_text="1. Create a number between 1 and 10: $4.5$. <br> 2. Count the decimal movements from the end: 7 steps. <br> Answer: $4.5 \times 10^7$."
%}

{% include question_dropdown.html
    id="bus_sf_2"
    title="Question 9: National GDP"
    question_text="The GDP of a country is £2.8 Trillion (£2,800,000,000,000). Select the correct Standard Form."
    options="correct::2.8 \times 10^{12}||wrong1::2.8 \times 10^9||wrong2::28 \times 10^{11}||wrong3::2.8 \times 10^{10}"
    correct_answer="correct"
    solution_text="A trillion has 12 zeros. <br> $2.8 \times 10^{12}$."
%}

{% include question_numerical.html
    id="bus_sf_3"
    title="Question 10: Interpreting Data"
    question_text="A budget deficit is listed as $1.2 \times 10^5$. Write this as an ordinary number."
    correct_answer="120000"
    tolerance="0"
    solution_text="Move the decimal point 5 places to the right. <br> $1.2 \to 12 \to 120 \to 1200 \to 12000 \to 120000$."
%}


<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/numeracy/" | relative_url }}">← Return to Numeracy Menu</a>
</div>

{% include pagination.html %}
