import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteGrinRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinRegularDuotone = memo(
  forwardRef<SVGSVGElement, EmoteGrinRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M15.75 13.75c.28 0 .54.16.67.4.12.25.1.55-.06.78-.98 1.4-2.56 2.32-4.36 2.32s-3.38-.92-4.36-2.32c-.16-.23-.19-.53-.06-.78.13-.24.39-.4.67-.4zM9 8.38c.76 0 1.37.61 1.37 1.37S9.76 11.13 9 11.13s-1.38-.62-1.38-1.38S8.24 8.38 9 8.38M15 8.38c.76 0 1.37.61 1.37 1.37s-.61 1.38-1.37 1.38-1.38-.62-1.38-1.38.62-1.37 1.38-1.37" />
    </IconBase>
  ))
);

EmoteGrinRegularDuotone.displayName = 'EmoteGrinRegularDuotone';

// Triple export pattern
export { EmoteGrinRegularDuotone, EmoteGrinRegularDuotone as EmoteGrinRegularDuotoneIcon, EmoteGrinRegularDuotone as SiEmoteGrinRegularDuotone };
export default EmoteGrinRegularDuotone;
export type { EmoteGrinRegularDuotoneProps };
