const addToDb = time =>{
        const breakTime = {time};
        localStorage.setItem('Break-Time', JSON.stringify(breakTime));
    
    }
 const getTimeFromDb = () =>{
        let breakTime = {};
        const storedTime = localStorage.getItem('Break-Time');
        if(storedTime){
            breakTime = JSON.parse(storedTime);
        }
        return breakTime;
    }
export{
    addToDb,
    getTimeFromDb,
}