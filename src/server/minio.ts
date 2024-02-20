import * as Minio from 'minio'

import { env } from "~/env";

const globalForMinio = globalThis as unknown as {
  minio: Minio.Client | undefined;
};

export const minio =
  globalForMinio.minio ??
  new Minio.Client({
    endPoint: env.MINIO_ENDPOINT,
    port: env.MINIO_PORT,
    useSSL: env.MINIO_USE_SSL === "true", // dumb but works
    accessKey: env.MINIO_ACCESS_KEY,
    secretKey: env.MINIO_SECRET_KEY,
  })

const exists = await minio.bucketExists(env.MINIO_BUCKET)
if (!exists) {
  await minio.makeBucket(env.MINIO_BUCKET)
}

if (env.NODE_ENV !== "production") globalForMinio.minio = minio
