import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NodeMapBoldProps = Omit<IconBaseProps, 'children'>;

const NodeMapBold = memo(
  forwardRef<SVGSVGElement, NodeMapBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.25 2c1.8 0 3.25 1.46 3.25 3.25 0 .73-.25 1.4-.65 1.95l1.19 1.7q.46-.15.96-.15c1.1 0 2.07.54 2.66 1.38L16 9.7c.02-1.78 1.47-3.21 3.25-3.21 1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.1 0-2.07-.55-2.66-1.38l-1.34.42q-.01.63-.24 1.18l1.51 1.28q.77-.49 1.73-.5c1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25q0-.65.24-1.22l-1.52-1.28q-.76.49-1.72.5-1-.02-1.78-.53l-2.94 2.37q.21.54.22 1.16c0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25C1 16.45 2.46 15 4.25 15q1 .02 1.78.53l2.94-2.37q-.22-.54-.22-1.16c0-.73.24-1.41.65-1.95l-1.19-1.7q-.46.15-.96.15C5.45 8.5 4 7.04 4 5.25 4 3.45 5.46 2 7.25 2m-3 15C3.56 17 3 17.56 3 18.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25q0-.46-.28-.78-.37-.45-.97-.47m14-1c-.38 0-.73.17-.96.45q-.28.33-.29.8c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25S18.94 16 18.25 16M12 10.75q-.41 0-.72.23c-.32.23-.53.6-.53 1.02q0 .46.28.78.37.45.97.47c.38 0 .73-.17.96-.45q.28-.33.29-.8 0-.2-.06-.37c-.15-.51-.63-.88-1.19-.88m7.25-2.25c-.69 0-1.25.56-1.25 1.25q0 .2.06.37c.15.51.63.88 1.19.88.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25M7.25 4C6.56 4 6 4.56 6 5.25S6.56 6.5 7.25 6.5q.41 0 .72-.23c.32-.23.53-.6.53-1.02C8.5 4.56 7.94 4 7.25 4" clipRule="evenodd" />
    </IconBase>
  ))
);

NodeMapBold.displayName = 'NodeMapBold';

// Triple export pattern
export { NodeMapBold, NodeMapBold as NodeMapBoldIcon, NodeMapBold as SiNodeMapBold };
export default NodeMapBold;
export type { NodeMapBoldProps };
