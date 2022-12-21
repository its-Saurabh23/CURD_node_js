const connection= require('./Assi_2connection');

const updateData = async ()=>{
let data = await connection();
let result = await data.update({Roll_No:1},
    {$set:{Roll_No:14}},
    )}
    
    updateData();
