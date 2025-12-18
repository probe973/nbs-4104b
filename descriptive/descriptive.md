---
layout: default
title: Descriptive Statistics
---

# Workshop: Descriptive Statistics

<div class="instructions" markdown="1">

### Question 1

A small company employs 82 people. People working at the company are either in executive or non-executive positions. The annual salaries, given to the nearest £1000, of those in executive positions are shown below:

**107, 95, 98, 72, 60, 80, 60, 63, 85, 78, 60, 48**

</div>

<!-- 1a: Stem and Leaf -->
<!-- ACCESSIBILITY: Used semantic list for data, styled to look like Stem/Leaf -->
{% include question_dropdown.html
    id="ds_q1a"
    title="1a"
    question_text="Display these data as a stem and leaf diagram."
    solution_text="<p><strong>Key:</strong> 4 &#124; 8 = 48 (£000s)</p>
    <div style='font-family: monospace; font-size: 1.2em;'>
    4 &#124; 8 <br>
    5 &#124; <br>
    6 &#124; 0 0 0 3 <br>
    7 &#124; 2 8 <br>
    8 &#124; 0 5 <br>
    9 &#124; 5 8 <br>
    10 &#124; 7
    </div>"
%}

<!-- 1b -->
{% include question_numerical.html
    id="ds_q1b_median"
    title="1b i"
    question_text="Find the **median**."
    correct_answer="75"
    tolerance="0"
    solution_text="Ordered data: 48, 60, 60, 60, 63, 72 (MIDDLE) 78, 80, 85, 95, 98, 107. <br> Median is average of 6th and 7th: $(72+78)/2 = 75$."
%}

{% include question_numerical.html
    id="ds_q1b_lq"
    title="1b ii"
    question_text="Find the **lower quartile**."
    correct_answer="60"
    tolerance="0"
    solution_text="The median of the lower half (48, 60, 60, 60, 63, 72). <br> Average of 60 and 60 is 60."
%}

{% include question_numerical.html
    id="ds_q1b_uq"
    title="1b iii"
    question_text="Find the **upper quartile**."
    correct_answer="90"
    tolerance="0"
    solution_text="The median of the upper half (78, 80, 85, 95, 98, 107). <br> Average of 85 and 95 is 90."
%}

{% include question_numerical.html
    id="ds_q1b_iqr"
    title="1b iv"
    question_text="Find the **inter-quartile range (IQR)**."
    correct_answer="30"
    tolerance="0"
    solution_text="$IQR = UQ - LQ$. <br> $90 - 60 = 30$."
%}

<!-- 1c -->
{% include question_numerical.html
    id="ds_q1c"
    title="1c"
    question_text="Find the arithmetic mean of these wages."
    correct_answer="75.5"
    tolerance="0.1"
    solution_text="Sum = 906. Count = 12. <br> Mean = $906 \div 12 = 75.5$."
%}

<br><br>

<div class="instructions" markdown="1">

10 of these executives are permitted to use a company car. **The arithmetic mean of their 10 wages is £79500**. Find the sample variance, $s_{w}^{2}$, of their wages.

$$ s_{x}^{2} = \frac{\sum (x - \bar{x})^2}{n - 1} $$

</div>

<!-- 1d: Table Fill -->
{% capture var_table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Wage, $w$</th>
      <th scope="col">$$w - \bar{w}$$</th>
      <th scope="col">$$(w - \bar{w})^2$$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>107</td>
      <td>27.5</td>
      <td>756.25</td>
    </tr>
    <tr>
      <td>95</td>
      <td><input type="number" step="any" aria-label="Difference for wage 95"></td>
      <td><input type="number" step="any" aria-label="Squared Difference for wage 95"></td>
    </tr>
    <tr>
      <td>98</td>
      <td><input type="number" step="any" aria-label="Difference for wage 98"></td>
      <td><input type="number" step="any" aria-label="Squared Difference for wage 98"></td>
    </tr>
    <tr>
      <td>72</td>
      <td><input type="number" step="any" aria-label="Difference for wage 72"></td>
      <td><input type="number" step="any" aria-label="Squared Difference for wage 72"></td>
    </tr>
    <tr>
      <td>60</td>
      <td><input type="number" step="any" aria-label="Difference for wage 60"></td>
      <td><input type="number" step="any" aria-label="Squared Difference for wage 60"></td>
    </tr>
    <tr>
      <td>80</td>
      <td>0.5</td>
      <td>0.25</td>
    </tr>
    <tr>
      <td>60</td>
      <td>-19.5</td>
      <td><input type="number" step="any" aria-label="Squared Difference for wage 60 row 7"></td>
    </tr>
    <tr>
      <td>85</td>
      <td>5.5</td>
      <td><input type="number" step="any" aria-label="Squared Difference for wage 85"></td>
    </tr>
    <tr>
      <td>78</td>
      <td><input type="number" step="any" aria-label="Difference for wage 78"></td>
      <td>2.25</td>
    </tr>
    <tr>
      <td>60</td>
      <td><input type="number" step="any" aria-label="Difference for wage 60 row 10"></td>
      <td>380.25</td>
    </tr>
    <tr>
      <td><strong>SUM</strong></td>
      <td></td>
      <td><input type="number" step="any" aria-label="Sum of Squared Differences"></td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include table_fill.html 
   id="ds_q1d_table" 
   title="1d (Table)"
   question_text="Complete the table."
   table_content=var_table
   answers="15.5 || 240.25 || 18.5 || 342.25 || -7.5 || 56.25 || -19.5 || 380.25 || 380.25 || 30.25 || -1.5 || -19.5 || 2568.5"
   tolerance="0.01" 
   solution_text="Calculate the difference from 79.5 for each wage, then square it. The sum of the squared column is 2568.5."
%}

