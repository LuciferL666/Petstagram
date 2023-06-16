const { MongooseError } = require("mongoose");

exports.getErrorMessage = (err) =>{ //23. C
    if(err instanceof MongooseError){ //23. C
        return Object.values(err.errors).at(0).message; //23. C
    }else { //23. C
        return err.message; //23. C
    } //23. C
}; //23. C