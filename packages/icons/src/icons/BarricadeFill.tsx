import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BarricadeFillProps = Omit<IconBaseProps, 'children'>;

const BarricadeFill = memo(
  forwardRef<SVGSVGElement, BarricadeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.8 5.13q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.55.04 1.38v2.6q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.54.04-1.32.03l.02.13v4a.88.88 0 0 1-1.75 0v-4.12H6.87V20a.88.88 0 0 1-1.74 0v-4.13q-.77 0-1.31-.03-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.04-.55-.03-1.38V9.2q0-.82.03-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zM2.88 8.38v3.42c0 .57 0 .95.02 1.24.02.28.06.4.1.47q.16.32.49.5c.07.03.19.07.47.1l1.24.02h3.43zm12.75 5.74h3.17c.57 0 .95 0 1.24-.02.28-.02.4-.06.47-.1q.25-.12.4-.35l-6.77-6.77H8.38z" clipRule="evenodd" />
    </IconBase>
  ))
);

BarricadeFill.displayName = 'BarricadeFill';

// Triple export pattern (lucide-react style)
export { BarricadeFill, BarricadeFill as BarricadeFillIcon, BarricadeFill as SiBarricadeFill };
export default BarricadeFill;
export type { BarricadeFillProps };
