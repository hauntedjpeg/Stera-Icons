import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckFillDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H11c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H11c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 4.75c.69 0 1.25.56 1.25 1.25S21.69 7.25 21 7.25H11c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={0.4} />
        <path d="M6.09 15.65c.47-.5 1.26-.53 1.76-.06s.53 1.26.06 1.76l-2.8 3c-.25.28-.62.42-1 .4-.37-.03-.72-.22-.93-.53l-1.2-1.72c-.4-.56-.26-1.34.3-1.74s1.35-.26 1.74.31l.32.45zM6.09 9.65c.47-.5 1.26-.53 1.76-.06s.53 1.26.06 1.76l-2.8 3c-.25.28-.62.42-1 .4-.37-.03-.72-.22-.93-.53l-1.2-1.72c-.4-.56-.26-1.34.3-1.74s1.35-.26 1.74.31l.32.45zM6.09 3.65c.47-.5 1.26-.53 1.76-.06s.53 1.26.06 1.76l-2.8 3c-.25.28-.62.42-1 .4-.37-.03-.72-.22-.93-.53L1.98 6.5c-.4-.56-.26-1.34.3-1.74s1.35-.26 1.74.31l.32.45z" />
    </IconBase>
  ))
);

ListCheckFillDuotone.displayName = 'ListCheckFillDuotone';

// Triple export pattern
export { ListCheckFillDuotone, ListCheckFillDuotone as ListCheckFillDuotoneIcon, ListCheckFillDuotone as SiListCheckFillDuotone };
export default ListCheckFillDuotone;
export type { ListCheckFillDuotoneProps };
