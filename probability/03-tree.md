---
layout: default
title: Tree Diagrams
---

# Tree Diagrams

<div class="instructions" markdown="1">

### Tree Diagrams

Tree diagrams are a useful tool to calculate probabilities where there are more than one event.  It is also useful when events are dependendent on other events.

They are called tree diagrams because the different outcomes within an event are shown by branches.

**Example**

It is known that the probability that during a particular month the probability of rain is 0.4.  It is also observed that the probability that wheher the bus you catch to work is late is different dependent on whether it rains or not.  If it is raining then the bus has a probability of being late of 0.7 and if it is not raining the bus has a probability of being late of 0.4.

There are two events, whether it rains and timing of the bus.  The timing of the bus is dependent on the rain.  So we will create a diagram where the first event is the weather (rain or not rain) with two branches.  At the end of these two branches we will have the second event, timing of the bus, which also has two branches, on-time or late.

For the first event, the probability of rain is 0.4.  Therefore the probability of not rain is 0.6, since the probabilities need to sum to 1.

For the second event, if it is raining then we have late of 0.7, so not late will be 0.3.  If it is not raining then we have late of 0.4 and not late of 0.6.

![A tree diagram showing branches for weather, rain or no rain, followed by branches for time of bus, late or not late.]({{ "/assets/images/probability/tree_eg.png" | relative_url }})


### Calculating probabilities from the tree diagram

To work out probabilities of the combined events you can multiply the probabilities along the branches.  So, the following probabilities can be calculated:

$P(\text{raining and late}) = 0.4 \times 0.7 = 0.28$

$P(\text{raining and on time}) = 0.4 \times 0.3 = 0.12$

$P(\text{not raining and late}) = 0.6 \times 0.4 = 0.24$

$P(\text{not raining and on time}) = 0.6 \times 0.6 = 0.36$

As a sanity check, these probabilities should add up to 1:

$0.28 + 0.12 + 0.24 + 0.36 = 1$


You can also now work out things like, what is the probability that a bus will be late?

A bus can be late if it's raining and a bus can be late if it's not raining.  Adding these two probabilities will give us the answer we require.

$P(\text{late}) = P(\text{raining and late}) + P(\text{not raining and late}) = 0.28 + 0.24 = 0.52$

<\div>
