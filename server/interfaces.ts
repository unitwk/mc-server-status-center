import { PingMinecraftServerResponse } from "./service/ping-refresh-service/ping-mc";

export interface ServerPingCfg {
  addr: string;
  port: number;
  info: string;
  avatar: string;
  website?: string;
  download?: string;
  author?: string;
}

export interface ServerInfo extends ServerPingCfg {
  pingInfo?: PingMinecraftServerResponse;
  isOnline?: boolean;
}

export interface JsonInterface {
  [key: string]: any;
}
