import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSadBoldProps = Omit<IconBaseProps, 'children'>;

const EmoteSadBold = memo(
  forwardRef<SVGSVGElement, EmoteSadBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.5c1.21 0 2.34.33 3.27.9.47.29.62.9.33 1.37s-.9.62-1.37.33c-.6-.37-1.38-.6-2.23-.6s-1.62.23-2.23.6c-.47.3-1.08.14-1.37-.33s-.14-1.08.33-1.37c.93-.57 2.06-.9 3.27-.9M9 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M15 8.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSadBold.displayName = 'EmoteSadBold';

// Triple export pattern
export { EmoteSadBold, EmoteSadBold as EmoteSadBoldIcon, EmoteSadBold as SiEmoteSadBold };
export default EmoteSadBold;
export type { EmoteSadBoldProps };
