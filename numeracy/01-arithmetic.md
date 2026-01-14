---
layout: default
title: Arithmetic Practice
---

# General Arithmetic Workshop

Please review the notes below and answer the questions to test your understanding.

<div class="instructions" markdown="1">

### Part 1: Negative Numbers

Understanding how to handle negative signs is fundamental to arithmetic.

**1. Adding and Subtracting**
Think of a number line. Positive numbers go to the right, negative numbers go to the left.
*   **Adding a negative** is the same as subtracting: $5 + (-3)$ becomes $5 - 3 = 2$.
*   **Subtracting a negative** is the same as adding: $5 - (-3)$ becomes $5 + 3 = 8$ (Two negatives make a positive).

**2. Multiplying and Dividing**
*   **Same Signs = Positive Answer** ($(+) \times (+)$ or $(-) \times (-)$)
*   **Different Signs = Negative Answer** ($(+) \times (-)$ or $(-) \times (+)$)

**3. Chains of Numbers**
When handling more than two numbers, take them step-by-step from left to right.

</div>

<!-- NEGATIVE NUMBERS: BASIC -->

{% include question_numerical.html
id="neg_basic_sub"
title="Subtraction into Negatives"
question_text="Calculate: $4 - 9$"
correct_answer="-5"
tolerance="0"
solution_text="Start at 4 and move 9 steps down. You reach -5."
%}

{% include question_numerical.html
id="neg_basic_addneg"
title="Adding a Negative"
question_text="Calculate: $-6 + (-5)$"
correct_answer="-11"
tolerance="0"
solution_text="Adding a negative is the same as subtracting. $-6 - 5 = -11$."
%}

{% include question_numerical.html
id="neg_basic_subneg"
title="Subtracting a Negative"
question_text="Calculate: $-3 - (-7)$"
correct_answer="4"
tolerance="0"
solution_text="Two negatives make a positive. This becomes $-3 + 7 = 4$."
%}

{% include question_numerical.html
id="neg_basic_mult"
title="Multiplying Negatives"
question_text="Calculate: $-8 \times -4$"
correct_answer="32"
tolerance="0"
solution_text="Negative times Negative equals Positive. $8 \times 4 = 32$."
%}

{% include question_numerical.html
id="neg_basic_div"
title="Dividing Mixed Signs"
question_text="Calculate: $45 \div -9$"
correct_answer="-5"
tolerance="0"
solution_text="Positive divided by Negative equals Negative. $45 \div 9 = 5$, so the answer is -5."
%}

<!-- NEGATIVE NUMBERS: ADVANCED / MULTI-STEP -->

{% include question_numerical.html
id="neg_adv_chain_add"
title="Three Number Addition/Subtraction"
question_text="Calculate: $-5 + 8 - 12$"
correct_answer="-9"
tolerance="0"
solution_text="Work left to right: <br> 1. $-5 + 8 = 3$ <br> 2. $3 - 12 = -9$."
%}

{% include question_numerical.html
id="neg_adv_chain_mixed"
title="Mixed Signs Chain"
question_text="Calculate: $10 - (-5) + (-20)$"
correct_answer="-5"
tolerance="0"
solution_text="Simplify the signs first: <br> $10 + 5 - 20$ <br> $15 - 20 = -5$."
%}

{% include question_numerical.html
id="neg_adv_mult_chain"
title="Multiple Multiplication"
question_text="Calculate: $-2 \times -3 \times -4$"
correct_answer="-24"
tolerance="0"
solution_text="1. $-2 \times -3 = 6$ (Positive) <br> 2. $6 \times -4 = -24$ (Negative)."
%}

{% include question_numerical.html
id="neg_adv_square"
title="Squaring Negatives"
question_text="Calculate: $(-6)^2$"
correct_answer="36"
tolerance="0"
solution_text="Squared means multiplied by itself: $-6 \times -6 = 36$."
%}

<br><br>

<div class="instructions" markdown="1">

### Part 2: Order of Operations (BIDMAS)

When a calculation has multiple parts, you must follow the correct order, known as **BIDMAS**:

