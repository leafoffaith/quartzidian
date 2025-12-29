Link state routing is a method in which each router shares its neighbourhood’s knowledge with every other router in the internetwork. In this algorithm, each router in the network understands the network topology then makes a routing table depend on this topology.

Each router will share data about its connection to its neighbour, who will, consecutively, reproduce the data to its neighbours, etc. This appears just before all routers have constructed a topology of the network.

In LSP, each node transmits its IP address and the MAC to its neighbor with its signature. Neighbors determine the signature and maintain a record of the combining IP address and the MAC. The Neighbor Lookup Protocol (NLP) of LSP derives and maintains the MAC and IP address of every network frame accepted by a node. The extracted data can support the mapping of MACs and IP addresses.

The link-state flooding algorithm prevents the general issues of broadcast in the existence of loops by having every node maintain a database of all LSP messages. The creator of each LSP contains its identity, data about the connection that has changed status, and also a sequence number.

The three keys to learning the Link State Routing algorithm are as follows −

## Knowledge about the neighbourhood

Rather than transmitting its whole routing table, a router only shares data about its neighbourhood.

## To all routers

Each router shares this data router on the network, not only its neighbours. This phase is known as flooding. Each router that receives the packet shares copies to all of its neighbours. Finally, every router (without exception) gets a copy of the comparable data. Information giving when there is a changeEach router assigns out data about the neighbours when there is a change. A route’s value is used to every packet as it leaves a router and introduces a network in deciding a route.

## Information giving when there is a change

This price is an outbound price, defining that it is used with a packet that leaves the router. Two factors govern how the price is used to packets in deciding a route. The price is used only by routers and not by some different stations on a network. The connection from one router to the next is a network, not a point-to-point cable. There are some topologies, including ring and bus, each station on the network determines each packet’s header that passes.

Suppose the price was inserted by each station rather than the router alone. In that case, it could assemble unpredictably (the multiple stations in a network can transform for various circumstances, some of them unpredictable). A price is used as a packet that leaves the router instead of it being introduced. Some networks are transmitted. When a packet is in the network, each station containing the router can select it up. Therefore, we cannot create any price for the packet when it passes from a network to a router.

**Idea :** Distribute Network Map
	Each node performs shortest path computation

**Initially :** 
	- add costs of immediate neighbours, D(v)
	- Flood costs c(U, V) to neighbours

*i) Phase 1: Reliable Floding to get information about all the nodes 
ii) Phase 2: [[Dijkstra's Algorithm (Shortest Path)]]*
