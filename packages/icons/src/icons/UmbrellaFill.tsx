import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UmbrellaFillProps = Omit<IconBaseProps, 'children'>;

const UmbrellaFill = memo(
  forwardRef<SVGSVGElement, UmbrellaFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.63c.48 0 .88.39.88.87v1.17c5.04.44 9 4.67 9 9.83 0 .39-.26.73-.63.84s-.77-.04-.98-.36c-.4-.62-1.24-1.1-2.27-1.1-.5 0-.8.1-1.03.26q-.35.24-.74.84-.26.39-.73.4-.47-.01-.73-.4c-.16-.24-.52-.53-1.09-.76q-.4-.15-.8-.25V19c0 .9.72 1.63 1.62 1.63s1.63-.73 1.63-1.63v-.5c0-.48.39-.87.87-.87s.88.39.88.87v.5c0 1.86-1.52 3.38-3.38 3.38s-3.37-1.52-3.37-3.38v-6.03q-.42.1-.81.25c-.57.23-.93.52-1.09.76q-.26.39-.73.4-.47-.01-.73-.4-.4-.6-.74-.84C6.8 13 6.5 12.87 6 12.87c-1.03 0-1.86.49-2.27 1.1-.2.33-.6.48-.98.37-.37-.11-.62-.45-.62-.84 0-5.16 3.95-9.4 9-9.83V2.5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

UmbrellaFill.displayName = 'UmbrellaFill';

// Triple export pattern
export { UmbrellaFill, UmbrellaFill as UmbrellaFillIcon, UmbrellaFill as SiUmbrellaFill };
export default UmbrellaFill;
export type { UmbrellaFillProps };
