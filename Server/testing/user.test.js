// use the path of your model
const foruser = require('../models/register_model');

// const worker = require('../models/worker_model')
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://127.0.0.1:27017/PlayME';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useCreateIndex: true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});

describe('Register Test', () => {
// the code below is for insert testing
 it('Register testing anything', () => {
 const User = {
 'FullName':'biraj',
 'Address': 'kapan',
 'PhoneNo': '24362426',
 'Username':'biraj',
 'Password':'biraj'
 };
 
 return foruser.create(User)
 .then((pro_ret) => {
expect(pro_ret.FullName).toEqual('biraj');
expect(pro_ret.Address).toEqual('kapan');
expect(pro_ret.PhoneNo).toEqual('24362426');
expect(pro_ret.Username).toEqual('biraj');
expect(pro_ret.Password).toEqual('biraj');
 });
 });
})

//login user test

it("User Login testing", async()=>{
    const User ={
        "Username":"biraj",
        "Password":"biraj"
    }
    return foruser.findOne({User});

})
 //update user profile

it("Update User profile", async()=>{
    const pro = await foruser.updateOne({
        "Username":Object("biraj")
    },
    {
        $set:{
            "PhoneNo":"981818181",
            "Address":"test"
        }
    })
    expect(pro.ok).toBe(1)

}
)

//delete user profile

it("delete profile",async()=>{
    const status = await foruser.deleteOne({
        "Username":Object("biraj")
    });
    expect(status.ok).toBe(1);
}
)





