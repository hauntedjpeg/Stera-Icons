import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UmbrellaFillProps = Omit<IconBaseProps, 'children'>;

const UmbrellaFill = memo(
  forwardRef<SVGSVGElement, UmbrellaFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75c.41 0 .75.34.75.75v1.28c5.03.38 9 4.59 9 9.72 0 .33-.22.62-.54.72-.31.1-.66-.03-.84-.31-.43-.66-1.3-1.16-2.37-1.16-.52 0-.85.12-1.1.29q-.38.26-.77.87c-.14.21-.38.34-.63.34s-.49-.13-.63-.34c-.17-.27-.57-.57-1.14-.8q-.47-.2-.98-.29V19c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75v-.5c0-.41.34-.75.75-.75s.75.34.75.75v.5c0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25v-6.18q-.5.1-.98.29c-.57.23-.97.53-1.14.8-.14.21-.38.34-.63.34s-.49-.13-.63-.34c-.27-.42-.5-.7-.77-.87-.25-.17-.58-.29-1.1-.29-1.07 0-1.94.5-2.37 1.16-.18.28-.53.4-.84.3-.32-.09-.54-.38-.54-.71 0-5.13 3.97-9.34 9-9.72V2.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

UmbrellaFill.displayName = 'UmbrellaFill';

// Triple export pattern
export { UmbrellaFill, UmbrellaFill as UmbrellaFillIcon, UmbrellaFill as SiUmbrellaFill };
export default UmbrellaFill;
export type { UmbrellaFillProps };
