function task_1()
{    

        let getDayOfWeek=(data)=>daysOfWeek[data.getDay()];
        let data=new Date('December 02, 2023 03:24:00');
        let daysOfWeek=['воскресенье',
            'понедельник',
            'вторник',
            'среда',
            'четверг',
            'пятница',
            'суббота'];
        alert(getDayOfWeek(data));      
       
}