Adaptors bits are exchanged (bit streams)

Nodes frames are exchanged

Sequence of bits go from one node’s memory to another

Frame = Header + Network Layer PDU + Trailer

-   The transmitted element in Data Link layer is called a frame
-   A frame is regarded either as a block of characters, or as a

sequence of bits

-   The sender assembles/breaks an incoming sequence of

packets (from network layer) into frames

-   The receiver must determine the first and last bit/byte of

the frame so that the frames can then be extracted

-   (Bit synchronization is done by physical layer – remember

RZ, Manchester, NRZI?)

Protocol: Let the start of frame and end of frame be 11011

Framing error when the payload consists the same bit sequence as the frame itself

What constitutes a frame?

Types

-   **Fixed Size**
    -   Here the size is fixed so the frame length acts as delimiter
    -   Doesn’t require additional boundary bits to identity the start and end
    -   Payload is transmitted one character at a time. 5 - 8 bits can be accommodated
-   **Variable Size**
    -   Additional mechanisms are kept to mark the end of one frame and the beginning of the next frame

Approaches

1.  Bit Oriented
2.  Byte Oriented

[](https://www.youtube.com/watch?v=rda-fVKwFlQ&ab_channel=itechnica)[https://www.youtube.com/watch?v=rda-fVKwFlQ&ab_channel=itechnica](https://www.youtube.com/watch?v=rda-fVKwFlQ&ab_channel=itechnica)

## Character Count

The size of the payload is placed at the beginning of the frame

`1234567890123`

including itself, header field gives size of frame

for example first frame would be `51234` where 5 is the size of the frame

### Limitation

If header gets garbled

---

## Flag bytes with byte stuffing

`M | N | O`

DLE STX → Data Link Escape / Start of Text

DLE ETX → Data Link Escape / End of Text

`DLE | STX | M | N | O | DLE | ETX`

^ Frame

`DLE | STX | P | Q | O | DLE | ETX`

^ Another frame

### Limitation

DLE STX/ETX may be the part of the original data

`DLE | STX | M | DLE | DLE | 0 | DLE | ETX`

Stuffing

---

## Bit Stuffing

[Bit stuffing - YouTube](https://www.youtube.com/watch?v=1IfsQmkzWdc&ab_channel=SiemensEmbedded)

`01111110`

Flag Byte ^

What happens if the frame or end sequence occurs in the bit sequence itself

As soon as it finds a sequence of five ones it pops in an extra 0