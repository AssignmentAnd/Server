// use the path of your model
const forchallenge = require('../models/challenges');


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
 it('adding test anything', () => {
 const User = {
 'Challenger':'biraj',
 'Phone': '24362426',
 'Challenge':'this is a challenge'
 };
 
 return forchallenge.create(User)
 .then((pro_ret) => {
expect(pro_ret.Challenger).toEqual('biraj');
expect(pro_ret.Phone).toEqual('24362426');
expect(pro_ret.Challenge).toEqual('this is a challenge');
 });
 });
})






//delete user profile

it("delete profile",async()=>{
    const status = await forchallenge.deleteOne({
        "Challenger":Object("biraj")
    });
    expect(status.ok).toBe(1);
}
)





