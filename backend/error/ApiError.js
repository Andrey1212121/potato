class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status
        this.message = message 
    }

    static badRequest(message) { // сервер не может найти данные
        return new ApiError(404, message)
    }

    static internal(message) { // попытка получения доступа к веб-странице
        return new ApiError(500, message)
    }

    static forbidden(message) { // доступа нет
        return new ApiError(403, message)
    }
}

module.export = ApiError