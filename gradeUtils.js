"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentStatus = void 0;
exports.computeAverage = computeAverage;
exports.default = getStatus;
var EnrollmentStatus;
(function (EnrollmentStatus) {
    EnrollmentStatus[EnrollmentStatus["Passing"] = 0] = "Passing";
    EnrollmentStatus[EnrollmentStatus["Probation"] = 1] = "Probation";
})(EnrollmentStatus || (exports.EnrollmentStatus = EnrollmentStatus = {}));
function computeAverage(prelim, midterm, final) {
    return (prelim + midterm + final) / 3;
}
function getStatus(average) {
    if (average >= 75) {
        return EnrollmentStatus.Passing;
    }
    return EnrollmentStatus.Probation;
}
//# sourceMappingURL=gradeUtils.js.map