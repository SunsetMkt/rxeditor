import { INodeSchema } from "@rxdrag/schema";
import { DeviceType, IApp, IAppFrontend } from "../interfaces";
import adminFrame from "./adminFrame.json"

export const app: IApp = {
  id: "app1",
  title: "火星改造项目"
}

const rootNodeSchema: INodeSchema = {
  componentName: "App"
}

export const appFronts: IAppFrontend[] = [
  {
    app: {
      id: "app1"
    },
    deviceType: DeviceType.admin,
    frameSchema: adminFrame,
    canvasConfig: {
      deviceName: "管理端",
      //画布宽度
      canvasWidth: 800,
      //画布高度
      canvasHeight: 800,
      //实际屏宽，用于设置iframe的scale
      screenWidth: 1280,
    },
  },
  {
    app: {
      id: "app1"
    },
    deviceType: DeviceType.h5,
    frameSchema: rootNodeSchema,
    canvasConfig: {
      deviceName: "H5",
      //画布宽度
      canvasWidth: 600,
      //画布高度
      canvasHeight: 600,
      //实际屏宽，用于设置iframe的scale
      screenWidth: 600,
    },
  },
  {
    app: {
      id: "app1"
    },
    deviceType: DeviceType.website,
    frameSchema: rootNodeSchema,
    canvasConfig: {
      deviceName: "门户网站",
      //画布宽度
      canvasWidth: 800,
      //画布高度
      canvasHeight: 600,
      //实际屏宽，用于设置iframe的scale
      screenWidth: 1280,
    },
  },
  {
    app: {
      id: "app1"
    },
    deviceType: DeviceType.largeScreen,
    frameSchema: rootNodeSchema,
    canvasConfig: {
      deviceName: "大屏",
      //画布宽度
      canvasWidth: 800,
      //画布高度
      canvasHeight: 600,
      //实际屏宽，用于设置iframe的scale
      screenWidth: 1680,
    },
  },
]

//canvasConfig