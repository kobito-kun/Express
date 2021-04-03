const userSchema = new Schema({
    username: String,
    email: String,
    password: String
})

const userModel = mongoose.models("Users", )