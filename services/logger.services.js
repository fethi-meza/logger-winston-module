const winston = require('winston');
const dotenv = require('dotenv')

dotenv.config();

const dateFormat = () => {
    return new Date(Date.now()).toLocaleString()
}


class Loggerservices {

    constructor(route) {

        this.route = route;

        const logger = winston.createLogger({
            level: 'info',
            format: winston.format.printf(info => {
                let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${info.message} | `
                message = info.obj ? message + ` data ${JSON.stringify(info.obj)} |` : message;
            }),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: ` ${process.env.LOG_FILE_PATH} /${route}.log` }),
            ],
        });
        this.logger = logger;
    }
    //info
    async info(message) {
        this.logger.log('info', message);
    }
    async info(message, obj) {
        this.logger.log('info', message, { obj });
    }
    //error
    async error(message) {
        this.logger.log('error', message);
    }
    async error(message, obj) {
        this.logger.log('error', message, { obj });
    }
    //debug
    async debug(message) {
        this.logger.log('debug', message);
    }
    async error(message, obj) {
        this.logger.log('debug', message, { obj });
    }

}

module.exports = Loggerservices ;