Transmission Control Protocol used on top of IP to ensure reliable transmission of packets

Solves problems that arise from packet based messaging
	Lost packets
	Out of order
	Duplicate
	Corrupted
The protocol used along with IP is called TCP/IP stack 


Connection oriented and while slower is more reliable
- Used for tranfers that cannot fail

Steps 
	1. <mark style="background: #FFF3A3A6;">**Establish Connection</mark>:** They need to establish a connection using a three-way handshake
		The first computer sends a packet with the SYN bit set to 111 (SYN = "synchronize?"). The second computer sends back a packet with the ACK bit set to 111 (ACK = "acknowledge!") plus the SYN bit set to 111. The first computer replies back with an ACK. The SYN and ACK bits are both part of the TCP header. In fact, the three packets involved in the three-way handshake do not typically include any data. Once the computers are done with the handshake, they're ready to receive packets containing actual data.
	2. <mark style="background: #FFF3A3A6;">**Send packets of data</mark>:**  The recipient must always acknowledge what they received. The first computer sends a paket with data. The second computer acknowledges it by setting the ACK bit and increasing the acknowledgement number by the length of the received data.
		Those two numbers help the computers to keep track of which data was successfully received, which data was lost, and which data was accidentally sent twice.
		