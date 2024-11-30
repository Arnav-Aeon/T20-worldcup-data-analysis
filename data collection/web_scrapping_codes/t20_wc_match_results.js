/* -------------- STAGE 1 ------------ */

//------- 1.a Interaction Code ------ //

navigate('https://www.espncricinfo.com/records/tournament/team-match-results/icc-men-s-t20-world-cup-2022-23-14450');
collect(parse());



//------- 1.b Parser Code ------------//
let matchSummary = []

const allRows = $('table.ds-table > tbody > tr');

allRows.each((index, element) => {
  const tds = $(element).find('td');
  matchSummary.push({
    'team1': $(tds[0]).text(),
    'team2': $(tds[1]).text(),
    'winner': $(tds[2]).text(),
    'margin': $(tds[3]).text(),
    'ground': $(tds[4]).text(),
    'matchDate': $(tds[5]).text(),
    'scorecard': $(tds[6]).text()
  })
})


return {
  "matchSummary": matchSummary
};