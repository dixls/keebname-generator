const keybWords = [
    'keyb',
    'kb',
    'alpha',
    'switch',
    'clack',
    'thock',
    'keeb',
    'key',
    'heavy',
    'lab',
    'labs',
    'lube',
    'kbd',
    'keys',
    'type',
    'typist',
    'thocc',
    'mech',
    'mechanical',
    'board'
]

function pickWord() {
    let pick = Math.floor(Math.random() * keybWords.length)
    return keybWords[pick]
}

function getName() {
    let word1 = pickWord();
    let word2 = pickWord();
    if (word1 == word2) {
        word2 = pickWord();
    }
    return `${word1}${word2}`
}

$('#generate').click(function(evt){
    evt.preventDefault();
    const newName = getName();
    $('#nameField').text(newName).class("display-3 text-body")
})