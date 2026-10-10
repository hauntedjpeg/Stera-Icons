import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsLeftRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightFill = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.88 12.88c.25-.25.63-.32.95-.19.33.14.54.46.54.81v3.12H20.5c.48 0 .87.4.88.88 0 .48-.4.87-.88.87H7.38v3.13c0 .35-.22.67-.55.8-.32.14-.7.07-.95-.18l-4-4q-.12-.12-.18-.27l-.05-.14v-.02l-.02-.13v-.18l.04-.15v-.01l.11-.22.04-.05.06-.07zM17.17 2.7c.32-.14.7-.07.95.18l4 4 .05.06.09.12v.01q.07.12.1.27v.03l.02.13-.02.17-.07.21q-.07.14-.17.24l-4 4c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81V8.37H3.5c-.48 0-.87-.39-.87-.87s.39-.88.87-.88h13.13V3.5c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

ArrowsLeftRightFill.displayName = 'ArrowsLeftRightFill';

// Triple export pattern
export { ArrowsLeftRightFill, ArrowsLeftRightFill as ArrowsLeftRightFillIcon, ArrowsLeftRightFill as SiArrowsLeftRightFill };
export default ArrowsLeftRightFill;
export type { ArrowsLeftRightFillProps };
