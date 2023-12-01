CREATE DATABASE IF NOT EXISTS TeaCooperative;

USE TeaCooperative;

-- Table for Regions
CREATE TABLE Regions
(
    RegionID   INT PRIMARY KEY,
    RegionName VARCHAR(255) NOT NULL
);

-- Table for Factories
CREATE TABLE Factories
(
    FactoryID      INT PRIMARY KEY,
    FactoryName    VARCHAR(255) NOT NULL,
    FactorySize    ENUM('SMALL', 'MEDIUM', 'LARGE') NOT NULL,
    FactoryMobile  VARCHAR(10)  NOT NULL,
    FactoryAddress VARCHAR(255) NOT NULL,
    FactoryEmail   VARCHAR(255) NOT NULL,
    RegionID       INT,
    FOREIGN KEY (RegionID) REFERENCES Regions (RegionID)
);

-- Table For User Roles
-- ENUM('ADMIN', 'MANAGER', 'WORKER', 'SUPERVISOR', 'DRIVER', 'TEA_COLLECTOR') NOT NULL,
CREATE TABLE UserRoles
(
    RoleID   INT PRIMARY KEY AUTO_INCREMENT,
    RoleName VARCHAR(255) NOT NULL,
    CreationDate DATE NOT NULL,
    Description VARCHAR(255) NOT NULL
);

-- Table for Employees
CREATE TABLE Employees
(
    EmployeeID   INT PRIMARY KEY,
    EmployeeName VARCHAR(255) NOT NULL,
    JoiningDate  DATE         NOT NULL,
    Email        VARCHAR(255) NOT NULL,
    Mobile       VARCHAR(10)  NOT NULL,
    Password     VARCHAR(255) NOT NULL,
    RoleID       INT,
    FactoryID    INT,
    FOREIGN KEY (FactoryID) REFERENCES Factories (FactoryID),
    FOREIGN KEY (RoleID) REFERENCES UserRoles (RoleID)
);

-- Table for Customers
CREATE TABLE Customers
(
    CustomerID      INT PRIMARY KEY,
    CustomerName    VARCHAR(255) NOT NULL,
    CustomerMobile  VARCHAR(10)  NOT NULL,
    CustomerAddress VARCHAR(255) NOT NULL,
    CustomerEmail   VARCHAR(255) NOT NULL,
    CustomerType    ENUM('STATE_GOV', 'STATE_PRIVATE', 'SMALL_SCALE', 'MEDIUM_SCALE', 'LARGE_SCALE') NOT NULL,
    RegistrationDate DATE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    FactoryID       INT,
    FOREIGN KEY (FactoryID) REFERENCES Factories (FactoryID)
);

-- Table for Road Routing
CREATE TABLE RoadRouting
(
    RoutingID       INT PRIMARY KEY,
    SourceFactoryID INT,
    Destination DECIMAL (10, 2) NOT NULL,
    RoundTrip DECIMAL (10, 2) NOT NULL,
    StartLongitude  DECIMAL(10, 2) NOT NULL,
    StartLatitude   DECIMAL(10, 2) NOT NULL,
    EndLongitude    DECIMAL(10, 2) NOT NULL,
    EndLatitude     DECIMAL(10, 2) NOT NULL,
    TotalStops      INT            NOT NULL,
    Duration        INT            NOT NULL,
    FOREIGN KEY (SourceFactoryID) REFERENCES Factories (FactoryID)
);

-- Table for Vehicle Mappings
CREATE TABLE VehicleMappings
(
    VehicleID      INT PRIMARY KEY,
    VehicleNumber  VARCHAR(255)   NOT NULL,
    VehicleType    ENUM('TRUCK', 'LORRY', 'MINI_LORRY' ) NOT NULL,
    VolumeCapacity DECIMAL(10, 2) NOT NULL,
    WeightCapacity DECIMAL(10, 2) NOT NULL,
    FactoryID      INT,
    DriverID       INT,
    RouteID        INT,
    FOREIGN KEY (FactoryID) REFERENCES Factories (FactoryID),
    FOREIGN KEY (DriverID) REFERENCES Employees (EmployeeID)
);

-- Table for Environmental Zones
CREATE TABLE EnvironmentalZone
(
    ZoneID      INT PRIMARY KEY,
    ZoneName    VARCHAR(255)   NOT NULL,
    Temperature DECIMAL(10, 2) NOT NULL,
    Humidity    DECIMAL(10, 2) NOT NULL,
    Rainfall    DECIMAL(10, 2) NOT NULL,
    WindSpeed   DECIMAL(10, 2) NOT NULL,
    FieldID     INT,
    FOREIGN KEY (FieldID) REFERENCES FieldInfo (FieldID)
);

-- Table For Field Information Collection
CREATE TABLE FieldInfo
(
    FieldID       INT PRIMARY KEY,
    FieldName     VARCHAR(255)   NOT NULL,
    FieldSize     DECIMAL(10, 2) NOT NULL,
    FieldAddress  VARCHAR(255)   NOT NULL,
    TeaType       VARCHAR(255)   NOT NULL,
    BaseLocation  VARCHAR(255)   NOT NULL,
    BaseElevation DECIMAL(10, 2) NOT NULL,
    SoilType      VARCHAR(255)   NOT NULL,
    Attitude      DECIMAL(10, 2) NOT NULL,
    Longitude     DECIMAL(10, 2) NOT NULL,
    RouteID       INT,
    OwnerID       INT,
    ZoneID        INT,
    FOREIGN KEY (RouteID) REFERENCES RoadRouting (RoutingID),
    FOREIGN KEY (ZoneID) REFERENCES EnvironmentalZone (ZoneID),
    FOREIGN KEY (OwnerID) REFERENCES Customers (CustomerID)
);

-- Table for Fertilizer Information
CREATE TABLE FertilizerInfo
(
    FertilizerID       INT PRIMARY KEY,
    FertilizerName     VARCHAR(255)   NOT NULL,
    FertilizerType     ENUM('NITROGEN', 'PHOSPHORUS', 'POTASSIUM', 'MICRO_NUTRIENTS') NOT NULL,
    FertilizerQuantity DECIMAL(10, 2) NOT NULL,
    FertilizerCost     DECIMAL(10, 2) NOT NULL,
    FertilizerDate     DATE           NOT NULL,
    FieldID            INT,
    FOREIGN KEY (FieldID) REFERENCES FieldInfo (FieldID)
);

-- Table for Daily Tea Collection
CREATE TABLE DailyTeaCollection
(
    CollectionID         INT PRIMARY KEY,
    CollectionDate       DATE           NOT NULL,
    TeaWeightCollected   DECIMAL(10, 2) NOT NULL,
    WaterWeightCollected DECIMAL(10, 2) NOT NULL,
    ActualTeaWeight      DECIMAL(10, 2) NOT NULL,
    BaseLongitude        DECIMAL(10, 2) NOT NULL,
    BaseLatitude         DECIMAL(10, 2) NOT NULL,
    FieldID              INT,
    EmployeeID           INT,
    FOREIGN KEY (FieldID) REFERENCES FieldInfo (FieldID),
    FOREIGN KEY (EmployeeID) REFERENCES Employees (EmployeeID)
);

