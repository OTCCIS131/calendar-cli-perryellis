const _ = require("lodash")
const M = require("moment")
const chalk = require('chalk')
const MomentRange = require('moment-range')


const moment = MomentRange.extendMoment(M)

let year = moment().range('year')



for(const month of year. by('month'))
{
    console.log(_.pad(month.format('MMMM'), 26, '-'))
    console.log('S   M   T   W   Th   F   S ')

    let monthRange = month.range('month')
    let firstDay = monthRange.start.day() 

    const chunkSize = 7;

    let days =  Array.from(month.range('month').by('days'))
    let paddedDays = _.map(days, day => {
        let date = day.date()
        
        if (day.month() == 8 && day.date() == 10) {
            date = chalk.red(date)
        }
        if (day.month() == 2 && day.date() == 5) {
            date = chalk.green(date)
        }

        return _.padEnd(date, 2)

    })

    console.log(paddedDays, firstDay)
}