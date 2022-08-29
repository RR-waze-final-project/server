/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Marker } from './marker.model';

@Injectable()
export class MarkerService {
    constructor(
        @InjectModel('Marker') private readonly markerModel: Model<Marker>,
    ) { }

    async AddMarker(
        manager_id: string,
        system_id: string,
        locationGeolocation: object,
        description: string,
        name: string,
        notes: string,
        communicationDetails: object,
    ) {
        const newMarker = new this.markerModel({
            manager_id,
            system_id,
            locationGeolocation,
            description,
            name,
            notes,
            communicationDetails,
        });
        return await newMarker.save();
    }

    async getMarkers() {
        return await this.markerModel.find();
    }

    async getMarkerById(markerId: string) {
        return await this.markerModel.findById(markerId).exec();
    }

    async getMarkersOfSystem(systemId: string) {
        return await this.markerModel.find({ systemId: systemId }).exec();
    }

    async updateMarker(
        uid: string,
        manager_id: string,
        system_id: string,
        locationGeolocation: object,
        description: string,
        name: string,
        notes: string,
        communicationDetails: object,
    ) {
        return await this.markerModel
            .updateOne(
                { _id: uid },
                {
                    $set: {
                        manager_id: manager_id,
                        system_id: system_id,
                        locationGeolocation: locationGeolocation,
                        description: description,
                        name: name,
                        notes: notes,
                        communicationDetails: communicationDetails,
                    },
                },
            )
            .exec();
    }

    async deleteMarker(uid: string) {
        return await this.markerModel.findByIdAndDelete(uid).exec();
    }
}
