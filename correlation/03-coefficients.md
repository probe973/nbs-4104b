---
layout: default
title: Correlation Coefficients
---

# Correlation Coefficients

<div class="explanation" markdown="1">

## Pearson Correlation Coefficient

The **Pearson correlation coefficient, $r$,** is a number between $-1$ and $+1$ that measures the **linear association** between two variables, i.e. it evaluates how well the data points fall on a straight line.

Positive $r$ values indicate positive correlation.

Negative $r$ values indicate negative correlation.

The closer the $r$ value is to $+1$, for positive, or $-1$ for negative, the stronger the linear relationship.

| $r$ value | Interpretation |
|:---|:---|
|0.8 - 1 | Very strong |
|0.6 - 0.8 | Stong |
|0.4 - 0.6 | Moderate |
|0.2 - 0.4 | Weak |
|0 - 0.2 | Very weak |

</div>

### Questions

{% include scatter_display.html 
   id="pearsonSDq1" 
   title="q1"
   alt="The scatter diagram shows a strong positive correlation. As x increase from 2 to 9, y increase from 2 to 20."
   varX="x"
   varY="y"
   points="2,2 | 3,6 | 5,9 | 6,18 | 9,20"
   showTable="true" %}

{% include question_multiple_choice.html
    id="Pearson_q1"
    title="Question 1"
    question_text="What is the most likely $r$ value for the scatter diagram shown?"
    options="a::-0.94||b::0.06||c::0.41||d::0.94"
    correct_answer="d"
    solution_text="This is very strong positive correlation"
%}

{% include scatter_display.html 
   id="pearsonSDq2" 
   title="q2"
   alt="The scatter diagram shows a moderate strong negative correlation. As x increase from 5 to 24, y decreases from 20 to 1."
   varX="x"
   varY="y"
   points="5,20 | 9,11 | 18,14 | 20,10 | 22,12 | 24,1"
   showTable="true" %}

{% include question_multiple_choice.html
    id="Pearson_q2"
    title="Question 2"
    question_text="What is the most likely $r$ value for the scatter diagram shown?"
    options="a::-0.97||b::-0.73||c::-0.15||d::0.73||e::0.97"
    correct_answer="b"
    solution_text="This is strong negative correlation"
%}

<div class="explanation" markdown="1">

## Calculation

Pearson's correlation coefficient can be calculated between variables $x$, with mean $\bar{x}$ and $y$, with mean $\bar{y}$ using the formula:

$$r = \frac{\sum{(x-\bar{x})(y-\bar{y})}}{\sqrt{\sum{(x-\bar{x})^2} \sum{(y-\bar{y})^2}}}$$

</div>

{% capture r_table %}
<table class="table table-bordered">
  <thead>
    <tr>
       <th>Point</th>
      <th>$x$</th>
      <th>$y$</th>
      <th>$x-\bar{x}$</th>
      <th>$y-\bar{y}$</th>
      <th>$(x-\bar{x})^2$</th>
      <th>$(y-\bar{y})^2$</th>
      <th>$(x-\bar{x})(y-\bar{y})$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>A</td>
      <td>1</td>
      <td>9</td>
      <td>-3</td>
       <td>-12</td>
      <td>9</td>
      <td>144</td>
       <td>36</td>
    </tr>
    <tr>
       <td>B</td>
      <td>3</td>
      <td>10</td>
      <td>-1</td>
       <td>-11</td>
       <td>1</td>
       <td>121</td>
       <td>11</td>
    </tr>
    <tr>
       <td>C</td>
      <td>4</td>
      <td>32</td>
      <td><input type="number" step="any" aria-label="x minus x bar"></td>
       <td><input type="number" step="any" aria-label="y minus y bar"></td>
       <td><input type="number" step="any" aria-label="x minus x bar squared"></td>
       <td><input type="number" step="any" aria-label="y minus y bar squared"></td>
       <td><input type="number" step="any" aria-label="x minus x bar times y minus y bar"></td>
    </tr>
    <tr>
       <td>D</td>
      <td>5</td>
      <td>16</td>
      <td><input type="number" step="any" aria-label="x minus x bar"></td>
       <td><input type="number" step="any" aria-label="y minus y bar"></td>
       <td><input type="number" step="any" aria-label="x minus x bar squared"></td>
       <td><input type="number" step="any" aria-label="y minus y bar squared"></td>
       <td><input type="number" step="any" aria-label="x minus x bar times y minus y bar"></td>
    </tr>
    <tr>
       <td>E</td>
      <td>7</td>
       <td>38</td>
      <td><input type="number" step="any" aria-label="x minus x bar"></td>
       <td><input type="number" step="any" aria-label="y minus y bar"></td>
       <td><input type="number" step="any" aria-label="x minus x bar squared"></td>
       <td><input type="number" step="any" aria-label="y minus y bar squared"></td>
       <td><input type="number" step="any" aria-label="x minus x bar times y minus y bar"></td>
    </tr>
     <tr>
        <td>SUM</td>
        <td>20</td>
        <td>105</td>
        <td>---</td>
        <td>---</td>
        <td><input type="number" step="any" aria-label="sum x minus x bar squared"></td>
       <td><input type="number" step="any" aria-label="sum y minus y bar squared"></td>
       <td><input type="number" step="any" aria-label="sum x minus x bar times y minus y bar"></td>
     </tr>
  </tbody>
</table>
{% endcapture %}

### Questions

{% include scatter_display.html 
   id="pearsonSDq3" 
   title="q3"
   alt="The scatter diagram shows a moderate strong positive correlation. As x increase from 1 to 7, y increases from 9 to 38."
   varX="x"
   varY="y"
   points="1,9 | 3,10 | 4,32 | 5,16 | 7,38"
   showTable="true" %}


Given $\bar{x}=4$ and $\bar{y}=21$,

{% include table_fill.html 
   id="pearsonq3" 
   title="3"
   question_text="Complete the table"
   table_content=r_table
   answers="0 || 11 || 0 || 121 || 0 || 1 || -5 || 1 || 25 || -5 || 3 || 17 || 9 || 289 || 51 || 20 || 700 || 93"
   tolerance="0" 
   solution_text="Subtract the means from the $x$ and $y$ data.  Square both of these columns.  Multiply the $x-\bar{x}$ and $y-\bar{y}$ columns.  Add up the columns."
%}

{% include question_numerical.html
    id="pearsonq4"
    title="4"
    question_text="Use the column sums and the formula to calculate Pearson's correlation coefficient, to 3 d.p."
    correct_answer="0.786"
    tolerance="0.0005"
    solution_text="$\frac{93}{\sqrt{20 \times 700}}$ "
%}
