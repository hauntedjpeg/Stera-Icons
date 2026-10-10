import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteFrownBoldProps = Omit<IconBaseProps, 'children'>;

const EmoteFrownBold = memo(
  forwardRef<SVGSVGElement, EmoteFrownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.25c1.63 0 3.1.72 4.03 1.87.34.43.28 1.06-.15 1.4-.43.35-1.06.29-1.4-.14-.55-.67-1.45-1.13-2.48-1.13s-1.93.46-2.47 1.13c-.35.43-.98.5-1.41.15s-.5-.98-.15-1.41c.94-1.15 2.4-1.87 4.03-1.87M9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteFrownBold.displayName = 'EmoteFrownBold';

// Triple export pattern
export { EmoteFrownBold, EmoteFrownBold as EmoteFrownBoldIcon, EmoteFrownBold as SiEmoteFrownBold };
export default EmoteFrownBold;
export type { EmoteFrownBoldProps };
