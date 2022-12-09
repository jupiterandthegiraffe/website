
exports.default = function() {
  const awards = JSON.parse(window.localStorage.awards)

  const awardsTable = document.querySelector('#awards-table')
  const awardsTableBody = awardsTable.querySelector('tbody')
  const awardRowClone = awardsTable.querySelector('tr').cloneNode(true)


  const newHTML = awards.reduce((total, num) => {
    awardRowClone.id = num.id
    const html = awardRowClone.outerHTML.replace(/{{TITLE}}|{{SCORE}}/g, function(match, offset) {
      if (match === '{{TITLE}}') {
        return `"${num.title ? num.title : num.id}"`
      } else if (match === '{{SCORE}}') {
        return num.score ? num.score : 'unkown'
      }

      return ''
    })
    return total + html
  }, '');

  awardsTableBody.innerHTML = newHTML

  document.getElementById('awards-total').innerText = localStorage['user-points']
  

  setTimeout(() => {
    window.triggerPointPopup('What gets measured, improves', 1, 'progress_page')
  }, 3000);
}

