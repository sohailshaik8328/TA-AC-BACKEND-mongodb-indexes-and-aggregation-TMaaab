var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {type : String},
    username : {type : String},
    email : {type : String},
    address : {
        city : {type : String},
        state : {type : String},
        country : {type : String},
        pin : {type : Number}
    }
})

userSchema.index({username : -1, unique : true});
userSchema.index({email : -1, unique : true});
userSchema.index({state : -1, unique : true});
userSchema.index({country : -1, unique : true});


var articleSchema = new Schema ({
    title : {type : String},
    description : {type : String},
    tags : [String] 
})

articleSchema.index({tags : -1})
articleSchema.index({title : "text", description : "text"});



module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Article', articleSchema);