# Fractions Mastery

Please review the notes in each section and answer the questions.

<div class="instructions" markdown="1">

### Part 1: Simplifying Fractions

To simplify a fraction, we must find an **equivalent fraction** using smaller numbers.

This is done by dividing both the **numerator** and the **denominator** by a **common factor**.
*   If you divide by the *Highest Common Factor* (HCF) immediately, the fraction will be fully simplified in one step.
*   If you divide by a smaller common factor, you may need to repeat the process until the only common factor remaining is 1.

</div>

{% include question_multiple_choice.html
    id="frac_sim_1"
    title="Question 1"
    question_text="Simplify the fraction $\frac{8}{12}$."
    options="wrong1::4/6||correct::2/3||wrong2::3/4||wrong3::2/4"
    correct_answer="correct"
    solution_text="The highest common factor of 8 and 12 is 4. <br> $8 \div 4 = 2$ <br> $12 \div 4 = 3$ <br> The simplified fraction is $\frac{2}{3}$."
%}

{% include question_multiple_choice.html
    id="frac_sim_2"
    title="Question 2"
    question_text="Simplify the fraction $\frac{15}{25}$."
    options="wrong1::3/4||correct::3/5||wrong2::5/3||wrong3::1/5"
    correct_answer="correct"
    solution_text="The highest common factor of 15 and 25 is 5. <br> $15 \div 5 = 3$ <br> $25 \div 5 = 5$."
%}

{% include question_multiple_choice.html
    id="frac_sim_3"
    title="Question 3"
    question_text="Simplify the fraction $\frac{18}{24}$."
    options="wrong1::9/12||wrong2::6/8||correct::3/4||wrong3::2/3"
    correct_answer="correct"
    solution_text="You can divide by 6 immediately: <br> $18 \div 6 = 3$ <br> $24 \div 6 = 4$. <br> Alternatively, divide by 2 to get $\frac{9}{12}$, then divide by 3 to get $\frac{3}{4}$."
%}

{% include question_multiple_choice.html
    id="frac_sim_4"
    title="Question 4"
    question_text="Simplify the fraction $\frac{24}{36}$."
    options="correct::2/3||wrong1::12/18||wrong2::4/6||wrong3::3/4"
    correct_answer="correct"
    solution_text="The highest common factor is 12. <br> $24 \div 12 = 2$ <br> $36 \div 12 = 3$."
%}

{% include question_multiple_choice.html
    id="frac_sim_5"
    title="Question 5"
    question_text="Simplify the fraction $\frac{42}{56}$."
    options="wrong1::6/8||wrong2::21/28||correct::3/4||wrong3::7/8"
    correct_answer="correct"
    solution_text="Both numbers are in the 7 times table ($42 \div 7 = 6$, $56 \div 7 = 8$). <br> This gives $\frac{6}{8}$. <br> Divide by 2 again to get $\frac{3}{4}$."
%}

<br><br>

<div class="instructions" markdown="1">

### Part 2: Adding and Subtracting Fractions

Fractions represent parts of a whole. To add or subtract them, we must be counting parts of the **same size**.

1.  Find a **Common Denominator** (The lowest common multiple of the current denominators).
2.  Convert the fractions into equivalent fractions with this new denominator.
3.  Add or subtract the **numerators** only. The denominator remains unchanged.

</div>

{% include question_multiple_choice.html
    id="frac_add_1"
    title="Question 1"
    question_text="Calculate: $\frac{2}{9} + \frac{5}{9}$"
    options="wrong1::7/18||correct::7/9||wrong2::10/81||wrong3::3/9"
    correct_answer="correct"
    solution_text="The denominators are already the same. We simply add the numerators: $2 + 5 = 7$. The answer is $\frac{7}{9}$."
%}

{% include question_multiple_choice.html
    id="frac_sub_1"
    title="Question 2"
    question_text="Calculate: $\frac{3}{4} - \frac{1}{8}$"
    options="wrong1::2/4||correct::5/8||wrong2::2/8||wrong3::1/4"
    correct_answer="correct"
    solution_text="The common denominator is 8. <br> Convert $\frac{3}{4}$ by multiplying numerator and denominator by 2: $\frac{6}{8}$. <br> Now calculate: $\frac{6}{8} - \frac{1}{8} = \frac{5}{8}$."
%}

