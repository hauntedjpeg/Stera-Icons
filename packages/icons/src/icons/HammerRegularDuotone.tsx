import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HammerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HammerRegularDuotone = memo(
  forwardRef<SVGSVGElement, HammerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.25 9c0 .41.34.75.75.75h.72l-.37 8.78c-.04.94.71 1.72 1.65 1.72s1.69-.78 1.65-1.72l-.37-8.78h1.22q.16 0 .28-.06l.37 8.78c.07 1.79-1.36 3.28-3.15 3.28s-3.22-1.5-3.15-3.28z" opacity={.4} />
        <path fillRule="evenodd" d="M14.5 2.25q.31 0 .53.22l1.12 1.12 1.52-.76.07-.04q.13-.04.26-.04h2c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75h-2q-.18 0-.33-.08l-1.52-.76-1.12 1.12q-.22.21-.53.22H10c-.41 0-.75-.34-.75-.75q.01-.32-.34-.58-.4-.3-1.2-.36c-1.04-.05-2.3.37-3.12 1.4-.22.28-.6.37-.9.22-.32-.15-.5-.49-.43-.83C4.33 3.55 7.6 2.25 9 2.25zM9 3.75c-.5 0-2.43.48-3.62 3.27.8-.35 1.64-.5 2.4-.46.74.04 1.45.24 2 .63q.57.4.83 1.06h3.58l1.28-1.28.1-.08c.21-.16.51-.19.77-.06l1.84.92h1.07v-3.5h-1.07l-1.84.92c-.3.15-.64.09-.87-.14l-1.28-1.28z" clipRule="evenodd" />
    </IconBase>
  ))
);

HammerRegularDuotone.displayName = 'HammerRegularDuotone';

// Triple export pattern
export { HammerRegularDuotone, HammerRegularDuotone as HammerRegularDuotoneIcon, HammerRegularDuotone as SiHammerRegularDuotone };
export default HammerRegularDuotone;
export type { HammerRegularDuotoneProps };
