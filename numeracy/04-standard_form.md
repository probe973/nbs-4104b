---
layout: default
title: Standard Form
---

# Standard Form (Scientific Notation)

Standard Form is a system used to write very large or very small numbers efficiently without writing out long strings of zeros.

<div class="instructions" markdown="1">

### Part 1: Large Numbers (Expanding Standard Form)

A number in Standard Form looks like this: $4.5 \times 10^3$.

**The Power of 10 tells you how many times to multiply by 10.**
Multiplying by 10 moves the decimal point **one step to the right**.

**Example:** $4.5 \times 10^3$
1.  Start with $4.5$
2.  The power is **3**, so move the decimal point **3 steps to the right**.
    *   Step 1: $45$
    *   Step 2: $450$ (Fill the gap with a zero)
    *   Step 3: $4500$ (Fill the gap with a zero)
3.  Answer: $4500$

</div>

{% include question_numerical.html
    id="sf_large_exp_1"
    title="1"
    question_text="Write $3 \times 10^2$ as an ordinary number."
    correct_answer="300"
    tolerance="0"
    solution_text="Start with 3 (decimal is at the end: 3.0). Move the decimal 2 steps to the right. <br> $3 \to 30 \to 300$."
%}

{% include question_numerical.html
    id="sf_large_exp_2"
    title="2"
    question_text="Write $5.2 \times 10^3$ as an ordinary number."
    correct_answer="5200"
    tolerance="0"
    solution_text="Start with 5.2. Move the decimal 3 steps right. <br> $5.2 \to 52 \to 520 \to 5200$."
%}

{% include question_numerical.html
    id="sf_large_exp_3"
    title="3"
    question_text="Write $1.45 \times 10^4$ as an ordinary number."
    correct_answer="14500"
    tolerance="0"
    solution_text="Start with 1.45. Move the decimal 4 steps right. <br> $1.45 \to 14.5 \to 145 \to 1450 \to 14500$."
%}

{% include question_numerical.html
    id="sf_large_exp_4"
    title="4"
    question_text="Write $6 \times 10^5$ as an ordinary number."
    correct_answer="600000"
    tolerance="0"
    solution_text="Start with 6. Move the decimal 5 steps right. <br> This adds 5 zeros. Answer: 600,000."
%}

{% include question_numerical.html
    id="sf_large_exp_5"
    title="5"
    question_text="Write $9.02 \times 10^4$ as an ordinary number."
    correct_answer="90200"
    tolerance="0"
    solution_text="Start with 9.02. Move the decimal 4 steps right. <br> $9.02 \to 90.2 \to 902 \to 9020 \to 90200$."
%}

<br><br>

<div class="instructions" markdown="1">

### Part 2: Writing Large Numbers in Standard Form

To write a normal number in Standard Form, we split it into two parts: $A \times 10^n$.

**Rule 1:** The first number ($A$) must be between **1 and 10** (1 or more and less than 10).
**Rule 2:** The power ($n$) counts how many steps the decimal point moved to get there.

**Example:** Write $5200$ in Standard Form.
1.  **Place the decimal:** To get a number between 1 and 10, the decimal must go between the 5 and the 2. The number is **5.2**.
2.  **Count the steps:** The decimal started at the end ($5200.$) and moved to the new spot ($5.2$). It jumped over the 0, 0, and 2. That is **3 steps**.
3.  Answer: $5.2 \times 10^3$.

</div>

{% include question_dropdown.html
    id="sf_large_create_1"
    title="6"
    question_text="Write 4000 in Standard Form."
    options="wrong1::4 \times 10^4||correct::4 \times 10^3||wrong2::40 \times 10^2||wrong3::4 \times 10^2"
    correct_answer="correct"
    solution_text="1. Number between 1 and 10 is 4. <br> 2. Decimal moves 3 steps to the left (jumping three zeros). <br> Answer: $4 \times 10^3$."
%}

{% include question_dropdown.html
    id="sf_large_create_2"
    title="7"
    question_text="Write 250 in Standard Form."
    options="wrong1::25 \times 10^1||correct::2.5 \times 10^2||wrong2::0.25 \times 10^3||wrong3::2.5 \times 10^1"
    correct_answer="correct"
    solution_text="1. Number between 1 and 10 is 2.5. <br> 2. Decimal moves 2 steps to the left (jumping 0 and 5). <br> Answer: $2.5 \times 10^2$."
%}

{% include question_dropdown.html
    id="sf_large_create_3"
    title="8"
    question_text="Write 8,000,000 in Standard Form."
    options="correct::8 \times 10^6||wrong1::8 \times 10^7||wrong2::8 \times 10^5||wrong3::80 \times 10^5"
    correct_answer="correct"
    solution_text="1. Number between 1 and 10 is 8. <br> 2. Decimal moves 6 steps (jumping six zeros). <br> Answer: $8 \times 10^6$."
%}

{% include question_dropdown.html
    id="sf_large_create_4"
    title="9"
    question_text="Write 52,100 in Standard Form."
    options="wrong1::5.21 \times 10^3||wrong2::52.1 \times 10^3||correct::5.21 \times 10^4||wrong3::5.21 \times 10^5"
    correct_answer="correct"
    solution_text="1. Number between 1 and 10 is 5.21. <br> 2. Decimal moves 4 steps. <br> Answer: $5.21 \times 10^4$."
%}

{% include question_dropdown.html
    id="sf_large_create_5"
    title="10"
    question_text="Write 19,500,000 in Standard Form."
    options="wrong1::1.95 \times 10^6||correct::1.95 \times 10^7||wrong2::19.5 \times 10^6||wrong3::1.95 \times 10^8"
    correct_answer="correct"
    solution_text="1. Number between 1 and 10 is 1.95. <br> 2. Decimal moves 7 steps. <br> Answer: $1.95 \times 10^7$."
%}