{% include question_multiple_choice.html
    id="frac_add_2"
    title="Question 3"
    question_text="Calculate: $\frac{1}{3} + \frac{2}{5}$"
    options="wrong1::3/8||correct::11/15||wrong2::3/15||wrong3::2/15"
    correct_answer="correct"
    solution_text="The lowest common multiple of 3 and 5 is 15. <br> $\frac{1}{3} = \frac{5}{15}$ <br> $\frac{2}{5} = \frac{6}{15}$ <br> Add them: $\frac{5}{15} + \frac{6}{15} = \frac{11}{15}$."
%}

{% include question_multiple_choice.html
    id="frac_sub_2"
    title="Question 4"
    question_text="Calculate: $\frac{7}{8} - \frac{1}{6}$"
    options="wrong1::6/2||wrong2::6/14||correct::17/24||wrong3::13/24"
    correct_answer="correct"
    solution_text="The lowest common multiple of 8 and 6 is 24. <br> $\frac{7}{8} = \frac{21}{24}$ (multiply by 3). <br> $\frac{1}{6} = \frac{4}{24}$ (multiply by 4). <br> Subtract: $\frac{21}{24} - \frac{4}{24} = \frac{17}{24}$."
%}

{% include question_multiple_choice.html
    id="frac_add_chain"
    title="Question 5"
    question_text="Calculate: $\frac{1}{2} + \frac{1}{4} + \frac{1}{8}$"
    options="correct::7/8||wrong1::3/14||wrong2::3/8||wrong3::7/16"
    correct_answer="correct"
    solution_text="The common denominator for 2, 4, and 8 is 8. <br> $\frac{1}{2} = \frac{4}{8}$ <br> $\frac{1}{4} = \frac{2}{8}$ <br> $\frac{1}{8}$ stays the same. <br> Sum: $\frac{4}{8} + \frac{2}{8} + \frac{1}{8} = \frac{7}{8}$."
%}

<br><br>

<div class="instructions" markdown="1">

### Part 3: Multiplying Fractions

When multiplying fractions, we are calculating a part of a part.

1.  Multiply the **numerators** together to get the new numerator.
2.  Multiply the **denominators** together to get the new denominator.
3.  Simplify the resulting fraction if possible.

</div>

{% include question_multiple_choice.html
    id="frac_mult_1"
    title="Question 1"
    question_text="Calculate: $\frac{3}{7} \times \frac{2}{5}$"
    options="correct::6/35||wrong1::5/12||wrong2::6/12||wrong3::1/7"
    correct_answer="correct"
    solution_text="Multiply numerators: $3 \times 2 = 6$. <br> Multiply denominators: $7 \times 5 = 35$. <br> Result: $\frac{6}{35}$."
%}

{% include question_multiple_choice.html
    id="frac_mult_2"
    title="Question 2"
    question_text="Calculate: $\frac{3}{4} \times \frac{2}{3}$"
    options="wrong1::6/7||correct::1/2||wrong2::5/7||wrong3::6/12"
    correct_answer="correct"
    solution_text="$3 \times 2 = 6$. <br> $4 \times 3 = 12$. <br> The fraction is $\frac{6}{12}$. Dividing numerator and denominator by 6 gives $\frac{1}{2}$."
%}

{% include question_multiple_choice.html
    id="frac_mult_3"
    title="Question 3"
    question_text="Calculate: $5 \times \frac{3}{4}$"
    options="wrong1::15/20||wrong2::8/9||correct::15/4||wrong3::3/20"
    correct_answer="correct"
    solution_text="Treat the whole number 5 as $\frac{5}{1}$. <br> $\frac{5}{1} \times \frac{3}{4} = \frac{15}{4}$. <br> (This is also $3\frac{3}{4}$ as a mixed number)."
%}

