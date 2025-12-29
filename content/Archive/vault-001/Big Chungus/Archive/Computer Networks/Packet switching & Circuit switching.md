**Defining a datagram**
	Clients and servers that communicate via a reliable channel, such as a TCP socket, have a dedicated point-to-point channel between themselves, or at least the illusion of one. To communicate, they establish a connection, transmit the data, and then close the connection. All data sent over the channel is received in the same order in which it was sent. This is guaranteed by the channel.

In contrast, applications that communicate via datagrams send and receive completely independent packets of information. These clients and servers do not have and do not need a dedicated point-to-point channel. The delivery of datagrams to their destinations is not guaranteed. Nor is the order of their arrival.

**Definition:** 
A _datagram_ is an independent, self-contained message sent over the network whose arrival, arrival time, and content are not guaranteed.

---

**Packet Switching**
	Information for forwading traffic contained in the destination address of the packet
	Packet switching works in the same way a letter is sent where it might make its way through multiple intermediate post offices en-route to the recipient. There is no state established ahead of time
	In order to transfer the file fast and efficiently, the data is broken into small pieces of variable length, called *Packet*
	At the destination these broken pieces are reassembled
	A packet comprises payload and various control information. Pre-setup and/or reservation of resources isn't necessary. 
	Packet Switching uses **Store and Forward** technique while switching the packets; while forwarding the packet each hop first stores that packet then forward. This technique is very beneficial because packets may get discarded at any hop due to some reason. More than one path is possible between a pair of sources and destinations. 
	Each packet contains Source and destination address using which they independently travel through the network. In other words, packets belonging to the same file may or may not travel through the same path. If there is congestion at some path, packets are allowed to choose different paths possible over an existing network. 
	*[Packet Switching and Delays in Computer Network - GeeksforGeeks](https://www.geeksforgeeks.org/packet-switching-and-delays-in-computer-network/)*
	**Advantage of Packet Switching over Circuit Switching :**   
-   More efficient in terms of bandwidth, since the concept of reserving circuit is not there.
-   Minimal transmission latency.
-   More reliable as a destination can detect the missing packet.
-   More fault tolerant because packets may follow a different path in case any link is down, Unlike Circuit Switching.
-   Cost-effective and comparatively cheaper to implement.

**The disadvantage of Packet Switching over Circuit Switching :**   
-   Packet Switching doesn’t give packets in order, whereas Circuit Switching provides ordered delivery of packets because all the packets follow the same path.
-   Since the packets are unordered, we need to provide sequence numbers for each packet.
-   Complexity is more at each node because of the facility to follow multiple paths.
-   Transmission delay is more because of rerouting.
-   Packet Switching is beneficial only for small messages, but for bursty data (large messages) Circuit Switching is better.
- ---


Packet-Switched networks were designed to overcome the _weaknesses_ of Circuit-Switched networks since circuit-switched networks were not very effective for small messages

*What advantage does circuit switching have over packet switching*
	The statistical multiplexing of the links and the network, means that the sender never gets a busy signal. The drawbacks include things like *variable delay* and the potential for *lost or dropped packets*
	*In contrast, circuit-switching provides resource control and the ability to pin paths between a sender and receiver*
	Packet switching provides the ability to share resources and potentially better resilience properties.

---
# Notes on different types of delay 

In packet switched networks, there are four types of commonly identified delays – processing, queuing, transmission and propagation delays. _Processing delay_ is the CPU cycles needed to look at the packet headers and decide what to do with the packet, and do it – basically the time needed to process the packet. The _propagation delay_ is the time a signal takes to traverse the medium. In a metal wire, such as a copper wire, this is the time needed for an electrical signal to be propagated from one host to another. An Ethernet card transmits bits by varying the electric potentials at its pins, and all other Ethernet cards attached to it by a wire will detect this change in electric potential and correctly interpret the bits (Ethernet protocol, IEEE 802.3 standard). In a fiber-optic cable, the time needed to propagate a light signal from end to end is the propagation delay. Processing and propagation delays are often considered negligible.

_Transmission delay_ is related to _transmission rate_ of an interface. A transmission rate of R bps means that the interface can push R bits to the interface per second. If a packet has length L bits, L/R is the transmission delay _for that packet_, which is the time it takes for the interface to push the whole packet to the wire.

When a packet arrives at a router interface to be forwarded, it has to wait its turn in a queue. Earlier packets need to be sent out first. This results in _queuing delay,_ which varies depending on traffic conditions. Because each packet might suffer a different delay due to queuing, statistical measures such as average delay, variance of delay, probability that delay exceeds a certain threshold, are commonly used. There is an area of study in Statistics call Queuing Theory that deals with queuing issues.

Suppose packets arrive at a router queue at a rate of _a_ packets per second, and that each packet is _L_ bits long. Further suppose that the outgoing transmission rate at the router interface is _R_ bits/sec. So _a*L_ bits arrive at the interface per second, and _R_ bits leave the interface. The ratio _Incoming Rate/Outgoing Rate_ = _(a * L)/ R_ is called the _traffic intensity._ If _(a * L)/ R_ >1, incoming rate is more than outgoing rate, and queuing delay will build up. Ideally, _(a * L)/ R_ should be less than 1.

Routers generally have small finite queues (why not very large queues?) to hold packets to be forwarded. If an incoming packet finds a queue full, the router drops the packet, resulting in a lost packet. The lost packet will need to be re-transmitted by the sending Application or Transport layer.


The "average queuing delay per packet" is the average of the delay for each bit in the packet. This delay happens because each bit takes a certain amount of time, D, to be put on the wire. So, the first bit has 0 delay, the next bit has to wait D, the third bit has to wait 2*D, etc. and the last bit has to wait 9999*D. So we average over these delays, (0*D+1*D+...+9999*D)/10000 to get the average delay per bit in the packet.  
Remember, these are rough estimates because of uncertainties in each value which we assume to be constant.

Generally, propagation delays are considered negligible, because propagation of signals on a Ethernet wire or over radio takes place at near the speed of light, 3*10^10 cm/sec. Similarly, in most cases, processing delays are also considered negligible, in view of the current speed of microprocessors. Thus, the most significant delays are generally the transmission and queuing delays.

