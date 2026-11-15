import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvAntennaPlayBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvAntennaPlayBoldDuotone = memo(
  forwardRef<SVGSVGElement, TvAntennaPlayBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.55 1.1c.5-.24 1.1-.04 1.34.45l1.97 3.95h.34l1.96-3.04c.3-.47.92-.6 1.38-.3.47.3.6.92.3 1.38L14.58 5.5h.82q1.44-.01 2.38.05c.65.05 1.22.17 1.76.44.85.43 1.54 1.12 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v2.8q.01 1.44-.05 2.38c-.05.65-.17 1.22-.44 1.76-.43.85-1.12 1.54-1.97 1.97q-.8.39-1.76.44-.94.06-2.38.05H8.6q-1.44.01-2.38-.05C5.57 21.4 5 21.28 4.46 21c-.85-.43-1.54-1.12-1.97-1.97-.27-.54-.39-1.11-.44-1.76Q2 16.34 2 14.9v-2.8q-.01-1.44.05-2.38.06-.96.44-1.76c.43-.85 1.12-1.54 1.97-1.97.54-.27 1.11-.39 1.76-.44q.94-.06 2.38-.05h1.03L8.11 2.45c-.25-.5-.05-1.1.44-1.34m.05 6.4c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23q-.73.37-1.1 1.1c-.1.2-.18.5-.23 1.01C4 10.42 4 11.1 4 12.1v2.8c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h6.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23q.73-.37 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22v-2.8c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01q-.37-.73-1.1-1.1c-.2-.1-.5-.18-1.01-.23-.54-.04-1.22-.04-2.22-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 12.26c0-.9 0-1.36.19-1.62q.27-.36.7-.41c.32-.04.72.19 1.5.64l2.18 1.24c.8.46 1.2.68 1.33.98q.16.41 0 .82c-.14.3-.53.52-1.33.98l-2.18 1.24c-.78.45-1.18.68-1.5.64q-.43-.06-.7-.4c-.19-.27-.19-.72-.19-1.63z" />
    </IconBase>
  ))
);

TvAntennaPlayBoldDuotone.displayName = 'TvAntennaPlayBoldDuotone';

// Triple export pattern
export { TvAntennaPlayBoldDuotone, TvAntennaPlayBoldDuotone as TvAntennaPlayBoldDuotoneIcon, TvAntennaPlayBoldDuotone as SiTvAntennaPlayBoldDuotone };
export default TvAntennaPlayBoldDuotone;
export type { TvAntennaPlayBoldDuotoneProps };
