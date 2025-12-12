---
layout: default
title: Simplifying Expressions
---

# Simplifying Expressions

This workshop covers the fundamental algebraic skills required for modelling business and statistical problems.

<div class="instructions" markdown="1">

### Part 1: Collecting Like Terms

To simplify an expression, we combine **like terms**.

*   **Like Terms** share the exact same variable combination raised to the same power (e.g., $x^2$ and $3x^2$ are like terms; $x$ and $x^2$ are not).
*   **Method:** Sum or subtract the **coefficients** (the numbers) of the like terms. The variable part remains unchanged.

**Example:** Simplify $4x + 5y - 2x$
1.  Identify the like terms: $4x$ and $-2x$.
2.  Combine their coefficients: $4 - 2 = 2$.
3.  The term $5y$ is unique, so it remains unchanged.
4.  **Result:** $2x + 5y$

</div>

{% include question_dropdown.html
    id="alg_col_1"
    title="1"
    question_text="Simplify: $8x - 2y - 3x + 6y$"
    solution_text="Group the terms by variable: <br> $x$ terms: $8x - 3x = 5x$ <br> $y$ terms: $-2y + 6y = 4y$ <br> **Answer:** $5x + 4y$"
%}

{% include question_dropdown.html
    id="alg_col_2"
    title="2"
    question_text="Simplify: $5ab + 2a - 3ab + 4b$"
    solution_text="The like terms are those containing $ab$. <br> $5ab - 3ab = 2ab$. <br> The $2a$ and $4b$ are unique and cannot be combined. <br> **Answer:** $2ab + 2a + 4b$"
%}

{% include question_dropdown.html
    id="alg_col_3"
    title="3"
    question_text="Simplify: $4x^2 + 3x - 2x^2 + 5x$"
    solution_text="Terms with different powers are treated as different variables. <br> $x^2$ terms: $4x^2 - 2x^2 = 2x^2$ <br> $x$ terms: $3x + 5x = 8x$ <br> **Answer:** $2x^2 + 8x$"
%}

{% include question_dropdown.html
    id="alg_col_4"
    title="4"
    question_text="Simplify: $7mn - 8mn + m$"
    solution_text="Combine the $mn$ terms: <br> $7mn - 8mn = -1mn$ (or $-mn$). <br> **Answer:** $m - mn$"
%}

{% include question_dropdown.html
    id="alg_col_5"
    title="5"
    question_text="Simplify: $3x^2y + 2xy^2 - x^2y$"
    solution_text="Pay close attention to the powers. $x^2y$ is distinct from $xy^2$. <br> $3x^2y - 1x^2y = 2x^2y$. <br> The $2xy^2$ term remains unchanged. <br> **Answer:** $2x^2y + 2xy^2$"
%}

<br><br>

<div class="instructions" markdown="1">

### Part 2: Laws of Indices

When working with exponents (indices) involving multiple variables and coefficients, apply the laws systematically.

1.  **Multiplication:** $Ax^m \times Bx^n = (A \times B)x^{m+n}$
    *   Multiply coefficients, **add** indices for matching bases.
2.  **Division:** $\frac{Ax^m}{Bx^n} = (\frac{A}{B})x^{m-n}$
    *   Divide coefficients, **subtract** indices for matching bases.
3.  **Power of a Power:** $(Ax^m)^n = A^n x^{m \times n}$
    *   Raise the coefficient to the power, **multiply** the variable indices.

**Example:** Simplify $2x^3 \times 4x^5$
1.  Multiply coefficients: $2 \times 4 = 8$.
2.  Add indices of $x$: $3 + 5 = 8$.
3.  **Result:** $8x^8$.

</div>

{% include question_dropdown.html
    id="alg_ind_1"
    title="6"
    question_text="Simplify: $3x^4 \times 5x^3$"
    solution_text="1. Multiply coefficients: $3 \times 5 = 15$. <br> 2. Add indices: $4 + 3 = 7$. <br> **Answer:** $15x^7$"
%}

{% include question_dropdown.html
    id="alg_ind_2"
    title="7"
    question_text="Simplify: $4a^2b \times 2a^3b^2$"
    solution_text="Apply the laws to each component separately. <br> Coefficients: $4 \times 2 = 8$. <br> $a$ terms: $a^2 \times a^3 = a^5$. <br> $b$ terms: $b^1 \times b^2 = b^3$. <br> **Answer:** $8a^5b^3$"
%}

{% include question_dropdown.html
    id="alg_ind_3"
    title="8"
    question_text="Simplify: $\frac{24x^6y^3}{6x^2y}$"
    solution_text="Coefficients: $24 \div 6 = 4$. <br> $x$ terms: $6 - 2 = 4 \to x^4$. <br> $y$ terms: $3 - 1 = 2 \to y^2$. <br> **Answer:** $4x^4y^2$"
%}

{% include question_dropdown.html
    id="alg_ind_4"
    title="9"
    question_text="Simplify: $(2x^3)^4$"
    solution_text="Apply the power of 4 to everything inside the bracket. <br> Coefficient: $2^4 = 16$. <br> Variable: Multiply indices $3 \times 4 = 12$. <br> **Answer:** $16x^{12}$"
%}

{% include question_dropdown.html
    id="alg_ind_5"
    title="10"
    question_text="Simplify: $5(x^2)^3$"
    solution_text="The 5 is outside the bracket, so it is not raised to the power. <br> Bracket: $(x^2)^3 = x^6$. <br> **Answer:** $5x^6$"
%}

{% include question_dropdown.html
    id="alg_ind_6"
    title="11"
    question_text="Simplify: $\frac{10a^5b^2}{15a^2b^2}$"
    solution_text="Coefficients: $\frac{10}{15}$ simplifies to $\frac{2}{3}$. <br> $a$ terms: $5 - 2 = 3 \to a^3$. <br> $b$ terms: $2 - 2 = 0$. Any term to the power 0 is 1, so $b$ is removed. <br> **Answer:** $\frac{2}{3}a^3$ (or $\frac{2a^3}{3}$)"
%}

{% include question_dropdown.html
    id="alg_ind_7"
    title="12"
    question_text="Simplify: $\frac{3x^3 \times 4x^2}{6x}$"
    solution_text="Simplify the numerator first. <br> Numerator: $3 \times 4 = 12$ and $x^3 \times x^2 = x^5$. Expression is $\frac{12x^5}{6x}$. <br> Now divide: $12 \div 6 = 2$ and $x^5 \div x^1 = x^4$. <br> **Answer:** $2x^4$"
%}

{% include question_dropdown.html
    id="alg_ind_8"
    title="13"
    question_text="Simplify: $(3xy^2)^3$"
    solution_text="Everything is cubed. <br> $3^3 = 27$. <br> $x^1$ becomes $x^3$. <br> $y^2$ becomes $y^{2 \times 3} = y^6$. <br> **Answer:** $27x^3y^6$"
%}

<div style="text-align: center; margin-top: 3em;">
    <a href="{{ "/algebra/" | relative_url }}">← Return to Algebra Menu</a>
</div>

{% include pagination.html %}
