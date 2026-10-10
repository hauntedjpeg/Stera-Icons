import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSurprisedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M10.38 9.75c0 .76-.62 1.38-1.38 1.38s-1.37-.62-1.37-1.38S8.24 8.38 9 8.38s1.38.61 1.38 1.37M16.38 9.75c0 .76-.62 1.38-1.38 1.38s-1.37-.62-1.37-1.38.61-1.37 1.37-1.37 1.38.61 1.38 1.37M12 14c.88 0 1.65.1 2.2.36q.39.18.6.46.19.27.2.68-.01.41-.2.68-.21.27-.6.46c-.55.25-1.32.36-2.2.36s-1.65-.1-2.2-.36q-.39-.19-.6-.46-.19-.27-.2-.68.01-.41.2-.68.21-.27.6-.46c.55-.25 1.32-.36 2.2-.36" />
    </IconBase>
  ))
);

EmoteSurprisedRegularDuotone.displayName = 'EmoteSurprisedRegularDuotone';

// Triple export pattern
export { EmoteSurprisedRegularDuotone, EmoteSurprisedRegularDuotone as EmoteSurprisedRegularDuotoneIcon, EmoteSurprisedRegularDuotone as SiEmoteSurprisedRegularDuotone };
export default EmoteSurprisedRegularDuotone;
export type { EmoteSurprisedRegularDuotoneProps };