{% include question_multiple_choice.html
    id="frac_mult_4"
    title="Question 4"
    question_text="Calculate: $\frac{4}{9} \times \frac{3}{8}$"
    options="correct::1/6||wrong1::12/72||wrong2::7/17||wrong3::4/6"
    correct_answer="correct"
    solution_text="Multiply: $4 \times 3 = 12$ and $9 \times 8 = 72$. <br> Fraction: $\frac{12}{72}$. <br> Divide both by 12 to simplify to $\frac{1}{6}$."
%}

{% include question_multiple_choice.html
    id="frac_mult_chain"
    title="Question 5"
    question_text="Calculate: $\frac{1}{2} \times \frac{2}{3} \times \frac{3}{5}$"
    options="wrong1::6/10||correct::1/5||wrong2::6/15||wrong3::1/10"
    correct_answer="correct"
    solution_text="Multiply numerators: $1 \times 2 \times 3 = 6$. <br> Multiply denominators: $2 \times 3 \times 5 = 30$. <br> Fraction is $\frac{6}{30}$. Simplify by dividing by 6 to get $\frac{1}{5}$."
%}

<br><br>

<div class="instructions" markdown="1">

### Part 4: Dividing Fractions

Dividing by a number is mathematically equivalent to multiplying by its **reciprocal**.

To divide by a fraction:
1.  Find the reciprocal of the divisor (the second fraction) by swapping its numerator and denominator.
2.  Change the operation from division to multiplication.
3.  Multiply the fractions as normal.

</div>

{% include question_multiple_choice.html
    id="frac_div_1"
    title="Question 1"
    question_text="Calculate: $\frac{2}{3} \div \frac{1}{5}$"
    options="wrong1::2/15||correct::10/3||wrong2::3/10||wrong3::2/8"
    correct_answer="correct"
    solution_text="The reciprocal of $\frac{1}{5}$ is $\frac{5}{1}$. <br> Equation becomes: $\frac{2}{3} \times \frac{5}{1}$. <br> Result: $\frac{10}{3}$ (or $3\frac{1}{3}$)."
%}

{% include question_multiple_choice.html
    id="frac_div_2"
    title="Question 2"
    question_text="Calculate: $\frac{3}{7} \div \frac{2}{3}$"
    options="wrong1::6/21||wrong2::2/7||correct::9/14||wrong3::14/9"
    correct_answer="correct"
    solution_text="The reciprocal of $\frac{2}{3}$ is $\frac{3}{2}$. <br> Equation becomes: $\frac{3}{7} \times \frac{3}{2}$. <br> Result: $\frac{9}{14}$."
%}

{% include question_multiple_choice.html
    id="frac_div_3"
    title="Question 3"
    question_text="Calculate: $4 \div \frac{1}{3}$"
    options="wrong1::4/3||correct::12||wrong2::3/4||wrong3::1"
    correct_answer="correct"
    solution_text="Write 4 as $\frac{4}{1}$. The reciprocal of $\frac{1}{3}$ is $\frac{3}{1}$. <br> Equation becomes: $\frac{4}{1} \times \frac{3}{1} = \frac{12}{1} = 12$."
%}

{% include question_multiple_choice.html
    id="frac_div_4"
    title="Question 4"
    question_text="Calculate: $\frac{5}{8} \div 2$"
    options="wrong1::10/8||correct::5/16||wrong2::5/4||wrong3::2/5"
    correct_answer="correct"
    solution_text="Write 2 as $\frac{2}{1}$. Its reciprocal is $\frac{1}{2}$. <br> Equation becomes: $\frac{5}{8} \times \frac{1}{2}$. <br> Result: $\frac{5}{16}$."
%}

{% include question_multiple_choice.html
    id="frac_div_5"
    title="Question 5"
    question_text="Calculate: $\frac{4}{5} \div \frac{8}{15}$"
    options="wrong1::32/75||wrong2::2/3||correct::3/2||wrong3::32/40"
    correct_answer="correct"
    solution_text="The reciprocal of $\frac{8}{15}$ is $\frac{15}{8}$. <br> Multiply: $\frac{4}{5} \times \frac{15}{8} = \frac{60}{40}$. <br> Simplify by dividing by 20: $\frac{3}{2}$."
%}

