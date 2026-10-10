import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesDashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesDashRegularDuotone = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesDashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 4.75c1.44 0 2.78.42 3.9 1.14.35.22.45.69.23 1.04q-.17.26-.46.32c.17-.26.17-.6-.03-.86-.25-.33-.73-.4-1.05-.14q-.25.2-.48.4-.99-.4-2.11-.4c-3.18 0-5.75 2.57-5.75 5.75s2.57 5.75 5.75 5.75q1.13 0 2.1-.4l.49.4c.32.25.8.2 1.05-.14.2-.26.2-.6.03-.86q.28.06.46.32c.22.35.12.82-.23 1.04-1.12.72-2.46 1.14-3.9 1.14-4 0-7.25-3.25-7.25-7.25S4.5 4.75 8.5 4.75" opacity={.4} />
        <path d="M16.25 17.7c.41-.05.79.24.84.65.06.4-.23.78-.64.84q-.47.06-.95.06t-.95-.06c-.4-.06-.7-.43-.64-.84s.43-.7.84-.65q.37.05.75.05t.75-.05M9.89 15.36c.32-.25.8-.19 1.05.14q.46.6 1.06 1.06c.33.25.39.73.14 1.05s-.73.4-1.05.14q-.76-.57-1.34-1.34c-.25-.32-.2-.8.14-1.05M20.06 15.5c.25-.33.73-.39 1.05-.14s.4.73.14 1.05q-.57.76-1.34 1.34c-.32.25-.8.2-1.05-.14-.25-.32-.19-.8.14-1.05q.6-.46 1.06-1.06M9.15 10.4c.41.06.7.44.65.85q-.05.37-.05.75t.05.75c.05.41-.24.79-.65.84-.4.06-.78-.23-.84-.64q-.06-.47-.06-.95t.06-.95c.06-.4.43-.7.84-.64M21.85 10.4c.4-.05.78.24.84.65q.06.47.06.95t-.06.95c-.06.4-.43.7-.84.64s-.7-.43-.65-.84q.05-.37.05-.75t-.05-.75c-.05-.41.24-.79.65-.84M11.09 6.25c.32-.25.8-.2 1.05.14.25.32.19.8-.14 1.05q-.6.46-1.06 1.06c-.25.33-.73.39-1.05.14s-.4-.73-.14-1.05q.57-.76 1.34-1.34M18.86 6.39c.25-.33.73-.4 1.05-.14q.76.57 1.34 1.34c.25.32.2.8-.14 1.05-.32.25-.8.19-1.05-.14Q19.6 7.9 19 7.44c-.33-.25-.39-.73-.14-1.05M15.5 4.75q.48 0 .95.06c.4.06.7.43.64.84s-.43.7-.84.65q-.37-.05-.75-.05t-.75.05c-.41.05-.79-.24-.84-.65-.06-.4.23-.78.64-.84q.47-.06.95-.06" />
    </IconBase>
  ))
);

OverlappingCirclesDashRegularDuotone.displayName = 'OverlappingCirclesDashRegularDuotone';

// Triple export pattern
export { OverlappingCirclesDashRegularDuotone, OverlappingCirclesDashRegularDuotone as OverlappingCirclesDashRegularDuotoneIcon, OverlappingCirclesDashRegularDuotone as SiOverlappingCirclesDashRegularDuotone };
export default OverlappingCirclesDashRegularDuotone;
export type { OverlappingCirclesDashRegularDuotoneProps };
