## Bit-map Protocol

Used under high load

Each contention period consists of exactly N slots
If any station has to send a frame, then it transmits a 1 bit in the respective slot
For example, if station 2 has a frame to send, it transmits a 1 bit during the second slot

In this way, each station has complete knowledge of which station wishes to transmit. There will never be any collission ebcaus everyone agrees on who goes next. Protocols like this in which the desire to transmit is broadcasting for the actual transmission are called Reservation Protocols



