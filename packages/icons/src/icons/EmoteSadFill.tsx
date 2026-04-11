import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSadFillProps = Omit<IconBaseProps, 'children'>;

const EmoteSadFill = memo(
  forwardRef<SVGSVGElement, EmoteSadFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 11.5c-1.19 0-2.3.32-3.2.87a.87.87 0 1 0 .9 1.5 4.4 4.4 0 0 1 2.3-.62q1.34.02 2.3.62a.87.87 0 1 0 .9-1.5 6 6 0 0 0-3.2-.87M9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSadFill.displayName = 'EmoteSadFill';

// Triple export pattern (lucide-react style)
export { EmoteSadFill, EmoteSadFill as EmoteSadFillIcon, EmoteSadFill as SiEmoteSadFill };
export default EmoteSadFill;
export type { EmoteSadFillProps };
