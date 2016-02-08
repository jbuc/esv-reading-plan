var startDate = new Date("2/1/2016").getTime();
var todaysDate = new Date().getTime();
var dateDifference = (todaysDate > startDate) ? todaysDate - startDate : 0;
var targetDay = Math.floor(dateDifference/(1000*60*60*24)+1);
var lists = [
	[{'Matthew':28}, {'Mark':16}, {'Luke':24}, {'John':21}],
	[{'Genesis':50}, {'Exodus':40}, {'Leviticus':27}, {'Numbers':36}, {'Deuteronomy':34}],
	[{'Romans':16}, {'1 Corinthians':16}, {'2 Corinthians':13}, {'Galatians':6}, {'Ephesians':6}, {'Philippians':4}, {'Colossians':4}, {'Hebrews':13}],
	[{'1 Thessalonians':5}, {'2 Thessalonians':3}, {'1 Timothy':6}, {'2 Timothy':4}, {'Titus':3}, {'Philemon':1}, {'James':5}, {'1 Peter':5}, {'2 Peter':3}, {'1 John':5}, {'2 John':1}, {'3 John':1}, {'Jude':1}, {'Revelation':22}],
	[{'Job':42}, {'Ecclesiastes':12}, {'Song of Solomon':8}],
	[{'Psalms':150}],
	[{'Proverbs':31}],
	[{'Joshua':24}, {'Judges':21}, {'Ruth':4}, {'1 Samuel':31}, {'2 Samuel':24}, {'1 Kings':22}, {'2 Kings':25}, {'1 Chronicles':29}, {'2 Chronicles':36}, {'Ezra':10}, {'Nehemiah':13}, {'Esther':10}],
	[{'Isaiah':66}, {'Jeremiah':52}, {'Lamentations':5}, {'Ezekiel':48}, {'Daniel':12}, {'Hosea':14}, {'Joel':3}, {'Amos':9}, {'Obadiah':1}, {'Jonah':4}, {'Micah':7}, {'Nahum':3}, {'Habbakuk':3}, {'Zephaniah':3}, {'Haggai':2}, {'Zechariah':14}, {'Malachi':4}],
	[{'Acts':28}]
];

lists.forEach(function(a){
	console.log(a);
	for(var book in a);
});

var urlBase = "http://www.esvapi.org/v2/rest/passageQuery?key=IP&include-subheadings=false&include-verse-numbers=false&include-footnotes=false&include-headings=false&include-audio-link=false&passage=";