After transmitting waits for an ack before transmitting the next frame
Unidirectional data transmission

Sender Side
	Rule 1: Send one data packet at a time
	Rule 2: Send the nex tpacket only after receiving ack for the prev
Receiver Side
	Rule 1: Receiver and consume data packet
	Rule 2: After consuming packet, ACK needs to be sent(Flow Control)

Sender -> Data Packet -> Receiver
Receiver -> Ack -> Sender

**Disadvantages**
1. Problems due to lost data
	1. Sender waits for ack for an infinite amount of time
	2. Receiver waits for data for an infinite amount of time
2. Problems due to delayed ACK or no ack
	1. If lost then the sender waits for an infinite amount of time for ack
	2. If delayed or timeout on the sender's side, a delayed ack might be wrongly considered as ack for some other data packet

If ARQ - the only diff is that in the case of timeout then retransmit

But still one frame and poor performance and poor utilization fo bandwidth