<br><br>

<div class="instructions" markdown="1">

### Part 3: Small Numbers (Expanding Standard Form)

Very small numbers (decimals less than 1) use **Negative Powers**.
*   A positive power moves the decimal Right (making the number bigger).
*   A **negative power** moves the decimal **Left** (making the number smaller).

**Example:** $3.4 \times 10^{-2}$
1.  Start with $3.4$.
2.  The power is **-2**, so move the decimal **2 steps to the left**.
    *   Step 1: $.34$
    *   Step 2: $.034$ (Fill the gap with a zero)
3.  Answer: $0.034$

</div>

{% include question_numerical.html
    id="sf_small_exp_1"
    title="11"
    question_text="Write $5 \times 10^{-1}$ as an ordinary number."
    correct_answer="0.5"
    tolerance="0"
    solution_text="Move decimal 1 step left: $.5$. <br> Add leading zero: $0.5$."
%}

{% include question_numerical.html
    id="sf_small_exp_2"
    title="12"
    question_text="Write $2 \times 10^{-3}$ as an ordinary number."
    correct_answer="0.002"
    tolerance="0"
    solution_text="Move decimal 3 steps left. <br> $2 \to 0.2 \to 0.02 \to 0.002$."
%}

{% include question_numerical.html
    id="sf_small_exp_3"
    title="13"
    question_text="Write $4.5 \times 10^{-2}$ as an ordinary number."
    correct_answer="0.045"
    tolerance="0"
    solution_text="Move decimal 2 steps left. <br> $4.5 \to 0.45 \to 0.045$."
%}

{% include question_numerical.html
    id="sf_small_exp_4"
    title="14"
    question_text="Write $1.23 \times 10^{-4}$ as an ordinary number."
    correct_answer="0.000123"
    tolerance="0"
    solution_text="Move decimal 4 steps left. <br> Answer: $0.000123$."
%}

{% include question_numerical.html
    id="sf_small_exp_5"
    title="15"
    question_text="Write $9.9 \times 10^{-3}$ as an ordinary number."
    correct_answer="0.0099"
    tolerance="0"
    solution_text="Move decimal 3 steps left. <br> $9.9 \to 0.99 \to 0.099 \to 0.0099$."
%}

<br><br>

<div class="instructions" markdown="1">

### Part 4: Writing Small Numbers in Standard Form

We use the same rules as before, but since the number is less than 1, the power will be **negative**.

**Example:** Write $0.0052$ in Standard Form.
1.  **Place the decimal:** To get a number between 1 and 10, the decimal must go between the 5 and the 2. The number is **5.2**.
2.  **Count the steps:** The decimal started at $0.0052$ and moved right to reach $5.2$. It jumped two zeros and the 5. That is **3 steps**.
3.  **Negative Sign:** Because the original number was small ($<1$), the power is negative.
4.  Answer: $5.2 \times 10^{-3}$.

</div>

{% include question_dropdown.html
    id="sf_small_create_1"
    title="16"
    question_text="Write 0.006 in Standard Form."
    options="wrong1::6 \times 10^{-2}||correct::6 \times 10^{-3}||wrong2::6 \times 10^3||wrong3::0.6 \times 10^{-2}"
    correct_answer="correct"
    solution_text="1. Number between 1 and 10 is 6. <br> 2. Decimal moves 3 steps to get behind the 6. <br> Answer: $6 \times 10^{-3}$."
%}

{% include question_dropdown.html
    id="sf_small_create_2"
    title="17"
    question_text="Write 0.04 in Standard Form."
    options="correct::4 \times 10^{-2}||wrong1::4 \times 10^{-1}||wrong2::4 \times 10^{-3}||wrong3::40 \times 10^{-3}"
    correct_answer="correct"
    solution_text="1. Number between 1 and 10 is 4. <br> 2. Decimal moves 2 steps. <br> Answer: $4 \times 10^{-2}$."
%}

{% include question_dropdown.html
    id="sf_small_create_3"
    title="18"
    question_text="Write 0.000052 in Standard Form."
    options="wrong1::5.2 \times 10^{-4}||correct::5.2 \times 10^{-5}||wrong2::52 \times 10^{-6}||wrong3::5.2 \times 10^{-6}"
    correct_answer="correct"
    solution_text="1. Number between 1 and 10 is 5.2. <br> 2. Decimal moves 5 steps. <br> Answer: $5.2 \times 10^{-5}$."
%}

{% include question_dropdown.html
    id="sf_small_create_4"
    title="19"
    question_text="Write 0.00105 in Standard Form."
    options="wrong1::1.05 \times 10^{-2}||wrong2::1.05 \times 10^{-4}||correct::1.05 \times 10^{-3}||wrong3::10.5 \times 10^{-4}"
    correct_answer="correct"
    solution_text="1. Number between 1 and 10 is 1.05. <br> 2. Decimal moves 3 steps to get between the 1 and 0. <br> Answer: $1.05 \times 10^{-3}$."
%}

{% include question_dropdown.html
    id="sf_small_create_5"
    title="20"
    question_text="Write 0.0000009 in Standard Form."
    options="correct::9 \times 10^{-7}||wrong1::9 \times 10^{-6}||wrong2::9 \times 10^{-8}||wrong3::0.9 \times 10^{-6}"
    correct_answer="correct"
    solution_text="1. Number between 1 and 10 is 9. <br> 2. Decimal moves 7 steps. <br> Answer: $9 \times 10^{-7}$."
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/numeracy/" | relative_url }}">← Return to Numeracy Menu</a>
</div>

{% include pagination.html %}
