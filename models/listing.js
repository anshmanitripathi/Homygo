const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true, 
    },
    discription : String,
    image : {
        type : String,
        default : "https://imgs.search.brave.com/DXyrqk1lnVF4ArRrR0YcbCogVVe2eDKW_EVwONzR7B4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTc0NDkxNTMz/My5qcGc",
        set : (v) => 
            v === "" 
            ? "https://imgs.search.brave.com/DXyrqk1lnVF4ArRrR0YcbCogVVe2eDKW_EVwONzR7B4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTc0NDkxNTMz/My5qcGc" 
            : v,

              
    },
    price : String,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

