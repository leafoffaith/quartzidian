2025-11-28 

08:20

Status: #adult

Tags: #notetaking

Interview2


Base prompt to get the core requirements out of the task

For the above task:

1. I need the components I need to build - data structures, nouns

2. what key operations are required for this

3. what are the MVPs & nice to haves if I need to ship it right now
## **1. Critical concepts about real-time cryptocurrency trading**

- **Trades are event streams**, not static rows — every trade updates _price_, _liquidity_, and _market direction_ in real time.
    
- **Price comes from the latest trade**, not an orderbook — pump.fun tokens are AMM-based, so every swap directly changes reserves → price.
    
- **Tokens move on “momentum”**, meaning you watch sequences of buys/sells over time; RSI is literally designed to detect this momentum.

---
### **2. Technical indicator calculations — verbs & functions to know**

- **Maintain a sliding window** (e.g., last 14 prices).
    
- **Compute deltas:** `gain = max(price_diff, 0)`, `loss = max(-price_diff, 0)`.
    
- **Smooth values:** `avg_gain`, `avg_loss` via exponential moving average (EMAs).
    
- **Calculate RSI:**
    
    - `rs = avg_gain / avg_loss`
        
    - `rsi = 100 - (100 / (1 + rs))` 
    - 
    - delta = price - prev_price
gain  = max(delta, 0)
loss  = max(-delta, 0)
avg_gain = gain*α + avg_gain*(1-α)
avg_loss = loss*α + avg_loss*(1-α)
rs = avg_gain / avg_loss
rsi = 100 - (100 / (1 + rs))
        
- **Stream processing verbs you’ll use in Rust:**
    
    - “consume messages”, “accumulate state”, “update rolling averages”, “emit/publish results”.
        

---

### **3. What you need to know about trades_data.csv**

- **price_in_sol** is the _actual price_ per token — this is the only field you need for RSI.
    
- **token_address** groups trades into 5 separate tokens — you must track RSI _per token_.
    
- **is_buy + amount fields** tell you trade direction/volume, but you can ignore almost everything except:
    
    - `token_address`
        
    - `price_in_sol`
        
    - `block_time` (to order the stream correctly)
        

Everything else (reserves, fees, program_id, signatures) is irrelevant for the core assignment unless you want bonus insights.

# References