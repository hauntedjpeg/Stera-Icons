import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulerRegularProps = Omit<IconBaseProps, 'children'>;

const RulerRegular = memo(
  forwardRef<SVGSVGElement, RulerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.09 2.35c.78-.78 2.04-.78 2.82 0L21.65 15.1c.78.78.78 2.04 0 2.82l-3.74 3.74c-.78.78-2.04.78-2.82 0L2.35 8.9c-.78-.78-.78-2.04 0-2.82zm1.76 1.06c-.2-.2-.5-.2-.7 0L3.4 7.15c-.2.2-.2.5 0 .7l2.84 2.84 1.72-1.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.72 1.72 1.94 1.94 1.72-1.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.72 1.72 1.94 1.94 1.72-1.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.72 1.72 2.84 2.84c.2.19.5.19.7 0l3.74-3.74c.2-.2.2-.5 0-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

RulerRegular.displayName = 'RulerRegular';

// Triple export pattern
export { RulerRegular, RulerRegular as RulerRegularIcon, RulerRegular as SiRulerRegular };
export default RulerRegular;
export type { RulerRegularProps };
