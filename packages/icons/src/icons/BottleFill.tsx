import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleFillProps = Omit<IconBaseProps, 'children'>;

const BottleFill = memo(
  forwardRef<SVGSVGElement, BottleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-fill" {...props}>
      <path d="M13.75 2.13a.88.88 0 0 1 0 1.75h-.05l.02.18.35 3.76q.03.34.24.6l1.19 1.49c.4.5.62 1.14.63 1.8v8.04c0 1.17-.96 2.13-2.13 2.13h-4a2.13 2.13 0 0 1-2.12-2.13V11.7c0-.65.22-1.28.62-1.8l1.2-1.48q.2-.26.23-.6l.35-3.76.02-.18h-.05a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

BottleFill.displayName = 'BottleFill';

// Triple export pattern (lucide-react style)
export { BottleFill, BottleFill as BottleFillIcon, BottleFill as SiBottleFill };
export default BottleFill;
export type { BottleFillProps };
