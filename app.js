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
    'Caps',
    'Cap',
    'Mod',
    'Mods'
]

const ultraRare = [
    'weeb'
]

function pickWord() {
    let roll = Math.floor(Math.random() * 10000)
    let pick = Math.floor(Math.random() * keybWords.length)
    let rarePick = Math.floor(Math.random() * ultraRare.length)
    if (roll == 666) {
        return ultraRare[rarePick]
    }
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