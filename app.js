const targetDate=new Date('2025-01-01T00:00:00')

function countdownUpdate()
{
    const currentDate=new Date();
    const timeDiff=targetDate-currentDate;
    const days=Math.floor((timeDiff/(1000*60*60*24)));
    const hours=Math.floor((timeDiff%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((timeDiff%(1000*60*60))/(1000*60));
    const seconds=Math.floor((timeDiff%(1000*60))/1000);

    document.getElementById('countdown').innerHTML=`${days}d ${hours}h ${minutes}m ${seconds}s`
    setTimeout(countdownUpdate,1000)
}
countdownUpdate()