import * as Minio from 'minio'

import { env } from "~/env";

const globalForPrisma = globalThis as unknown as {
  minio: Minio.Client | undefined;
};
export const minio =
  globalForPrisma.minio ??
  new Minio.Client({
    endPoint:env.MINIO_ENDPOINT,
    port: env.MINIO_PORT,
    useSSL: env.MINIO_USE_SSL === "true", // dumb but works
    accessKey: env.MINIO_ACCESS_KEY,
    secretKey: env.MINIO_SECRET_KEY,
  })

if (env.NODE_ENV !== "production") globalForPrisma.minio = minio
