import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SeedlingRegularProps = Omit<IconBaseProps, 'children'>;

const SeedlingRegular = memo(
  forwardRef<SVGSVGElement, SeedlingRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M22.74 4.02c0 2.53-.33 4.36-.88 5.78-.57 1.43-1.34 2.4-2.17 3.23-1.62 1.62-4.1 1.82-5.95.63-.64 1.1-.99 2.36-.99 3.65V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.34c0-.86-.34-1.7-.95-2.3L8.3 15.37c-1.46.97-3.44.8-4.72-.48C2.24 13.54 1.25 10.96 1.25 8v-.75H2c2.96 0 5.54.99 6.9 2.34 1.28 1.28 1.44 3.26.47 4.72l1.95 1.95c.15-1.3.6-2.54 1.3-3.63-1.5-1.86-1.38-4.59.35-6.32.83-.82 1.8-1.6 3.23-2.16 1.42-.56 3.25-.88 5.79-.88h.75zM2.78 8.78c.15 2.32.98 4.16 1.87 5.05.7.7 1.72.84 2.56.44l-1.24-1.24c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l1.24 1.24c.4-.84.26-1.87-.44-2.56-.9-.9-2.73-1.72-5.05-1.87m18.44-4c-2 .06-3.41.35-4.47.76-1.19.47-1.99 1.1-2.72 1.84-1.09 1.08-1.24 2.75-.46 4l.24-.25 1.66-1.66c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.66 1.66-.24.25c1.25.77 2.91.62 4-.47.73-.73 1.37-1.53 1.83-2.71.42-1.07.7-2.48.76-4.48" clipRule="evenodd" />
    </IconBase>
  ))
);

SeedlingRegular.displayName = 'SeedlingRegular';

// Triple export pattern
export { SeedlingRegular, SeedlingRegular as SeedlingRegularIcon, SeedlingRegular as SiSeedlingRegular };
export default SeedlingRegular;
export type { SeedlingRegularProps };
