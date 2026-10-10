import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedFillProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedFill = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 11.62c-1.8 0-3.25.44-3.25 1.75s1.46 1.75 3.25 1.75c1.8 0 3.25-.44 3.25-1.75s-1.46-1.75-3.25-1.75m-3-5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSurprisedFill.displayName = 'EmoteSurprisedFill';

// Triple export pattern
export { EmoteSurprisedFill, EmoteSurprisedFill as EmoteSurprisedFillIcon, EmoteSurprisedFill as SiEmoteSurprisedFill };
export default EmoteSurprisedFill;
export type { EmoteSurprisedFillProps };
