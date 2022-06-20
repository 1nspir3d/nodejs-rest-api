import os from "os";
import cluster from "cluster";
import {server} from "./server";
import 'dotenv/config'
const {PORT} = process.env
if (cluster.isPrimary) {
  const cpusCount = os.cpus().length;
  console.log("Starting ", cpusCount, " forks");
  for (let i = 0; i < cpusCount; i++) {
    cluster.fork();
  }
} else {
  server.listen(PORT, () => {
    console.log('Worker: ', process.pid);
  });
}
