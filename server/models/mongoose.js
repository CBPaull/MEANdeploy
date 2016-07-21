var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    birthday: Date
});

mongoose.model('Frienddb', FriendSchema);
// Validations
FriendSchema.path('birthday').required(true, 'Birthday cannot be blank');
FriendSchema.path('lastname').required(true, 'Last Name cannot be blank');
FriendSchema.path('firstname').required(true, 'First Name cannot be blank');