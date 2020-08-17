function Question(question, answers, correct) {
    this.question = question;
    this.answers =  answers;
    this.correct =  correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for(var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);   
    }
}

Question.prototype.checkAnswer = function(ans) {
    if(ans === this.correct) {
        console.log('Correct Answer!');
    } else {
        console.log('Wrong Answer, Try again!');
    }
}

var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);

var q2 = new Question('What comes after alphabet \`a\`?', ['c', 'd', 'b'], 2);

var q3 = new Question('Taj Mahal is situated in?', ['Agra', 'Varanasi', 'Delhi'], [0]);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion(); 

var answer = parseInt(prompt('Please Select the correct answer.'));

questions[n].checkAnswer(answer);