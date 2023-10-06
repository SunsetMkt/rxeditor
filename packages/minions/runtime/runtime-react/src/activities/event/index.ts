import { Activity } from "@rxdrag/minions-runtime";
import { INodeDefine } from "@rxdrag/minions-schema";
import { IController, UnListener } from "../../interfaces";
import { AbstractControllerActivity, IControllerConfig, IControllerParam } from "../AbstractControllerActivity";

export interface IEventParam extends IControllerParam {
  name?: string
}

export interface IEventConfig extends IControllerConfig {
  param?: IEventParam
}

@Activity(EventActivity.NAME)
export class EventActivity extends AbstractControllerActivity<IEventConfig> {
  public static NAME = "system-react.event"
  config?: IEventConfig;
  unsub?: UnListener

  constructor(meta: INodeDefine<IEventConfig>, controller: IController) {
    super(meta, controller)
    if (meta.config?.param?.name) {
      this.unsub = controller.subscribeToEvent(meta.config?.param?.name, this.handleEvent)
    }
  }

  handleEvent = (args: unknown[]) => {
    this.next(args)
  }
}