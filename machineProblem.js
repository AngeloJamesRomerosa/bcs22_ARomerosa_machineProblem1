// ITCS227 Source Code Template for 2T AY 2022-2023
/*
	Program: Computation of Grades using Function
	Programmer: Angelo James S. Romerosa
	Section: BCS22
	Start Date: April 17, 2023
	End Date: 
*/

const finalGrade =[];

for (let i = 1; i <= 5; i++){

    var name = prompt("Enter the name of the student: ");

	var enablAssess1 = parseInt(prompt("Enter enabling assessment 1: "));
	var enablAssess2 = parseInt(prompt("Enter enabling assessment 2: "));
	var enablAssess3 = parseInt(prompt("Enter enabling assessment 3: "));    
 	var enablAssess4 = parseInt(prompt("Enter enabling assessment 4: "));
	var enablAssess5 = parseInt(prompt("Enter enabling assessment 5: "));

	var sumAssess1 = parseInt(prompt("Enter summative assessment 1: "));
	var sumAssess2 = parseInt(prompt("Enter summative assessment 2: "));
	var sumAssess3 = parseInt(prompt("Enter summative assessment 3: "));

    var mjrExamGrd = parseInt(prompt("Enter major exam grade: "));

    var classParticipation = (enablAssess1+enablAssess2+enablAssess3+enablAssess4+enablAssess5)/5;
    
    var sumAssessFinal = (sumAssess1+sumAssess2+sumAssess3)/3;

    var grade = (classParticipation* 0.3)+(sumAssessFinal * 0.3)+(mjrExamGrd * 0.4);

    var letter;

	if (grade >= 90) {
		letter = "A";
	} else if (grade >= 80 &&  grade <= 89) {
		letter = "B";
	} else if (grade >= 70 && grade <= 79) {
		letter = "C";
	} else if (grade >= 60 && grade <= 69) {
		letter = "D";
	} else {
		letter = "F";
	};


	const input = {

	}

	input['Name_of_Student'] = name;
	input['Class_Participation'] = classParticipation;
	input['Summative_Assessment'] = sumAssessFinal;
	input['Exam_Grade'] = mjrExamGrd;
	input['Grade_Score'] = grade;
	input['Letter_Grade'] = letter;

    finalGrade.push(input);

   }

console.table(finalGrade);