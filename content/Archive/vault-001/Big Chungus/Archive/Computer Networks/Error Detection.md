## Redundancy

Main technique to detect errors.

Group of bits added to end of data unit

`10111100011` ← Data

`1011101` ← Redundancy

`10111100011` + `1011101`

receiver uses a checking function to see if the data is valid, if it is then the it is accepted otherwise it is rejected

## Parity Checker

Add parity bit → 1 or 0

### Drawback

If parity remains even but bits are flipped then incorrect information is treated as correct

It can’t locate the position where the error has occurred

Use hamming code to error bit position

## Checksum

Yet another error detection tool

→ In checksum, data is divided into k segments each of m bits

For example: 4 segments of 8 bits

→ Checksum seg is sent along with the data segment

→ If the result is = 0 then data is accepted else rejected

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2386c5f9-2966-4eb6-81a6-4759cd8baff4/Untitled.png)

-   Example
    
    `10011001 11100010 00100100 10000100`
    
    k = 4
    
    m = 8
    
    `10000100`
    
    `00100100`
    
    `11100010`
    
    `10011001`
    
    ---
    
    `00100101`
    
    ---
    
    `11011010` ← checksum
    
    if all added gives 1s then passes checksum

[[Hamming Code]]