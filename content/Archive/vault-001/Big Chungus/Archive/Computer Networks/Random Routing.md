Like Flooding, Random routing is also a simple and robust technique or routing and also has some improvements over flooding −

It results in a controlled traffic load.

The outgoing link is picked in a random fashion after eliminating the incoming link.

If the likely possibilities of choosing any link are the same, it amounts to picking the outgoing link in a round-robin style.

This is to designate probabilities to every outgoing link and to choose a link based on those probabilities. The probabilities can be determined based on the data rate. In that case, we have −

$Pi=Ri/∑jRi$

Where,

Pi=probability of choosing link i

Ri = data rate of ith link.

Both the flooding and random routing do not need any information about the network, and in the case of the random routing, the actual route may not be either the minimum-hop or the least-cost route.