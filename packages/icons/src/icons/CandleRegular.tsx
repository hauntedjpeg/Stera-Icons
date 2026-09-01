import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleRegularProps = Omit<IconBaseProps, 'children'>;

const CandleRegular = memo(
  forwardRef<SVGSVGElement, CandleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.5 1.43c.3-.24.71-.24 1 0v.01l.03.03.1.1a14 14 0 0 1 2.57 3.21 4.06 4.06 0 0 1-.67 4.93q.68.46 1.01 1.24.17.43.19.9.03.48.02 1.15v5.25h2.62q.15.02.35.07l.14.06.13.07q.4.27.52.73l.04.15v.15q0 .21-.04.35l-.12.38c-.2.58-.34 1.03-.6 1.4q-.55.73-1.42 1.02c-.42.13-.9.12-1.5.12H8.14c-.62 0-1.09 0-1.51-.12A2.8 2.8 0 0 1 5.2 21.6c-.26-.36-.4-.8-.6-1.39l-.12-.38q-.06-.19-.03-.5l.03-.15q.15-.54.65-.8l.14-.06q.2-.05.34-.06l.4-.01h2.23V13q0-.68.02-1.15t.19-.9c.2-.5.56-.94 1-1.24a4.06 4.06 0 0 1-.66-4.93c.31-.61.72-1.19 1.12-1.68a15 15 0 0 1 1.44-1.54l.1-.09.04-.03M6.05 19.75c.22.67.3.85.39.98q.24.34.64.46c.16.05.35.06 1.06.06h7.74c.71 0 .9 0 1.06-.06q.4-.12.64-.46c.1-.13.17-.31.39-.98zm5.96-9c-.48 0-.8 0-1.04.02a1 1 0 0 0-.44.08c-.3.12-.55.37-.68.67q-.05.1-.07.44T9.75 13v5.25h4.5V13q0-.7-.02-1.04a1 1 0 0 0-.07-.44q-.21-.47-.68-.67a1 1 0 0 0-.44-.08c-.24-.02-.56-.02-1.04-.02m0-7.72q-.4.4-.92 1.02c-.35.43-.7.92-.94 1.41q-.38.75-.39 1.34c0 1.4 1.05 2.45 2.25 2.45s2.25-1.05 2.25-2.45q0-.59-.39-1.34c-.25-.49-.59-.98-.94-1.41q-.51-.61-.92-1.02" clipRule="evenodd" />
    </IconBase>
  ))
);

CandleRegular.displayName = 'CandleRegular';

// Triple export pattern (lucide-react style)
export { CandleRegular, CandleRegular as CandleRegularIcon, CandleRegular as SiCandleRegular };
export default CandleRegular;
export type { CandleRegularProps };
