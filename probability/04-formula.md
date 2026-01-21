---
layout: default
title: Probability Formula
---

# Probability Formula and Venn Diagrams

<div class="instructions" markdown="1">

### $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

In everyday use language, the $\cup$ symbol can be considered as the word **or** and the $\cap$ symbol can be considered as the word **and**.  So the formula above says, for events A and B:

$$P(A \text{ OR } B) = P(A) + P(B) - P(A \text{ AND } B)$$

So for example, if we know the probability that an event called *A* occurs with probability 0.7, the probability of an event called *B* occurs with probability 0.6, and the probability that they both occur is 0.4, then:

$$P(A \text{ OR } B) = 0.7 + 0.6 - 0.4 = 0.9$$

The probability that A or B occur is 0.9.

### Venn diagram

The information from above can be shown on a **Venn diagram**.  These allow you to see probabilities of different events.  For this example we have:

![A venn diagram that shows two overlapping circles, labelled A and B, inside a rectangle.  The probabilities of the events are in the circles and rectangle.]({{ "/assets/images/probability/venn_1.png" | relative_url }})

The overlap between the circles shows the probability of both events A and B occurring.  The 0.4 is in there.

We know that the probability of A is 0.7, and with 0.4 of this already in the overlap we need an extra 0.3 to make up to 0.7.  This represents the probability of A occurring and B not occurring.  This could be written $P(A \cap \bar{B}) = P(A \text{ AND NOT B})$

The probability of B is 0.6, and with 0.4 of this already in the overlap we need an extra 0.2 to make up to 0.6.  This is $P(\bar{A} \cap B)$

The A or B comes to 0.9, which means there is $1-0.9=0.1$ remaining.  This is placed outside of the two circles.


**Example**

For a particular group, it is known that the probability that they own a cat is 0.45, the probability that they own a dog is 0.3, and the probability that they own a cat or a dog is 0.63.  What is the probability that a randomly selected person owns a cat and a dog.

Let $C = \text{owns a cat}$ 

Let $D = \text{owns a dog}$

We have: $P(C) = 0.45$, $P(D) = 0.3$, $P(C \text{ OR } D) = 0.63$ and:

$P(C \text{ OR } D) = P(C) + P(D) - P(C \text{ AND } D) \implies 0.63 = 0.45 + 0.3 - P(C \text{ AND } D) \implies P(C \text{ AND } D) = 0.12$

We can show this information in a Venn diagram.  To work out the cats ($C$) and no dogs ($\bar{D}$), you need to take the overlap of 0.12 from the 0.45.  You would do a similar thing for the dogs and no cats.

To work out those with no cats and no dogs $P(\bar{C} \cap \bar{D})$, then subtract the cats or dogs from 1.

![A venn diagram that shows two overlapping circles, labelled C and D, inside a rectangle.  The probabilities of the events are in the circles and rectangle.]({{ "/assets/images/probability/venn_2.png" | relative_url }})

---

### $P(\bar{A})=1-P(A)$

This formula says: $P(A \text{ not occurring}) = 1 - P(A \text{ occurring})$

Note that this can be re-arranged to read $P(A) = 1 - P(\bar{A})$

</div>
