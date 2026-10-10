import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, HandLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.27 3.88c.51 0 .92.4.92.92v6.3c0 .48.4.87.88.87s.87-.39.87-.87V5.6c.06-.46.45-.82.93-.82.51 0 .92.4.92.92v7.2c0 .4.27.74.65.84s.78-.06.98-.4l1.49-2.5v-.02q.24-.37.65-.45.31-.05.61.11c.45.26.6.83.34 1.27l-.05.12-1.1 2.8-.05.18c-.5 3-3.1 5.27-6.24 5.28-3.5 0-6.33-2.84-6.33-6.33V7.5c0-.51.42-.92.93-.92s.92.4.92.92v4.05c0 .48.4.87.88.87s.87-.39.87-.87V4.8c0-.51.42-.92.93-.92" opacity={.4} />
        <path fillRule="evenodd" d="M10.27 2.13c.96 0 1.8.5 2.27 1.25q.59-.34 1.33-.35c1.48 0 2.67 1.2 2.67 2.67v4.02c.43-.6 1.06-.96 1.74-1.07.59-.1 1.21 0 1.77.32 1.25.72 1.7 2.3 1.02 3.57l-1.05 2.7c-.68 3.77-3.98 6.63-7.95 6.64-4.46 0-8.08-3.62-8.08-8.08V7.5c0-1.48 1.2-2.67 2.68-2.67q.5 0 .92.16V4.8c0-1.48 1.2-2.67 2.68-2.67m0 1.75c-.51 0-.93.4-.93.92v6.75c0 .48-.39.87-.87.87s-.88-.39-.88-.87V7.5c0-.51-.41-.92-.92-.92s-.93.4-.93.92v6.3c0 3.5 2.84 6.32 6.33 6.32 3.14 0 5.74-2.28 6.24-5.27q.01-.09.05-.18l1.1-2.8.05-.12c.26-.44.1-1.01-.34-1.27q-.3-.15-.6-.1-.42.07-.66.44v.01l-1.49 2.51c-.2.34-.6.5-.98.4s-.64-.45-.65-.84V5.7c0-.51-.41-.92-.92-.92-.48 0-.87.36-.92.83v5.49c0 .48-.4.87-.88.87s-.88-.39-.88-.87V4.8c0-.51-.41-.92-.92-.92" clipRule="evenodd" />
    </IconBase>
  ))
);

HandLeftFillDuotone.displayName = 'HandLeftFillDuotone';

// Triple export pattern
export { HandLeftFillDuotone, HandLeftFillDuotone as HandLeftFillDuotoneIcon, HandLeftFillDuotone as SiHandLeftFillDuotone };
export default HandLeftFillDuotone;
export type { HandLeftFillDuotoneProps };
