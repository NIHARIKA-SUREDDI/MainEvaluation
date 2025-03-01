const mongoose=require('mongoose');

const AppointmentSchema=new mongoose.Schema({
    patientId:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    doctorId:{type:mongoose.Schema.Types.ObjectId,ref:'doctor'},
    appointmentDateTime:{type:DateTime},
    symptoms:{type:String},
    fees:{type:Number},
    prescription:{type:String},
    isDiagnosisDone:{type:Boolean}

});

const AppointmentModel=mongoose.model('appointment',AppointmentSchema);
module.exports=AppointmentModel;