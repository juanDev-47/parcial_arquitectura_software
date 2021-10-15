const mongoose = require('mongoose');
const { Schema } = mongoose;


const historiaSchema = new Schema({
    nombreMedico: {
        type: String,
        trim: true,
        required: true
    },
    cedulaMedico: {
        type: Number,
        required: true
    },
    nombrePaciente: {
        type: String,
        required: true
    },
    cedulaPaciente: {
        type: Number,
        required: true
    },
    historiaClinica: {
        type: String,
        required: true
    },
    sintomas: [
        {
            type: String,
            required: true,
        }
    ],
    fechaRegistro: {
        type: Date, 
        default: Date.now
    }

}, {
    timeStamps: true
}
);

module.exports = mongoose.model('Historia', historiaSchema);
