let category

const addEntry = function(id, code) {
  let badVar
  document.querySelector(`#${category}`).appendChild(el('.entry#' + id, [
    el('pre', badVar = el('code'))
  ]))
  badVar.innerHTML = code
}

category = 'aliases'
addEntry('just', 'alias just="sudo"')
addEntry('ddos', 'alias ddos="ping"')
addEntry('dogtac', '# <a href="https://twitter.com/arinerron/status/'+
                   '774490796212965376">thanks!</a>\n' +
                   'alias dog=cat\n' +
                   'alias god=tac')

// TODO: make <pre>fixer.js better, should be able to just accept text!
// because template/multiline strings!!!!!
addEntry('doit', '# requirement: <a href="#just">just</a>\n' +
                 'alias doit="dnf system-upgrade"\n' +
                 '# just doit')

category = 'more-stuff'
addEntry('sad', '# must be at end of file\n' +
                'echo project status: e-ORhEE9VVg')
