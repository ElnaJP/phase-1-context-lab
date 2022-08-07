function createEmployeeRecord(array) {
    return {firstName: array[0], familyName:array[1], 
    title:array[2], payPerHour:array[3], timeInEvents:[], timeOutEvents:[]}
    
}
function createEmployeeRecords(arrOfArrs) {
    return  arrOfArrs.map(createEmployeeRecord)
    }
function createTimeInEvent(bpRecord, timeString) {
   bpRecord.timeInEvents.push({type:"TimeIn", date:timeString.split(" ")[0], 
   hour:parseInt(timeString.split(" ")[1])})
   return bpRecord
}
function createTimeOutEvent(bpRecord, timeString) {
    bpRecord.timeOutEvents.push({type:"TimeOut", date:timeString.split(" ")[0], 
    hour:parseInt(timeString.split(" ")[1])})
    return bpRecord
}

function hoursWorkedOnDate(cRecord, date) {
function hoursWorkedOnDate(cRecord, dateMatch){ 
    const end = cRecord.timeOutEvents.find(element => {
       return element.date === dateMatch
    })


    const start = cRecord.timeInEvents.find(element => {
       return element.date === dateMatch
    })

    return (end.hour - start.hour) / 100


    }
cRecord.timeInEvents.date
}

function wagesEarnedOnDate(cRecord, dateMatch){

    return hoursWorkedOnDate(cRecord, dateMatch) * cRecord.payPerHour

}

function allWagesFor(cRecord){

    let total = 0


        for(let i = 0; i < cRecord.timeOutEvents.length; i++){ debugger

            total += wagesEarnedOnDate(cRecord, cRecord.timeOutEvents[i].date) 


        }
     return total

        }

        function calculatePayroll(array) {
            let employeeArr = []
            for (obj of arr) {
            for (const obj of arr) {
                employeeArr.push (allWagesFor(obj))
            }
            return employeeArr.reduce((acc,next)=> acc + next)
        }
    }
    