"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorClassExtended = void 0;
class ErrorClassExtended extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
exports.ErrorClassExtended = ErrorClassExtended;
//# sourceMappingURL=errorManagementUtilities.js.map