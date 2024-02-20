interface EdgeTouchingState {
  touchingTop: boolean;
  touchingLeft: boolean;
  touchingRight: boolean;
  touchingBottom: boolean;
}

export const isElementTouchingEdges = (
  element: HTMLElement
): EdgeTouchingState => {
  const rect = element.getBoundingClientRect();
  const { top, left, right, bottom } = rect;
  const { innerWidth, innerHeight } = window;

  const touchingTop = top <= 0;
  const touchingLeft = left <= 0;
  const touchingRight = right >= innerWidth;
  const touchingBottom = bottom >= innerHeight;

  return {
    touchingTop,
    touchingLeft,
    touchingRight,
    touchingBottom,
  };
};
