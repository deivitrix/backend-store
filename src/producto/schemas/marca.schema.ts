import * as mongoose from 'mongoose';

export const MarcaSchema = new mongoose.Schema({
 nombre:String,
 status:Boolean

});
