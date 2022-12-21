const connection = require('./Assi_2connection');
const insert = async ()=>{
    const db = await connection();
   
    const result = await db.insert(
       [ {
            Roll_No:1,
            Name:"Rohit",
            Course:"B.Tech",
            Dept:"CSE"
        },
        {
            Roll_No:2,
            Name:"Sumit",
            Course:"B.Tech",
            Dept:"CSE"
        },]
    )
    if (result.acknowledged) {
        console.log("Data is Inserted Successfully:")
    }
}

insert();