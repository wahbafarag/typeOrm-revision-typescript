import * as winston from "winston";

export const logger = winston.createLogger({
  level: process.env.LOGGER || "error",

  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json({
      space: 4,
    })
  ),
  transports: [
    new winston.transports.File({
      filename: "logs/all.log",
      //   level: "error",
      //   format: winston.format.simple(),
    }),

    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      format: winston.format.simple(),
    }),

    new winston.transports.File({
      filename: "logs/combined.log",
      level: "info",
      format: winston.format.simple(),
    }),
  ],
});

if (process.env.NODE_ENV != "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
