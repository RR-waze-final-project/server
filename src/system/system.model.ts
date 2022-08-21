/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Types } from 'mongoose';

export const SystemSchema = new mongoose.Schema({
    topic: { type: String, required: true},
    urlName: { type: String, required: true, unique: true},
    urlImg: { type: String, required: true },
    objectName: { type: String, required: true },
    adminUid:{type: mongoose.Schema.Types.ObjectId, ref: 'User',require:true} ,
    description: { type: String, required: true },
    communicationDetails: { type: {
        email: { type: String },
        phone: { type: Number }
    }, required: true }
})

export interface System {
    // _id: Types.ObjectId,
    uid: string,
    topic: string,
    urlName: string,
    urlImg: string,
    objectName: string,
    adminUid: mongoose.Schema.Types.ObjectId,
    description: string,
    communicationDetails: object,
}
