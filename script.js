var names=new Array();
names[0]="Leslie";
names[1]="Jenna";
names[2]="Julia";
names[3]="jacob";
names[4]="emma";
names[5]="Princess";
names[6]="Etleva";
names[7]="elvi";
names[8]="Laura";
names[9]="jane";
names[10]="jennet"
names[11]="erta"


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}