<br><br>

<div class="instructions" markdown="1">

### Part 5: Mixed Operations and Application

This section applies the previous skills to broader arithmetic concepts.

*   **Mixed Numbers:** To multiply or divide mixed numbers (e.g., $1\frac{1}{2}$), you must convert them to improper fractions first.
*   **Order of Operations (BIDMAS):** Multiplication and Division must be performed before Addition and Subtraction.
*   **Indices:** Squaring a fraction means multiplying it by itself.

</div>

{% include question_multiple_choice.html
    id="frac_adv_1"
    title="Question 1 (Improper Fractions)"
    question_text="Convert $2\frac{1}{4}$ to an improper fraction and multiply by $\frac{2}{3}$."
    options="wrong1::2/12||correct::3/2||wrong2::4/3||wrong3::9/7"
    correct_answer="correct"
    solution_text="1. Convert: $2\frac{1}{4} = \frac{9}{4}$. <br> 2. Multiply: $\frac{9}{4} \times \frac{2}{3} = \frac{18}{12}$. <br> 3. Simplify: Divide by 6 to get $\frac{3}{2}$."
%}

{% include question_multiple_choice.html
    id="frac_adv_2"
    title="Question 2 (Indices)"
    question_text="Calculate: $(\frac{2}{5})^2$"
    options="wrong1::4/5||wrong2::2/25||correct::4/25||wrong3::4/10"
    correct_answer="correct"
    solution_text="Squaring means multiplying the fraction by itself. <br> $\frac{2}{5} \times \frac{2}{5} = \frac{4}{25}$."
%}

{% include question_multiple_choice.html
    id="frac_adv_3"
    title="Question 3 (Order of Operations)"
    question_text="Calculate: $\frac{1}{2} + \frac{1}{3} \times \frac{1}{2}$"
    options="wrong1::5/12||correct::2/3||wrong2::2/5||wrong3::5/6"
    correct_answer="correct"
    solution_text="Using BIDMAS, multiply first. <br> 1. $\frac{1}{3} \times \frac{1}{2} = \frac{1}{6}$. <br> 2. Add: $\frac{1}{2} + \frac{1}{6}$. <br> 3. Common denominator is 6: $\frac{3}{6} + \frac{1}{6} = \frac{4}{6}$. <br> Simplify to $\frac{2}{3}$."
%}

{% include question_multiple_choice.html
    id="frac_adv_4"
    title="Question 4 (Brackets)"
    question_text="Calculate: $(\frac{1}{2} + \frac{1}{4}) \div \frac{3}{8}$"
    options="wrong1::9/32||correct::2||wrong2::1/2||wrong3::1"
    correct_answer="correct"
    solution_text="Brackets first. <br> 1. $\frac{1}{2} + \frac{1}{4} = \frac{3}{4}$. <br> 2. Divide: $\frac{3}{4} \div \frac{3}{8}$. <br> 3. Flip and multiply: $\frac{3}{4} \times \frac{8}{3} = \frac{24}{12}$. <br> Result: $2$."
%}

{% include question_multiple_choice.html
    id="frac_adv_5"
    title="Question 5 (Mixed Numbers)"
    question_text="Calculate: $1\frac{1}{2} \div 2\frac{1}{4}$"
    options="correct::2/3||wrong1::3/2||wrong2::3/8||wrong3::27/8"
    correct_answer="correct"
    solution_text="1. Convert to improper fractions: $1\frac{1}{2} = \frac{3}{2}$ and $2\frac{1}{4} = \frac{9}{4}$. <br> 2. Equation: $\frac{3}{2} \div \frac{9}{4}$. <br> 3. Flip second fraction: $\frac{3}{2} \times \frac{4}{9} = \frac{12}{18}$. <br> 4. Simplify: $\frac{2}{3}$."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/numeracy/" | relative_url }}">← Return to Numeracy Menu</a>
</div>

{% include pagination.html %}
