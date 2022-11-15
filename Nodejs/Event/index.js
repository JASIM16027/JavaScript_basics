
const School = require('./school');

const school = new School();

// register a listener for bellRing event
school.on('bellRing',function({period,text}){
    console.log(`We need to run because ${period}${text}`);
});

school.StartPeriod();
// event raise an event..a event has happened that let the node js know about it.
//emitter.emit('bellRing');

// setInterval(function(){
//     emitter.emit('bellRing');
// },2000)

// setTimeout(()=>{
//     emitter.emit('bellRing',{
//         period:'second',
//         text:' period ended'
//     });
// },2000);
