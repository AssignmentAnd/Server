// use the path of your model
const forpost = require('../models/post_challenge');

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
 it('adding post testing anything', () => {
 const post = {
 'Username':'biraj',
 'Challengetitle': 'this is a title',
 'Game': 'PUBG',
 'Discordid':"1234",
 'Description':'this is description',
 'Challengerate':'1000Rs',
 'Livelink':'http://youtube'
 };
 
 return forpost.create(post)
 .then((pro_ret) => {
expect(pro_ret.Username).toEqual('biraj');
expect(pro_ret.Challengetitle).toEqual('this is a title');
expect(pro_ret.Game).toEqual('PUBG');
expect(pro_ret.Discordid).toEqual("1234");
expect(pro_ret.Description).toEqual('this is description');
expect(pro_ret.Challengerate).toEqual('1000Rs');
expect(pro_ret.Livelink).toEqual('http://youtube');

 });
 });
})

 //update the made post

it("Update User profile", async()=>{
    const pro = await forpost.updateOne({
        "Username":Object("biraj")
    },
    {
        $set:{
            "Discordid":"981818181",
            "Game":"hhh"
        }
    })
    expect(pro.ok).toBe(1)

}
)

//delete the post

it("delete profile",async()=>{
    const status = await forpost.deleteOne({
        "Username":Object("biraj")
    });
    expect(status.ok).toBe(1);
}
)





