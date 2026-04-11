import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListAltFillProps = Omit<IconBaseProps, 'children'>;

const LayoutListAltFill = memo(
  forwardRef<SVGSVGElement, LayoutListAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.05 12.88q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.55.04 1.38v.35q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H6.7q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38v-.35q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zM18.5 18.63a.88.88 0 0 1 0 1.75h-4.75a.88.88 0 0 1 0-1.75zM20.5 13.88a.88.88 0 0 1 0 1.74h-6.75a.88.88 0 0 1 0-1.74zM7.05 2.63q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38v.35q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H6.7q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38V6.7q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zM18.5 8.38a.88.88 0 0 1 0 1.74h-4.75a.88.88 0 0 1 0-1.74zM20.5 3.63a.88.88 0 0 1 0 1.75h-6.75a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

LayoutListAltFill.displayName = 'LayoutListAltFill';

// Triple export pattern (lucide-react style)
export { LayoutListAltFill, LayoutListAltFill as LayoutListAltFillIcon, LayoutListAltFill as SiLayoutListAltFill };
export default LayoutListAltFill;
export type { LayoutListAltFillProps };
