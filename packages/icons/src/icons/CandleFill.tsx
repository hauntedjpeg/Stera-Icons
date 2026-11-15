import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleFillProps = Omit<IconBaseProps, 'children'>;

const CandleFill = memo(
  forwardRef<SVGSVGElement, CandleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.5 1.43c.29-.24.7-.24 1 0v.01l.03.03.1.1q.15.12.37.34c.3.29.69.7 1.08 1.2.4.48.8 1.06 1.12 1.67.31.61.55 1.3.55 2.02 0 1.14-.47 2.19-1.22 2.92q.69.46 1.01 1.23.17.43.19.9t.02 1.15v5.25h2.62q.15.02.35.07l.14.06.13.07q.4.27.52.73l.03.15.01.15q0 .21-.04.35l-.12.38c-.2.58-.34 1.03-.6 1.4-.35.48-.85.84-1.42 1.02-.42.13-.9.12-1.5.12H8.13c-.6 0-1.08 0-1.5-.12-.57-.18-1.07-.54-1.42-1.03-.26-.36-.4-.8-.6-1.39l-.12-.38q-.06-.19-.04-.5l.04-.15q.15-.54.65-.8l.14-.06q.2-.05.34-.06l.4-.01h2.23V13q0-.68.02-1.15t.19-.9c.2-.5.56-.93 1-1.23-.75-.73-1.21-1.78-1.21-2.92 0-.71.24-1.4.55-2.02.31-.61.72-1.19 1.12-1.68s.79-.9 1.08-1.2l.36-.34.1-.09.04-.03M6.05 19.75c.22.67.3.85.39.98q.24.34.64.46c.16.05.35.06 1.06.06h7.74c.7 0 .9 0 1.06-.06q.4-.12.64-.46c.1-.13.17-.31.39-.98zM12 3.03q-.4.4-.92 1.02c-.35.43-.7.92-.94 1.41q-.38.75-.39 1.34c0 1.4 1.05 2.45 2.25 2.45s2.25-1.05 2.25-2.45q0-.59-.39-1.34-.4-.75-.94-1.41-.51-.61-.92-1.02" clipRule="evenodd" />
    </IconBase>
  ))
);

CandleFill.displayName = 'CandleFill';

// Triple export pattern
export { CandleFill, CandleFill as CandleFillIcon, CandleFill as SiCandleFill };
export default CandleFill;
export type { CandleFillProps };
