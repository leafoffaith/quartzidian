 In computer networks, when more than one station tries to transmit simultaneously via a shared channel, the transmitted data is garbled, an event called collision. In collision based protocols like ALOHA, all stations are permitted to transmit a frame without trying to detect whether the transmission channel is idle or busy. This works very good under light loads. Under heavy loads, collision free protocols are suitable, since channel access is resolved in the contention period that eliminates the possibilities of collisions.

## Working Principle
1. Stations or nodes are arranged in the form of a binary tree as shown in the diagram. 
2. ![[Pasted image 20230101160512.png]]
3. 0 - 6 represent groups, internal nodes
4. A - H represent statinos contending  for network access
5. Initally all nodes are permitted to compete for the channel
6. If a node is successful then it transmits its frame
7. In case of collision, the nodes are divided into two groups ABCD EFGH
8. Nodes belonging to only one of them is permitted for competing, group 1 all group 2 all
9. Slot 1: If one of the stations acquires a channel then it transmits to completion
10. In the next slot, all stations for group 2 can contend
11. In the event of a collision, then the stations are further divided until only 1 node per group
Slot 0 -  station A D E H
Slot 1 - A & D
Slot 2 - A to transmit
Slot 3 - EFGH 
Slot 4 - E tries
Slot 5 - D tries to and success
Slot 6 - H


