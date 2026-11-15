import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvAntennaPlayRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvAntennaPlayRegularDuotone = memo(
  forwardRef<SVGSVGElement, TvAntennaPlayRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.67 1.33c.37-.19.82-.04 1 .34l2.04 4.08h.63l2.03-3.16c.22-.34.69-.44 1.04-.22.34.22.44.69.22 1.04l-1.5 2.34h1.27q1.44-.01 2.36.05.93.05 1.67.41c.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.92.05 2.36v2.8q.01 1.44-.05 2.36-.05.93-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.92.06-2.36.05H8.6q-1.44.01-2.36-.05-.93-.05-1.67-.41c-.8-.41-1.45-1.06-1.86-1.86-.25-.5-.36-1.04-.41-1.67q-.06-.93-.05-2.36v-2.8q-.01-1.44.05-2.36.05-.93.41-1.67c.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.93-.06 2.36-.05h1.43l-1.7-3.42c-.19-.37-.04-.82.34-1M8.6 7.25c-1 0-1.7 0-2.24.04-.53.05-.86.13-1.1.26q-.8.4-1.21 1.2c-.13.25-.21.58-.26 1.11-.04.55-.04 1.25-.04 2.24v2.8c0 1 0 1.7.04 2.24.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26.55.04 1.25.04 2.24.04h6.8c1 0 1.7 0 2.24-.04.53-.05.86-.13 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24v-2.8c0-1 0-1.7-.04-2.24-.05-.53-.13-.86-.26-1.1q-.4-.8-1.2-1.21c-.25-.13-.58-.21-1.11-.26-.55-.04-1.25-.04-2.24-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 12.26c0-.9 0-1.36.19-1.62q.27-.36.7-.41c.32-.04.72.19 1.5.64l2.18 1.24c.8.46 1.2.68 1.33.98q.16.41 0 .82c-.14.3-.53.52-1.33.98l-2.18 1.24c-.78.45-1.18.68-1.5.64q-.43-.06-.7-.4c-.19-.27-.19-.72-.19-1.63z" />
    </IconBase>
  ))
);

TvAntennaPlayRegularDuotone.displayName = 'TvAntennaPlayRegularDuotone';

// Triple export pattern
export { TvAntennaPlayRegularDuotone, TvAntennaPlayRegularDuotone as TvAntennaPlayRegularDuotoneIcon, TvAntennaPlayRegularDuotone as SiTvAntennaPlayRegularDuotone };
export default TvAntennaPlayRegularDuotone;
export type { TvAntennaPlayRegularDuotoneProps };
