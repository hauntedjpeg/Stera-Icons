import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M10.5 9.75c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M16.5 9.75c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M15.25 15.5c0 1.31-1.46 1.75-3.25 1.75-1.8 0-3.25-.44-3.25-1.75s1.46-1.75 3.25-1.75c1.8 0 3.25.44 3.25 1.75" />
    </IconBase>
  ))
);

EmoteSurprisedBoldDuotone.displayName = 'EmoteSurprisedBoldDuotone';

// Triple export pattern
export { EmoteSurprisedBoldDuotone, EmoteSurprisedBoldDuotone as EmoteSurprisedBoldDuotoneIcon, EmoteSurprisedBoldDuotone as SiEmoteSurprisedBoldDuotone };
export default EmoteSurprisedBoldDuotone;
export type { EmoteSurprisedBoldDuotoneProps };
