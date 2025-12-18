---
layout: default
title: Probability Problems
---

# Probability Problems

This workshop will look at some problems that can be solved using probability skills.

You can download a pdf of this resource <a href="{{ "/assets/pdf/probability_problems.pdf" | relative_url }}" target="_blank">here</a>.

The solutions pdf can be found <a href="{{ "/assets/pdf/probability_problems_solutions.pdf" | relative_url }}" target="_blank">here</a>.  

Please be mindful of the environment when choosing whether you need to print.


## Questions

### Question 1

A small company of 20 people runs a weekly raffle where there are always 2 prizes.  Each employee gets 1 raffle entry for every year they have worked there, so during your first year you don't have a ticket in the draw.  Before the draw today the combined total years people have worked there is 80 years.

A ticket is drawn, the winner picks their prize, the winning ticket is returned to the draw and a second winner is drawn.

**Note that** parts a to c are all related to calculating a probability for an individual employee.


**Part a**

In a weekly draw, what is the probability of winning the first prize

{% include question_dropdown.html
    id="prob_prob_1"
    title="1a i"
    question_text="for an employee that’s been there for 2 years?"
    solution_text="$P(\text{2yr 1st prize})=\frac{2}{80}=\frac{1}{40}=0.025$"
%}

{% include question_dropdown.html
    id="prob_prob_2"
    title="1a ii"
    question_text="for an employee that's been there for 9 months?"
    solution_text="$P(\text{0yr 1st prize})=\frac{0}{80}=0$"
%}


**Part b**

A particular employee has been working there for 8 years.  What is the probability that in a weekly draw that

{% include question_dropdown.html
    id="prob_prob_3"
    title="1b i"
    question_text="they win the first prize?"
    solution_text="$P(\text{8yr 1st prize})=\frac{8}{80}=\frac{1}{10}=0.1$"
%}

{% include question_dropdown.html
    id="prob_prob_4"
    title="1b ii"
    question_text="given they win the first prize they then win the second prize?"
    solution_text="$P(\text{8yr 2nd prize given 1st prize})=\frac{8}{80}=\frac{1}{10}=0.1$ <br> since return of ticket means 2nd prize is independent of first prize$"
%}

{% include question_dropdown.html
    id="prob_prob_5"
    title="1b iii"
    question_text="they win both the first and second prizes?"
    solution_text="$P(\text{1st and 2nd prize})=P(\text{1st prize}) \times P(\text{2nd prize given 1st prize})=\frac{1}{10} \times \frac{1}{10}=\frac{1}{100}=1%$"
%}

**Part c**

The company decides to change the nature of the draw, and the first prize winning ticket is no longer returned to the draw.  Work out the probability, for the individuals given, of winning.

{% include question_dropdown.html
    id="prob_prob_6"
    title="1c i"
    question_text="Employee has worked there for 4 years, probability of them winning first prize."
    solution_text="$P(\text{1st prize})=\frac{4}{80}=\frac{1}{20}=0.05=5%$"
%}

{% include question_dropdown.html
    id="prob_prob_7"
    title="1c ii"
    question_text="Given an employee of 4 years has just won first prize, the probability of them also winning second prize."
    solution_text="$P(\text{2nd prize given 1st prize})=\frac{3}{79}=0.038=3.8%$ <br> Due to 1 ticket being removed and 1 less ticket chance of winning"
%}

{% include question_dropdown.html
    id="prob_prob_8"
    title="1c iii"
    question_text="An employee of 8 years, probability of them winning both first and second prizes."
    solution_text="$P(\text{1st prize and 2nd prize})=\frac{8}{80} \times \frac{7}{79}=\frac{7}{790}=0.0089=0.89%$"
%}

{% include question_dropdown.html
    id="prob_prob_9"
    title="1c iv"
    question_text="An employee of 1 year, probability of them winning the second prize."
    solution_text="Since only 1 ticket, needs to not win the first prize. <br> $P(\text{Not win 1st prize and win 2nd prize})=\frac{79}{80}\times \frac{1}{79}=\frac{1}{80}=0.0125=1.25%$"
%}

{% include question_dropdown.html
    id="prob_prob_10"
    title="1c v"
    question_text="An employee of 5 years, probability of them winning one of the prizes but not both."
    solution_text="$P(\text{1st AND not 2nd})=\frac{5}{80} \times \frac{75}{79}=\frac{75}{1264}$ <br> $P(\text{not 1st AND 2nd})=\frac{75}{80} \times \frac{5}{79} = \frac{75}{1264}$ <br> $P(\text{One not both})=\frac{75}{1264}+\frac{75}{1264}=\frac{75}{632}=0.119=11.9%$"
%}

**Part d**

