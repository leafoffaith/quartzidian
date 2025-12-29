2025-08-07 

21:31

Status: #child

Tags: #TechnicalInterviewPrep 

# Clarity X Prep


## List

- Example: `nums = [2, 4, 6]`
- Mutable (can be changed after creation)
- Can access elements via indices, e.g., `nums[0]`
- Add elements using `nums.append(8)`
- Update elements: `nums[n] = <number at n>`

## Tuple

- Example: `point = (10, 20)`
- Immutable (cannot be changed after creation)
- Access elements via indices, e.g., `point[0]`
- Attempting to modify, e.g., `point[0] = 5`, will throw a `TypeError`

## Set

- Example: `s = {1, 2, 2, 4}`
- Only unique elements are stored (duplicates are removed)
- Add elements using `s.add(4)`
- Unordered collection (no indexing)

## Dictionary (Dict)

- Example: `sales = {"Jan": 200, "Feb": 250}`
- Similar to JavaScript objects (key-value pairs)
- Accessed via keys, e.g., `sales["Jan"]`
- Add or update entries: `sales["Mar"] = 300`
  

---

## Pandas

`import pandas as pd`
`df = pd.read_csv(“name.csv”)`
`df2 = pd.read_csv(`
`##Methods like groupby, merge`
``
## Lambda

square = list(map(lambda x: x*x, [1, 2, 3]))
the above will square the values

## Generators vs Lists
  
## Shallow v. Deep Copy

Shallow copy does not copy nested objects
```
import copy 
orig = [[1, 2], [3, 4]]
shallow = list(orig)
shallow[0][0] = 99
deep = copy.deepcopy(orig) 
```

## Loops

~iterate over a list~
```
list = ["x", "y", "z"]
for city in cities:
	print(city)
```

~using enumerate~
```
for idx, city in enumerate(cities, start=1):
	print(f"{idx}.{city}")
```

~looping over a dictionary~
```
sales = {"Jan": 200, "Feb": 250, "Mar": 300} for month, amount in sales.items(): print(f"{month}: ₹{amount}")

# OR

for month in sales: # keys ... 
for amount in sales.values():# values ...
```

~generator loop~
```
def read_large_file(path): 
	with open(path) as f: 
		for line in f: # yields one line at a time 
			yield line.strip() 
			
for record in read_large_file("huge.log"): 
	process(record) # never loads entire file in RAM
```


~chunked pandas loop~
```
import pandas as pd 
for chunk in pd.read_csv("big.csv", chunksize=100_000): 
	result = transform(chunk) 
	write(result)
```

~threadpool multithreading~

```
from concurrent.futures import ThreadPoolExecutor 
import requests, csv 
urls = [ "https://example.com/api/1", "https://example.com/api/2", # ... ] 

def fetch(url): 
"""Return JSON payload from a REST endpoint.""" 
	resp = requests.get(url, timeout=5) 
	resp.raise_for_status() 
	return resp.json() 

# -------- Executor loop -------- 
with ThreadPoolExecutor(max_workers=8) as pool: 
	for payload in pool.map(fetch, urls): 
		process(payload) # handle each response as it arrives
		
```

Topics to revise

- generators in python
- python fundamentals
- threadpool
- joins in sql, which ones deduplicate which ones don't
- 
