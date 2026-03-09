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

{% include scatter_display.html 
   id="pearsonSDq1" 
   title="pearsonq1"
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
   title="pearsonq2"
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
