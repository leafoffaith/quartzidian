## Pure ALOHA
	The basic idea of an ALOHA system is simple: let users transmit whenever they have data to be sent. There will be collisions, of course, and the colliding frames will be damaged. Senders need some way to find out if this is the case. In the ALOHA system, after each station has sent its frame to the central computer, this computer rebroadcasts the frame to all of the stations. A sending station can thus listen for the broadcast from the hub to see if its frame has gotten through. In other systems, such as wired LANs, the sender might be able to listen for collisions while transmitting. 
	
	If the frame was destroyed, the sender just waits a random amount of time and sends it again. The waiting time must be random or the same frames will collide over and over, in lockstep. Systems in which multiple users share a common channel in a way that can lead to conflicts are known as contention systems. A sketch of frame generation in an ALOHA system is given in Fig. 4-1. 
	
	We have made the frames all the same length because the throughput of ALOHA systems is maximized by having a uniform frame size rather than by allowing variable-length frames. Whenever two frames try to occupy the channel at the same time, there will be a collision (as seen in Fig. 4-1) and both will be garbled. If the first bit of a new frame overlaps with just the last bit of a frame that has almost finished, both frames will be totally destroyed (i.e., have incorrect checksums) and both will have to be retransmitted later. The checksum does not (and should not) distinguish between a total loss and a near miss. Bad is bad.
![[Pasted image 20221231143118.png]]

> SUMMARY
> Whenever a user has a frame to send, it simply transmits the frame. If collission occurs, it waits for a random period of time and re-sends it again
> If listening while transmitting is not possible, ACKs are needed, eg. in a packet radio, collision from simultaneous transmissions of multiple transmitters is detected by base station, who sends out ACK or NAK accordingly (via reverse channel)

	## PERFORMANCE 
	Throughput S (frames/s) which defines average number of frames successfully transmitted per unit time and average delay D (s) experienced by a frame
	Assuming average frame length T<sub>f</sub> and fixed cahnnel rate, frame transmission can be modelled by Poisson distributino with mean arrival rate lambda (frames/s)
![[Pasted image 20221231144043.png]]

## Slotted ALOHA 
	Time is divided into slots of equal length greater or equal to average frame duration T<sub>f</sub>, and frame transmission can only start at the beginning of a time slot. 
	Slotted Aloha was introduced in 1972 by Robert as an improvement over Pure Aloha.

-   In slotted aloha, successful data transmission occurs only when each slot sends just one data frame at a time. The chance of a collision is considerably reduced by doing so.
    
-   Here, time is divided into discrete intervals called **slots**, corresponding to a frame. The communicating stations agree upon the slot boundaries.
    
-   Any station can send only one frame in each slot. Also, the stations cannot transmit at any time whenever a frame is available. They should wait for the beginning of the next slot.
    
-   It will stay idle if no data packets are sent in any of the slots. It should be noted that if a packet does not get acknowledgment after a collision, it is deemed lost and is retransmitted in a different slot after back-off time is taken into account.

![[Pasted image 20221231144209.png]]

![[Pasted image 20221231151656.png]]


