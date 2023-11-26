const { query } = require('../config/database');

// RoadRoutingModel is an object that contains functions
const RoadRoutingModel = {
    getAllRoadRouting: async () => {
        try {
            const results = await query('SELECT * FROM RoadRouting');
            return results;
        } catch (error) {
            throw error;
        }
    },
    addRoadRouting: async (RoutingID, SourceFactoryID, Destination, RoundTrip, StartLongitude, StartLatitude, EndLongitude, EndLatitude, TotalStops, Duration) => {
        try {
            const results = await query('INSERT INTO RoadRouting (RoutingID, SourceFactoryID, Destination, RoundTrip, StartLongitude, StartLatitude, EndLongitude, EndLatitude, TotalStops, Duration) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [RoutingID, SourceFactoryID, Destination, RoundTrip, StartLongitude, StartLatitude, EndLongitude, EndLatitude, TotalStops, Duration]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    getRoadRoutingByID: async (RoutingID) => {
        try {
            const results = await query('SELECT * FROM RoadRouting WHERE RoutingID = ?', [RoutingID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    updateRoadRouting: async (RoutingID, SourceFactoryID, Destination, RoundTrip, StartLongitude, StartLatitude, EndLongitude, EndLatitude, TotalStops, Duration) => {
        try {
            const results = await query('UPDATE RoadRouting SET SourceFactoryID = ?, Destination = ?, RoundTrip = ?, StartLongitude = ?, StartLatitude = ?, EndLongitude = ?, EndLatitude = ?, TotalStops = ?, Duration = ? WHERE RoutingID = ?', [SourceFactoryID, Destination, RoundTrip, StartLongitude, StartLatitude, EndLongitude, EndLatitude, TotalStops, Duration, RoutingID]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    deleteRoadRouting: async (RoutingID) => {
        try {
            const results = await query('DELETE FROM RoadRouting WHERE RoutingID = ?', [RoutingID]);
            return results;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = RoadRoutingModel;