const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnTerm() {
        return readline.question('Digite um termo de pesquisa no Wikipedia:')
    }
    function askAndReturnPrefix() {
        const prefixes = ['O que é', 'Quem é', 'a história de', 'A história do']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opção:')
        const selectedPrefixText = prefixes [selectedPrefixIndex]
    
    

        return selectedPrefixText
    }

    console.log(content)
}
start()