import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SeedlingRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SeedlingRegularDuotone = memo(
  forwardRef<SVGSVGElement, SeedlingRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 7.25c2.96 0 5.54.99 6.9 2.34 1.28 1.28 1.44 3.26.47 4.72l-1.1-1.1c.4-.84.26-1.87-.44-2.56-.9-.9-2.73-1.72-5.05-1.87.15 2.32.98 4.16 1.87 5.05.7.7 1.72.84 2.56.44l1.1 1.1c-1.46.97-3.44.8-4.72-.48C2.24 13.54 1.25 10.96 1.25 8v-.75zM22.74 4.02c0 2.53-.33 4.36-.88 5.78-.57 1.43-1.34 2.4-2.17 3.23-1.62 1.62-4.1 1.82-5.95.63q.38-.65.89-1.22c1.25.77 2.91.62 4-.47.73-.73 1.37-1.53 1.83-2.71.42-1.07.7-2.48.76-4.48-2 .06-3.41.35-4.47.76-1.19.47-1.99 1.1-2.72 1.84-1.09 1.08-1.24 2.75-.46 4q-.54.59-.96 1.25c-1.49-1.87-1.37-4.59.36-6.32.83-.82 1.8-1.6 3.23-2.16 1.42-.56 3.25-.88 5.79-.88h.75z" opacity={0.4} />
        <path d="M15.47 9.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.66 1.66c-1.36 1.36-2.12 3.2-2.12 5.12V21q0 .24-.13.42-.08.12-.2.2-.18.13-.42.13-.07 0-.15-.02-.3-.06-.47-.31-.12-.18-.13-.42v-1.34c0-.86-.34-1.7-.95-2.3l-4.33-4.33c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l4.29 4.29c.23-1.93 1.1-3.74 2.5-5.13z" />
    </IconBase>
  ))
);

SeedlingRegularDuotone.displayName = 'SeedlingRegularDuotone';

// Triple export pattern
export { SeedlingRegularDuotone, SeedlingRegularDuotone as SeedlingRegularDuotoneIcon, SeedlingRegularDuotone as SiSeedlingRegularDuotone };
export default SeedlingRegularDuotone;
export type { SeedlingRegularDuotoneProps };
