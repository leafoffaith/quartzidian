a)

	public boolean includes(String text) {
	for(int i = 0; i < .length; i++){
		if(tmp[i].equals(text) || tmp2[i].equals(text)){
			return true;
		}
	}
	return false;
		
	String[] tmp = subject.split(' ');
		for(String x: tmp){
			if(s.equals(text))
				return true;
		} 
	String[] tmp2 = content.split(' ')
		for(String y: tmp){
			if(y.equals(text))
				return true;
		} 
}

b)public Journal(ArrayList<Note> notes, String name){
		this.name = name;
		this.notes = notes;
	}

c) 
public void addNote(Note n){
	this.notes.add(n);
}

d) public int notesContaining (String text) {
  int blah= 0;
	for(){
	blah++
	notes.get(i)
	}
}