1.  **B**rackets: Do things inside parentheses $()$ first.
2.  **I**ndices: Powers or square roots ($3^2, \sqrt{9}$).
3.  **D**ivision & **M**ultiplication: Do these next. **Crucial:** If you have both, work from **Left to Right**.
4.  **A**ddition & **S**ubtraction: Do these last. If you have both, work from **Left to Right**.

</div>

<!-- BIDMAS: FOUNDATION -->

{% include question_numerical.html
id="bidmas_found_mult"
title="Multiplication vs Addition"
question_text="Calculate: $7 + 6 \times 3$"
correct_answer="25"
tolerance="0"
solution_text="Multiplication first: $6 \times 3 = 18$. <br> Then Addition: $7 + 18 = 25$."
%}

{% include question_numerical.html
id="bidmas_found_ind"
title="Indices"
question_text="Calculate: $50 - 5^2$"
correct_answer="25"
tolerance="0"
solution_text="Indices first: $5^2 = 25$. <br> Then Subtraction: $50 - 25 = 25$."
%}

{% include question_numerical.html
id="bidmas_found_brackets"
title="Brackets"
question_text="Calculate: $(12 - 5) \times 4$"
correct_answer="28"
tolerance="0"
solution_text="Brackets first: $12 - 5 = 7$. <br> Then Multiplication: $7 \times 4 = 28$."
%}

<!-- BIDMAS: THE "LEFT TO RIGHT" TRAP -->

{% include question_numerical.html
id="bidmas_lr_divmult"
title="Left to Right: Division & Multiplication"
question_text="Calculate: $24 \div 4 \times 2$"
correct_answer="12"
tolerance="0"
solution_text="Division and Multiplication are equal priority. Go Left to Right. <br> 1. $24 \div 4 = 6$ <br> 2. $6 \times 2 = 12$. <br> (Note: If you did $4 \times 2$ first, you would get 3, which is incorrect)."
%}

{% include question_numerical.html
id="bidmas_lr_addsub"
title="Left to Right: Subtraction & Addition"
question_text="Calculate: $20 - 15 + 5$"
correct_answer="10"
tolerance="0"
solution_text="Subtraction and Addition are equal priority. Go Left to Right. <br> 1. $20 - 15 = 5$ <br> 2. $5 + 5 = 10$."
%}

<!-- BIDMAS: COMPLEX / ADVANCED -->

{% include question_numerical.html
id="bidmas_comp_nested"
title="Nested Operations"
question_text="Calculate: $3 + 4 \times (10 - 7)$"
correct_answer="15"
tolerance="0"
solution_text="1. Brackets: $10 - 7 = 3$. <br> 2. Multiply: $4 \times 3 = 12$. <br> 3. Add: $3 + 12 = 15$."
%}

{% include question_numerical.html
id="bidmas_comp_indices"
title="Indices and Brackets"
question_text="Calculate: $2 \times (3 + 4)^2$"
correct_answer="98"
tolerance="0"
solution_text="1. Brackets: $3 + 4 = 7$. <br> 2. Indices: $7^2 = 49$. <br> 3. Multiply: $2 \times 49 = 98$."
%}

{% include question_numerical.html
id="bidmas_comp_long"
title="Long Chain"
question_text="Calculate: $40 - 10 \times 2 + 15 \div 3$"
correct_answer="25"
tolerance="0"
solution_text="Do multiplication and division first: <br> $10 \times 2 = 20$ <br> $15 \div 3 = 5$ <br> Now calculate $40 - 20 + 5$ from left to right: <br> $40 - 20 = 20$ <br> $20 + 5 = 25$."
%}

{% include question_numerical.html
id="bidmas_comp_neg"
title="BIDMAS with Negative Numbers"
question_text="Calculate: $-5 + 3 \times (4 - 9)$"
correct_answer="-20"
tolerance="0"
solution_text="1. Brackets: $4 - 9 = -5$. <br> 2. Multiply: $3 \times -5 = -15$. <br> 3. Add: $-5 + (-15) = -20$."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/numeracy/" | relative_url }}">← Return to Numeracy Menu</a>
</div>

{% include pagination.html %}
