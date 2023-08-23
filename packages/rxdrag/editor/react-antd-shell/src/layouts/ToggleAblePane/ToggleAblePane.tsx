import React, { CSSProperties, memo, useCallback, useMemo, useState } from "react"
import { useStyles } from "../../hooks";
import { ToggleAblePaneContext } from "./context";
import { ToggleButton, ToggleType } from "./ToggleButton";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  transition: width 0.3s;
  height: 100%;

  .pane-content {
    width: 100%;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-flow: column;
    height: 100%;
    .pane-placeholder {
      height: 0;
      flex: 1;
      display: flex;
      flex-flow: column;
    }
  }
`

export const ToggleAblePane = memo((
  props: {
    toggleType?: ToggleType
    width?: number,
    style?: CSSProperties,
    children?: React.ReactNode
  }
) => {
  const { toggleType = ToggleType.left, width = 260, children, style, ...other } = props;
  const [toggled, setToggled] = useState(false);

  const styles = useStyles((token) => ({
    borderRight: toggleType === ToggleType.left ? `solid 1px ${token.colorBorder}` : undefined,
    borderLeft: toggleType === ToggleType.right ? `solid 1px ${token.colorBorder}` : undefined,
  }))

  const handleToggle = useCallback(() => {
    setToggled((toggled) => !toggled)
  }, [])

  const params = useMemo(() => {
    return { toggled, setToggled }
  }, [toggled])

  return (
    <ToggleAblePaneContext.Provider value={params}>
      <Container className="rx-editor-left-pane" style={{ ...styles, ...style, width: toggled ? 0 : width }} {...other}>
        <div className="pane-content">
          <div className="pane-placeholder" style={{ width: width }}>
            {children}
          </div>
        </div>
        <ToggleButton toggleType={toggleType} toggled={toggled} onClick={handleToggle} />
      </Container >
    </ToggleAblePaneContext.Provider>
  )
})