import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteNeutralRegularProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralRegular = memo(
  forwardRef<SVGSVGElement, EmoteNeutralRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.5 14.25c.41 0 .75.34.75.75s-.34.75-.75.75h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM9 8.38c.76 0 1.38.61 1.38 1.37S9.76 11.13 9 11.13s-1.37-.62-1.37-1.38S8.24 8.38 9 8.38M15 8.38c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteNeutralRegular.displayName = 'EmoteNeutralRegular';

// Triple export pattern
export { EmoteNeutralRegular, EmoteNeutralRegular as EmoteNeutralRegularIcon, EmoteNeutralRegular as SiEmoteNeutralRegular };
export default EmoteNeutralRegular;
export type { EmoteNeutralRegularProps };