The number of employees based on the number of complete years they've worked there is shown in the table.

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Years</th>
      <th scope="col">Employees</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>0</td>
    <td>4</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <td>4</td>
      <td>4</td>
    </tr>
    <tr>
      <td>5</td>
      <td>3</td>
    </tr>
    <tr>
      <td>6</td>
      <td>2</td>
    </tr>
    <tr>
      <td>7</td>
      <td>1</td>
    </tr>
    <tr>
      <td>8</td>
      <td>3</td>
    </tr>
  </tbody>
</table>

{% include question_dropdown.html
    id="prob_prob_11"
    title="1d"
    question_text="What is the probability that in a weekly draw there are no prizes to employees who have been there more then 5 years?"
    solution_text="At the first draw there are $2 \times 6 + 1 \times 7 + 3\times 8 = 43$ tickets for those who've been there more than 5 years, so $80-43=37$ tickets are non-winners. <br> $P(\text{no prize any over 5 yr})=\frac{37}{80} \times \frac{36}{79}=\frac{333}{1580}=0.211=21.1\%$"
%}

### Question 2

Below is an incomplete two-way table showing the preferences of 500 people to two operating systems (Pear and Robot) and their self-declared interest in technology (low, medium, high).

**Part a**

{% capture tech_table %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col" rowspan="2" style="vertical-align: middle;">Operating System</th>
      <th scope="col" colspan="3" style="text-align: center;">Tech Interest</th>
      <th scope="col" rowspan="2" style="vertical-align: middle;">Total</th>
    </tr>
    <tr>
      <th scope="col">Low</th>
      <th scope="col">Medium</th>
      <th scope="col">High</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pear</td>
      <td>95</td>
      <td><input type="number" step="any" aria-label="Pear Medium Interest"></td>
      <td><input type="number" step="any" aria-label="Pear High Interest"></td>
      <td>350</td>
    </tr>
    <tr>
      <td>Robot</td>
      <td><input type="number" step="any" aria-label="Robot Low Interest"></td>
      <td>90</td>
      <td>40</td>
      <td><input type="number" step="any" aria-label="Robot Total"></td>
    </tr>
    <tr>
      <td><strong>Total</strong></td>
      <td><input type="number" step="any" aria-label="Total Low Interest"></td>
      <td>300</td>
      <td><input type="number" step="any" aria-label="Total High Interest"></td>
      <td><input type="number" step="any" aria-label="Grand Total"></td>
    </tr>
  </tbody>
</table>
{% endcapture %}

{% include table_fill.html 
   id="prob_prob_12" 
   title="2 a"
   question_text="Complete the two-way table"
   table_content=tech_table
   answers="210 || 45 || 20 || 150 || 115 || 85 || 500"
   tolerance="0" 
   solution_text="1. **Robot Total:** Grand Total (500) - Pear Total (350) = **150**. <br> 2. **Robot Low:** Robot Total (150) - Medium (90) - High (40) = **20**. <br> 3. **Total Low:** Pear (95) + Robot (20) = **115**. <br> 4. **Total High:** Grand Total (500) - Low (115) - Medium (300) = **85**. <br> 5. **Pear High:** Total High (85) - Robot High (40) = **45**. <br> 6. **Pear Medium:** Pear Total (350) - Low (95) - High (45) = **210**."

**Part b**

What is the probability that a randomly selected person:

{% include question_dropdown.html
    id="prob_prob_13"
    title="2b i"
    question_text="uses the Pear operating system?"
    solution_text="$P(\text{Pear})=\frac{350}{500}=\frac{7}{10}=0.7$"
%}

{% include question_dropdown.html
    id="prob_prob_14"
    title="2b ii"
    question_text="has a medium interest in technology?"
    solution_text="$P(\text{Medium})=\frac{300}{500}=\frac{3}{5}=0.6$"
%}

{% include question_dropdown.html
    id="prob_prob_15"
    title="2b iii"
    question_text="has a medium interest and uses the Robot operating system?"
    solution_text="$P(\text{Medium AND Robot})=\frac{90}{500}=\frac{9}{50}=0.18$"
%}

{% include question_dropdown.html
    id="prob_prob_16"
    title="2b iv"
    question_text="has a low or medium interest and uses the Pear operating system?"
    solution_text="$P(\text{Low/medium AND Pear})=\frac{95+210}{500}=\frac{61}{100}=0.61$"
%}

{% include question_dropdown.html
    id="prob_prob_17"
    title="2b v"
    question_text="has a high technology interest, given that they use the Robot operating system?"
    solution_text="$P(\text{High GIVEN Robot})=\frac{40}{150}=\frac{4}{15}=0.27$"
%}

{% include question_dropdown.html
    id="prob_prob_18"
    title="2b vi"
    question_text="uses the Robot operating system, given they have a low technology interest?"
    solution_text="$P(\text{Robot GIVEN Low})=\frac{20}{115}=\frac{4}{23}=0.17$"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/probability/" | relative_url }}">← Return to Probability Menu</a>
</div>

{% include pagination.html %}
