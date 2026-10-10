import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UmbrellaRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const UmbrellaRegularDuotone = memo(
  forwardRef<SVGSVGElement, UmbrellaRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 12.75q.37 0 .75.07V19c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75v-.5c0-.41.34-.75.75-.75s.75.34.75.75v.5c0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25v-6.18q.39-.06.75-.07M12 1.75c.41 0 .75.34.75.75v1.28L12 3.75l-.75.03V2.5c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fillRule="evenodd" d="M12 3.75c5.38 0 9.75 4.37 9.75 9.75 0 .24-.12.48-.34.63-.35.22-.81.13-1.04-.22-.43-.66-1.3-1.16-2.37-1.16-.52 0-.85.12-1.1.29q-.38.26-.77.87c-.14.21-.38.34-.63.34s-.49-.13-.63-.34c-.17-.27-.57-.57-1.14-.8s-1.2-.36-1.73-.36c-.54 0-1.17.13-1.73.36s-.97.53-1.14.8c-.14.21-.38.34-.63.34s-.49-.13-.63-.34c-.27-.42-.5-.7-.77-.87-.25-.17-.58-.29-1.1-.29-1.07 0-1.94.5-2.37 1.16-.23.35-.7.44-1.04.22-.22-.15-.34-.39-.34-.63 0-5.38 4.37-9.75 9.75-9.75m0 1.5c-3.95 0-7.24 2.77-8.06 6.47q.94-.46 2.06-.47 1.15 0 1.93.54.37.25.64.57.54-.4 1.13-.64c.72-.3 1.55-.47 2.3-.47s1.58.17 2.3.47q.6.24 1.13.64.28-.32.64-.57.79-.53 1.93-.54 1.12.01 2.06.47c-.82-3.7-4.11-6.47-8.06-6.47" clipRule="evenodd" />
    </IconBase>
  ))
);

UmbrellaRegularDuotone.displayName = 'UmbrellaRegularDuotone';

// Triple export pattern
export { UmbrellaRegularDuotone, UmbrellaRegularDuotone as UmbrellaRegularDuotoneIcon, UmbrellaRegularDuotone as SiUmbrellaRegularDuotone };
export default UmbrellaRegularDuotone;
export type { UmbrellaRegularDuotoneProps };
