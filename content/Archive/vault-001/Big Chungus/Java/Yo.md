
```
public class Worker{

	private String name;
	private int salaryRate;

	//constructor 
		public Worker(String name, int salary){
			this.name = name;
			this.salary = salary;
		} 
	//computePay that takes in int hours as param
	public Integer computePay(int hours){
		 int finalPay = 0;
				//compute pay as number of hours into wage right now
				finalPay = hours * salaryRate;
				
			return finalPay
		}	
		
		//GETTERS
		public void getPay(){
				return this.computePay
			}
	}
```
`
```
public class HourlyWorker extends Worker {
	private String hourlyName;
	private int hourlySalaried; 
	
	private bool isSalaried = false;

	
	public HourlyWorker(String hourlyName, int hourlySalaried){
	this.hourlyName = hourlyName;
	this.hourlySalaried = convertHours(int hourlySalaried);
	}

	public int convertHours(int hrs){
		private int temp = 0;
		private int fin = 0;
		//if hourly worker has 40+ hours then count number of hours as 
		if(hrs > 40)
		//temp = numHours - 40; 
			temp = hrs - 40;
		//temp *= 2;
			temp *= 2;
		//numHours += temp;
			fin = hrs - 40 + temp;
			return fin
		}
		
	public Integer computePay(int hours){
	   int finalPay = 0;
			//compute pay as number of hours into wage right now
			 int tempNum = 0
			tempNum = convertHours(hours)
			finalPay =  tempNum * salaryRate;
			
		return finalPay
	}	
		//GETTERS
	public void getName(){
				return this.hourlyName;
			}
	public void getPay(){
				return this.computePay
			}
}
```

```
public class SalariedWorker Extends Worker {
	private String salariedName;
	private int salariedRate;  

	private bool isSalaried = true;
	public SalariedWorker(String salariedName, int salariedRate){
		this.salariedName = salariedName;
		this.salariedRate = salariedRate;
		}
	
		public int computePay(int hours){
		private int finalPay = 0;
				//compute pay as number of hours into wage right now
				finalPay = 40 * salariedRate;
				
			return finalPay
		}	
		//GETTERS
		public void getName(){
				return this.hourlyName;
			}
		public void getPay(){
				return this.computePay
			}
}
```

```
public class Test{
	//statement containing name, hourly or salaried, amount of money earned this week
	private String finalStatement;
	
	
	
	public StringweeklyReport(Worker w, int num) {
		private int tempPay = 0
		private String tempName = "";
		
		 tempPay = w.computePay(num);

		
		if(w.isSalaried){
		  finalStatement = tempName + Integer.parseString(tempPay) + "salaried" 
			  
		  }
		else
			finalStatement = tempName + Integer.parseString(tempPay) + "hourly" 
		return finalStatement
	}
}
```
