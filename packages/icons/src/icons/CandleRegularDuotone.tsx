import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CandleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CandleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.38 18.26q.14 0 .34.06l.14.06.13.07q.4.27.52.73l.03.15.01.15q0 .2-.04.35l-.12.38c-.2.58-.34 1.03-.6 1.4-.35.48-.85.84-1.42 1.02q-.47.14-1.07.12H7.7q-.6 0-1.07-.12-.88-.28-1.42-1.03c-.26-.36-.4-.8-.6-1.39l-.12-.38q-.06-.19-.04-.5l.04-.15q.15-.54.65-.8l.14-.06q.2-.05.34-.06l.4-.01h12.35M6.04 19.75c.22.67.3.85.39.98q.24.34.64.46c.16.05.35.06 1.06.06h7.74c.7 0 .9 0 1.06-.06q.4-.12.64-.46c.1-.13.17-.31.39-.98zM11.5 1.43c.29-.24.7-.24 1 0v.01l.03.03.1.1q.15.12.37.34c.3.29.69.7 1.08 1.2q.62.74 1.12 1.67c.31.61.55 1.3.55 2.02 0 1.14-.47 2.18-1.22 2.91q-.22-.15-.48-.25-.44-.17-.9-.19T12 9.25q-.69 0-1.15.02-.47.02-.9.19-.26.1-.48.25C8.7 8.98 8.25 7.94 8.25 6.8c0-.71.24-1.4.55-2.02.31-.61.72-1.19 1.12-1.68s.79-.9 1.08-1.2l.36-.34.1-.09.04-.03m.5 1.6q-.4.4-.92 1.02c-.35.44-.7.92-.94 1.41q-.38.75-.39 1.34c0 1.4 1.05 2.45 2.25 2.45s2.25-1.05 2.25-2.45q0-.59-.39-1.34c-.25-.49-.59-.97-.94-1.41q-.51-.62-.92-1.02" opacity={0.4} />
        <path d="M12 10.75q-.7 0-1.04.02t-.44.07q-.47.21-.68.68c-.03.08-.06.2-.07.44q-.02.34-.02 1.04v5.25h-1.5V13q0-.69.02-1.15.02-.47.19-.9c.28-.68.81-1.21 1.49-1.5q.43-.16.9-.18T12 9.25q.69 0 1.15.02.47.02.9.19c.68.28 1.21.81 1.5 1.49q.16.44.18.9.03.47.02 1.15v5.25h-1.5V13q0-.7-.02-1.04t-.07-.44q-.21-.47-.68-.68c-.08-.03-.2-.06-.44-.07q-.34-.02-1.04-.02" />
    </IconBase>
  ))
);

CandleRegularDuotone.displayName = 'CandleRegularDuotone';

// Triple export pattern
export { CandleRegularDuotone, CandleRegularDuotone as CandleRegularDuotoneIcon, CandleRegularDuotone as SiCandleRegularDuotone };
export default CandleRegularDuotone;
export type { CandleRegularDuotoneProps };
