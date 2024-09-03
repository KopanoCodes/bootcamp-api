export default function totalPhoneBill(sentItems){
    sentItems = sentItems.split(', ')
      var outboundBill = 0
      for (let i = 0; i<sentItems.length; i++){
            var loopedSentItems = sentItems[i]
            if (loopedSentItems == "call"){
                outboundBill += 2.75
            }
            else if(loopedSentItems == "sms"){
                   outboundBill += 0.65
            }
      }
    return "R" + outboundBill.toFixed(2)
      
    }