const keybWords = [
    'Keyb',
    'KB',
    'Alpha',
    'Switch',
    'Clack',
    'Thock',
    'Keeb',
    'Key',
    'Heavy',
    'Lab',
    'Labs',
    'Lube',
    'KBD',
    'Keys',
    'Type',
    'Typist',
    'Thocc',
    'Mech',
    'Mechs',
    'Mechanical',
    'Board',
    'Matrix',
    'Works',
    'Caps'
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