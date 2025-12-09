---
layout: default
title: Problems in Numeracy
---

# Business & Financial Numeracy

This section applies your arithmetic skills to scenarios.

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


<div class="instructions" markdown="1">

### Further Problem Solving

In this section, you will apply your numeracy skills to solve common business problems. You will need to interpret the text to decide which calculations to perform.

### Analyzing the Problem

Real business problems rarely look like "$50 + 10$". They look like stories.
1.  **Identify the Goal:** What is the question actually asking for? (e.g., Difference in price, Final balance, Units to sell).
2.  **Filter Information:** Ignore numbers that aren't relevant.
3.  **Choose the Method:** Do you need to add, subtract, find a percentage, or work backwards?

</div>

{% include question_numerical.html
    id="bus_prob_compare"
    title="Supplier Selection"
    question_text="You need to buy 50 office chairs. <br> **Supplier A** charges £40 per chair. <br> **Supplier B** charges £50 per chair but offers a 25% discount on the total order. <br> What is the **difference in total price** between the two suppliers?"
    correct_answer="125"
    tolerance="0"
    solution_text="<strong>Supplier A:</strong> $50 \times 40 = 2000$. <br> <strong>Supplier B:</strong> $50 \times 50 = 2500$. Discount is 25% (Multiplier 0.75). $2500 \times 0.75 = 1875$. <br> <strong>Difference:</strong> $2000 - 1875 = 125$."
%}

{% capture bank_table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Date</th>
      <th>Description</th>
      <th>Money In (+)</th>
      <th>Money Out (-)</th>
      <th>Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01 Jan</td>
      <td>Opening Balance</td>
      <td></td>
      <td></td>
      <td><strong>£1,200</strong></td>
    </tr>
    <tr>
      <td>05 Jan</td>
      <td>Office Rent</td>
      <td></td>
      <td>500</td>
      <td><input type="number" step="any"></td>
    </tr>
    <tr>
      <td>10 Jan</td>
      <td>Client Payment</td>
      <td><input type="number" step="any"></td>
      <td></td>
      <td><strong>£1,500</strong></td>
    </tr>
    <tr>
      <td>15 Jan</td>
      <td>Staff Wages</td>
      <td></td>
      <td><input type="number" step="any"></td>
      <td><strong>£900</strong></td>
    </tr>
    <tr>
      <td>20 Jan</td>
      <td>Utility Bill</td>
      <td></td>
      <td>150</td>
      <td><input type="number" step="any"></td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include table_fill.html 
   id="bus_prob_statement" 
   title="Reconciling a Bank Statement"
   question_text="Fill in the missing values in the bank statement. You will need to look at how the <strong>Balance</strong> changes to figure out the missing 'Money In' or 'Money Out' figures."
   table_content=bank_table
   answers="700 || 800 || 600 || 750"
   tolerance="0.01" 
   solution_text="1. <strong>Rent:</strong> $1200 - 500 = 700$. <br> 2. <strong>Client:</strong> Balance went from 700 to 1500. The difference is $1500 - 700 = 800$ (Money In). <br> 3. <strong>Wages:</strong> Balance went from 1500 down to 900. The difference is $1500 - 900 = 600$ (Money Out). <br> 4. <strong>Utility:</strong> $900 - 150 = 750$."
%}

<br><br>

{% include question_numerical.html
    id="bus_prob_breakeven"
    title="Break-Even Analysis"
    question_text="A bakery has fixed monthly costs (Rent, Insurance) of £2,000. <br> They sell cakes for £5.00 each. <br> It costs them £1.00 in ingredients to make each cake. <br> How many cakes must they sell to cover their costs (Break Even)?"
    correct_answer="500"
    tolerance="0"
    solution_text="1. Find profit per cake: $5.00 - 1.00 = 4.00$. <br> 2. Divide fixed costs by profit per cake: $2000 \div 4 = 500$. <br> They need to sell 500 cakes."
%}

{% include question_numerical.html
    id="bus_prob_commission"
    title="Sales Commission Calculation"
    question_text="A salesperson earns a basic salary of £1,500 per month. <br> They also earn 10% commission on any sales **above** £10,000. <br> In March, they made £18,000 in sales. Calculate their **total pay** for the month."
    correct_answer="2300"
    tolerance="0"
    solution_text="1. Calculate sales eligible for commission: $18,000 - 10,000 = 8,000$. <br> 2. Calculate 10% commission: $10\%$ of $8,000 = 800$. <br> 3. Add to basic salary: $1,500 + 800 = 2,300$."
%}

{% include question_numerical.html
    id="bus_prob_fx"
    title="Importing Costs"
    question_text="A UK business buys a machine from the USA for $6,000 (USD). <br> The exchange rate is £1 = $1.25. <br> The shipping company charges a flat fee of £200. <br> What is the total cost in Pounds Sterling (£)?"
    correct_answer="5000"
    tolerance="0.01"
    solution_text="1. Convert machine cost: $6000 \div 1.25 = 4800$. <br> 2. Add shipping: $4800 + 200 = 5000$."
%}

<!-- PROBLEM 6: NET PAY ESTIMATION -->
{% include question_numerical.html
    id="bus_prob_tax"
    title="Net Pay Calculation"
    question_text="An employee's gross monthly pay is £3,000. <br> Income Tax is calculated as 20% of their earnings **after** a tax-free allowance of £1,000 is deducted. <br> Calculate their Net Pay (Take home pay)."
    correct_answer="2600"
    tolerance="0"
    solution_text="1. Taxable amount: $3000 - 1000 = 2000$. <br> 2. Calculate Tax: $20\%$ of $2000 = 400$. <br> 3. Net Pay: $3000 (\text{Gross}) - 400 (\text{Tax}) = 2600$."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/numeracy/" | relative_url }}">← Return to Numeracy Menu</a>
</div>

{% include pagination.html %}
