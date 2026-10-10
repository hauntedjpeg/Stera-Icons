import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OverlappingCirclesDashFillProps = Omit<IconBaseProps, 'children'>;

const OverlappingCirclesDashFill = memo(
  forwardRef<SVGSVGElement, OverlappingCirclesDashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 4.63c1.46 0 2.82.42 3.97 1.16.25.16.4.43.4.73s-.15.58-.4.74c-1.56 1-2.6 2.75-2.6 4.74s1.04 3.74 2.6 4.74c.25.16.4.44.4.74q-.01.47-.4.73c-1.15.74-2.5 1.16-3.97 1.16-4.07 0-7.37-3.3-7.37-7.37s3.3-7.37 7.37-7.37M16.24 17.58c.47-.07.91.27.98.75s-.28.92-.76.98q-.46.06-.96.07-.5 0-.96-.07c-.48-.06-.82-.5-.76-.98.07-.48.5-.82.98-.75q.36.05.74.05t.74-.05M19.96 15.42c.3-.38.85-.45 1.23-.16s.45.85.16 1.23q-.6.77-1.36 1.36c-.38.3-.93.22-1.23-.16s-.22-.93.16-1.23q.6-.45 1.04-1.04M21.83 10.28c.48-.06.92.28.98.76q.07.46.07.96t-.07.96c-.06.48-.5.82-.98.76-.48-.07-.82-.5-.75-.98q.05-.36.05-.74t-.05-.74c-.07-.47.27-.91.75-.98M18.76 6.31c.3-.38.85-.45 1.23-.16q.77.6 1.36 1.36c.3.38.22.93-.16 1.23s-.93.22-1.23-.16q-.45-.6-1.04-1.04c-.38-.3-.45-.85-.16-1.23M15.5 4.63q.5 0 .96.06c.48.06.82.5.76.98-.07.48-.5.82-.98.75q-.36-.04-.74-.04t-.74.04c-.47.07-.91-.27-.98-.75s.28-.92.76-.98q.46-.07.96-.07" />
    </IconBase>
  ))
);

OverlappingCirclesDashFill.displayName = 'OverlappingCirclesDashFill';

// Triple export pattern
export { OverlappingCirclesDashFill, OverlappingCirclesDashFill as OverlappingCirclesDashFillIcon, OverlappingCirclesDashFill as SiOverlappingCirclesDashFill };
export default OverlappingCirclesDashFill;
export type { OverlappingCirclesDashFillProps };
