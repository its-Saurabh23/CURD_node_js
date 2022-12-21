const connection = require("./Assi_2connection");

const deleteData = async ()=>{
let data = await connection();

let result = await data.deleteOne({
    Roll_No:14
})
if (result.acknowledged) {
    console.log("Data is Successfully Deleted:")
}

}
deleteData();