import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteSmileRegularProps = Omit<IconBaseProps, 'children'>;

const EmoteSmileRegular = memo(
  forwardRef<SVGSVGElement, EmoteSmileRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.17 14.03c.26-.32.73-.37 1.05-.11s.37.73.11 1.05C15.33 16.21 13.76 17 12 17s-3.34-.79-4.33-2.03c-.26-.32-.21-.8.11-1.05.32-.26.8-.21 1.05.11.72.88 1.86 1.47 3.17 1.47s2.45-.59 3.17-1.47M9 8.38c.76 0 1.38.61 1.38 1.37S9.76 11.13 9 11.13s-1.37-.62-1.37-1.38S8.24 8.38 9 8.38M15 8.38c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSmileRegular.displayName = 'EmoteSmileRegular';

// Triple export pattern
export { EmoteSmileRegular, EmoteSmileRegular as EmoteSmileRegularIcon, EmoteSmileRegular as SiEmoteSmileRegular };
export default EmoteSmileRegular;
export type { EmoteSmileRegularProps };
