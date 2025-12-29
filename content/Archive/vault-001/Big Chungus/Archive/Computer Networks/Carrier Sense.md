[CSMA/CD and CSMA/CA Explained - YouTube](https://www.youtube.com/watch?v=iKn0GzF5-IU&ab_channel=PowerCertAnimatedVideos)

Protocols in which stations listen for a carrier (i.e., a transmission) and act accordingly are called carrier sense protocols.

Stations <u>listen</u> for the presence of a carrier signal and act accordingly. Variations are called: 
	- 1-persistent
		- a user keeps listening to see if channel is free and, as soon as the channel is idle, it transmits
	- Non-persistent
		- when the channel is busy, it waits for a random period of time before trying to listen again. 
	- P-persistent
		- for slotted systems. When the channel is free during current slot, it may transmit with probability p or may defer until next slot with probability 1 - p

CSMA only makes sense on systems with short delays such as LANs. Propagation delay is usually very small compared with frame transmission

Detection or sensing delay is determined by reciever hardware: a small detection time means that a user can detect a free channel rapidly

Propagation delay is critical to performance: a small propagation delay means that as soon as a user launches a packet, others know quickly and will defer to transmit, this reducing collissions

Throughput versus load:
	For CSMA with small propoagation

CSMA/CD
	Used on early Ethernet networks
		- Each computer first senses if the wire is idle
		- Of the wire is idle, it sends its data
		- If 2 computers send data at the same time, a collission will happen
		- A jamming signal is send and wait for a random time
		- Not as relevant today
	
CSMA/CA
	Collision Avoidance
		- Used on wireless networks
		- Listen for transmissions and waits for a short amount of time before checking again
		- Once the destination receives the data, it will respond back with an ACK
		- If the sender does not receive ACK then it will assume no data was sent
	-RTS/CTS (MACA)
		Ready to Send, Clear to Send
		Send request to send out data RTS
			If the WAP accepts then it will send CLR
			WAP acts as a wireless controller
