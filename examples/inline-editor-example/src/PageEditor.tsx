import { DefaultToolbar, Toolkits } from "@rxdrag/react-antd-shell-inline"
import { INodeSchema } from "@rxdrag/schema"
import { ConfigProvider, theme } from "antd"
import { memo } from "react"
import { ResourceWidget } from "./ResourceWidget"

export const PageEditor = memo((
  props: {
    design?: boolean,
    onFinished?: (schema: INodeSchema) => void
  }
) => {
  const { design, onFinished } = props
  return (
    <>
      Page 内容
      {design && <ConfigProvider
        theme={{ algorithm: theme.darkAlgorithm }}
      >
        <Toolkits
          toolbox={<ResourceWidget/>}
          toolbar={<DefaultToolbar onPreview={onFinished} />}
        />
      </ConfigProvider>
      }
    </>
  )
})