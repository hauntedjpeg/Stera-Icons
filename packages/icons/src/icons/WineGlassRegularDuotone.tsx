import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineGlassRegularDuotone = memo(
  forwardRef<SVGSVGElement, WineGlassRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 18c0 1.24 1 2.25 2.25 2.25h1.08c.38.04.67.36.67.75 0 .41-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75 0-.39.3-.7.67-.75H9c1.24 0 2.25-1 2.25-2.25v-4.29q.38.04.75.04.38 0 .75-.04z" opacity={.4} />
        <path fillRule="evenodd" d="m17.5 2.25.12.01h.02l.06.02.08.02.07.04.06.03.05.04.06.05.04.05.06.07.03.05.04.07v.02l.04.12v.03l.03.08.06.3.17 1.11c.13.93.26 2.22.26 3.64 0 3.3-3.16 5.75-6.75 5.75-3.6 0-6.75-2.45-6.75-5.75 0-1.42.13-2.7.26-3.64q.1-.7.17-1.1l.06-.3.02-.1v-.02l.05-.12V2.7l.04-.07.03-.05.06-.07.03-.04.01-.01.06-.05.05-.04.06-.03.07-.04.08-.02.05-.02h.03l.12-.01zM7.12 3.75 7 4.57c-.12.88-.24 2.1-.24 3.43 0 2.22 2.22 4.25 5.25 4.25s5.25-2.03 5.25-4.25c0-1.34-.12-2.55-.24-3.43l-.13-.82z" clipRule="evenodd" />
    </IconBase>
  ))
);

WineGlassRegularDuotone.displayName = 'WineGlassRegularDuotone';

// Triple export pattern
export { WineGlassRegularDuotone, WineGlassRegularDuotone as WineGlassRegularDuotoneIcon, WineGlassRegularDuotone as SiWineGlassRegularDuotone };
export default WineGlassRegularDuotone;
export type { WineGlassRegularDuotoneProps };
