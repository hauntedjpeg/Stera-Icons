import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RulerRegularDuotone = memo(
  forwardRef<SVGSVGElement, RulerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.09 2.35c.78-.78 2.04-.78 2.82 0L21.65 15.1c.78.78.78 2.04 0 2.82l-3.74 3.74c-.78.78-2.04.78-2.82 0L2.35 8.9c-.78-.78-.78-2.04 0-2.82zm1.76 1.06c-.2-.2-.5-.2-.7 0L3.4 7.15c-.2.2-.2.5 0 .7L16.15 20.6c.2.19.5.19.7 0l3.74-3.74c.2-.2.2-.5 0-.7z" clipRule="evenodd" opacity={.4} />
        <path d="M13.97 14.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.72 1.72-1.06-1.06zM10.97 11.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.72 1.72-1.06-1.06zM7.97 8.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.72 1.72-1.06-1.06z" />
    </IconBase>
  ))
);

RulerRegularDuotone.displayName = 'RulerRegularDuotone';

// Triple export pattern
export { RulerRegularDuotone, RulerRegularDuotone as RulerRegularDuotoneIcon, RulerRegularDuotone as SiRulerRegularDuotone };
export default RulerRegularDuotone;
export type { RulerRegularDuotoneProps };
