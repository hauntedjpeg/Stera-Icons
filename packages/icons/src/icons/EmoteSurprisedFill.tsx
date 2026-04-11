import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedFillProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedFill = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 11.62c-1.8 0-3.25.44-3.25 1.75s1.46 1.75 3.25 1.75c1.8 0 3.25-.44 3.25-1.75s-1.46-1.75-3.25-1.75m-3-5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSurprisedFill.displayName = 'EmoteSurprisedFill';

// Triple export pattern (lucide-react style)
export { EmoteSurprisedFill, EmoteSurprisedFill as EmoteSurprisedFillIcon, EmoteSurprisedFill as SiEmoteSurprisedFill };
export default EmoteSurprisedFill;
export type { EmoteSurprisedFillProps };
