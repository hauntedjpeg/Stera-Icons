import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSadFillProps = Omit<IconBaseProps, 'children'>;

const EmoteSadFill = memo(
  forwardRef<SVGSVGElement, EmoteSadFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 11.5c-1.19 0-2.3.32-3.2.87-.42.26-.55.8-.3 1.2.26.42.8.55 1.2.3q.96-.6 2.3-.62 1.34.02 2.3.62c.4.25.94.12 1.2-.3.25-.4.12-.94-.3-1.2-.9-.55-2.01-.87-3.2-.87M9 8.25c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSadFill.displayName = 'EmoteSadFill';

// Triple export pattern
export { EmoteSadFill, EmoteSadFill as EmoteSadFillIcon, EmoteSadFill as SiEmoteSadFill };
export default EmoteSadFill;
export type { EmoteSadFillProps };
