---
layout: default
title: Test
---

<div class="instructions" markdown="1">
### Figure 1: Correlation of Study Hours vs Test Scores

{% include scatter_display.html 
   id="fig1" 
   title="Relationship between Study Time and Exam Results"
   alt="The diagram shows a strong positive correlation. As study hours increase from 2 to 10, test scores increase from 40 to 95."
   varX="Hours Studied"
   varY="Test Score (%)"
   points="2,40 | 4,55 | 6,72 | 8,88 | 10,95"
   showTable="true" %}

</div>
