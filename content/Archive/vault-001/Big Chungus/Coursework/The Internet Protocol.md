The Internet Protocol (IP) is a [protocol](https://www.cloudflare.com/learning/network-layer/what-is-a-protocol/), or set of rules, for routing and addressing [packets](https://www.cloudflare.com/learning/network-layer/what-is-a-packet/) of data so that they can travel across networks and arrive at the correct destination. Data traversing the Internet is divided into smaller pieces, called packets. IP information is attached to each packet, and this information helps [routers](https://www.cloudflare.com/learning/network-layer/what-is-a-router/) to send packets to the right place. Every device or [domain](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/) that connects to the Internet is assigned an [IP address](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/), and as packets are directed to the IP address attached to them, data arrives where it is needed.

Once the packets arrive at their destination, they are handled differently depending on which transport protocol is used in combination with IP. The most common transport protocols are TCP and UDP.

## What is an IP address? How does IP addressing work?

An IP address is a unique identifier assigned to a device or domain that connects to the Internet. Each IP address is a series of characters, such as '192.168.1.1'. Via [DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) resolvers, which translate human-readable domain names into IP addresses, users are able to access websites without memorizing this complex series of characters. Each IP packet will contain both the IP address of the device or domain sending the packet and the IP address of the intended recipient, much like how both the destination address and the return address are included on a piece of mail.

![[Pasted image 20230104113614.png]]

[What is my IP address? | Cloudflare](https://www.cloudflare.com/en-gb/learning/dns/glossary/what-is-my-ip-address/)

## What is an IP packet?

IP packets are created by adding an IP header to each packet of data before it is sent on its way. An IP header is just a series of bits (ones and zeros), and it records several pieces of information about the packet, including the sending and receiving IP address. IP headers also report:

-   Header length
-   Packet length
-   [Time To Live (TTL)](https://www.cloudflare.com/learning/cdn/glossary/time-to-live-ttl/), or the number of network hops a packet can make before it is discarded
-   Which transport protocol is being used (TCP, UDP, etc.)

In total there are 14 fields for information in IPv4 headers, although one of them is optional.

![[Pasted image 20230104114017.png]]


[[TCP IP]]



[[UDP IP]]


