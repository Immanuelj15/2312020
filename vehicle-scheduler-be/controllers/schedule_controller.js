const apiService = require("../services/api_service");
const knapsack = require("../utils/knapsack");
const Log = require("../../logging-middleware/logger");

exports.home = async (req, res) => {

    try {

        await Log(
            "backend",
            "info",
            "controller",
            "Fetching depots and vehicles"
        );

        const depotsResponse = await apiService.getDepots();
        const vehiclesResponse = await apiService.getVehicles();

        const depots = depotsResponse.depots;
        const vehicles = vehiclesResponse.vehicles;

        const result = [];

        for (const depot of depots) {

            const bestSchedule = knapsack(
                vehicles,
                depot.MechanicHours
            );

            result.push({
                DepotID: depot.ID,
                MechanicHours: depot.MechanicHours,
                TotalImpact: bestSchedule.totalImpact,
                SelectedTasks: bestSchedule.selectedTasks
            });

        }

        res.status(200).json(result);

    } catch (err) {

        await Log(
            "backend",
            "error",
            "controller",
            err.message
        );

        res.status(500).json({
            message: err.message
        });

    }

};