{% include question_numerical.html
    id="ds_q1d_final"
    title="1d (Calculation)"
    question_text="Find the sample variance, $s_{w}^{2}$, of their wages. (Give answer to 2 decimal places)."
    correct_answer="285.39"
    tolerance="0.05"
    solution_text="$s^2 = \frac{2568.5}{10 - 1} = 285.388...$"
%}

<!-- 1e -->
<div class="instructions" markdown="1">
**1e.** What level of data is being measured for the following? Answer nominal, ordinal, interval, or ratio.
</div>

{% include question_dropdown.html
    id="ds_q1e_1"
    title="1e i"
    question_text="Type of employment (exec or non-exec)"
    solution_text="**Nominal**"
%}

{% include question_dropdown.html
    id="ds_q1e_2"
    title="1e ii"
    question_text="Permission to use company car (yes or no)"
    solution_text="**Nominal**"
%}

{% include question_dropdown.html
    id="ds_q1e_3"
    title="1e iii"
    question_text="Annual Wage"
    solution_text="**Ratio**"
%}

<br><br>

<div class="instructions" markdown="1">

### Question 2

For this question you will need to use some of your answers from question 1.

For the non-executive employees, you are given the following summary statistics:
*   Arithmetic mean: £42000
*   Median: £36000
*   Lower quartile: £32000, Upper quartile: £48000
*   Minimum: £24000
*   Range: £50000

</div>

<!-- 2a -->
{% include question_dropdown.html
    id="ds_q2a"
    title="2a"
    question_text="Draw side-by-side box and whisker plots for the executive and non-executive wages."
    solution_text="<strong>Executive:</strong> Min 48, Q1 60, Med 75, Q3 90, Max 107. <br> <strong>Non-Executive:</strong> Min 24, Q1 32, Med 36, Q3 48, Max 74. <br><br> ![Box plot showing Executive wage shifted significantly higher and wider than Non-Executive wage](/assets/images/placeholder_boxplot.png)"
%}

<!-- 2b -->
{% include question_dropdown.html
    id="ds_q2b"
    title="2b"
    question_text="Compare the wages of the two groups."
    solution_text="The executive wages are generally much higher (Median £75k vs £36k). <br> The executive wages are also more spread out (IQR 30 vs 16)."
%}

<br><br>

<div class="instructions" markdown="1">

### Question 3

For this question you will need to review previous questions.

There are **22** people in the company that are permitted to use a company car.

</div>

<!-- 3a -->
{% include question_numerical.html
    id="ds_q3a"
    title="3a"
    question_text="How many non-executive employees are not permitted to use a company car? (A two-way table may be useful here)."
    correct_answer="58"
    tolerance="0"
    solution_text="Total employees: 82. Executives: 12. Non-execs: 70. <br> Total cars: 22. Exec cars (from Q1d): 10. <br> Non-execs with cars: $22 - 10 = 12$. <br> Non-execs without cars: $70 - 12 = 58$."
%}

<!-- 3b -->
<div class="instructions" markdown="1">
**3b.** What percentage are licensed to use the car? (Give answers to 1 decimal place).
</div>

{% include question_numerical.html
    id="ds_q3b_1"
    title="3b i"
    question_text="Of all employees"
    correct_answer="26.8"
    tolerance="0.1"
    solution_text="$22 \div 82 \times 100 = 26.8\%$."
%}

{% include question_numerical.html
    id="ds_q3b_2"
    title="3b ii"
    question_text="Of executive employees"
    correct_answer="83.3"
    tolerance="0.1"
    solution_text="$10 \div 12 \times 100 = 83.3\%$."
%}

{% include question_numerical.html
    id="ds_q3b_3"
    title="3b iii"
    question_text="Of non-executive employees"
    correct_answer="17.1"
    tolerance="0.1"
    solution_text="$12 \div 70 \times 100 = 17.1\%$."
%}

<br><br>

<div class="instructions" markdown="1">

### Question 4

The mean yearly distance travelled in a company car is 14,000 km and the variance is 4,410,000 km². All employees agree to reduce their annual mileage by 2,000 km.

</div>

<!-- 4a -->
{% include question_numerical.html
    id="ds_q4a"
    title="4a"
    question_text="What is the new mean annual mileage?"
    correct_answer="12000"
    tolerance="0"
    solution_text="Mean decreases by the constant: $14000 - 2000 = 12000$."
%}

<!-- 4b -->
{% include question_numerical.html
    id="ds_q4b"
    title="4b"
    question_text="What is the new variance of the annual mileage?"
    correct_answer="4410000"
    tolerance="0"
    solution_text="Variance is unaffected by addition/subtraction. It remains 4,410,000."
%}

<!-- 4c -->
{% include question_numerical.html
    id="ds_q4c"
    title="4c"
    question_text="What is the new standard deviation of the annual mileage?"
    correct_answer="2100"
    tolerance="0"
    solution_text="$\sqrt{4410000} = 2100$."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/descriptive/" | relative_url }}">← Return to Descriptive Statistics Menu</a>
</div>

{% include pagination.html %}
