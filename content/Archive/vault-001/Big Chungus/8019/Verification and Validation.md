## Refinement
Used to show the correctness of each refinement step. 

## Static Techniques
Will reduce cost of correcting code later on by fixing before execution.
The errors that show up in IntelliJ while writing code is an example of a Static Analysis Tool.

## Inspection 
Follows the waterfall approach.

### People
Author
Inspector
Reader
Scribe
Moderator

### Process 
Reader reads -> Questions raised -> Error is noted & classified -> Written report prepared -> Re-inspection

Faults in
	-> Data
	-> Control
	-> I/O
	-> Interface 
	-> Storage Mgmt. 
	-> Exceptions Mgmt. 
Inspection depends on the experience of the team, app domain & other factors 
-> For example, safety critical will have more inspections

### Effort Figures 
Examples: Slide 12 *L11VandV*

---

## Static Analysis
### Control Flow
- ∞ loops
- Data use -> uninit variables
- I/O Flow 
- Path analysis 
### Proof
- Developing a math proof, req formal spec

### Goals of Testing
- Reveal bugs -> by finding counterexamples
- We cannot conclude error free if failures are not found 
- Choice of appropriate test cases is fundamental for effective testing 

---


