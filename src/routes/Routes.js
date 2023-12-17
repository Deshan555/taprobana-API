const express = require('express');
const router = express.Router();
const CustomerController = require('../services/CustomerService');
const EmployeeController = require('../services/EmployeeService');
const RegionController = require('../services/RegionService');
const FactoryController = require('../services/FactoryService');
const FertilizerController = require('../services/FertilizerInfoService');
const EnvironmentalZoneController = require('../services/EnvironmentalZoneService');
const VehicleController = require('../services/VehicleMappingService');
const DailyTeaCollectionController = require('../services/DailyTeaCollectionService');
const FieldInfoController = require('../services/FieldInfoService');
const RoadRoutingController = require('../services/RoadRoutingService');
const AuthController = require('../services/AuthService');

// demo route list
router.post('/sample', CustomerController.sampleEndPoint);

// main endpoints for customer-Routes
router.get('/customers', CustomerController.getAllCustomers);
router.post('/customers/add', CustomerController.addCustomer);
router.get('/customers/getById/:CustomerID', CustomerController.getCustomerByID);
router.get('/customers/getByEmail/:CustomerEmail', CustomerController.getCustomerByEmail);
router.put('/customers/update/:CustomerID', CustomerController.updateCustomer);
router.delete('/customers/drop/:CustomerID', CustomerController.deleteCustomer);

// main endpoints for employee-Routes
router.get('/employees', EmployeeController.getAllEmployees);
router.post('/employees/add', EmployeeController.addEmployee);
router.get('/employees/:EmployeeID', EmployeeController.getEmployeeByID);
router.put('/employees/update/:EmployeeID', EmployeeController.updateEmployee);
router.delete('/employees/drop/:EmployeeID', EmployeeController.deleteEmployee);

// main endpoints for region-Routes
router.get('/regions', RegionController.getAllRegions);
router.post('/regions/add', RegionController.addRegion);
router.get('/regions/:RegionID', RegionController.getRegionByID);
router.put('/regions/update/:RegionID', RegionController.updateRegion);
router.delete('/regions/drop/:RegionID', RegionController.deleteRegion);

// main endpoints for factory-Routes
router.get('/factories', FactoryController.getAllFactories);
router.post('/factories/add', FactoryController.addFactory);
router.get('/factories/:FactoryID', FactoryController.getFactoryByID);
router.put('/factories/update/:FactoryID', FactoryController.updateFactory);
router.delete('/factories/drop/:FactoryID', FactoryController.deleteFactory);

// main endpoints for environmentalZone-Routes
router.get('/environmentalists', EnvironmentalZoneController.getAllEnvironmentalZone);
router.post('/environmentalists/add', EnvironmentalZoneController.addEnvironmentalZone);
router.get('/environmentalists/:EnvironmentalZoneID', EnvironmentalZoneController.getAllEnvironmentalZoneByID);
router.put('/environmentalists/update/:EnvironmentalZoneID', EnvironmentalZoneController.updateEnvironmentalZone);
router.delete('/environmentalists/drop/:EnvironmentalZoneID', EnvironmentalZoneController.deleteEnvironmentalZone);

// main endpoints for vehicle-Routes
router.get('/vehicles', VehicleController.getAllVehicleMappings);
router.post('/vehicles/add', VehicleController.addVehicleMappings);
router.get('/vehicles/:VehicleID', VehicleController.getVehicleMappingsByID);
router.put('/vehicles/update/:VehicleID', VehicleController.updateVehicleMappings);
router.delete('/vehicles/drop/:VehicleID', VehicleController.deleteVehicleMappings);

// main endpoints for dailyTeaCollection-Routes
router.get('/dailyTeaCollection', DailyTeaCollectionController.getAllDailyTeaCollection);
router.post('/dailyTeaCollection/add', DailyTeaCollectionController.addDailyTeaCollection);
router.get('/dailyTeaCollection/:DailyTeaCollectionID', DailyTeaCollectionController.getDailyTeaCollectionByID);
router.put('/dailyTeaCollection/update/:DailyTeaCollectionID', DailyTeaCollectionController.updateDailyTeaCollection);
router.delete('/dailyTeaCollection/drop/:DailyTeaCollectionID', DailyTeaCollectionController.deleteDailyTeaCollection);

// main endpoints for fertilizer-Routes
router.get('/fertilizers', FertilizerController.getAllFertilizerInfo);
router.post('/fertilizers/add', FertilizerController.addFertilizerInfo);
router.get('/fertilizers/:FertilizerID', FertilizerController.getFertilizerInfoByID);
router.put('/fertilizers/update/:FertilizerID', FertilizerController.updateFertilizerInfo);
router.delete('/fertilizers/drop/:FertilizerID', FertilizerController.deleteFertilizerInfo);

// main endpoints for fieldInfo-Routes
router.get('/fieldInfo', FieldInfoController.getAllFieldInfos);
router.post('/fieldInfo/add', FieldInfoController.addFieldInfo);
router.get('/fieldInfo/:FieldID', FieldInfoController.getFieldInfoByID);
router.put('/fieldInfo/update/:FieldID', FieldInfoController.updateFieldInfo);
router.delete('/fieldInfo/drop/:FieldID', FieldInfoController.deleteFieldInfo);

// main endpoints for roadRouting-Routes
router.get('/roadRouting', RoadRoutingController.gatAllRoadRouting);
router.post('/roadRouting/add', RoadRoutingController.addRoadRouting);
router.get('/roadRouting/:RoadRoutingID', RoadRoutingController.getRoadRoutingByID);
router.put('/roadRouting/update/:RoadRoutingID', RoadRoutingController.updateRoadRouting);
router.delete('/roadRouting/drop/:RoadRoutingID', RoadRoutingController.deleteRoadRouting);

// main endpoints for auth-Routes
router.post('/auth/customer', AuthController.authCustomer);
router.post('/auth/employee', AuthController.authEmployee);

module.exports = router;
