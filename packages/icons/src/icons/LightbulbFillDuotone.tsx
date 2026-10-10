import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LightbulbFillDuotone = memo(
  forwardRef<SVGSVGElement, LightbulbFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c3.52 0 6.38 2.85 6.38 6.37 0 1.4-.46 2.7-1.22 3.75-.85 1.16-1.51 2.18-1.53 3.27q0-.37-.25-.63-.27-.26-.63-.27h-5.5q-.36 0-.62.27t-.26.63v.09-.1c-.02-1.08-.68-2.1-1.53-3.26-.76-1.06-1.21-2.35-1.21-3.75 0-3.52 2.85-6.37 6.37-6.37" opacity={.4} />
        <path d="M14.75 14.63q.37 0 .63.26.25.27.25.63V18c0 1.3-.87 2.4-2.05 2.75-.28.6-.88 1-1.58 1s-1.3-.4-1.58-1C9.24 20.4 8.38 19.3 8.38 18v-2.48q-.01-.37.25-.63t.62-.27z" />
    </IconBase>
  ))
);

LightbulbFillDuotone.displayName = 'LightbulbFillDuotone';

// Triple export pattern
export { LightbulbFillDuotone, LightbulbFillDuotone as LightbulbFillDuotoneIcon, LightbulbFillDuotone as SiLightbulbFillDuotone };
export default LightbulbFillDuotone;
export type { LightbulbFillDuotoneProps };
