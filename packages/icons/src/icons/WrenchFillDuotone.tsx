import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WrenchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WrenchFillDuotone = memo(
  forwardRef<SVGSVGElement, WrenchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.78 5.48c1.2-1.19 2.8-1.72 4.35-1.58l-2.6 2.58c-.2.22-.3.53-.22.82l.71 3.03c.08.32.33.57.65.65l3.03.71q.47.1.82-.23l2.58-2.59c.14 1.56-.39 3.16-1.58 4.35-1.56 1.56-3.83 1.98-5.77 1.26-.32-.12-.68-.04-.93.2L6.9 19.6c-.7.69-1.81.69-2.5 0-.7-.7-.7-1.81 0-2.5l4.92-4.93c.24-.24.32-.6.2-.93-.72-1.94-.3-4.21 1.26-5.77" opacity={.4} />
        <path fillRule="evenodd" d="M9.55 4.24c1.82-1.82 4.38-2.47 6.72-1.93 1.14.26 1.32 1.6.63 2.29l-2.78 2.78.48 2.02 2.02.48L19.4 7.1l.14-.12c.71-.54 1.9-.32 2.15.75.54 2.34-.1 4.9-1.93 6.72-1.92 1.92-4.64 2.53-7.08 1.84l-4.55 4.55c-1.37 1.38-3.6 1.38-4.97 0-1.38-1.37-1.38-3.6 0-4.97l4.55-4.55C7 8.88 7.63 6.16 9.55 4.24m5.58-.34c-1.56-.14-3.16.39-4.35 1.58C9.22 7.04 8.8 9.3 9.52 11.25c.12.32.04.69-.2.93L4.4 17.1c-.69.69-.69 1.8 0 2.5.7.69 1.82.69 2.5 0l4.93-4.93c.25-.24.6-.32.93-.2 1.94.72 4.21.3 5.77-1.26 1.2-1.2 1.72-2.8 1.58-4.35l-2.58 2.6c-.22.2-.53.3-.82.22l-3.03-.71c-.32-.08-.57-.33-.65-.65l-.71-3.03q-.1-.47.23-.82z" clipRule="evenodd" />
    </IconBase>
  ))
);

WrenchFillDuotone.displayName = 'WrenchFillDuotone';

// Triple export pattern
export { WrenchFillDuotone, WrenchFillDuotone as WrenchFillDuotoneIcon, WrenchFillDuotone as SiWrenchFillDuotone };
export default WrenchFillDuotone;
export type { WrenchFillDuotoneProps };
