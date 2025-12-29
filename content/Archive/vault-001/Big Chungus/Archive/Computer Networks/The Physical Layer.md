Each signal takes up the transmission medium for a little “time slice”

The physical layer is responsible for the physical cable or wireless connection between network nodes. It defines the connector, the electrical cable or wireless technology connecting the devices, and is responsible for transmission of the raw data, which is simply a series of 0s and 1s, while taking care of bit rate control.

There are several different types of cables that can be used in computer networks, including twisted-pair cables, coaxial cables, and fiber optic cables. Each type has its own unique characteristics and is suitable for different applications.

[[Twisted Pair]] cables are made up of two insulated copper wires that are twisted together to reduce interference. They are the most commonly used type of cable in networking and are available in several different categories, such as CAT5 and CAT6, which have different performance characteristics.

[[Coaxial Cable]] are made up of a single copper wire surrounded by insulation and a braided metal shield. They are commonly used in cable television and broadband internet connections and are known for their ability to transmit data over long distances without signal degradation.

[[Fiber Optic]] cables are made up of thin strands of glass or plastic that are capable of transmitting data as light signals. They are known for their high bandwidth and immunity to electromagnetic interference, making them suitable for use in high-speed networks.

**Attenuation**
	Attenuation is the reduction or loss of optical power as light travels through an optical fiber. The longer the fiber is and the farther the light has to travel, the more the optical signal is attenuated. Consequently, attenuation is measured and reported in decibels per kilometer (dB/km), also known as the attenuation coefficient or attenuation rate. Attenuation varies depending on the fiber type and the operating wavelength (see Figure 1). For silica-based optical fibers, single-mode fibers have lower attenuation than multimode fibers. And generally speaking, the higher (or longer) the wavelength, the lower the attenuation. This is true over the typical 800 – 1600 nm operating wavelength range for conventional datacom and telecom optical fibers.
	Single-mode fibers usually operate in the 1310 nm or 1550 nm regions, where attenuation is lowest. This makes single-mode fibers the best choice for long distance communications. Multimode fibers operate primarily at 850 nm and sometimes at 1300 nm. Multimode fibers are designed for short distance use; the higher attenuation at 850 nm is offset by the use of more affordable optical sources (the lower the wavelength, the less expensive the optics).

[[[Radio Transmission]]](https://www.notion.so/Radio-Transmission-44860b5cc25045e799450ee53d28e44b)

---

### Date: December 24, 2022

### $Topic: Transmission Methods$

### Recall

### Notes

**Transmission Methods**

**What are the 3 transmission methods**

-   Circuits can be designed to permit data to flow in one or both directions. There are three ways to transmit
-   They are as follows
    -    **Simplex** - which is a one way communication. For example, keyboard to computer
    -    **Half-duplex** - which is a two way communication link but only one system can talk at a time. For example: walkie-talkie
    - **Full-duplex** - Transmit in both directions simultaneously. For example: telephones. Most communication systems work full-duplex

Performance

The simplex mode provides less performance than half duplex and full duplex.

The Half Duplex mode provides less performance than full duplex.

Channel Usage

Usage of one channel for the transmission of data.

Usage of one channel for the transmission of data.

Suitable for

Suitable for those transmission when there is requirement of full bandwidth for delivering data

Suitable for those transmissions when there is requirement of sending data in both directions, but not at the same time

-   $**Multiplexing**$
    
    ![[Pasted image 20221230140037.png]]
    
    **What is multiplexing?**
    
    Multiplexing allows the carrying of multiple signals on a single medium without interrupting each other. This allows more efficient use of the transmission medium. The communication channel is divided into several number of logical channels, allotting each for a different message signal or a data stream to be transferred. The device that does multiplexing can be simple called as a MUX while the one that reverses the process which is demultiplexing, is called a DEMUX
    
    -   There are two major multiplexing techniques:
        -   **Frequency-division multiplexing (FDM)**
            
            Takes advantage of the fact that **useful bandwidth of the medium exceeds the required bandwidth of a given signal (greater than the combined bandwidth)**
            
            $f1 + f2 + f3$ $+ …. fn$ = composite signal
            
            Then at the receiving end the demodulator demux’s the composite signal
            
            Different frequencies used to transmit several signals simultaneously
            
            **Example:** A traditional television transmitter, which sends a number of channels through a single cable, uses FDM.
            
        -   **Time-division multiplexing (TDM)**
            
            Takes advantage of the fact that achievable bit rate of the medium exceeds the required data rate of a digital signal
            
            Each signal takes up the transmission medium for a little “time slice”
            
            Each signal is sent as a series of pulses or packets, which are interleaved with those of the other signal or signals and transmitted as a continuous stream.
            
            In TDM, the time frame is divided into slots. This technique is used to transmit a signal over a single communication channel, with allotting one slot for each message.
            
            $T0 → A$
            
            $T1 → B$
            
            $T2 → C$
            
            $Tt + Tp → Tslot$
            
            $Link + Propagation$
            
            $Useful time = time to transmit/transmit + propagate(Time allotted)$
            

<aside> 📌 **SUMMARY:** [What is Time Division Multiplexing (TDM)? Theory,block diagram, advanatages, disadvantages and applications of TDM - Electronics Coach](https://electronicscoach.com/time-division-multiplexing.html)

</aside>

[Fibre (Fiber) vs Copper as Fast As Possible - YouTube](https://www.youtube.com/watch?v=_Bw2NFBDxR8&ab_channel=Techquickie)

[Protocol Layers | Types, Role, Summary, Advantages & Facts (teachcomputerscience.com)](https://teachcomputerscience.com/protocol-layers/#Advantages_of_Protocol_Layering)

