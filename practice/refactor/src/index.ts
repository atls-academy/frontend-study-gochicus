/* eslint-disable no-alert, no-console */
const employers: Array<string> = [
  'Alex',
  '',
  'ludmila',
  'Victor',
  '',
  'oleg',
  'iNna',
  'Ivan',
  'Alex',
  'Olga',
  ' Ann',
]

const employersNames: Array<string> = []
employers.filter(employer => {
  if (employer !== '') {
    employersNames.push(employer.toLowerCase().trim())
  }
  return employersNames
})

console.log(employersNames)

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO'],
}

const { cash, eu, rus } = sponsors

function calculateCash(...money): number {
  return money.reduce((sum, currentValue) => {
    return sum + currentValue
  })
}
const sum: number = calculateCash(...cash)

function makeBusiness(
  mainOwner: string,
  director: string = 'Voldemort',
  investments: number,
  mainEmployers: Array<string>,
) {
  const sumSponsors = [...eu, ...rus, 'unexpected sponsor']
  console.log(
    `We have a business. Owner: ${mainOwner}, director: ${director}. Our budget: ${sum}. And our employers: ${mainEmployers}`,
  )
  console.log('And we have a sponsors: ')
  console.log(...sumSponsors)
  console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`)
}
makeBusiness('Hitler', 'Barry Alibasov', sum, employersNames)
