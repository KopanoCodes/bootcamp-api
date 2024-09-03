export default function enoughAirtime(usageOfAirtime, availableAirtime){
    usageOfAirtime = usageOfAirtime.split(', ');
     var usedAirtime = 0;
      for (let i = 0; i<usageOfAirtime.length; i++){
            var loopedUsageOfAirtime = usageOfAirtime[i]
           switch (loopedUsageOfAirtime){
              case "call":
                usedAirtime += 1.88;
                       break;
              case "sms":
                usedAirtime += 0.75;
                       break;
              case "data":
                 usedAirtime += 12;}					
                }
    if (availableAirtime<usedAirtime){return "R0.00"}
       availableAirtime = availableAirtime - usedAirtime 
      return "R" + availableAirtime.toFixed(2)
    }