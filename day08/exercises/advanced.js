function addDot(sentence)
{
	if (typeof sentence == 'array')
	{
		sentence = sentence.join(' ');
	}
	return sentence + '.';
}

function insertWord(sentence, word, position)
{
	if (typeof sentence == 'string')
	{
		sentence = sentence.split(' ');
	}
	var temp = sentence.slice(0,position);
	temp.push(word);
	return temp.concat(sentence.slice(position, sentence.length)).join(' ');
}


var sentences = [];


var sentence_magled = [
    ['Vienna', '  ', '    ', '    '],
    ['      ', 'is', '    ', '    '],
    ['      ', '  ', 'nice', '    '],
    ['      ', '  ', '    ', 'city']
];

var lines = [];
lines.push(sentence_magled[0].join(' '));
lines.push(sentence_magled[1].join(' '))
lines.push(sentence_magled[2].join(' '))
lines.push(sentence_magled[3].join(' '))

sentences.push(addDot(insertWord(lines, "a", 2)) + '<br />');

sentences.push("Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\".");


var temp_array = sentences.pop().split('$');
sentences.push(temp_array.join(' '));


sentences.forEach(function(sentence) { document.write(sentence);});
