import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckFillProps = Omit<IconBaseProps, 'children'>;

const ListCheckFill = memo(
  forwardRef<SVGSVGElement, ListCheckFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.09 15.65c.47-.5 1.26-.53 1.76-.06s.53 1.26.06 1.76l-2.8 3c-.25.28-.62.42-1 .4-.37-.03-.72-.22-.93-.53l-1.2-1.72c-.4-.56-.26-1.34.3-1.74s1.35-.26 1.74.31l.32.45zM21 16.75c.69 0 1.25.56 1.25 1.25 0 .7-.56 1.25-1.25 1.25H11c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM6.09 9.65c.47-.5 1.26-.53 1.76-.06s.53 1.26.06 1.76l-2.8 3c-.25.28-.62.42-1 .4-.37-.03-.72-.22-.93-.53l-1.2-1.72c-.4-.56-.26-1.34.3-1.74s1.35-.26 1.74.31l.32.45zM21 10.75c.69 0 1.25.56 1.25 1.25 0 .7-.56 1.25-1.25 1.25H11c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM6.09 3.65c.47-.5 1.26-.53 1.76-.06s.53 1.26.06 1.76l-2.8 3c-.25.28-.62.42-1 .4-.37-.03-.72-.22-.93-.53L1.98 6.5c-.4-.56-.26-1.34.3-1.74s1.35-.26 1.74.31l.32.45zM21 4.75c.69 0 1.25.56 1.25 1.25 0 .7-.56 1.25-1.25 1.25H11c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

ListCheckFill.displayName = 'ListCheckFill';

// Triple export pattern
export { ListCheckFill, ListCheckFill as ListCheckFillIcon, ListCheckFill as SiListCheckFill };
export default ListCheckFill;
export type { ListCheckFillProps };
