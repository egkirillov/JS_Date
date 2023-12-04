function task_2()
{    
    let data=new Date();
    let setDate = new Date("Jan 01 2024 00:00:00");
    alert(`До нового года осталось ${Math.round((setDate-data)/ 1000 / 60 / 60 / 24)} дней`);   
       
}