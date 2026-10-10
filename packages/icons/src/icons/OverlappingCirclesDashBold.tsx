import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesDashBoldProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesDashBold = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesDashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 4.5c1.49 0 2.87.43 4.04 1.18.46.3.6.92.3 1.38q-.2.3-.52.4-.07.1-.17.18-.57.44-1.01 1.01c-.34.44-.97.52-1.4.19-.44-.34-.53-.97-.19-1.4q.27-.37.6-.69-.8-.25-1.65-.25C5.46 6.5 3 8.96 3 12s2.46 5.5 5.5 5.5q.86-.01 1.64-.25-.3-.33-.59-.68c-.34-.44-.25-1.07.18-1.4.44-.34 1.07-.26 1.4.18q.45.57 1.02 1.01.1.08.17.17.32.11.52.4c.3.47.16 1.1-.3 1.39-1.17.75-2.55 1.18-4.04 1.18C4.36 19.5 1 16.14 1 12s3.36-7.5 7.5-7.5M16.22 17.45c.55-.07 1.05.32 1.12.87.07.54-.31 1.04-.86 1.12q-.48.06-.98.06t-.98-.06c-.55-.08-.93-.58-.86-1.12s.57-.94 1.12-.87q.36.05.72.05t.72-.05M19.86 15.35c.34-.44.97-.52 1.4-.19.44.34.53.97.19 1.4q-.6.8-1.38 1.39c-.44.34-1.07.25-1.4-.18-.34-.44-.26-1.07.18-1.4q.57-.45 1.01-1.02" />
        <path d="M9.18 10.16c.55.07.94.57.87 1.12q-.05.36-.05.72t.05.72c.07.55-.32 1.05-.87 1.12-.54.07-1.04-.31-1.12-.86Q8 12.5 8 12t.06-.98c.08-.55.58-.93 1.12-.86M21.82 10.16c.54-.07 1.04.31 1.12.86q.06.48.06.98t-.06.98c-.08.55-.58.93-1.12.86s-.94-.57-.87-1.12q.05-.36.05-.72t-.05-.72c-.07-.55.32-1.05.87-1.12M18.66 6.23c.34-.43.97-.52 1.4-.18q.8.6 1.39 1.38c.34.44.25 1.07-.18 1.4-.44.34-1.07.26-1.4-.18q-.45-.57-1.02-1.01c-.44-.34-.52-.97-.19-1.4M15.5 4.5q.5 0 .98.06c.55.08.93.58.86 1.12s-.57.94-1.12.87q-.36-.05-.72-.05t-.72.05c-.55.07-1.05-.32-1.12-.87-.07-.54.31-1.04.86-1.12q.48-.06.98-.06" />
    </IconBase>
  ))
);

OverlappingCirclesDashBold.displayName = 'OverlappingCirclesDashBold';

// Triple export pattern
export { OverlappingCirclesDashBold, OverlappingCirclesDashBold as OverlappingCirclesDashBoldIcon, OverlappingCirclesDashBold as SiOverlappingCirclesDashBold };
export default OverlappingCirclesDashBold;
export type { OverlappingCirclesDashBoldProps };
