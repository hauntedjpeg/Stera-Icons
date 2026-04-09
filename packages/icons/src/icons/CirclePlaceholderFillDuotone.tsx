import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderFillDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-placeholder-fill-duotone" {...props}>
      <path d="M11.5 21.86a9.84 9.84 0 0 1-9.36-9.36zM16.5 20.79q-1.28.65-2.68.92L2.29 10.18q.27-1.4.92-2.69zM19.82 18.02a10 10 0 0 1-1.8 1.8L4.17 5.98a10 10 0 0 1 1.8-1.8zM21.7 13.82a10 10 0 0 1-.91 2.69L7.49 3.2a10 10 0 0 1 2.69-.92zM12.5 2.14a9.84 9.84 0 0 1 9.36 9.36z" opacity={0.4} />
        <path d="M13.82 21.7q-1.14.22-2.32.16L2.14 12.5q-.06-1.18.15-2.32zM18.02 19.82q-.72.56-1.51.97L3.2 7.49q.41-.8.96-1.51zM20.79 16.5q-.41.8-.97 1.52L5.98 4.18q.72-.57 1.51-.97zM10.18 2.3q1.14-.22 2.32-.16l9.36 9.36q.06 1.17-.15 2.32z" />
    </IconBase>
  ))
);

CirclePlaceholderFillDuotone.displayName = 'CirclePlaceholderFillDuotone';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderFillDuotone, CirclePlaceholderFillDuotone as CirclePlaceholderFillDuotoneIcon, CirclePlaceholderFillDuotone as SiCirclePlaceholderFillDuotone };
export default CirclePlaceholderFillDuotone;
export type { CirclePlaceholderFillDuotoneProps };
