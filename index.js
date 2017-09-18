const _ = require("lodash")
const M = require("moment")
const chalk = require('chalk')
const MomentRange = require('moment-range')
const moment = MomentRange.extendMoment(M)

//Will create the year
let year = moment().range('year') 

//For each month of the year Print the days
for(const month of year.by('month')) 
{
  // will print the days of week
    console.log(_.pad(month.format('MMMM'), 26, '-'))
    console.log('S   M   T   W   Th   F   S ')
    //Creats days array
    let days =  Array.from(month.range('month').by('days'))
 
    let paddedDays = _.map(days, day => {
        let date = day.date()
        //Will highlight Adams bithday
        if (day.month() == 8 && day.date() == 10) {
            date = chalk.blue(date)
        }
        //Will highlite my birthday
        if (day.month() == 2 && day.date() == 5) {
            date = chalk.green(date)
        }
        return _.padStart(date, 2 )
        return _.padEnd(date, 2)  
    })
    //Will print the dates of the month 
    for (i = 0; i < month.day(); i++)   
      {
        //Will add the spaces to the beggining of the days array
      paddedDays.unshift('  ');   
      }
      //Will chunk togeather the days into chunks of 7
      paddedDays = _.chunk(paddedDays, 7);
      //Will display days foreach week and join on Week then display
      paddedDays.forEach(week => {console.log(week.join("  "))})  
}